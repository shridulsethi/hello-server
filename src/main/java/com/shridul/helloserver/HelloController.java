package com.shridul.helloserver;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Value;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
@CrossOrigin(
        origins = "http://localhost:3000",
        allowCredentials = "true"
)
@RestController
public class HelloController {
    private static final Logger log = LoggerFactory.getLogger(HelloController.class);

    @GetMapping("/hello")
    public String hello() {
        log.info("GET /hello called");
        return "Hello from Spring Boot server 🚀";
    }
    private int counter = 0;
    @GetMapping("/counter")
    public int counter() {
        counter++;
        log.info("Counter incremented to {}", counter);
        return counter;
    }

    @PostMapping("/echo")
    public String echo(@RequestBody String body) {
        log.info("POST /echo with body {}", body);
        return "Received: " + body;
    }

    @GetMapping("/health")
    public String health() {
        return "OK";
    }
    @GetMapping("/time")
    public String time() {
        return java.time.LocalDateTime.now().toString();
    }

    @Value("${APP_NAME:HelloServer}")
    private String appName;
    @GetMapping("/app")
    public String app() {
        return "App name is " + appName;
    }


}
