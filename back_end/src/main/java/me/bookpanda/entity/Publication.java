package me.bookpanda.entity;


import java.sql.Timestamp;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity
public class Publication implements Comparable<Publication> {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	private String text;
	private String title;
	private String category;

	@OneToOne
	@JoinColumn(name = "user_id")
	private User user;
	
	@Column(name = "created", updatable = false, insertable = false, columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
	private Timestamp created;

	public Publication() {
	}

	public Publication(User user, String title, String text, String category) {
		this.user = user;
		this.title = title;
		this.text = text;
		this.category = category;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
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

	public String getCategory() {
		return category;
	}

	public Timestamp getCreated() {
		return created;
	}

	public void setCreated(Timestamp created) {
		this.created = created;
	}

	@Override
	public String toString() {
		return "Publication [id=" + id +  ", text=" + text + ", title=" + title + ", created="
				+ created + ", category=" + category + "]";
	}

	@Override
	public int compareTo(Publication o) {
		return o.getCreated().compareTo(this.getCreated());
	}
}
