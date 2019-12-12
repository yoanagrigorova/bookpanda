package com.piss.project;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PublicationRepository extends JpaRepository<Publication, Integer> {

	List<Publication> findByUserId(Long userId);
	
	Publication findById(int id);
	
	List<Publication> findByCategory(String category);

}
