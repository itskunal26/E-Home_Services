package com.ehomeservices.service;

import java.util.List;

import com.ehomeservices.entities.Reviews;
import com.ehomeservices.exception.ResourceNotFoundException;

public interface ReviewService {

	Reviews addReviewToServiceProvider(Reviews review, int spid);
	
	Reviews editReview(Reviews review, int id);
	
	Reviews findReviewById(int id);
	
	void deleteReviewById(int id);
	
	List<Reviews> findAllReviewsForServiceProvider(int spid) throws ResourceNotFoundException;
	
	List<Reviews> findAllReviews();
}
