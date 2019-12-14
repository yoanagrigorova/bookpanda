package me.bookpanda;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PublicationRepository extends JpaRepository<Publication, Long> {

    List<Publication> findByUserId(Long userId);

    Publication findById(int id);

    List<Publication> findByCategory(String category);
}
