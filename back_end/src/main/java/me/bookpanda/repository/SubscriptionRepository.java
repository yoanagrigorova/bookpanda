package me.bookpanda.repository;

import java.util.List;

import me.bookpanda.entity.Subscription;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface SubscriptionRepository extends JpaRepository<Subscription, Long> {
	
	List<Subscription> findBySubscriber_Id(Integer subscriberId);

	Subscription findBySubscriberIdAndSubscribedToId(Integer subscribedId, Integer subscribedToId);
}
