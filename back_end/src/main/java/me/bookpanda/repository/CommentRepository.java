package me.bookpanda.repository;

import java.util.List;

import me.bookpanda.entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {
	
	List<Comment> findByPublicationId(Integer publicationId);
}
