package me.bookpanda;

import java.util.Collections;
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
@RequestMapping(value = "/comment")
public class CommentController {

	@Autowired
	private CommentRepository commentRepository;

	@GetMapping("/publication")
	public ResponseEntity<List<Comment>> getUserPublications(@RequestParam("id") Integer publicationId) {
		
		List<Comment> comments = commentRepository.findByPublicationId(publicationId);
		
        Collections.sort(comments, Collections.reverseOrder()); 
		
		return new ResponseEntity<List<Comment>>(comments, HttpStatus.OK);
	}

	@PostMapping("/add")
	public ResponseEntity<Comment> publishPost(@Valid @RequestBody Comment comment, BindingResult binding) {
		if (binding.hasErrors()) {
			return new ResponseEntity<Comment>(HttpStatus.NOT_ACCEPTABLE);
		}
		
		if(comment.getText().isEmpty()) {
			return new ResponseEntity("EMPTY TEXT FIELD", HttpStatus.BAD_REQUEST);
		}

		commentRepository.save(comment);

		return new ResponseEntity<Comment>(comment, HttpStatus.CREATED);
	}

}
