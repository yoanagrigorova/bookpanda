package fmi.piss.project.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Configuration;

@SpringBootApplication
public class ProjectApplication {
	
	public static void main(String[] args) {

		SpringApplication.run(ProjectApplication.class, args);
	}

	/*
	 * @Bean public DataSource dataSource(){ DriverManagerDataSource dataSource =
	 * new DriverManagerDataSource();
	 * dataSource.setDriverClassName("com.mysql.jdbc.Driver");
	 * dataSource.setUrl("mysql:jdbc://localhost:3306/piss");
	 * dataSource.setUsername("root"); dataSource.setPassword("rootroot"); return
	 * (DataSource) dataSource; }
	 */
}
