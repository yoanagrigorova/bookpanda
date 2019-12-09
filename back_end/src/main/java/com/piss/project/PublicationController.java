package me.salisuwy;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping(path = "/publication", produces = "application/json", consumes = "application/json")
public class PublicationController {

	@Autowired
	private PublicationRepository publicationRepository;

	/*
	 * @GetMapping("/{userId}") public List<Publication>
	 * getUserPublications(@PathVariable int userId, BindingResult binding) { return
	 * publicationRepository.findByUserId(userId); }
	 */

	@PostMapping("/add")
	public ResponseEntity<Publication> publishPost(@Valid @RequestBody Publication publication, BindingResult binding) {
		if (binding.hasErrors()) {
			return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
		}

		publicationRepository.save(publication);

		return new ResponseEntity<>(publication, HttpStatus.CREATED);
	}

}
