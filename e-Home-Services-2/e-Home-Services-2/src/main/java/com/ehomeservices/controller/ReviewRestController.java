package com.ehomeservices.controller;

import java.util.List;

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
import org.springframework.web.bind.annotation.RestController;

import com.ehomeservices.entities.Reviews;
import com.ehomeservices.model.Response;
import com.ehomeservices.service.ReviewService;

@CrossOrigin
@RestController
@RequestMapping(value = "/review")
public class ReviewRestController {

	@Autowired
	private ReviewService reviewservice;

	// user feature -> adding review for service provider
	@PostMapping("/addreview/{spid}")
	public ResponseEntity<?> addReviewToSp(@PathVariable int spid, Reviews review) {
		try {
			Reviews rew = reviewservice.addReviewToServiceProvider(review, spid);
			return Response.success(rew);
		} catch (Exception e) {
			return Response.error(e.getMessage());
		}
	}

	// user feature -> edit review for service provider
	@PutMapping("/editreview/{id}")
	public ResponseEntity<?> editReview( Reviews review, @PathVariable int id) {
		try {
			Reviews rew = reviewservice.editReview(review, id);
			return Response.success(rew);
		} catch (Exception e) {
			return Response.error(e.getMessage());
		}
	}

	// find review by id
	@GetMapping("/getreview/{id}")
	public ResponseEntity<?> findById(@PathVariable int id) {
		try {
			Reviews rew = reviewservice.findReviewById(id);
			return Response.success(rew);
		} catch (Exception e) {
			return Response.error(e.getMessage());
		}
	}

	// find review for service provider
	@GetMapping("/getreviewforsp/{spid}")
	public ResponseEntity<?> findReviewForSp(@PathVariable int spid) {
		try {
			List<Reviews> sp = reviewservice.findAllReviewsForServiceProvider(spid);
			return Response.success(sp);
		} catch (Exception e) {
			return Response.error(e.getMessage());
		}
	}

	// find all reviews
	@GetMapping("/getall")
	public ResponseEntity<?> findAllReviews() {
		try {
			List<Reviews> sp = reviewservice.findAllReviews();
			return Response.success(sp);
		} catch (Exception e) {
			return Response.error(e.getMessage());
		}
	}

	// delete review
	@DeleteMapping("/deletereview/{id}")
	public ResponseEntity<?> deleteReview(@PathVariable int id) {
		try {
			reviewservice.deleteReviewById(id);
			return Response.success("Review deleted succefully.");
		} catch (Exception e) {
			return Response.error(e.getMessage());
		}
	}

}
