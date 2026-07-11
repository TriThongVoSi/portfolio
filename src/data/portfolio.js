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

import weatherMockup from '../assets/weather-mockup.png';
import acmMockup from '../assets/acm-mockup.png';
import emrMockup from '../assets/emr-mockup.png';
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
      id: "searching-weather",
      title: "WeCliFor — Weather Website",
      type: "product",
      description: "A modern full-stack web application for real-time weather forecasting. Built with a separated client-server architecture, it features PWA support, interactive hourly temperature charts, and an intelligent push notification system via Firebase.",
      role: "Fullstack Developer",
      features: [
        "Real-time search with Google Places API autocomplete",
        "Interactive dashboard with hourly temperature charts",
        "Custom weather alerts & push notifications via Firebase",
        "Responsive PWA design with multi-language support"
      ],
      techStack: ["React", "Node.js", "Firebase", "PWA", "Google Places API"],
      link: "https://github.com/elnino282/searching_weather",
      images: [weatherMockup]
    },
    {
      id: "smart-agriculture",
      title: "Smart Agriculture Platform",
      type: "product",
      description: "A comprehensive monolithic application focusing on crop management, a marketplace for inventory, buyer order flow, and an integrated AI assistant for farm advisory.",
      role: "Fullstack / Backend Developer",
      features: [
        "Crop & season tracking",
        "Marketplace inventory management",
        "Buyer order flows with mock payment",
        "AI Assistant for farm advisory"
      ],
      techStack: ["Java 23", "Spring Boot 3", "PostgreSQL", "Docker", "OpenAI API"],
      link: "https://github.com/TriThongVoSi/SE122-Code-MicroserviceReady-Test",
      images: [acmMockup]
    },
    {
      id: "emr-system",
      title: "EMR Backend System",
      type: "product",
      description: "A solid backend foundation for an Electronic Medical Record system with robust OOP domain design, JWT authentication, and secure data access.",
      role: "Backend Developer",
      features: [
        "OOP Domain Design",
        "Spring Security + JWT Auth",
        "PostgreSQL Schema Design"
      ],
      techStack: ["Java 23", "Spring Boot 3", "PostgreSQL", "Spring Security"],
      link: "https://github.com/TriThongVoSi/SE330-ElectronicMedicalRecord",
      images: [emrMockup]
    },
    {
      id: "agriculture-microservices",
      title: "Smart Agriculture Microservices",
      type: "product",
      description: "A microservices architecture evolution of the agriculture platform, featuring an API Gateway, RabbitMQ event flow, and a notification pipeline.",
      role: "Backend Architect",
      features: [
        "API Gateway implementation",
        "Separated domain services",
        "RabbitMQ event-driven communication"
      ],
      techStack: ["Java 23", "Spring Cloud", "RabbitMQ", "Docker Compose", "MySQL"],
      link: "https://github.com/elnino282/VietFuture2026",
      images: [acmMicroservicesMockup]
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
