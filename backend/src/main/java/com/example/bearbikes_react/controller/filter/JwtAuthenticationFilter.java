package com.example.bearbikes_react.controller.filter;

import com.example.bearbikes_react.model.repository.TokenRepository;
import com.example.bearbikes_react.model.service.JwtService;
import com.example.bearbikes_react.utils.token.Token;
import com.fasterxml.jackson.core.JsonParseException;
import io.jsonwebtoken.JwtException;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.server.ServletServerHttpRequest;
import org.springframework.lang.NonNull;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import org.springframework.web.util.UriComponentsBuilder;

import java.io.IOException;
import java.util.Optional;

@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    private final JwtService jwtService;
    private final UserDetailsService userDetailsService;
    private final TokenRepository tokenRepository;

    public JwtAuthenticationFilter(JwtService jwtService, UserDetailsService userDetailsService, TokenRepository tokenRepository) {
        this.jwtService = jwtService;
        this.userDetailsService = userDetailsService;
        this.tokenRepository = tokenRepository;
    }

    @Override
    protected void doFilterInternal(@NonNull HttpServletRequest request, @NonNull HttpServletResponse response, @NonNull FilterChain filterChain) throws ServletException, IOException {
        String authHeader = request.getHeader("Authorization");
        if (new AntPathRequestMatcher("/api/v1/auth/**").matches(request)) { // if the request is a register or login request we do not need jwt auth
            filterChain.doFilter(request, response);
            return;
        }
        try {

            if (isAuthHeaderValid(authHeader)) { // check if request has a valid auth Header
                String jwt = authHeader.substring(7);

                String userEmail = jwtService.extractUsername(jwt);


                if (userEmail != null && areNoActiveUserSession()) { // check if request has a valid email and there are no active sessions
                    UserDetails userDetails = userDetailsService.loadUserByUsername(userEmail);

                    if (isValidTokenForUser(jwt, userDetails)) { // check if the token info coincides with user request info and if the token is still valid
                        UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());

                        authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));

                        SecurityContextHolder.getContext().setAuthentication(authToken);
                    }
                }
            }

        } catch (JwtException | JsonParseException e) {
            String requestInfo = String.format(
                    "%6s %-50s ORIGEN: %-12s TOKEN: %s",
                    request.getMethod(), UriComponentsBuilder.fromHttpRequest(new ServletServerHttpRequest(request)).build().toUriString(),
                    request.getRemoteAddr(),
                    authHeader == null ? "Sin Auth Header" : authHeader
            );
            System.out.printf("%n ***%-40s ===> %s %n", "PETICIÓN RECHAZADA",  requestInfo );

        }
        filterChain.doFilter(request, response);
    }

    private boolean isAuthHeaderValid(String authHeader) throws JwtException {
        if (authHeader != null && (authHeader.startsWith("Bearer")))
            return true;
        else throw new JwtException("No se incluyo el token JWT");
    }

    private boolean areNoActiveUserSession() {
        return SecurityContextHolder.getContext().getAuthentication() == null;
    }


    private boolean isValidTokenForUser(String jwt, UserDetails userDetails) throws JsonParseException, JwtException {
        Optional<Token> tokenOptional = tokenRepository.findByToken(jwt);
        if (tokenOptional.isPresent()) { // token Optional has a Token object as value
            Token token = tokenOptional.get();
            return !token.isExpired() && !token.isRevoked() && jwtService.isTokenValid(jwt, userDetails);
        } else // tokenOptional has a null value
            return false;
    }


}
