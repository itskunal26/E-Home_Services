package com.ehomeservices.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ehomeservices.entities.Admin;

public interface AdminDao extends JpaRepository<Admin, Integer>{

	Admin findAdminByEmail(String email);

}
