package me.salisuwy;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.time.LocalDateTime;

@Entity
public class Publication {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private int userId;
	private String text;
	private String title;
	private LocalDateTime created;
	private String category;

	public Publication() {
	}

	public Publication(int userId, String title, String text, String category) {
		this.userId = userId;
		this.title = title;
		this.text = text;
		this.category = category;
		this.created = LocalDateTime.now();
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	
	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public LocalDateTime getCreated() {
		return created;
	}

	public void setCreated(LocalDateTime created) {
		this.created = created;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	@Override
	public String toString() {
		return "Publication [id=" + id /* + ", userId=" + userId */+ ", text=" + text + ", title=" + title + ", created="
				+ created + ", category=" + category + "]";
	}

	

}
