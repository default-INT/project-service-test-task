package by.gstu.itp.service;

import by.gstu.itp.dto.ProjectDto;
import by.gstu.itp.model.Project;
import by.gstu.itp.model.User;
import by.gstu.itp.repository.ProjectJpaRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class ProjectDataService {

    private final ProjectJpaRepository projectJpaRepository ;
    private final UserService userService;

    public ProjectDataService(ProjectJpaRepository projectJpaRepository, UserService userService) {
        this.projectJpaRepository = projectJpaRepository ;
        this.userService = userService;
    }

    public List<Project> findAll() {
        return projectJpaRepository.findAll();
    }

    private Project getProjectFromDto(ProjectDto projectDto) {
        Long id = projectDto.getId();
        String name = projectDto.getName();
        LocalDate dateStart = projectDto.getDateStart();
        LocalDate dateFinish = projectDto.getDateFinish();
        String comments = projectDto.getComments();
        User teamLead = userService.findUserById(projectDto.getTeamLead().getId());
        Set<User> teams = projectDto.getTeams().stream().map(user -> userService.findUserById(user.getId()))
                .collect(Collectors.toSet());
        return new Project(id, name, dateStart, dateFinish, comments, teamLead, teams);
    }

    public Project update(ProjectDto projectDto) {
        Project updateProject= getProjectFromDto(projectDto);
        Project project = projectJpaRepository.findById(projectDto.getId()).orElseThrow(IllegalArgumentException::new);

        project.setName(updateProject.getName());
        project.setDateStart(updateProject.getDateStart());
        project.setDateFinish(updateProject.getDateFinish());
        project.setComments(updateProject.getComments());
        project.setTeamLead(updateProject.getTeamLead());
        project.setUsers(updateProject.getUsers());

        return projectJpaRepository.save(project);
    }

    public Project save(ProjectDto projectDto) {
        Project project = getProjectFromDto(projectDto);
        return save(project);
    }

    public void delete(ProjectDto projectDto) {
        Project delProject = projectJpaRepository.findById(projectDto.getId()).orElseThrow(IllegalArgumentException::new);
        projectJpaRepository.delete(delProject);
    }

    public Project save(Project project) {
        Set<User> users = project.getUsers();
        Project newProject = projectJpaRepository.save(project);
        newProject.setUsers(users);
        return projectJpaRepository.save(newProject);
    }
}
