package com.ehomeservices.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ehomeservices.daos.BookingDao;
import com.ehomeservices.entities.BookingLog;
import com.ehomeservices.exception.ResourceNotFoundException;

@Service
@Transactional
public class BookingServiceImpl implements BookingService {

	@Autowired
	private BookingDao bdao;

	@Autowired
	private UserService userService;

	@Autowired
	private ServiceProviderService providerService;

	@Override
	public List<BookingLog> findBookingLogByUseremail(String uemail) throws ResourceNotFoundException {
		List<BookingLog> blog = bdao.findBookingLogByUseremail(uemail);
		if (blog.isEmpty())
			throw new ResourceNotFoundException("No Bookings");
		return blog;
	}

	@Override
	public List<BookingLog> findBookingLogBySpemail(String semail) throws ResourceNotFoundException {
		List<BookingLog> blog = bdao.findBookingLogBySpemail(semail);
		if (blog.isEmpty())
			throw new ResourceNotFoundException("No Bookings");
		return blog;
	}

	@Override
	public BookingLog BookService(BookingLog log) throws ResourceNotFoundException {
		if (log != null) {

			List<BookingLog> blog = bdao.findBookingLogBySpemail(log.getSpemail());

			for (BookingLog bookingLog : blog) {
				if (bookingLog.getUseremail().equals(log.getUseremail())
						&& bookingLog.getSpemail().equals(log.getSpemail())) {
					throw new ResourceNotFoundException("Service already booked");
				}
			}

		}
		BookingLog blogg = bdao.save(log);
		return blogg;

	}

	@Override
	public List<BookingLog> getBookingBySPEmail(String spEmail) {

		return bdao.findBookingLogBySpemail(spEmail);
	}

	@Override
	public void deleteBookingByUseremail(String useremail, String spemail) {

		List<BookingLog> logs = bdao.findBookingLogByUseremail(useremail);

		for (BookingLog bookingLog : logs) {
			if (bookingLog.getSpemail().equals(spemail) && bookingLog.getUseremail().equals(useremail)) {
				int id = bookingLog.getOrderid();
				bdao.deleteById(id);
			}
		}

	}

}
