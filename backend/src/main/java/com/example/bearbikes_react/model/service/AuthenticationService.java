package com.example.bearbikes_react.model.service;

import com.example.bearbikes_react.model.repository.TokenRepository;
import com.example.bearbikes_react.model.repository.user.*;
import com.example.bearbikes_react.model.user.*;
import com.example.bearbikes_react.utils.Utils;
import com.example.bearbikes_react.utils.payload.user.authenticate.request.AuthenticateRequest;
import com.example.bearbikes_react.utils.payload.user.authenticate.response.AuthenticationResponse;

import com.example.bearbikes_react.utils.payload.user.register.request.*;
import com.example.bearbikes_react.utils.payload.user.register.response.RegisterResponse;
import com.example.bearbikes_react.utils.token.Token;
import com.example.bearbikes_react.utils.token.TokenType;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.sql.SQLException;
import java.util.NoSuchElementException;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final UserRepository userRepository;
    private final AdminsRepository adminsRepository;
    private final CyclistsRepository cyclistsRepository;
    private final WorkshopOwnerRepository workshopOwnerRepository;

    private final CommerceOwnerRepository commerceOwnerRepository;
    private final TokenRepository tokenRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public RegisterResponse register(RegisterRequest request) throws SQLException {
        User user;
        User registeredUser;
        String encodedPassword = passwordEncoder.encode(request.getPassword());

        if (!userRepository.isEmailAvailable(request.getEmail())) {
            return RegisterResponse.builder()
                    .message("No se puedo registrar el Usuario")
                    .cause("Ya existe un registro con el email " + request.getEmail())
                    .build();
        }


        String role;

        if (request instanceof RegisterAdminRequest)
            role = "admin";
        else if (request instanceof RegisterCyclistRequest)
            role = "cyclist";
        else if (request instanceof RegisterWorkshopOwnerRequest)
            role = "workshopOwner";
        else if (request instanceof RegisterCommerceOwnerRequest)
            role = "commerceOwner";
        else
            role = "unknowType";

        switch (role) {
            case "admin" -> {
                RegisterAdminRequest adminRequest = (RegisterAdminRequest) request;
                if (!adminsRepository.isAdminKeyValid(adminRequest.getAdminKey())) {
                    return RegisterResponse.builder()
                            .message("La llave del administrador '$providedKey' no coincide con la registrada.".replace("$providedKey", adminRequest.getAdminKey()))
                            .build();
                }
                user = new Admin(
                        adminRequest.getEmail(),
                        encodedPassword,
                        adminRequest.getName()
                );
                registeredUser = adminsRepository.addNew((Admin) user);
            }
            case "cyclist" -> {
                RegisterCyclistRequest cyclistRequest = (RegisterCyclistRequest) request;
                String personalCyclistToken;

                do {
                    personalCyclistToken = Utils.generateRandomToken(30);
                }
                while (cyclistsRepository.isCyclistTokenAvailable(personalCyclistToken));

                user = new Cyclist(
                        cyclistRequest.getEmail(),
                        encodedPassword,
                        cyclistRequest.getName(),
                        cyclistRequest.getApellidoPat(),
                        cyclistRequest.getApellidoMat(),
                        cyclistRequest.getCelular(),
                        personalCyclistToken
                );

                registeredUser = cyclistsRepository.addNew((Cyclist) user);
            }
            case "workshopOwner" -> {
                RegisterWorkshopOwnerRequest workshopOwnerRequest = (RegisterWorkshopOwnerRequest) request;
                user = new WorkshopOwner(
                        workshopOwnerRequest.getEmail(),
                        encodedPassword,
                        workshopOwnerRequest.getName(),
                        workshopOwnerRequest.getApellidoPat(),
                        workshopOwnerRequest.getApellidoMat(),
                        workshopOwnerRequest.getCelular(),
                        workshopOwnerRequest.getRfc()
                );
                registeredUser = workshopOwnerRepository.addNew((WorkshopOwner) user);

            }
            case "commerceOwner" -> {
                RegisterCommerceOwnerRequest workshopOwnerRequest = (RegisterCommerceOwnerRequest) request;
                user = new CommerceOwner(
                        workshopOwnerRequest.getEmail(),
                        encodedPassword,
                        workshopOwnerRequest.getName(),
                        workshopOwnerRequest.getApellidoPat(),
                        workshopOwnerRequest.getApellidoMat(),
                        workshopOwnerRequest.getCelular(),
                        workshopOwnerRequest.getRfc()
                );
                registeredUser = commerceOwnerRepository.addNew((CommerceOwner) user);

            }
            default -> {
                return RegisterResponse.builder()
                        .message("No se puedo registrar el Usuario")
                        .cause("El tipo de usuario especificado no existe")
                        .build();
            }
        }
        if (registeredUser == null || registeredUser.getId() == -1)
            return RegisterResponse.builder()
                    .message("No se puedo registrar el Usuario")
                    .cause("Ocurrio un problema con la bdd. Llame a @brdn08")
                    .build();

        return RegisterResponse.builder()
                .message("Registro Exitoso")
                .cause("")
                .build();
    }

    public AuthenticationResponse authenticate(AuthenticateRequest request) {
        try{
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            request.getEmail(),
                            request.getPassword()
                    )
            );
            var user = userRepository.findUserByEmail(request.getEmail()).orElseThrow();
            var jwtToken = jwtService.generateToken(user);
            revokeAllUserTokens(user);
            saveUserToken(user, jwtToken);
            return AuthenticationResponse.builder()
                    .message("Sesión iniciada correctamente")
                    .token(jwtToken)
                    .cause("")
                    .build();
        }catch(NoSuchElementException | AuthenticationException e){
            return AuthenticationResponse.builder()
                    .message("No se pudo iniciar sesión")
                    .token("")
                    .cause("Las credenciales proporcionadas son incorrectas")
                    .build();
        }
    }

    private void saveUserToken(User user, String jwtToken) {
        var token = Token.builder()
                .idUsuario(user.getId())
                .tokenString(jwtToken)
                .tokenType(TokenType.BEARER)
                .expired(false)
                .revoked(false)
                .build();
        tokenRepository.save(token);
    }

    private void revokeAllUserTokens(User user) {
        var validUserTokens = tokenRepository.findAllValidTokenByUserId(user.getId());
        if (validUserTokens.isEmpty())
            return;

        for (Token token : validUserTokens.get()) {
            token.setExpired(true);
            token.setRevoked(true);
        }

        tokenRepository.saveAllTokens(validUserTokens.get());
    }
}
