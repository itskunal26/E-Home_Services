package com.ehomeservices.service;

import java.util.Date;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ehomeservices.daos.ReviewsDao;
import com.ehomeservices.daos.ServiceProviderDao;
import com.ehomeservices.entities.Reviews;
import com.ehomeservices.entities.ServiceProvider;
import com.ehomeservices.exception.ResourceNotFoundException;

@Service
@Transactional
public class ReviewServiceImpl implements ReviewService {

	@Autowired
	private ReviewsDao reviewdao;

	@Autowired
	private ServiceProviderDao servicedao;

	@Override
	public Reviews addReviewToServiceProvider(Reviews review, int spid) {
		ServiceProvider sp = servicedao.findBySpid(spid);
		review.setAddedat(new Date());
		sp.addReviewToServiceProvider(review);
		return reviewdao.save(review);
	}

	@Override
	public Reviews editReview(Reviews review, int id) {
		Reviews existreview = reviewdao.findById(id);
		existreview.setTitle(review.getTitle());
		existreview.setMessage(review.getMessage());
		existreview.setAddedat(new Date());
		return reviewdao.save(existreview);
	}

	@Override
	public Reviews findReviewById(int id) {

		return reviewdao.findById(id);
	}

	@Override
	public void deleteReviewById(int id) {
		reviewdao.deleteById(id);

	}

	@Override
	public List<Reviews> findAllReviewsForServiceProvider(int spid) throws ResourceNotFoundException {
		ServiceProvider sp = servicedao.findBySpid(spid);
		if (sp == null) {
			throw new ResourceNotFoundException("Service Provider does not exists.");
		}
		return sp.getReview();
	}

	@Override
	public List<Reviews> findAllReviews() {

		return reviewdao.findAll();
	}

}
