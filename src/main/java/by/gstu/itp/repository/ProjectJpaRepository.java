package by.gstu.itp.repository;

import by.gstu.itp.model.Project;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ProjectJpaRepository extends JpaRepository<Project, Long> {
    Optional<Project> findById(Long id);
}
