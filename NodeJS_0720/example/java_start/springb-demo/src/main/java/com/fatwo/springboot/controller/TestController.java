package com.fatwo.springboot.controller;

import java.util.concurrent.atomic.AtomicInteger;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {
	
	int count = 0;

	// 线程安全写法
	// private AtomicInteger count = new AtomicInteger(0);

	@RequestMapping("/test")
	public String show(){

		// 线程不安全写法
		System.out.println("hello world: " + String.valueOf(count++));

		// 线程安全写法
		// System.out.println("hello world: " + count.getAndAdd(1));

		// 加锁写法
		// synchronized(this) {
		// 	System.out.println("hello world: " + String.valueOf(count++));
		// }
		
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}

		return "Hello World";

	}
}