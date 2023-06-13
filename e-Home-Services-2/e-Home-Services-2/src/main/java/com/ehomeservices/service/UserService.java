package com.ehomeservices.service;

import java.util.List;
import java.util.Optional;

import com.ehomeservices.entities.User;
import com.ehomeservices.exception.ResourceNotFoundException;

public interface UserService {

	List<User> findAllUsers();

	User findByEmail(String email);

	User authenticate(String email, String password) throws ResourceNotFoundException;

	User registerUser(User user) throws Exception;

	User updateUser(User user, int userid) throws ResourceNotFoundException;

	void deleteUser(int userid) throws ResourceNotFoundException;

}
