package by.gstu.itp.model;

import by.gstu.itp.dto.ProjectDto;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.Collection;
import java.util.Set;

@Entity
public class Project implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    @Column(name = "date_start")
    private LocalDate dateStart;
    @Column(name = "date_finish")
    private LocalDate dateFinish;
    @Column
    private String comments;
    @Column(name = "team_lead_id", updatable = false, insertable = false)
    private Long teamLeadId;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "team_lead_id", nullable = false)
    private User teamLead;
    @ManyToMany
    private Set<User> users;

    public Project() {
    }

    public Project(Long id, String name, LocalDate dateStart, LocalDate dateFinish, String comments, User teamLead, Set<User> users) {
        this.id = id;
        this.name = name;
        this.dateStart = dateStart;
        this.dateFinish = dateFinish;
        this.comments = comments;
        this.teamLead = teamLead;
        this.users = users;
    }

    public Project(String name, LocalDate dateStart, LocalDate dateFinish, String comments, User teamLead, Set<User> users) {
        this.name = name;
        this.dateStart = dateStart;
        this.dateFinish = dateFinish;
        this.comments = comments;
        this.teamLead = teamLead;
        this.users = users;
    }

    public Long getTeamLeadId() {
        return teamLeadId;
    }

    public void setTeamLeadId(Long teamLeadId) {
        this.teamLeadId = teamLeadId;
    }

    public User getTeamLead() {
        return teamLead;
    }

    public void setTeamLead(User teamLead) {
        this.teamLead = teamLead;
    }

    public Set<User> getUsers() {
        return users;
    }

    public void setUsers(Set<User> users) {
        this.users = users;
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

    public String getComments() {
        return comments;
    }

    public void setComments(String comments) {
        this.comments = comments;
    }

    @Override
    public String toString() {
        return "Project{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", dateStart=" + dateStart +
                ", dateFinish=" + dateFinish +
                ", comments='" + comments + '\'' +
                ", teamLeadId=" + teamLeadId +
                ", teamLead=" + teamLead +
                ", users=" + users +
                '}';
    }
}
