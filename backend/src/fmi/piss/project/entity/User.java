package fmi.piss.project.entity;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter(AccessLevel.PUBLIC)
    @Setter(AccessLevel.PUBLIC)
	private long id;

    @Getter(AccessLevel.PUBLIC)
    @Setter(AccessLevel.PUBLIC)
	@Column(name = "username", nullable = false)
	private String username;
    
    @Getter(AccessLevel.PUBLIC)
    @Setter(AccessLevel.PUBLIC)
	@Column(name = "email", nullable = false)
	private String email;

    @Getter(AccessLevel.PUBLIC)
    @Setter(AccessLevel.PUBLIC)
	@Column(name = "password", nullable = false)
	private String password;
    
	@Getter(AccessLevel.PUBLIC)
	@Setter(AccessLevel.PUBLIC)
	@Column(name = "created_at", nullable = false)
	private LocalDateTime creationTime;

}
