package com.ehomeservices.service;

import com.ehomeservices.entities.Admin;
import com.ehomeservices.exception.ResourceNotFoundException;

public interface AdminService {

	Admin autheticate(String email, String password) throws ResourceNotFoundException;
	
}
