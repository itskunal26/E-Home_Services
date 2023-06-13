package com.ehomeservices.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ehomeservices.daos.ServiceProviderDao;
import com.ehomeservices.entities.ServiceProvider;
import com.ehomeservices.exception.ResourceNotFoundException;

@Service
@Transactional
public class ServiceProviderServiceImpl implements ServiceProviderService {

	@Autowired
	private ServiceProviderDao SPdao;

	@Override
	public List<ServiceProvider> findAll() {

		return SPdao.findAll();
	}

	@Override
	public ServiceProvider findBySpid(int id) throws ResourceNotFoundException {
		ServiceProvider sp = SPdao.findBySpid(id);
		if (sp == null) {
			throw new ResourceNotFoundException("Service Provider does not exists");
		}
		return sp;
	}

	@Override
	public ServiceProvider authenticate(String email, String password) throws ResourceNotFoundException {
		ServiceProvider sp = SPdao.findByEmail(email);
		if (sp != null && sp.getPassword().equals(password)) {
			return sp;
		}
		throw new ResourceNotFoundException("Login Failed! invalid credentials.");
	}

	@Override
	public ServiceProvider register(ServiceProvider sp) throws ResourceNotFoundException {

		ServiceProvider spp = SPdao.findByContactnumber(sp.getContactnumber());
		if (spp != null) {
			throw new ResourceNotFoundException("Moble number already registerd.");
		}

		if (validateRegistrationData(sp)) {
			return SPdao.save(sp);
		}
		throw new ResourceNotFoundException("Invalid Service Provider registration data");

	}

	private boolean validateRegistrationData(ServiceProvider sp) throws ResourceNotFoundException {

		String firstname = sp.getFirstname();
		String lastname = sp.getLastname();
		String password = sp.getPassword();
		String contact_number = sp.getContactnumber();
		String email = sp.getEmail();
		String service_type = sp.getService_type();
		double service_cost = sp.getService_cost();

		if (firstname != null && lastname != null && service_type != null && password != null && contact_number != null
				&& email != null && service_cost != 0) {

			String regExEmail = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
			boolean isValidEmail = email.matches(regExEmail);

			String regExContact = "(0|91)?[7-9][0-9]{9}";
			boolean isValidContact = contact_number.matches(regExContact);

			if (isValidEmail && isValidContact) {
				return true;
			} else {
				throw new ResourceNotFoundException("Invalid email or contact details.");
			}

		}
		throw new ResourceNotFoundException("details cannot be empty");
	}

	@Override
	public ServiceProvider editServiceProvider(ServiceProvider sp, int spid) throws ResourceNotFoundException {
		ServiceProvider existSp = SPdao.findBySpid(spid);
		if (existSp == null) {
			throw new ResourceNotFoundException("Service provider does not exists.");
		}

		existSp.setFirstname(sp.getFirstname());
		existSp.setLastname(sp.getLastname());
		existSp.setPassword(sp.getPassword());
		existSp.setContactnumber(sp.getContactnumber());
		existSp.setEmail(sp.getEmail());
		existSp.setService_cost(sp.getService_cost());
		existSp.setService_type(sp.getService_type());
		if(validateRegistrationData(existSp)) {
			return SPdao.save(existSp);
		}
		throw new ResourceNotFoundException("Invalid user data");
	}

	@Override
	public void deleteServiceProvider(int spid) throws ResourceNotFoundException {
		ServiceProvider sp = SPdao.findBySpid(spid);
		if (sp == null) {
			throw new ResourceNotFoundException("Service Provider does not exists.");
		}

		SPdao.deleteById(spid);
	}

	@Override
	public List<ServiceProvider> findByServiceType(String service) {
		return SPdao.findByServiceType(service);
	}

	@Override
	public List<ServiceProvider> findAuthorisedServiceProvider() {

		return SPdao.findAuthorisedServiceProvider();
	}

	@Override
	public List<ServiceProvider> findUnauthorisedServiceProvider() {

		return SPdao.findUnauthorisedServiceProvider();
	}

	@Override
	public ServiceProvider approveServiceProvider(int id) {
		ServiceProvider sp = SPdao.findBySpid(id);
		sp.setAp_status("Approved");
		return sp;
	}

	@Override
	public ServiceProvider findByEmail(String email) {
		
		return SPdao.findByEmail(email);
	}

}
