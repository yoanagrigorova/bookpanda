package me.bookpanda;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

    User findByUsername(String name);
    User findByEmail(String email);

    @Modifying
    @Query(value = "INSERT INTO users_subscribers (user_id, subscriber_id) VALUES (:userId, :subscriberId);",
            nativeQuery = true)
    void subscribeToUser(int userId, int subscriberId);

    @Query(value = "SELECT u.* FROM users_subscribers AS us JOIN user AS u ON us.subscriber_id = u.id WHERE us.user_id = :userId;",
            nativeQuery = true)
    List<User> getSubscribers(int userId);
}

