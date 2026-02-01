package com.shridul.helloserver;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Value;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import java.time.LocalDateTime;
import java.util.Map;
@CrossOrigin(
        origins = "http://localhost:3000",
        allowCredentials = "true"
)
@RestController
public class HelloController {
    private static final Logger log = LoggerFactory.getLogger(HelloController.class);

    @GetMapping("/hello")
    public Map<String, Object> hello() {
        log.info("GET /hello called");

        return Map.of(
                "message", "Hello from Spring Boot 🚀",
                "status", "success",
                "timestamp", LocalDateTime.now().toString()
        );
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
    public Map<String, String> health() {
        return Map.of(
                "status", "UP",
                "service", "hello-server"
        );
    }

    @GetMapping("/time")
    public String time() {
        return java.time.LocalDateTime.now().toString();
    }

    @Value("${APP_NAME:HelloServer}")
    private String appName;
    @GetMapping("/app")
    public Map<String, String> app() {
        return Map.of(
                "name", appName,
                "environment", "local",
                "version", "1.0.0"
        );
    }
    private final long startTime = System.currentTimeMillis();
    @GetMapping("/uptime")
    public Map<String, Object> uptime() {
        long uptimeSeconds = (System.currentTimeMillis() - startTime) / 1000;

        return Map.of(
                "uptimeSeconds", uptimeSeconds,
                "uptimeHuman", uptimeSeconds + " seconds"
        );
    }
    @Value("${app.version}")
    private String version;

    @Value("${app.commit}")
    private String commit;

    @GetMapping("/version")
    public Map<String, String> version() {
        return Map.of(
                "version", version,
                "commit", commit
        );
    }
    @GetMapping("/metrics")
    public Map<String, Object> metrics() {
        return Map.of(
                "javaVersion", System.getProperty("java.version"),
                "processors", Runtime.getRuntime().availableProcessors(),
                "freeMemoryMB", Runtime.getRuntime().freeMemory() / (1024 * 1024),
                "totalMemoryMB", Runtime.getRuntime().totalMemory() / (1024 * 1024)
        );
    }





}
