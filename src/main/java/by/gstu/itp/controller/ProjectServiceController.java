package by.gstu.itp.controller;

import by.gstu.itp.dto.ProjectDto;
import by.gstu.itp.dto.UserDto;
import by.gstu.itp.model.Project;
import by.gstu.itp.model.User;
import by.gstu.itp.service.ProjectDataService;
import by.gstu.itp.service.UserService;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class ProjectServiceController {
    private final ProjectDataService projectService;
    private final UserService userService;

    public ProjectServiceController(ProjectDataService projectService, UserService userService) {
        this.projectService = projectService;
        this.userService = userService;
    }

    @GetMapping("/projects")
    public List<ProjectDto> fetchAllProject() {
        return projectService.findAll().stream().map(ProjectDto::new)
                .collect(Collectors.toList());
    }

    @GetMapping("/users")
    public List<UserDto> fetchAllUsers() {
        return userService.allUsers().stream().map(UserDto::new).collect(Collectors.toList());
    }

    @PostMapping("/projects")
    public ProjectDto addProject(@RequestBody ProjectDto projectDto) {
        Project projectDB = projectService.save(projectDto);
        return new ProjectDto(projectDB);
    }

    @PutMapping("/projects")
    public ProjectDto updateProject(@RequestBody ProjectDto projectDto) {
        Project projectDB = projectService.update(projectDto);
        return new ProjectDto(projectDB);
    }

    @DeleteMapping("/projects")
    public ProjectDto deleteProject(@RequestBody ProjectDto projectDto) {
        projectService.delete(projectDto);
        return projectDto;
    }

    @PostMapping("/login")
    public UserDto loginUser(@RequestBody UserDto userDto) {
        return userDto;
    }
}
