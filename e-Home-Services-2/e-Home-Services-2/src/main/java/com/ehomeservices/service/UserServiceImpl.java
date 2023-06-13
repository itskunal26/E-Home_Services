package com.ehomeservices.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ehomeservices.daos.UserDao;
import com.ehomeservices.entities.User;
import com.ehomeservices.exception.ResourceNotFoundException;

@Service
@Transactional
public class UserServiceImpl implements UserService {

	@Autowired
	private UserDao dao;

	@Override
	public List<User> findAllUsers() {

		return dao.findAll();
	}

	@Override
	public User findByEmail(String email) {

		return dao.findByEmail(email);
	}

	@Override
	public User authenticate(String email, String password) throws ResourceNotFoundException {
		User user = dao.findByEmail(email);
		if (user != null && user.getPassword().equals(password)) {
			return user;
		}
		throw new ResourceNotFoundException("Login Failed! invalid credentials.");
	}

	@Override
	public User registerUser(User user) throws ResourceNotFoundException {
		User userexist = dao.findByContactnumber(user.getContactnumber());
		if (userexist != null) {
			throw new ResourceNotFoundException("Mobile number already registerd");
		}

		if (validateRegistrationData(user)) {
			return dao.save(user);
		}
		throw new ResourceNotFoundException("Invalid user registration data");
	}

	private boolean validateRegistrationData(User user) throws ResourceNotFoundException {

		String firstname = user.getFirstname();
		String lastname = user.getLastname();
		String address = user.getLastname();
		String password = user.getPassword();
		String contactnumber = user.getContactnumber();
		String email = user.getEmail();

		if (firstname != null && lastname != null && address != null && password != null && contactnumber != null
				&& email != null) {

			String regExEmail = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
			boolean isValidEmail = email.matches(regExEmail);

			String regExContact = "(0|91)?[7-9][0-9]{9}";
			boolean isValidContact = contactnumber.matches(regExContact);

			System.out.println(isValidEmail +""+ isValidContact);
			
			if (isValidEmail && isValidContact) {
				return true;
			} else {
				throw new ResourceNotFoundException("Invalid email or contact detils.");
			}

		}
		throw new ResourceNotFoundException("User details cannot be empty");
	}

	@Override
	public User updateUser(User user, int userid) throws ResourceNotFoundException {
		User existUser = dao.findByUserid(userid);
		if (existUser == null) {
			throw new ResourceNotFoundException("User does not exists");
		}

		// existUser.setUserid(user.getUserid());
		existUser.setFirstname(user.getFirstname());
		existUser.setLastname(user.getLastname());
		existUser.setAddress(user.getAddress());
		existUser.setPassword(user.getPassword());
		existUser.setContactnumber(user.getContactnumber());
		existUser.setEmail(user.getEmail());
		if(validateRegistrationData(existUser)) {
			return dao.save(existUser);
		}
		throw new ResourceNotFoundException("Invalid user data");

	}


	@Override
	public void deleteUser(int userid) throws ResourceNotFoundException {

		User user = dao.findByUserid(userid);
		if (user == null) {
			throw new ResourceNotFoundException("User does not exist.");
		} else {
			dao.deleteByUserid(userid);
		}

	}

}
