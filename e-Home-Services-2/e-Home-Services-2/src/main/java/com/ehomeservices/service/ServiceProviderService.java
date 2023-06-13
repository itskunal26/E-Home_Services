package com.ehomeservices.service;

import java.util.List;

import org.springframework.data.jpa.repository.Query;

import com.ehomeservices.entities.ServiceProvider;
import com.ehomeservices.exception.ResourceNotFoundException;

public interface ServiceProviderService {

	ServiceProvider editServiceProvider(ServiceProvider sp, int spid) throws ResourceNotFoundException;

	ServiceProvider findBySpid(int spid) throws ResourceNotFoundException;

	void deleteServiceProvider(int spid) throws ResourceNotFoundException;

	List<ServiceProvider> findAll();

	ServiceProvider authenticate(String email, String password) throws ResourceNotFoundException;

	ServiceProvider register(ServiceProvider sp) throws ResourceNotFoundException;
	
	ServiceProvider approveServiceProvider(int id);
	
	ServiceProvider findByEmail(String email);

	List<ServiceProvider> findByServiceType(String service);

	List<ServiceProvider> findAuthorisedServiceProvider();

	List<ServiceProvider> findUnauthorisedServiceProvider();
}
