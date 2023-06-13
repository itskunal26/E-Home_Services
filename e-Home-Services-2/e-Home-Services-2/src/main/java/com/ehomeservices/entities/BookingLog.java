package com.ehomeservices.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "order_log")
public class BookingLog {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int orderid;

	private String useremail;
	private String spemail;

	public BookingLog() {

	}

	public BookingLog(int orderid, String useremail, String spemail) {
		super();
		this.orderid = orderid;
		this.useremail = useremail;
		this.spemail = spemail;
	}

	public int getOrderid() {
		return orderid;
	}

	public void setOrderid(int orderid) {
		this.orderid = orderid;
	}

	public String getUseremail() {
		return useremail;
	}

	public void setUseremail(String useremail) {
		this.useremail = useremail;
	}

	public String getSpemail() {
		return spemail;
	}

	public void setSpemail(String spemail) {
		this.spemail = spemail;
	}

	@Override
	public String toString() {
		return "BookingLog [orderid=" + orderid + ", useremail=" + useremail + ", spemail=" + spemail + "]";
	}


}
