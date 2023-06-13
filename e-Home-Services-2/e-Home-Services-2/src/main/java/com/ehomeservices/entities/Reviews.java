package com.ehomeservices.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
public class Reviews {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	private String title;

	@Lob
	@Column(length = 10000)
	private String message;

	@DateTimeFormat(pattern = "yyyy-MM-dd")
	@Temporal(TemporalType.DATE)
	private Date addedat;
	
	@JsonBackReference(value = "sp")
	@ManyToOne
	private ServiceProvider sp;
	
	public Reviews() {
		
	}

	public Reviews(int id, String title, String message,  Date addedat, ServiceProvider sp) {
		super();
		this.id = id;
		this.title = title;
		this.message = message;
		this.addedat = addedat;
		this.sp = sp;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public Date getAddedat() {
		return addedat;
	}

	public void setAddedat(Date addedat) {
		this.addedat = addedat;
	}

	public ServiceProvider getSp() {
		return sp;
	}

	public void setSp(ServiceProvider sp) {
		this.sp = sp;
	}
	
	

}
