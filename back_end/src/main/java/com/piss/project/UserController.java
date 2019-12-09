package me.salisuwy;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;


@RestController
@RequestMapping(path = "/user", produces = "application/json", consumes = "application/json")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/all")
    public List<User> getUsers(){
        return userRepository.findAll();
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
    public ResponseEntity processLoginUser(@Valid @RequestBody User user, BindingResult binding) {
        if (binding.hasErrors()) {
            return new ResponseEntity(HttpStatus.NOT_ACCEPTABLE);
        }

        User currentUser = userRepository.findByUsername(user.getUsername());
        if (currentUser == null) {
            return new ResponseEntity(HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity(HttpStatus.OK);
    }
}

