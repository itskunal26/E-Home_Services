package com.ehomeservices.exception;

public class ResourceNotFoundException extends Exception {

	public ResourceNotFoundException(String errorMessage) {
		super(errorMessage);
	}
}
