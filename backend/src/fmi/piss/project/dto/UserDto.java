package fmi.piss.project.dto;

import java.time.LocalDateTime;

import javax.validation.constraints.NotNull;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;


public class UserDto {

    @Getter(AccessLevel.PUBLIC)
    @Setter(AccessLevel.PUBLIC)
	private Long userId;
	
	@NotNull
    @Getter(AccessLevel.PUBLIC)
    @Setter(AccessLevel.PUBLIC)
	private String username;
	
	@NotNull
    @Getter(AccessLevel.PUBLIC)
    @Setter(AccessLevel.PUBLIC)
	private String email;
	
	@NotNull
    @Getter(AccessLevel.PUBLIC)
    @Setter(AccessLevel.PUBLIC)
	private String password;
	
    @NotNull
    @Getter(AccessLevel.PUBLIC)
    @Setter(AccessLevel.PUBLIC)
    private LocalDateTime creationTime;

}
