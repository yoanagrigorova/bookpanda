package me.bookpanda.controller;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import javax.validation.Valid;

import me.bookpanda.entity.Publication;
import me.bookpanda.entity.Subscription;
import me.bookpanda.repository.PublicationRepository;
import me.bookpanda.repository.SubscriptionRepository;
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
@RequestMapping(value = "/subscription")
public class SubscriptionController {
	@Autowired
	private SubscriptionRepository subscriptionRepository;
	
	@Autowired
	private PublicationRepository publicationRepository;

	@GetMapping("/get")
	public ResponseEntity<List<Publication>> getSubscibedUsers(@RequestParam("id") Integer subscriberId) {

		List<Subscription> subscribedTo = subscriptionRepository.findBySubscriber_Id(subscriberId);
		
		List<Publication> subscribedToPublication = new ArrayList<>();
		
		for(Subscription s : subscribedTo) {
			subscribedToPublication.addAll( publicationRepository.findByUser_Id(s.getSubscribedTo().getId()));
		}

        Collections.sort(subscribedToPublication, Collections.reverseOrder()); 
		
		return new ResponseEntity<List<Publication>>(subscribedToPublication, HttpStatus.OK);
	}
	
	@PostMapping("/add")
	public ResponseEntity<Subscription> publishPost(@Valid @RequestBody Subscription subscription, BindingResult binding) {
		if (binding.hasErrors()) {
			return new ResponseEntity<Subscription>(HttpStatus.NOT_ACCEPTABLE);
		}
		
		Subscription subscriber = subscriptionRepository.findBySubscriberIdAndSubscribedToId(
				subscription.getSubscriber().getId(),
				subscription.getSubscribedTo().getId());
		
		if(subscriber != null) {
			return new ResponseEntity("ALREADY SUBSCRIBED", HttpStatus.CONFLICT);
		}
		

		subscriptionRepository.save(subscription);

		return new ResponseEntity<Subscription>(subscription, HttpStatus.CREATED);
	}
}
