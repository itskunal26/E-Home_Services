package com.ehomeservices.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ehomeservices.entities.Admin;
import com.ehomeservices.entities.ServiceProvider;
import com.ehomeservices.model.Credentials;
import com.ehomeservices.model.Response;
import com.ehomeservices.service.AdminService;
import com.ehomeservices.service.ServiceProviderService;

@CrossOrigin
@RestController
@RequestMapping(value = "/admin")
public class AdminRestController {

	@Autowired
	private ServiceProviderService spservice;

	@Autowired
	private AdminService adminService;

	@PostMapping("/authenticate")
	public ResponseEntity<?> authenticate( Credentials cred) {
		try {
			System.out.println(cred.getEmail()+" :: " +cred.getPassword());
			Admin admin = adminService.autheticate(cred.getEmail(), cred.getPassword());
			return Response.success(admin);
		} catch (Exception e) {
			return Response.error(e.getMessage());
		}
	}

	@PutMapping("/approvesp/{spid}")
	public ResponseEntity<?> approveServiceProvider(@PathVariable int spid) {
		try {
			ServiceProvider sp = spservice.approveServiceProvider(spid);
			return Response.success(sp);
		} catch (Exception e) {
			return Response.error(e.getMessage());
		}

	}

}
