package fmi.piss.project.service;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import fmi.piss.project.dto.UserDto;
import fmi.piss.project.entity.User;

//@Service
public interface UserService {
  ResponseEntity<UserDto> register(UserDto userDto);

  ResponseEntity login(UserDto userDto);

  User getAuthUser();

  List<User> getUsers();
}
