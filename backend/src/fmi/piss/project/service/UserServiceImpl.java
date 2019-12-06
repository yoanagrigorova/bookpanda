package fmi.piss.project.service;

import fmi.piss.project.entity.User;
import fmi.piss.project.dto.UserDto;
import fmi.piss.project.repository.UserRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {
	 @Autowired
	  private UserRepository userRepository;

	  @Autowired
	  private UserAssembler userAssembler;

	  public ResponseEntity<UserDto> register(UserDto userDto) {
		  
	    User existingUser = userRepository.findByUsername(userDto.getEmail());
	    System.out.println(existingUser.getUsername());
	    if (existingUser != null) {
	      return new ResponseEntity<>(HttpStatus.CONFLICT);
	    }

	    User user = userAssembler.toUser(userDto);
	    userRepository.save(user);

	    return new ResponseEntity<>(userAssembler.toUserDto(user), HttpStatus.CREATED);
	  }

	  public ResponseEntity login(UserDto userDto) {
	    User user = userRepository.findByUsername(userDto.getUsername());
	    if (user == null) {
	      return new ResponseEntity(HttpStatus.BAD_REQUEST);
	    }

	    return new ResponseEntity(HttpStatus.OK);
	  }

	  public User getAuthUser() {
	    Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
	    String name = authentication.getName();
	    return userRepository.findByUsername(name);
	  }
	  
	  public List<User> getUsers(){
		  return userRepository.findAll();
	  }
}
