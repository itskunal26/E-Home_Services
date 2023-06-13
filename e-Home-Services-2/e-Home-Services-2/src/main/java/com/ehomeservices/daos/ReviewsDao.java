package com.ehomeservices.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ehomeservices.entities.Reviews;

public interface ReviewsDao extends JpaRepository<Reviews, Integer> {

	Reviews findById(int id);
}
