# Vo Si Tri Thong
## Back-end Engineer Fresher

**Contact Information**
- **Phone:** +84-779-670-018
- **Email:** vosithongtri@gmail.com
- **Location:** Thu Duc, HCM
- **Links:** GitHub, LinkedIn, Portfolio

---

## Professional Summary
4th-year Software Engineering student with hands-on backend experience building and operating a 12-service Spring Boot microservices platform in production-like conditions (Docker Compose, MySQL, RabbitMQ, Redis, observability stack). Comfortable across the stack - from relational schema design and inter-service communication to CI/CD and root-cause debugging - and co-author of an accepted research position paper on multi-agent AI systems. Looking to grow into a full-time Backend Engineer role.

---

## Technical Skills
- **Programming Languages:** Java (Proficient), TypeScript, Python, SQL
- **Back-end:** Spring Boot 3, Spring Security (OAuth2 Resource Server / JWT/ RBAC), Spring Data JPA / Hibernate, Spring Cloud OpenFeign, RESTful API design, Microservices & Modular Monolith architecture, Ports & Adapters, Domain Events
- **Data Structures & Algorithms:** Tree/Graph traversal (DFS, BFS), applied to multi-layer traceability logic
- **Database:** MySQL 8.0, relational schema design & query optimization, Flyway migrations, Firebase Firestore
- **Infrastructure & DevOps:** Docker & Docker Compose (multi-service orchestration), Maven, Git/GitHub, GitHub Actions (CI pipeline design), RabbitMQ, Redis, MinIO, basic observability (Prometheus/Grafana/OpenTelemetry)
- **Front-end:** React 18, TanStack Query, TailwindCSS, i18next
- **Testing:** ArchUnit (Architecture Testing), Postman, Automation Scripting (Python)
- **AI Tooling:** Google GenAI / Spring AI (RAG with vector store), Prompt Engineering, NotebookLM, MCP

---

## Experience & Projects

### Project AgReli Microservice | Back-end Engineer & System Designer
- Contributed to migrating the system from a Modular Monolith (Java 23, Spring Boot 3.5) to a 12-service microservices architecture (farm, season, crop-catalog, inventory, marketplace, delivery, finance, incident, sustainability, admin-reporting, AI, identity) behind an API Gateway, communicating via Feign and RabbitMQ.
- Designed relational schema components and wrote Flyway-managed migrations; implemented Tree/Graph (DFS/BFS) traversal logic to power end-to-end product traceability from farm plot to warehouse lot to marketplace listing.
- Diagnosed and fixed a cluster of HTTP 500 errors traced to a missing `@RestControllerAdvice` handler and a broken Feign fallback configuration, resolving it by switching to the `fallbackFactory` pattern and adding exception-specific handlers.
- Root-caused a Docker Compose startup race condition (10 of 11 services missing healthcheck blocks) causing HTTP 503s across the stack; fixed by adding `wget --spider` healthchecks with proper `depends_on: condition: service_healthy` wiring.
- Designed and set up the project's GitHub Actions CI gate (typecheck, lint, test, build) for the frontend, enforcing quality checks on every push.
- Built an AI-assisted buyer support chatbot and a sustainability/emission-scoring engine using Spring AI with a Vertex AI Gemini + Chroma vector-store RAG pipeline.
- Implemented a "Hard Blocks" compliance feature automating Pre-Harvest Interval (PHI) countdowns to proactively prevent biosecurity violations, plus bilingual (VN/EN) i18n and dark/light theming across 4 user portals (Farmer, Buyer, Admin, Employee).
- Wrote Python scripts to automate bulk data import and large-scale code refactoring across services.

### A Position Paper on Knowledge-Grounded Multi-Agent Requirement Elicitation
*Under Review at KMIS*
- Co-researched and proposed a knowledge-grounded multi-agent framework to facilitate software requirement elicitation, mitigating missing assumptions and conflicting quality concerns in system design.
- Designed the system orchestration to selectively route quality-sensitive conflicts to specialized Analyst Agents and leveraged Retrieval-Augmented Generation (RAG) for evidence grounding.
- Evaluated the proposed architecture through a controlled comparative survey (N=37) and a supplementary expert review with 3 professional Business Analysts. The results demonstrated significant improvements in conflict visibility, traceability, and overall decision-support value.

---

## Education
**University of Information Technology (UIT) – HCMC**
*Bachelor of Software Engineering* | 09/2023 - Expected: 03/2027
- **GPA:** 8.03/10
