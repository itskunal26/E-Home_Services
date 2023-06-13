package com.ehomeservices.service;

import java.util.List;

import com.ehomeservices.entities.BookingLog;
import com.ehomeservices.exception.ResourceNotFoundException;

public interface BookingService {

	List<BookingLog> findBookingLogByUseremail(String uemail) throws ResourceNotFoundException;

	List<BookingLog> findBookingLogBySpemail(String semail) throws ResourceNotFoundException;
	
	BookingLog BookService(BookingLog log) throws ResourceNotFoundException;

	List<BookingLog> getBookingBySPEmail(String spEmail);

	void deleteBookingByUseremail(String useremail, String spemail);
	
	
}
