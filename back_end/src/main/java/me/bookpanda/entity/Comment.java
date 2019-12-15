package me.bookpanda.entity;

import javax.persistence.*;

import java.sql.Timestamp;

@Entity
public class Comment implements Comparable<Comment>  {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	private Long userId;

	private String text;
	
	private int publicationId;

	@Column(name = "created", nullable = false, updatable = false, insertable = false, columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
	private Timestamp created;

	public Comment() {
	}

	public Comment(Long userId, String text, int publicationId) {
		this.userId = userId;
		this.text = text;
		this.publicationId = publicationId;
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

	public Timestamp getCreated() {
		return created;
	}

	public void setCreated(Timestamp created) {
		this.created = created;
	}
	

	@Override
	public int compareTo(Comment o) {
		return o.getCreated().compareTo(this.getCreated());
	}

}
