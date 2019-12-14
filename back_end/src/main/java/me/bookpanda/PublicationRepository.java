package me.bookpanda;

import java.util.List;

import javax.persistence.EntityManager;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface PublicationRepository extends JpaRepository<Publication, Long> {


	List<Publication> findByUser_Id(Integer userId);

	Publication findById(int id);

	List<Publication> findByCategory(String category);
}
