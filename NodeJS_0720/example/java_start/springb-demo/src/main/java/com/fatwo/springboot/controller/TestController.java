package com.fatwo.springboot.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {
	
	int count = 0;

	@RequestMapping("/test")
	public String show(){
		System.out.println("hello world: " + String.valueOf(count++));

		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}

		return "Hello World";

	}
}