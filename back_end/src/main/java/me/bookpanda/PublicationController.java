package me.bookpanda;

import java.util.Collections;
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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(value = "/publication")
public class PublicationController {

	@Autowired
	private PublicationRepository publicationRepository;

	@GetMapping
	public ResponseEntity<Publication> getPublicationById(@RequestParam("id") int id) {
		return new ResponseEntity<Publication>(publicationRepository.findById(id), HttpStatus.OK);
	}

	@GetMapping("/category")
	public ResponseEntity<List<Publication>> getPublicationsByCategory(@RequestParam("category") String category) {
		
		List<Publication> publications = publicationRepository.findByCategory(category);

        Collections.sort(publications, Collections.reverseOrder()); 
		
		return new ResponseEntity<List<Publication>>(publications, HttpStatus.OK);
	}

	@GetMapping("/user")	
	public ResponseEntity<List<Publication>> getUserPublications(@RequestParam("userid") Integer userId) {

		List<Publication> publications = publicationRepository.findByUser_Id(userId);

        Collections.sort(publications, Collections.reverseOrder()); 
		
		return new ResponseEntity<List<Publication>>(publications, HttpStatus.OK);
	}

	@GetMapping("/all")
	public ResponseEntity<List<Publication>> getAllPublications() {
		
		List<Publication> publications = publicationRepository.findAll();

        Collections.sort(publications, Collections.reverseOrder());
		
		return new ResponseEntity<List<Publication>>(publications, HttpStatus.OK);
	}

	@PostMapping("/add")
	public ResponseEntity<Publication> publishPost(@Valid @RequestBody Publication publication, BindingResult binding) {
		if (binding.hasErrors()) {
			return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
		}

		Publication currentPublication = publicationRepository.saveAndFlush(publication);

		return new ResponseEntity<>(currentPublication, HttpStatus.CREATED);
	}

}
