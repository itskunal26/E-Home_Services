package com.ehomeservices.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ehomeservices.daos.AdminDao;
import com.ehomeservices.entities.Admin;
import com.ehomeservices.exception.ResourceNotFoundException;

@Service
@Transactional
public class AdminServiceImpl implements AdminService {

	@Autowired
	AdminDao dao;

	@Override
	public Admin autheticate(String email, String password) throws ResourceNotFoundException {
		Admin admin = dao.findAdminByEmail(email);
		if (admin != null && admin.getPassword().equals(password)) {
			return admin;
		}
		throw new ResourceNotFoundException("Invalid credentials");
	}

}
