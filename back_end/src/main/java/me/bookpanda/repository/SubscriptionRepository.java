package me.bookpanda;

import java.util.Collections;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Repository
public interface SubscriptionRepository extends JpaRepository<Subscription, Long> {
	
	List<Subscription> findBySubscriber_Id(Integer subscriberId);

	Subscription findBySubscriberIdAndSubscribedToId(Integer subscribedId, Integer subscribedToId);
}
