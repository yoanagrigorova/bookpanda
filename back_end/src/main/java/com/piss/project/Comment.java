package com.piss.project;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Transient;

@Entity
public class Comment {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private Long userId;
	private String text;

	@ManyToOne(fetch = FetchType.LAZY, optional = false)
	@JoinColumn(name = "id")
	@Transient
	private Publication publication;

	private int publicationId;

	@Transient
	private LocalDateTime created;

	public Comment() {
	}

	public Comment(Long userId, String text, Publication publication) {
		this.userId = userId;
		this.text = text;
		this.publication = publication;
		this.publicationId = publication.getId();
	}

	public void setPublicationId(int publicationId) {
		this.publicationId = publicationId;
	}

	public int getPublicationId() {
		return publicationId;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public Publication getPublication() {
		return publication;
	}

	public void setPublication(Publication publication) {
		this.publication = publication;
	}

}