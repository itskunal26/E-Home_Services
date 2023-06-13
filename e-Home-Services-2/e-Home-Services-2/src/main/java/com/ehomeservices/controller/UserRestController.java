package com.ehomeservices.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ehomeservices.entities.User;
import com.ehomeservices.model.Credentials;
import com.ehomeservices.model.Response;
import com.ehomeservices.service.UserService;

@CrossOrigin
@RestController
@RequestMapping(value = "/user")
public class UserRestController {

	@Autowired
	private UserService userservice;

	@GetMapping("/findall")
	public ResponseEntity<?> findAll() {
		List<User> list = userservice.findAllUsers();
		return Response.success(list);
	}

	@GetMapping("/findbyemail")
	public ResponseEntity<?> findByEmail(@RequestParam String email) {
		User user = userservice.findByEmail(email);
		if (user == null) {
			return Response.error(user);
		}
		return Response.success(user);
	}

	@PostMapping("/authenticate")
	public ResponseEntity<?> autheticate(Credentials cred) {
		try {
			User user = userservice.authenticate(cred.getEmail(), cred.getPassword());
			System.out.println(user);
			return Response.success(user);
		} catch (Exception e) {
			return Response.error(e.getMessage());
		}

	}

	@PostMapping("/register")
	public ResponseEntity<?> registerUser(User user) {
		System.out.println(user);
		try {
			User newuser = userservice.registerUser(user);
			return Response.success(newuser);
		} catch (Exception e) {
			return Response.error(e.getMessage());
		}

	}

	@PutMapping("/updateuser/{userid}")
	public ResponseEntity<?> updateUser(@PathVariable("userid") int id, User user) throws Exception {
		try {
			user.setUserid(id);
			User moduser = userservice.updateUser(user, id);
			return Response.success(moduser);
		} catch (Exception e) {
			return Response.error(e.getMessage());
		}

	}

	@DeleteMapping("/deleteuser/{userid}")
	public ResponseEntity<?> deleteUser(@PathVariable("userid") int userid) {
		try {
			userservice.deleteUser(userid);
			return Response.success("User deleted successfully");
		} catch (Exception e) {
			return Response.error(e.getMessage());
		}
	}
}
