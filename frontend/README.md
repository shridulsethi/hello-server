Hello Server Admin Platform

A full-stack admin and observability platform built with Spring Boot and React, designed to monitor application health, uptime, runtime metrics, and system metadata through a modern, modular dashboard.

This project demonstrates production-level frontend architecture, backend observability patterns, and real-world internal tooling design used in modern engineering teams.

Overview

Hello Server Admin Platform is an internal dashboard that provides real-time visibility into a backend service.
It exposes clean REST APIs from a Spring Boot backend and visualizes them using a React-based admin UI.

The system is intentionally designed to be:

API-first

UI-agnostic

Modular

Scalable

Deployment-ready

Key Capabilities
Backend

Health monitoring

Application uptime tracking

Runtime system metrics

Version and application metadata

Secure API access

JSON-only responses (no server-side rendering)

Frontend

Admin dashboard with tab-based navigation

Live metrics visualization using charts

Persistent global state via React Context

Light and Dark theme support

Responsive, accessible layout

Clean separation of concerns

Technology Stack
Backend

Java 17

Spring Boot

Spring Security

RESTful APIs

Maven

Frontend

React

React Router

Context API

Recharts

CSS Variables for theming

Tooling

Node.js

npm

Git

Docker-ready architecture

Architecture Highlights

Backend is strictly API-driven and UI-agnostic

Frontend consumes APIs and handles all presentation logic

Global state (theme, charts) is centralized using Context

Charts persist across navigation and do not reset on rerender

Theming uses CSS variables for scalability and accessibility

This mirrors how real internal platforms are built in production.

Project Structure
src/
├── App.js
├── index.js
├── index.css
│
├── components/
│   ├── Navigation.js
│   ├── DataTable.js
│
├── pages/
│   ├── Home.js
│   ├── Health.js
│   ├── AppInfo.js
│   ├── Version.js
│   ├── Metrics.js
│   └── Uptime.js
│
├── context/
│   ├── ThemeContext.js
│   └── ChartContext.js
│
└── utils/
    ├── api.js
    └── format.js

Backend API Endpoints
Endpoint	Description
/health	Application health status
/uptime	Backend uptime
/metrics	Runtime system metrics
/version	Application version information
/app	Application metadata

All endpoints return JSON and are consumed by the React dashboard.

Running the Project Locally
Backend
./mvnw spring-boot:run


Backend runs at:

http://localhost:8080

Frontend
cd hello-ui
npm install
npm start


Frontend runs at:

http://localhost:3000

Theming

Light and Dark modes supported

Implemented using CSS variables

Theme preference persisted locally

Applies consistently across all pages and charts

Metrics & Charts

Live memory usage chart

Persistent data across navigation

Theme-aware tooltips and axes

Context-driven state ownership

Charts are intentionally decoupled from page lifecycle to avoid resets.

Design Principles

API-first design

No backend HTML rendering

Modular frontend architecture

Minimal global state

Predictable theming system

Production-friendly file organization

Deployment Readiness

The project is structured to be easily deployed using:

Docker

Cloud platforms (Render, AWS, GCP, etc.)

CI/CD pipelines

Environment-specific configuration can be added without architectural changes.

Roadmap

Planned or easily extensible features:

JWT-based authentication

Role-based access control (Admin / Viewer)

CPU and error-rate metrics

Alerting and threshold banners

Audit logs

CSV export of metrics

WebSocket-based real-time updates

Multi-environment support (Dev / Staging / Prod)

Why This Project

This project reflects real engineering practices, not tutorial shortcuts.

It demonstrates:

Full-stack system design

Frontend architecture discipline

Observability fundamentals

UI scalability

Production mindset

It is suitable for:

Portfolio showcase

Technical interviews

Internal tooling references

SaaS starter templates

Author

Shridul Sethi
Senior Software Developer