package com.ehomeservices.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ehomeservices.entities.BookingLog;

public interface BookingDao extends JpaRepository<BookingLog, Integer> {

	List<BookingLog> findBookingLogByUseremail(String uemail);

	List<BookingLog> findBookingLogBySpemail(String semail);
	
	void deleteByUseremail(String useremail);

}
