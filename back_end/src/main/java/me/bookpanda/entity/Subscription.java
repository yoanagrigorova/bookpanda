package me.bookpanda.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity
public class Subscription {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@OneToOne
	@JoinColumn(name = "subscriber_id")
	private User subscriber;

	@OneToOne
	@JoinColumn(name = "subscribed_to_id")
	private User subscribedTo;

	public Subscription() {
	}

	public Subscription(User subscriber, User subscribedTo) {
		this.subscriber = subscriber;
		this.subscribedTo = subscribedTo;
	}

	public User getSubscriber() {
		return subscriber;
	}

	public void setSubscriber(User subscriber) {
		this.subscriber = subscriber;
	}

	public User getSubscribedTo() {
		return subscribedTo;
	}

	public void setSubscribedTo(User subscribedTo) {
		this.subscribedTo = subscribedTo;
	}
}
