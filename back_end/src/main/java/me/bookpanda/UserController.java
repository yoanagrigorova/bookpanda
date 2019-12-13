package me.bookpanda;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(value = "/user")
public class UserController {

	// @Autowired
//    private MailService mailService;

//    @Autowired
//    private BCryptPasswordEncoder bCryptPasswordEncoder;

	public static final PasswordEncoder PASSWORD_ENCODER = new BCryptPasswordEncoder();

	@Autowired
	private UserRepository userRepository;

	@GetMapping("/all")
	public ResponseEntity<List<User>> getUsers() {
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
		// mailService.sendEmail(user.getEmail(), "Successful registration to
		// BookPanda!");

		user.setPassword(BCrypt.hashpw(user.getPassword(), BCrypt.gensalt()));

		userRepository.save(user);

		User registeredUser = userRepository.findByUsername(user.getUsername());

		return new ResponseEntity<>(registeredUser, HttpStatus.CREATED);
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
		
		try {
			if (currentUser == null || !BCrypt.checkpw(user.getPassword(), currentUser.getPassword())) {
				return new ResponseEntity("WRONG USERNAME OR PASSWORD", HttpStatus.BAD_REQUEST);
			}
		}catch (IllegalArgumentException ex) {
			return new ResponseEntity("WRONG USERNAME OR PASSWORD", HttpStatus.BAD_REQUEST);
		}
		

		return new ResponseEntity(currentUser, HttpStatus.OK);
	}
}
