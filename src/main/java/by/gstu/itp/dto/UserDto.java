package by.gstu.itp.dto;

import by.gstu.itp.model.Role;
import by.gstu.itp.model.User;

import java.io.Serializable;
import java.util.Collection;
import java.util.stream.Collectors;

public class UserDto implements Serializable {
    private Long id;
    private String username;
    private String password;
    private String email;
    private String fullName;
    private Collection<String> roles;

    public UserDto() {
    }

    public UserDto(Long id, String username, String password, String email,  String fullName, Collection<String> roles) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.email = email;
        this.fullName = fullName;
        this.roles = roles;
    }

    public UserDto(User user) {
        this(user.getId(), user.getUsername(), user.getPassword(), user.getEmail(), user.getFullName(),
                user.getRoles().stream().map(Role::getName).collect(Collectors.toSet()));
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Collection<String> getRoles() {
        return roles;
    }

    public void setRoles(Collection<String> roles) {
        this.roles = roles;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }
}
