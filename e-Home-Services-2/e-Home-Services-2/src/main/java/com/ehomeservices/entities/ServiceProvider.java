package com.ehomeservices.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

@Entity
@Table(name = "service_provider")
public class ServiceProvider {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer spid;
	private String firstname;
	private String lastname;
	private String password;
	private String contactnumber;
	private String email;
	private String service_type;
	private double service_cost;
	private String ap_status = "Pending";

	@JsonProperty(access = Access.WRITE_ONLY)
	@OneToMany(cascade = CascadeType.ALL, mappedBy = "sp")
	private List<Reviews> review;

	public ServiceProvider() {

	}

	public ServiceProvider(Integer spid, String firstname, String lastname, String password, String contactnumber,
			String email, String service_type, double service_cost, String ap_status, List<Reviews> review) {
		super();
		this.spid = spid;
		this.firstname = firstname;
		this.lastname = lastname;
		this.password = password;
		this.contactnumber = contactnumber;
		this.email = email;
		this.service_type = service_type;
		this.service_cost = service_cost;
		this.ap_status = ap_status;
		this.review = review;
	}

	public Integer getSpid() {
		return spid;
	}

	public void setSpid(Integer spid) {
		this.spid = spid;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getContactnumber() {
		return contactnumber;
	}

	public void setContactnumber(String contactnumber) {
		this.contactnumber = contactnumber;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getService_type() {
		return service_type;
	}

	public void setService_type(String service_type) {
		this.service_type = service_type;
	}

	public double getService_cost() {
		return service_cost;
	}

	public void setService_cost(double service_cost) {
		this.service_cost = service_cost;
	}

	public String getAp_status() {
		return ap_status;
	}

	public void setAp_status(String ap_status) {
		this.ap_status = ap_status;
	}

	@Override
	public String toString() {
		return "ServiceProvider [spid=" + spid + ", firstname=" + firstname + ", lastname=" + lastname + ", password="
				+ password + ", contactnumber=" + contactnumber + ", email=" + email + ", service_type=" + service_type
				+ ", service_cost=" + service_cost + ", ap_status=" + ap_status + "]";
	}

	public List<Reviews> getReview() {
		return review;
	}

	public void setReview(List<Reviews> review) {
		this.review = review;
	}

	public void addReviewToServiceProvider(Reviews review) {
		if (getReview() == null) {
			this.review = new ArrayList<>();
		}
		getReview().add(review);
		review.setSp(this);
	}
}
