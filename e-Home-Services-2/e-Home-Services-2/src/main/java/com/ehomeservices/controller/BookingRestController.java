package com.ehomeservices.controller;

import java.util.ArrayList;
import java.util.List;

import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ehomeservices.daos.BookingDao;
import com.ehomeservices.daos.ServiceProviderDao;
import com.ehomeservices.entities.BookingLog;
import com.ehomeservices.entities.ServiceProvider;
import com.ehomeservices.entities.User;
import com.ehomeservices.model.Response;
import com.ehomeservices.service.BookingService;
import com.ehomeservices.service.ServiceProviderService;
import com.ehomeservices.service.UserService;

@CrossOrigin
@RestController
@RequestMapping(value = "/booking")
public class BookingRestController {

	@Autowired
	private BookingService bookingService;

	@Autowired
	private BookingDao bdao;

	@Autowired
	private ServiceProviderService providerService;

	@Autowired
	private UserService userService;

	@PostMapping("/book")
	public ResponseEntity<?> bookService(BookingLog log) {

		System.out.println(log);
		try {
			BookingLog blog = bookingService.BookService(log);
			return Response.success(blog);
		} catch (Exception e) {
			return Response.error(e.getMessage());
		}
	}

	@GetMapping("/getbookingbymail/{spemail}")
	public ResponseEntity<?> getBookingBySPEmail(@PathVariable String spemail) {
		try {
			List<BookingLog> blog = bookingService.getBookingBySPEmail(spemail);
			List<User> users = new ArrayList<>();

			for (BookingLog booking : blog) {
				users.add(userService.findByEmail(booking.getUseremail()));
			}
			return Response.success(users);
		} catch (Exception e) {
			return Response.error(e.getMessage());
		}
	}

	@DeleteMapping("/deletebookingbymail")
	public ResponseEntity<?> deleteBookingByuserEmail(@PathParam(value = "useremail") String useremail,@PathParam(value = "spemail") String spemail) {
		try {
		
			bookingService.deleteBookingByUseremail(useremail,spemail);
			return Response.success("Booking deleted sucessfully");
		} catch (Exception e) {
			return Response.error(e.getMessage());
		}

	}

	@GetMapping("/history/{useremail}")
	public ResponseEntity<?> bookingHistory(@PathVariable String useremail) {

		try {

			List<BookingLog> log = null;
			List<ServiceProvider> splist = new ArrayList<>();

			log = bdao.findBookingLogByUseremail(useremail);
			for (BookingLog bl : log) {
				splist.add(providerService.findByEmail(bl.getSpemail()));
			}

			return Response.success(splist);
		} catch (Exception e) {
			return Response.error(e.getMessage());
		}
	}

}
