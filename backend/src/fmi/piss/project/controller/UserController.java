package fmi.piss.project.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import fmi.piss.project.dto.UserDto;
import fmi.piss.project.entity.User;
import fmi.piss.project.service.UserService;

@Controller
@RequestMapping(path = "/user", produces = "application/json", consumes = "application/json")
public class UserController {

	@Autowired
	private UserService userService;

	@PostMapping("/registration")
	public ResponseEntity<UserDto> processRegisterUser(@Valid @RequestBody UserDto userDto, BindingResult binding) {
		if (binding.hasErrors()) {
			return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
		}

		return userService.register(userDto);
	}

	@PostMapping("/login")
	public ResponseEntity processLoginUser(@Valid @RequestBody UserDto userDto, BindingResult binding) {
		if (binding.hasErrors()) {
			return new ResponseEntity(HttpStatus.NOT_ACCEPTABLE);
		}

		return userService.login(userDto);
	}

	
	@GetMapping("/all")
	public List<User> getUsers() {
		return userService.getUsers(); 
	}
}
