package com.example.bearbikes_react.controller.filter;

import com.example.bearbikes_react.model.repository.TokenRepository;
import com.example.bearbikes_react.model.service.JwtService;
import com.example.bearbikes_react.utils.token.Token;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.lang.NonNull;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

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

        if (isAuthHeaderValid(authHeader)) { // check if request has a valid auth Header
            String jwt = authHeader.substring(7);
            String userEmail = jwtService.extractUsername(jwt);

            if (userEmail != null && areNoActiveUserSession()) { // check if request has a valid email and there are no active sessions
                UserDetails userDetails = userDetailsService.loadUserByUsername(userEmail);

                if ( isValidTokenForUser(jwt, userDetails)){ // check if the token info coincides with user request info and if the token is still valid
                    UsernamePasswordAuthenticationToken authToken =
                            new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());

                    authToken.setDetails(
                            new WebAuthenticationDetailsSource().buildDetails(request)
                    );

                    SecurityContextHolder.getContext().setAuthentication(authToken);
                }
            }
        }
            filterChain.doFilter(request, response);
    }

    private boolean isAuthHeaderValid(String authHeader) {
        return authHeader != null && (authHeader.startsWith("Bearer"));
    }

    private boolean areNoActiveUserSession() {
        return SecurityContextHolder.getContext().getAuthentication() == null;
    }


    private boolean isValidTokenForUser(String jwt, UserDetails userDetails) {
        Optional<Token> tokenOptional = tokenRepository.findByToken(jwt);
        if (tokenOptional.isPresent()) { // token Optional has a Token object as value
            Token token = tokenOptional.get();
            return !token.isExpired() && !token.isRevoked() & jwtService.isTokenValid(jwt, userDetails);
        } else // tokenOptional has a null value
            return false;
    }


}
