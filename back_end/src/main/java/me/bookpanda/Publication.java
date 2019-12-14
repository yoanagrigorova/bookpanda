package me.bookpanda;

import javax.persistence.*;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.List;

@Entity
public class Publication {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private Long userId;
	private String text;
	private String title;
	private String category;
	
	@Column(name = "created", nullable = false, updatable = false, insertable = false, columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
	private Timestamp created;
	
	@OneToMany(mappedBy = "publicationId")
	private List<Comment> comments;

	public Publication() {
	}

	public Publication(Long userId, String title, String text, String category) {
        this.userId = userId;
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

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getCreated() {
		return created.toString();
	}

	@Override
	public String toString() {
		return "Publication [id=" + id /* + ", userId=" + userId */ + ", text=" + text + ", title=" + title
				+ ", created=" + created + ", category=" + category + "]";
	}
}
