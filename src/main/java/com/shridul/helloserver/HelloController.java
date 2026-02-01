package com.shridul.helloserver;
@CrossOrigin(origins = "http://localhost:3000")

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {


    @GetMapping("/hello")
    public String hello() {
        return "Hello from Spring Boot server 🚀";
    }
    @GetMapping("/health")
    public String health() {
        return "OK";
    }
    @GetMapping("/time")
    public String time() {
        return java.time.LocalDateTime.now().toString();
    }
    private int counter = 0;
    @GetMapping("/counter")
    public int counter() {
        counter++;
        return counter;
    }

    @Value("${APP_NAME:HelloServer}")
    private String appName;
    @GetMapping("/app")
    public String app() {
        return "App name is " + appName;
    }


}
