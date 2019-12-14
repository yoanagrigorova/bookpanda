package com.piss.project;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@CrossOrigin(origins = "*")
@RequestMapping(value = "/user")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/all")
    public ResponseEntity<List<User>> getUsers(){
        return new ResponseEntity<>(userRepository.findAll(), HttpStatus.OK);
    }

    @PostMapping("/registration")
    public ResponseEntity<User> processRegisterUser(@Valid @RequestBody User user, BindingResult binding) {
        if (binding.hasErrors()) {
            return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
        }

        User existingUser = userRepository.findByUsername(user.getUsername());
        if (existingUser != null) {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }
        
        userRepository.save(user);

        return new ResponseEntity<>(user, HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<User> processLoginUser(@Valid @RequestBody User user, BindingResult binding) {
        if (binding.hasErrors()) {
            return new ResponseEntity("BINDING ERROR", HttpStatus.NOT_ACCEPTABLE);
        }

        User currentUser = userRepository.findByUsername(user.getUsername());
        if (currentUser == null) {
            return new ResponseEntity("NO SUCH USER", HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity(user, HttpStatus.OK);
    }
}

