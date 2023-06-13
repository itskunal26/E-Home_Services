package com.ehomeservices.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.ehomeservices.entities.ServiceProvider;

public interface ServiceProviderDao extends JpaRepository<ServiceProvider, Integer> {

	List<ServiceProvider> findAll();

	ServiceProvider findBySpid(int id);

	ServiceProvider findByContactnumber(String mobile);

	ServiceProvider findByEmail(String email);

	@Query("select s from ServiceProvider s where s.service_type = :service and s.ap_status = 'Approved'")
	List<ServiceProvider> findByServiceType(String service);

	@Query("select s from ServiceProvider s where s.ap_status = 'Approved'")
	List<ServiceProvider> findAuthorisedServiceProvider();

	@Query("select s from ServiceProvider s where s.ap_status = 'pending'")
	List<ServiceProvider> findUnauthorisedServiceProvider();
}
