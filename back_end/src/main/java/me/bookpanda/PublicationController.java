package me.bookpanda;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

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
        return new ResponseEntity<List<Publication>>(publicationRepository.findByCategory(category), HttpStatus.OK);
    }

    @GetMapping("/user")
    public ResponseEntity<List<Publication>> getUserPublications(@RequestParam("userid") Long userId) {
        return new ResponseEntity<List<Publication>>(publicationRepository.findByUserId(userId), HttpStatus.OK);
    }
    
    @GetMapping("/all")
    public ResponseEntity<List<Publication>> getAllPublications() {
        return new ResponseEntity<List<Publication>>(publicationRepository.findAll(),HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Publication> publishPost(@Valid @RequestBody Publication publication, BindingResult binding) {
        if (binding.hasErrors()) {
            return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
        }

        publicationRepository.save(publication);

        return new ResponseEntity<>(publication, HttpStatus.CREATED);
    }

}
