package com.ehomeservices.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ehomeservices.entities.User;

public interface UserDao extends JpaRepository<User, Integer> {

	User findByUserid(int id);

	User findByEmail(String email);

	User findByContactnumber(String mobile);

	void deleteByUserid(int userid);
}
