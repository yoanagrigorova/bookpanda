package me.bookpanda;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(value = "/user")
public class UserController {

    @Autowired
    private MailService mailService;

//    @Autowired
//    private BCryptPasswordEncoder bCryptPasswordEncoder;

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
//
//        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        mailService.sendEmail(user.getEmail(), "Successful registration to BookPanda!");
        userRepository.save(user);

        return new ResponseEntity<>(user, HttpStatus.CREATED);
    }

    @PostMapping("/subscribe")
    public void subscribeToUser(@RequestParam("userId") int userId, @RequestParam("subscriberId") int subscriberId) {
        userRepository.subscribeToUser(userId, subscriberId);
    }


    @GetMapping("/all/subscribers")
    public ResponseEntity<List<User>> getUserSubscribers(@RequestParam("userId") int userId) {
        return new ResponseEntity(userRepository.getSubscribers(userId), HttpStatus.OK);
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
//
//        if (!bCryptPasswordEncoder.matches(currentUser.getPassword(), user.getPassword())) {
//            return new ResponseEntity("WRONG PASSWORD", HttpStatus.BAD_REQUEST);
//        }

        return new ResponseEntity(user, HttpStatus.OK);
    }
}

