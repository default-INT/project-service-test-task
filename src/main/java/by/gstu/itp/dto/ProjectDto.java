package by.gstu.itp.dto;

import by.gstu.itp.model.Project;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.Collection;
import java.util.stream.Collectors;

public class ProjectDto implements Serializable {
    private Long id;
    private String name;
    private String comments;
    private LocalDate dateStart;
    private LocalDate dateFinish;
    private UserDto teamLead;
    private Collection<UserDto> teams;

    public ProjectDto() {
    }

    public ProjectDto(Long id, String name, String comments, LocalDate dateStart, LocalDate dateFinish, UserDto teamLead, Collection<UserDto> teams) {
        this.id = id;
        this.name = name;
        this.comments = comments;
        this.dateStart = dateStart;
        this.dateFinish = dateFinish;
        this.teamLead = teamLead;
        this.teams = teams;
    }

    public ProjectDto(Project project) {
        this(
                project.getId(),
                project.getName(),
                project.getComments(),
                project.getDateStart(),
                project.getDateFinish(),
                new UserDto(project.getTeamLead()),
                project.getUsers().stream().map(UserDto::new).collect(Collectors.toSet())
        );
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getComments() {
        return comments;
    }

    public void setComments(String comments) {
        this.comments = comments;
    }

    public LocalDate getDateStart() {
        return dateStart;
    }

    public void setDateStart(LocalDate dateStart) {
        this.dateStart = dateStart;
    }

    public LocalDate getDateFinish() {
        return dateFinish;
    }

    public void setDateFinish(LocalDate dateFinish) {
        this.dateFinish = dateFinish;
    }

    public UserDto getTeamLead() {
        return teamLead;
    }

    public void setTeamLead(UserDto teamLead) {
        this.teamLead = teamLead;
    }

    public Collection<UserDto> getTeams() {
        return teams;
    }

    public void setTeams(Collection<UserDto> teams) {
        this.teams = teams;
    }
}
