import {
  Code2,
  Database,
  Layout,
  Server,
  Cloud,
  Terminal,
  Shield,
  Activity,
  Cpu,
  BrainCircuit,
  MessageSquare,
  Users
} from 'lucide-react';

import acmMicroservicesMockup from '../assets/acm-microservices-mockup.png';

export const portfolioData = {
  personalInfo: {
    name: "Võ Sĩ Trí Thông",
    role: "Java Backend Developer",
    location: "Ho Chi Minh City",
    email: "vosithongtri@gmail.com",
    github: "https://github.com/TriThongVoSi",
    linkedin: "https://www.linkedin.com/in/võ-sĩ-trí-thông-615a86410/",
    summary: "I build robust, scalable backend systems with a focus on product value. Specialized in Java, Spring Boot, Microservices, and AI Integrations.",
  },
  skills: {
    languages: ["Java", "SQL", "JavaScript", "HTML/CSS"],
    frameworks: ["Spring Boot", "Hibernate", "Spring Security", "React"],
    infrastructure: ["PostgreSQL", "RabbitMQ", "Docker", "Linux"],
    devops: ["GitHub Actions", "AWS", "CI/CD"],
    concepts: ["OOP", "REST API", "Microservices", "JWT Auth", "RAG", "AI Integration"]
  },
  caseStudies: [
    {
      id: "agreli-microservice",
      title: "Project AgReli Microservice",
      type: "product",
      description: "Migrated a 12-service agriculture microservices platform (farm, season, inventory, etc.) from a Modular Monolith. Implemented end-to-end traceability, CI/CD pipelines, and AI-assisted support.",
      role: "Back-end Engineer & System Designer",
      features: [
        "End-to-end product traceability using DFS/BFS graph traversal",
        "AI-assisted support chatbot & sustainability scoring (Spring AI, Vertex AI, Chroma)",
        "Strict Docker Compose orchestration with healthcheck race condition resolution",
        "Resilient microservices communication via Feign with fallbackFactory pattern",
        "Automated Pre-Harvest Interval (PHI) compliance countdowns"
      ],
      techStack: ["Java 23", "Spring Boot 3.5", "RabbitMQ", "Docker", "MySQL", "Spring AI"],
      link: "https://github.com/elnino282/VietFuture2026",
      images: [acmMicroservicesMockup]
    },
    {
      id: "multi-agent-req-elicitation",
      title: "Knowledge-Grounded Multi-Agent Requirement Elicitation",
      type: "academic",
      description: "A research position paper (Under Review at KMIS) proposing a multi-agent AI framework to facilitate software requirement elicitation, mitigating missing assumptions and conflicting quality concerns.",
      agents: [
        {
          name: "Orchestrator Agent",
          description: "Selectively routes quality-sensitive conflicts and ambiguous requirements to specialized Analyst Agents.",
          icon: BrainCircuit,
          color: "text-purple-500"
        },
        {
          name: "Analyst Agents",
          description: "Specialized expert agents that resolve system design conflicts and ensure quality attribute constraints are met.",
          icon: Users,
          color: "text-blue-500"
        },
        {
          name: "RAG Grounding",
          description: "Leverages Retrieval-Augmented Generation to ground multi-agent discussions in factual evidence.",
          icon: Database,
          color: "text-emerald-500"
        }
      ]
    }
  ],
  otherProjects: [
    {
      name: "Agency Management System",
      link: "https://github.com/TriThongVoSi/AgencyManagementSystem-Website"
    },
    {
      name: "VietGlobe MobileApp",
      link: "https://github.com/TriThongVoSi/SE114-VietGlobe-MobileApp"
    }
  ]
};
