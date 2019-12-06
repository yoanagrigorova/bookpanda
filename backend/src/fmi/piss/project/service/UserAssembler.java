package fmi.piss.project.service;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import fmi.piss.project.dto.UserDto;
import fmi.piss.project.entity.User;

@Component
public class UserAssembler {

  public static final PasswordEncoder PASSWORD_ENCODER = new BCryptPasswordEncoder();

  User toUser(UserDto userDto) {
    return User.builder()
        .username(userDto.getUsername())
        .email(userDto.getEmail())
        .password(PASSWORD_ENCODER.encode(userDto.getPassword()))
        .creationTime(userDto.getCreationTime())
        .build();
  }

  UserDto toUserDto(User user) {
    UserDto userDto = new UserDto();
    userDto.setUserId(user.getId());
    userDto.setUsername(user.getUsername());
    userDto.setEmail(user.getEmail());
    userDto.setCreationTime(user.getCreationTime());
    return userDto;
  }
}
