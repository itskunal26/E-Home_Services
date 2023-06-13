package com.ehomeservices.controller;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.ehomeservices.entities.ServiceProvider;
import com.ehomeservices.model.Credentials;
import com.ehomeservices.model.Response;
import com.ehomeservices.service.ServiceProviderService;

@CrossOrigin
@RestController
@RequestMapping(value = "/service")
public class ServiceProvideRestController {
//
	@Autowired
	private ServiceProviderService spservice;

	@GetMapping("/findall")
	public ResponseEntity<?> findAll() {
		List<ServiceProvider> list = spservice.findAll();
		return Response.success(list);
	}
	
	@PostMapping("/register")
	public ResponseEntity<?> registerServiceProvider(ServiceProvider sp) {
		try {
			ServiceProvider spp = spservice.register(sp);
			return Response.success(spp);
		} catch (Exception e) {
			return Response.error(e.getMessage());
		}
	}

	// update information of service provider
	@PutMapping("/edit/{spid}")
	public ResponseEntity<?> editServiceProvider(ServiceProvider sp, @PathVariable int spid) {
		try {
			ServiceProvider spp = spservice.editServiceProvider(sp, spid);
			return Response.success(spp);
		} catch (Exception e) {
			return Response.error(e.getMessage());
		}

	}

	// get service provider by id
	@GetMapping("/findbyid/{spid}")
	public ResponseEntity<?> findSpById(@PathVariable int spid) {
		try {
			ServiceProvider sp = spservice.findBySpid(spid);
			return Response.success(sp);
		} catch (Exception e) {
			return Response.error(e.getMessage());
		}
	}

	// get service provider by service type
	@GetMapping("/findbyservice/{service}")
	public ResponseEntity<?> findByService(@PathVariable String service) {
//		System.out.println(service);
		try {
			List<ServiceProvider> list = spservice.findByServiceType(service);
//			for (ServiceProvider serviceProvider : list) {
//				System.out.println(serviceProvider);
//			}
			return Response.success(list);
		} catch (Exception e) {
			return Response.error(e.getMessage());
		}
	}

	// get Authorised service provider
	@GetMapping("/findauthorised")
	public ResponseEntity<?> findAuthorised() {
		try {
			List<ServiceProvider> list = spservice.findAuthorisedServiceProvider();
			return Response.success(list);
		} catch (Exception e) {
			return Response.error(e.getMessage());
		}
	}

	// get Authorised service provider
	@GetMapping("/findunauthorised")
	public ResponseEntity<?> findUnauthorised() {
		try {
			List<ServiceProvider> list = spservice.findUnauthorisedServiceProvider();
			return Response.success(list);
		} catch (Exception e) {
			return Response.error(e.getMessage());
		}
	}

	// for login authentication
	@PostMapping("/authenticate")
	public ResponseEntity<?> authenticate(Credentials cred) {

		try {
			ServiceProvider sp = spservice.authenticate(cred.getEmail(), cred.getPassword());
			return Response.success(sp);
		} catch (Exception e) {
			return Response.error(e.getMessage());
		}

	}

	// delete Service provider
	@DeleteMapping("/deletesp/{spid}")
	public ResponseEntity<?> deleteSpById(@PathVariable int spid) {

		try {
			spservice.deleteServiceProvider(spid);
			return Response.success("Service Provider deleted successfully");
		} catch (Exception e) {
			return Response.error(e.getMessage());
		}

	}

}
