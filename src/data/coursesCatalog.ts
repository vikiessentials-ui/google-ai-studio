import type { Course, CourseModule, CourseLesson } from '@/types';
import { generateQuestionSet } from './questionBanks';

export const COURSE_CATEGORIES = [
  "Artificial Intelligence",
  "Machine Learning",
  "Generative AI",
  "Cyber Security",
  "Ethical Hacking",
  "Digital Forensics",
  "Cloud Security",
  "Networking",
  "Python",
  "JavaScript",
  "TypeScript",
  "Java",
  "C",
  "C++",
  "C#",
  "Go",
  "Rust",
  "PHP",
  "SQL",
  "Data Science",
  "Data Analytics",
  "Data Engineering",
  "Power BI",
  "Microsoft Fabric",
  "UI/UX",
  "Figma",
  "Graphic Design",
  "Front-End Development",
  "React",
  "Next.js",
  "Angular",
  "Vue",
  "Back-End Development",
  "Node.js",
  "Django",
  "Flask",
  "Full Stack Development",
  "Software Engineering",
  "System Design",
  "DevOps",
  "Docker",
  "Kubernetes",
  "Git",
  "GitHub",
  "CI/CD",
  "AWS",
  "Microsoft Azure",
  "Google Cloud",
  "Linux",
  "Databases",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Testing",
  "QA",
  "Mobile Development",
  "Android",
  "Flutter",
  "Game Development",
  "Blockchain",
  "Web3",
  "IT Support",
  "Operating Systems",
  "Computer Architecture"
] as const;

export type CourseSeedSpec = {
  id: string;
  title: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  description: string;
  thumbnail: string;
  instructor?: string;
  youtubeChannel: string;
  playlistId: string;
  playlistUrl: string;
  playlistTitle?: string;
  playlistStatus: 'verified' | 'pending-verification';
  certificateEligibility: boolean;
  tags: string[];
  moduleTitles: {
    title: string;
    lessons: string[];
  }[];
};

export const RAW_COURSE_SPECS: CourseSeedSpec[] = [
  {
    "id": "lwf-001",
    "title": "Artificial Intelligence Essentials & Core Architecture",
    "category": "Artificial Intelligence",
    "level": "Beginner",
    "description": "Comprehensive foundations in Artificial Intelligence. Master key terminology, industry best practices, and hands-on workflows designed for real-world production.",
    "thumbnail": "https://images.unsplash.com/photo-1677442136019-21780efad99a?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Artificial Intelligence Curriculum Playlist",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Artificial Intelligence",
      "Foundations",
      "Engineering",
      "Best Practices"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Foundations of Artificial Intelligence",
        "lessons": [
          "1. Core Concepts & Paradigm Overview",
          "2. Architecture & Environment Setup",
          "3. Fundamental Syntax & Building Blocks"
        ]
      },
      {
        "title": "Module 2: Applied Workflows in Artificial Intelligence",
        "lessons": [
          "1. Hands-on Implementation Patterns",
          "2. Debugging & Performance Considerations",
          "3. Testing & Production Readiness"
        ]
      }
    ]
  },
  {
    "id": "lwf-002",
    "title": "Advanced Artificial Intelligence & Enterprise Engineering",
    "category": "Artificial Intelligence",
    "level": "Advanced",
    "description": "Deep-dive into enterprise patterns, optimization, scaling, and architectural paradigms for senior engineers working with Artificial Intelligence.",
    "thumbnail": "https://images.unsplash.com/photo-1677442136019-21780efad99a?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Advanced Artificial Intelligence Enterprise Series",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Artificial Intelligence",
      "Advanced",
      "Architecture",
      "Enterprise",
      "Scale"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Advanced Paradigms in Artificial Intelligence",
        "lessons": [
          "1. High-Performance Design Patterns",
          "2. Asynchronous & Distributed Considerations",
          "3. Security Hardening & Edge Cases"
        ]
      },
      {
        "title": "Module 2: Enterprise Deployment & Reliability",
        "lessons": [
          "1. Automated CI/CD & Observability",
          "2. Scalability Bottlenecks & Benchmarking",
          "3. Capstone Architecture Evaluation"
        ]
      }
    ]
  },
  {
    "id": "lwf-003",
    "title": "Artificial Intelligence Real-World Projects & Case Studies",
    "category": "Artificial Intelligence",
    "level": "Intermediate",
    "description": "Build complete end-to-end applications and solve realistic engineering challenges utilizing modern Artificial Intelligence toolchains.",
    "thumbnail": "https://images.unsplash.com/photo-1677442136019-21780efad99a?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Industry Mentors",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Artificial Intelligence Real-World Case Studies",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Artificial Intelligence",
      "Projects",
      "Hands-on",
      "Case Studies"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Project Scaffolding & Domain Modeling",
        "lessons": [
          "1. Requirements Gathering & Schema Blueprint",
          "2. Core Logic & Service Integration",
          "3. State & Error Resiliency"
        ]
      },
      {
        "title": "Module 2: Deployment & Verification",
        "lessons": [
          "1. Integration Verification",
          "2. Performance Tuning & Caching",
          "3. Production Launch Checklist"
        ]
      }
    ]
  },
  {
    "id": "lwf-004",
    "title": "Machine Learning Essentials & Core Architecture",
    "category": "Machine Learning",
    "level": "Beginner",
    "description": "Comprehensive foundations in Machine Learning. Master key terminology, industry best practices, and hands-on workflows designed for real-world production.",
    "thumbnail": "https://images.unsplash.com/photo-1677442136019-21780efad99a?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Machine Learning Curriculum Playlist",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Machine Learning",
      "Foundations",
      "Engineering",
      "Best Practices"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Foundations of Machine Learning",
        "lessons": [
          "1. Core Concepts & Paradigm Overview",
          "2. Architecture & Environment Setup",
          "3. Fundamental Syntax & Building Blocks"
        ]
      },
      {
        "title": "Module 2: Applied Workflows in Machine Learning",
        "lessons": [
          "1. Hands-on Implementation Patterns",
          "2. Debugging & Performance Considerations",
          "3. Testing & Production Readiness"
        ]
      }
    ]
  },
  {
    "id": "lwf-005",
    "title": "Advanced Machine Learning & Enterprise Engineering",
    "category": "Machine Learning",
    "level": "Advanced",
    "description": "Deep-dive into enterprise patterns, optimization, scaling, and architectural paradigms for senior engineers working with Machine Learning.",
    "thumbnail": "https://images.unsplash.com/photo-1677442136019-21780efad99a?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Advanced Machine Learning Enterprise Series",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Machine Learning",
      "Advanced",
      "Architecture",
      "Enterprise",
      "Scale"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Advanced Paradigms in Machine Learning",
        "lessons": [
          "1. High-Performance Design Patterns",
          "2. Asynchronous & Distributed Considerations",
          "3. Security Hardening & Edge Cases"
        ]
      },
      {
        "title": "Module 2: Enterprise Deployment & Reliability",
        "lessons": [
          "1. Automated CI/CD & Observability",
          "2. Scalability Bottlenecks & Benchmarking",
          "3. Capstone Architecture Evaluation"
        ]
      }
    ]
  },
  {
    "id": "lwf-006",
    "title": "Machine Learning Real-World Projects & Case Studies",
    "category": "Machine Learning",
    "level": "Intermediate",
    "description": "Build complete end-to-end applications and solve realistic engineering challenges utilizing modern Machine Learning toolchains.",
    "thumbnail": "https://images.unsplash.com/photo-1677442136019-21780efad99a?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Industry Mentors",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Machine Learning Real-World Case Studies",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Machine Learning",
      "Projects",
      "Hands-on",
      "Case Studies"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Project Scaffolding & Domain Modeling",
        "lessons": [
          "1. Requirements Gathering & Schema Blueprint",
          "2. Core Logic & Service Integration",
          "3. State & Error Resiliency"
        ]
      },
      {
        "title": "Module 2: Deployment & Verification",
        "lessons": [
          "1. Integration Verification",
          "2. Performance Tuning & Caching",
          "3. Production Launch Checklist"
        ]
      }
    ]
  },
  {
    "id": "lwf-007",
    "title": "Generative AI Essentials & Core Architecture",
    "category": "Generative AI",
    "level": "Beginner",
    "description": "Comprehensive foundations in Generative AI. Master key terminology, industry best practices, and hands-on workflows designed for real-world production.",
    "thumbnail": "https://images.unsplash.com/photo-1677442136019-21780efad99a?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Generative AI Curriculum Playlist",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Generative AI",
      "Foundations",
      "Engineering",
      "Best Practices"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Foundations of Generative AI",
        "lessons": [
          "1. Core Concepts & Paradigm Overview",
          "2. Architecture & Environment Setup",
          "3. Fundamental Syntax & Building Blocks"
        ]
      },
      {
        "title": "Module 2: Applied Workflows in Generative AI",
        "lessons": [
          "1. Hands-on Implementation Patterns",
          "2. Debugging & Performance Considerations",
          "3. Testing & Production Readiness"
        ]
      }
    ]
  },
  {
    "id": "lwf-008",
    "title": "Advanced Generative AI & Enterprise Engineering",
    "category": "Generative AI",
    "level": "Advanced",
    "description": "Deep-dive into enterprise patterns, optimization, scaling, and architectural paradigms for senior engineers working with Generative AI.",
    "thumbnail": "https://images.unsplash.com/photo-1677442136019-21780efad99a?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Advanced Generative AI Enterprise Series",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Generative AI",
      "Advanced",
      "Architecture",
      "Enterprise",
      "Scale"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Advanced Paradigms in Generative AI",
        "lessons": [
          "1. High-Performance Design Patterns",
          "2. Asynchronous & Distributed Considerations",
          "3. Security Hardening & Edge Cases"
        ]
      },
      {
        "title": "Module 2: Enterprise Deployment & Reliability",
        "lessons": [
          "1. Automated CI/CD & Observability",
          "2. Scalability Bottlenecks & Benchmarking",
          "3. Capstone Architecture Evaluation"
        ]
      }
    ]
  },
  {
    "id": "lwf-009",
    "title": "Generative AI Real-World Projects & Case Studies",
    "category": "Generative AI",
    "level": "Intermediate",
    "description": "Build complete end-to-end applications and solve realistic engineering challenges utilizing modern Generative AI toolchains.",
    "thumbnail": "https://images.unsplash.com/photo-1677442136019-21780efad99a?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Industry Mentors",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Generative AI Real-World Case Studies",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Generative AI",
      "Projects",
      "Hands-on",
      "Case Studies"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Project Scaffolding & Domain Modeling",
        "lessons": [
          "1. Requirements Gathering & Schema Blueprint",
          "2. Core Logic & Service Integration",
          "3. State & Error Resiliency"
        ]
      },
      {
        "title": "Module 2: Deployment & Verification",
        "lessons": [
          "1. Integration Verification",
          "2. Performance Tuning & Caching",
          "3. Production Launch Checklist"
        ]
      }
    ]
  },
  {
    "id": "lwf-010",
    "title": "Cyber Security Essentials & Core Architecture",
    "category": "Cyber Security",
    "level": "Beginner",
    "description": "Comprehensive foundations in Cyber Security. Master key terminology, industry best practices, and hands-on workflows designed for real-world production.",
    "thumbnail": "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Cyber Security Curriculum Playlist",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Cyber Security",
      "Foundations",
      "Engineering",
      "Best Practices"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Foundations of Cyber Security",
        "lessons": [
          "1. Core Concepts & Paradigm Overview",
          "2. Architecture & Environment Setup",
          "3. Fundamental Syntax & Building Blocks"
        ]
      },
      {
        "title": "Module 2: Applied Workflows in Cyber Security",
        "lessons": [
          "1. Hands-on Implementation Patterns",
          "2. Debugging & Performance Considerations",
          "3. Testing & Production Readiness"
        ]
      }
    ]
  },
  {
    "id": "lwf-011",
    "title": "Advanced Cyber Security & Enterprise Engineering",
    "category": "Cyber Security",
    "level": "Advanced",
    "description": "Deep-dive into enterprise patterns, optimization, scaling, and architectural paradigms for senior engineers working with Cyber Security.",
    "thumbnail": "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Advanced Cyber Security Enterprise Series",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Cyber Security",
      "Advanced",
      "Architecture",
      "Enterprise",
      "Scale"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Advanced Paradigms in Cyber Security",
        "lessons": [
          "1. High-Performance Design Patterns",
          "2. Asynchronous & Distributed Considerations",
          "3. Security Hardening & Edge Cases"
        ]
      },
      {
        "title": "Module 2: Enterprise Deployment & Reliability",
        "lessons": [
          "1. Automated CI/CD & Observability",
          "2. Scalability Bottlenecks & Benchmarking",
          "3. Capstone Architecture Evaluation"
        ]
      }
    ]
  },
  {
    "id": "lwf-012",
    "title": "Cyber Security Real-World Projects & Case Studies",
    "category": "Cyber Security",
    "level": "Intermediate",
    "description": "Build complete end-to-end applications and solve realistic engineering challenges utilizing modern Cyber Security toolchains.",
    "thumbnail": "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Industry Mentors",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Cyber Security Real-World Case Studies",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Cyber Security",
      "Projects",
      "Hands-on",
      "Case Studies"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Project Scaffolding & Domain Modeling",
        "lessons": [
          "1. Requirements Gathering & Schema Blueprint",
          "2. Core Logic & Service Integration",
          "3. State & Error Resiliency"
        ]
      },
      {
        "title": "Module 2: Deployment & Verification",
        "lessons": [
          "1. Integration Verification",
          "2. Performance Tuning & Caching",
          "3. Production Launch Checklist"
        ]
      }
    ]
  },
  {
    "id": "lwf-013",
    "title": "Ethical Hacking Essentials & Core Architecture",
    "category": "Ethical Hacking",
    "level": "Beginner",
    "description": "Comprehensive foundations in Ethical Hacking. Master key terminology, industry best practices, and hands-on workflows designed for real-world production.",
    "thumbnail": "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Ethical Hacking Curriculum Playlist",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Ethical Hacking",
      "Foundations",
      "Engineering",
      "Best Practices"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Foundations of Ethical Hacking",
        "lessons": [
          "1. Core Concepts & Paradigm Overview",
          "2. Architecture & Environment Setup",
          "3. Fundamental Syntax & Building Blocks"
        ]
      },
      {
        "title": "Module 2: Applied Workflows in Ethical Hacking",
        "lessons": [
          "1. Hands-on Implementation Patterns",
          "2. Debugging & Performance Considerations",
          "3. Testing & Production Readiness"
        ]
      }
    ]
  },
  {
    "id": "lwf-014",
    "title": "Advanced Ethical Hacking & Enterprise Engineering",
    "category": "Ethical Hacking",
    "level": "Advanced",
    "description": "Deep-dive into enterprise patterns, optimization, scaling, and architectural paradigms for senior engineers working with Ethical Hacking.",
    "thumbnail": "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Advanced Ethical Hacking Enterprise Series",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Ethical Hacking",
      "Advanced",
      "Architecture",
      "Enterprise",
      "Scale"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Advanced Paradigms in Ethical Hacking",
        "lessons": [
          "1. High-Performance Design Patterns",
          "2. Asynchronous & Distributed Considerations",
          "3. Security Hardening & Edge Cases"
        ]
      },
      {
        "title": "Module 2: Enterprise Deployment & Reliability",
        "lessons": [
          "1. Automated CI/CD & Observability",
          "2. Scalability Bottlenecks & Benchmarking",
          "3. Capstone Architecture Evaluation"
        ]
      }
    ]
  },
  {
    "id": "lwf-015",
    "title": "Ethical Hacking Real-World Projects & Case Studies",
    "category": "Ethical Hacking",
    "level": "Intermediate",
    "description": "Build complete end-to-end applications and solve realistic engineering challenges utilizing modern Ethical Hacking toolchains.",
    "thumbnail": "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Industry Mentors",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Ethical Hacking Real-World Case Studies",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Ethical Hacking",
      "Projects",
      "Hands-on",
      "Case Studies"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Project Scaffolding & Domain Modeling",
        "lessons": [
          "1. Requirements Gathering & Schema Blueprint",
          "2. Core Logic & Service Integration",
          "3. State & Error Resiliency"
        ]
      },
      {
        "title": "Module 2: Deployment & Verification",
        "lessons": [
          "1. Integration Verification",
          "2. Performance Tuning & Caching",
          "3. Production Launch Checklist"
        ]
      }
    ]
  },
  {
    "id": "lwf-016",
    "title": "Digital Forensics Essentials & Core Architecture",
    "category": "Digital Forensics",
    "level": "Beginner",
    "description": "Comprehensive foundations in Digital Forensics. Master key terminology, industry best practices, and hands-on workflows designed for real-world production.",
    "thumbnail": "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Digital Forensics Curriculum Playlist",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Digital Forensics",
      "Foundations",
      "Engineering",
      "Best Practices"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Foundations of Digital Forensics",
        "lessons": [
          "1. Core Concepts & Paradigm Overview",
          "2. Architecture & Environment Setup",
          "3. Fundamental Syntax & Building Blocks"
        ]
      },
      {
        "title": "Module 2: Applied Workflows in Digital Forensics",
        "lessons": [
          "1. Hands-on Implementation Patterns",
          "2. Debugging & Performance Considerations",
          "3. Testing & Production Readiness"
        ]
      }
    ]
  },
  {
    "id": "lwf-017",
    "title": "Advanced Digital Forensics & Enterprise Engineering",
    "category": "Digital Forensics",
    "level": "Advanced",
    "description": "Deep-dive into enterprise patterns, optimization, scaling, and architectural paradigms for senior engineers working with Digital Forensics.",
    "thumbnail": "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Advanced Digital Forensics Enterprise Series",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Digital Forensics",
      "Advanced",
      "Architecture",
      "Enterprise",
      "Scale"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Advanced Paradigms in Digital Forensics",
        "lessons": [
          "1. High-Performance Design Patterns",
          "2. Asynchronous & Distributed Considerations",
          "3. Security Hardening & Edge Cases"
        ]
      },
      {
        "title": "Module 2: Enterprise Deployment & Reliability",
        "lessons": [
          "1. Automated CI/CD & Observability",
          "2. Scalability Bottlenecks & Benchmarking",
          "3. Capstone Architecture Evaluation"
        ]
      }
    ]
  },
  {
    "id": "lwf-018",
    "title": "Digital Forensics Real-World Projects & Case Studies",
    "category": "Digital Forensics",
    "level": "Intermediate",
    "description": "Build complete end-to-end applications and solve realistic engineering challenges utilizing modern Digital Forensics toolchains.",
    "thumbnail": "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Industry Mentors",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Digital Forensics Real-World Case Studies",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Digital Forensics",
      "Projects",
      "Hands-on",
      "Case Studies"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Project Scaffolding & Domain Modeling",
        "lessons": [
          "1. Requirements Gathering & Schema Blueprint",
          "2. Core Logic & Service Integration",
          "3. State & Error Resiliency"
        ]
      },
      {
        "title": "Module 2: Deployment & Verification",
        "lessons": [
          "1. Integration Verification",
          "2. Performance Tuning & Caching",
          "3. Production Launch Checklist"
        ]
      }
    ]
  },
  {
    "id": "lwf-019",
    "title": "Cloud Security Essentials & Core Architecture",
    "category": "Cloud Security",
    "level": "Beginner",
    "description": "Comprehensive foundations in Cloud Security. Master key terminology, industry best practices, and hands-on workflows designed for real-world production.",
    "thumbnail": "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Cloud Security Curriculum Playlist",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Cloud Security",
      "Foundations",
      "Engineering",
      "Best Practices"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Foundations of Cloud Security",
        "lessons": [
          "1. Core Concepts & Paradigm Overview",
          "2. Architecture & Environment Setup",
          "3. Fundamental Syntax & Building Blocks"
        ]
      },
      {
        "title": "Module 2: Applied Workflows in Cloud Security",
        "lessons": [
          "1. Hands-on Implementation Patterns",
          "2. Debugging & Performance Considerations",
          "3. Testing & Production Readiness"
        ]
      }
    ]
  },
  {
    "id": "lwf-020",
    "title": "Advanced Cloud Security & Enterprise Engineering",
    "category": "Cloud Security",
    "level": "Advanced",
    "description": "Deep-dive into enterprise patterns, optimization, scaling, and architectural paradigms for senior engineers working with Cloud Security.",
    "thumbnail": "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Advanced Cloud Security Enterprise Series",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Cloud Security",
      "Advanced",
      "Architecture",
      "Enterprise",
      "Scale"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Advanced Paradigms in Cloud Security",
        "lessons": [
          "1. High-Performance Design Patterns",
          "2. Asynchronous & Distributed Considerations",
          "3. Security Hardening & Edge Cases"
        ]
      },
      {
        "title": "Module 2: Enterprise Deployment & Reliability",
        "lessons": [
          "1. Automated CI/CD & Observability",
          "2. Scalability Bottlenecks & Benchmarking",
          "3. Capstone Architecture Evaluation"
        ]
      }
    ]
  },
  {
    "id": "lwf-021",
    "title": "Cloud Security Real-World Projects & Case Studies",
    "category": "Cloud Security",
    "level": "Intermediate",
    "description": "Build complete end-to-end applications and solve realistic engineering challenges utilizing modern Cloud Security toolchains.",
    "thumbnail": "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Industry Mentors",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Cloud Security Real-World Case Studies",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Cloud Security",
      "Projects",
      "Hands-on",
      "Case Studies"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Project Scaffolding & Domain Modeling",
        "lessons": [
          "1. Requirements Gathering & Schema Blueprint",
          "2. Core Logic & Service Integration",
          "3. State & Error Resiliency"
        ]
      },
      {
        "title": "Module 2: Deployment & Verification",
        "lessons": [
          "1. Integration Verification",
          "2. Performance Tuning & Caching",
          "3. Production Launch Checklist"
        ]
      }
    ]
  },
  {
    "id": "lwf-022",
    "title": "Networking Essentials & Core Architecture",
    "category": "Networking",
    "level": "Beginner",
    "description": "Comprehensive foundations in Networking. Master key terminology, industry best practices, and hands-on workflows designed for real-world production.",
    "thumbnail": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Networking Curriculum Playlist",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Networking",
      "Foundations",
      "Engineering",
      "Best Practices"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Foundations of Networking",
        "lessons": [
          "1. Core Concepts & Paradigm Overview",
          "2. Architecture & Environment Setup",
          "3. Fundamental Syntax & Building Blocks"
        ]
      },
      {
        "title": "Module 2: Applied Workflows in Networking",
        "lessons": [
          "1. Hands-on Implementation Patterns",
          "2. Debugging & Performance Considerations",
          "3. Testing & Production Readiness"
        ]
      }
    ]
  },
  {
    "id": "lwf-023",
    "title": "Advanced Networking & Enterprise Engineering",
    "category": "Networking",
    "level": "Advanced",
    "description": "Deep-dive into enterprise patterns, optimization, scaling, and architectural paradigms for senior engineers working with Networking.",
    "thumbnail": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Advanced Networking Enterprise Series",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Networking",
      "Advanced",
      "Architecture",
      "Enterprise",
      "Scale"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Advanced Paradigms in Networking",
        "lessons": [
          "1. High-Performance Design Patterns",
          "2. Asynchronous & Distributed Considerations",
          "3. Security Hardening & Edge Cases"
        ]
      },
      {
        "title": "Module 2: Enterprise Deployment & Reliability",
        "lessons": [
          "1. Automated CI/CD & Observability",
          "2. Scalability Bottlenecks & Benchmarking",
          "3. Capstone Architecture Evaluation"
        ]
      }
    ]
  },
  {
    "id": "lwf-024",
    "title": "Networking Real-World Projects & Case Studies",
    "category": "Networking",
    "level": "Intermediate",
    "description": "Build complete end-to-end applications and solve realistic engineering challenges utilizing modern Networking toolchains.",
    "thumbnail": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Industry Mentors",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Networking Real-World Case Studies",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Networking",
      "Projects",
      "Hands-on",
      "Case Studies"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Project Scaffolding & Domain Modeling",
        "lessons": [
          "1. Requirements Gathering & Schema Blueprint",
          "2. Core Logic & Service Integration",
          "3. State & Error Resiliency"
        ]
      },
      {
        "title": "Module 2: Deployment & Verification",
        "lessons": [
          "1. Integration Verification",
          "2. Performance Tuning & Caching",
          "3. Production Launch Checklist"
        ]
      }
    ]
  },
  {
    "id": "lwf-025",
    "title": "Python Essentials & Core Architecture",
    "category": "Python",
    "level": "Beginner",
    "description": "Comprehensive foundations in Python. Master key terminology, industry best practices, and hands-on workflows designed for real-world production.",
    "thumbnail": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    "instructor": "freeCodeCamp.org",
    "youtubeChannel": "freeCodeCamp.org",
    "playlistId": "PLWKjhJtqVAbkmRvnFmOd4KhDdlK1oIq23",
    "playlistUrl": "https://www.youtube.com/playlist?list=PLWKjhJtqVAbkmRvnFmOd4KhDdlK1oIq23",
    "playlistTitle": "Python for Everybody Specialization",
    "playlistStatus": "verified",
    "certificateEligibility": true,
    "tags": [
      "Python",
      "Foundations",
      "Engineering",
      "Best Practices"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Foundations of Python",
        "lessons": [
          "1. Core Concepts & Paradigm Overview",
          "2. Architecture & Environment Setup",
          "3. Fundamental Syntax & Building Blocks"
        ]
      },
      {
        "title": "Module 2: Applied Workflows in Python",
        "lessons": [
          "1. Hands-on Implementation Patterns",
          "2. Debugging & Performance Considerations",
          "3. Testing & Production Readiness"
        ]
      }
    ]
  },
  {
    "id": "lwf-026",
    "title": "Advanced Python & Enterprise Engineering",
    "category": "Python",
    "level": "Advanced",
    "description": "Deep-dive into enterprise patterns, optimization, scaling, and architectural paradigms for senior engineers working with Python.",
    "thumbnail": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Advanced Python Enterprise Series",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Python",
      "Advanced",
      "Architecture",
      "Enterprise",
      "Scale"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Advanced Paradigms in Python",
        "lessons": [
          "1. High-Performance Design Patterns",
          "2. Asynchronous & Distributed Considerations",
          "3. Security Hardening & Edge Cases"
        ]
      },
      {
        "title": "Module 2: Enterprise Deployment & Reliability",
        "lessons": [
          "1. Automated CI/CD & Observability",
          "2. Scalability Bottlenecks & Benchmarking",
          "3. Capstone Architecture Evaluation"
        ]
      }
    ]
  },
  {
    "id": "lwf-027",
    "title": "Python Real-World Projects & Case Studies",
    "category": "Python",
    "level": "Intermediate",
    "description": "Build complete end-to-end applications and solve realistic engineering challenges utilizing modern Python toolchains.",
    "thumbnail": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Industry Mentors",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Python Real-World Case Studies",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Python",
      "Projects",
      "Hands-on",
      "Case Studies"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Project Scaffolding & Domain Modeling",
        "lessons": [
          "1. Requirements Gathering & Schema Blueprint",
          "2. Core Logic & Service Integration",
          "3. State & Error Resiliency"
        ]
      },
      {
        "title": "Module 2: Deployment & Verification",
        "lessons": [
          "1. Integration Verification",
          "2. Performance Tuning & Caching",
          "3. Production Launch Checklist"
        ]
      }
    ]
  },
  {
    "id": "lwf-028",
    "title": "JavaScript Essentials & Core Architecture",
    "category": "JavaScript",
    "level": "Beginner",
    "description": "Comprehensive foundations in JavaScript. Master key terminology, industry best practices, and hands-on workflows designed for real-world production.",
    "thumbnail": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    "instructor": "freeCodeCamp.org",
    "youtubeChannel": "freeCodeCamp.org",
    "playlistId": "PLWKjhJtqVAbljtmmeS0c-CEl2LdE-e2NC",
    "playlistUrl": "https://www.youtube.com/playlist?list=PLWKjhJtqVAbljtmmeS0c-CEl2LdE-e2NC",
    "playlistTitle": "Full JavaScript Tutorial Course",
    "playlistStatus": "verified",
    "certificateEligibility": true,
    "tags": [
      "JavaScript",
      "Foundations",
      "Engineering",
      "Best Practices"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Foundations of JavaScript",
        "lessons": [
          "1. Core Concepts & Paradigm Overview",
          "2. Architecture & Environment Setup",
          "3. Fundamental Syntax & Building Blocks"
        ]
      },
      {
        "title": "Module 2: Applied Workflows in JavaScript",
        "lessons": [
          "1. Hands-on Implementation Patterns",
          "2. Debugging & Performance Considerations",
          "3. Testing & Production Readiness"
        ]
      }
    ]
  },
  {
    "id": "lwf-029",
    "title": "Advanced JavaScript & Enterprise Engineering",
    "category": "JavaScript",
    "level": "Advanced",
    "description": "Deep-dive into enterprise patterns, optimization, scaling, and architectural paradigms for senior engineers working with JavaScript.",
    "thumbnail": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Advanced JavaScript Enterprise Series",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "JavaScript",
      "Advanced",
      "Architecture",
      "Enterprise",
      "Scale"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Advanced Paradigms in JavaScript",
        "lessons": [
          "1. High-Performance Design Patterns",
          "2. Asynchronous & Distributed Considerations",
          "3. Security Hardening & Edge Cases"
        ]
      },
      {
        "title": "Module 2: Enterprise Deployment & Reliability",
        "lessons": [
          "1. Automated CI/CD & Observability",
          "2. Scalability Bottlenecks & Benchmarking",
          "3. Capstone Architecture Evaluation"
        ]
      }
    ]
  },
  {
    "id": "lwf-030",
    "title": "JavaScript Real-World Projects & Case Studies",
    "category": "JavaScript",
    "level": "Intermediate",
    "description": "Build complete end-to-end applications and solve realistic engineering challenges utilizing modern JavaScript toolchains.",
    "thumbnail": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Industry Mentors",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "JavaScript Real-World Case Studies",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "JavaScript",
      "Projects",
      "Hands-on",
      "Case Studies"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Project Scaffolding & Domain Modeling",
        "lessons": [
          "1. Requirements Gathering & Schema Blueprint",
          "2. Core Logic & Service Integration",
          "3. State & Error Resiliency"
        ]
      },
      {
        "title": "Module 2: Deployment & Verification",
        "lessons": [
          "1. Integration Verification",
          "2. Performance Tuning & Caching",
          "3. Production Launch Checklist"
        ]
      }
    ]
  },
  {
    "id": "lwf-031",
    "title": "TypeScript Essentials & Core Architecture",
    "category": "TypeScript",
    "level": "Beginner",
    "description": "Comprehensive foundations in TypeScript. Master key terminology, industry best practices, and hands-on workflows designed for real-world production.",
    "thumbnail": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    "instructor": "The Net Ninja",
    "youtubeChannel": "The Net Ninja",
    "playlistId": "PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI",
    "playlistUrl": "https://www.youtube.com/playlist?list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI",
    "playlistTitle": "TypeScript Tutorial for Beginners",
    "playlistStatus": "verified",
    "certificateEligibility": true,
    "tags": [
      "TypeScript",
      "Foundations",
      "Engineering",
      "Best Practices"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Foundations of TypeScript",
        "lessons": [
          "1. Core Concepts & Paradigm Overview",
          "2. Architecture & Environment Setup",
          "3. Fundamental Syntax & Building Blocks"
        ]
      },
      {
        "title": "Module 2: Applied Workflows in TypeScript",
        "lessons": [
          "1. Hands-on Implementation Patterns",
          "2. Debugging & Performance Considerations",
          "3. Testing & Production Readiness"
        ]
      }
    ]
  },
  {
    "id": "lwf-032",
    "title": "Advanced TypeScript & Enterprise Engineering",
    "category": "TypeScript",
    "level": "Advanced",
    "description": "Deep-dive into enterprise patterns, optimization, scaling, and architectural paradigms for senior engineers working with TypeScript.",
    "thumbnail": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Advanced TypeScript Enterprise Series",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "TypeScript",
      "Advanced",
      "Architecture",
      "Enterprise",
      "Scale"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Advanced Paradigms in TypeScript",
        "lessons": [
          "1. High-Performance Design Patterns",
          "2. Asynchronous & Distributed Considerations",
          "3. Security Hardening & Edge Cases"
        ]
      },
      {
        "title": "Module 2: Enterprise Deployment & Reliability",
        "lessons": [
          "1. Automated CI/CD & Observability",
          "2. Scalability Bottlenecks & Benchmarking",
          "3. Capstone Architecture Evaluation"
        ]
      }
    ]
  },
  {
    "id": "lwf-033",
    "title": "TypeScript Real-World Projects & Case Studies",
    "category": "TypeScript",
    "level": "Intermediate",
    "description": "Build complete end-to-end applications and solve realistic engineering challenges utilizing modern TypeScript toolchains.",
    "thumbnail": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Industry Mentors",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "TypeScript Real-World Case Studies",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "TypeScript",
      "Projects",
      "Hands-on",
      "Case Studies"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Project Scaffolding & Domain Modeling",
        "lessons": [
          "1. Requirements Gathering & Schema Blueprint",
          "2. Core Logic & Service Integration",
          "3. State & Error Resiliency"
        ]
      },
      {
        "title": "Module 2: Deployment & Verification",
        "lessons": [
          "1. Integration Verification",
          "2. Performance Tuning & Caching",
          "3. Production Launch Checklist"
        ]
      }
    ]
  },
  {
    "id": "lwf-034",
    "title": "Java Essentials & Core Architecture",
    "category": "Java",
    "level": "Beginner",
    "description": "Comprehensive foundations in Java. Master key terminology, industry best practices, and hands-on workflows designed for real-world production.",
    "thumbnail": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Java Curriculum Playlist",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Java",
      "Foundations",
      "Engineering",
      "Best Practices"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Foundations of Java",
        "lessons": [
          "1. Core Concepts & Paradigm Overview",
          "2. Architecture & Environment Setup",
          "3. Fundamental Syntax & Building Blocks"
        ]
      },
      {
        "title": "Module 2: Applied Workflows in Java",
        "lessons": [
          "1. Hands-on Implementation Patterns",
          "2. Debugging & Performance Considerations",
          "3. Testing & Production Readiness"
        ]
      }
    ]
  },
  {
    "id": "lwf-035",
    "title": "Advanced Java & Enterprise Engineering",
    "category": "Java",
    "level": "Advanced",
    "description": "Deep-dive into enterprise patterns, optimization, scaling, and architectural paradigms for senior engineers working with Java.",
    "thumbnail": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Advanced Java Enterprise Series",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Java",
      "Advanced",
      "Architecture",
      "Enterprise",
      "Scale"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Advanced Paradigms in Java",
        "lessons": [
          "1. High-Performance Design Patterns",
          "2. Asynchronous & Distributed Considerations",
          "3. Security Hardening & Edge Cases"
        ]
      },
      {
        "title": "Module 2: Enterprise Deployment & Reliability",
        "lessons": [
          "1. Automated CI/CD & Observability",
          "2. Scalability Bottlenecks & Benchmarking",
          "3. Capstone Architecture Evaluation"
        ]
      }
    ]
  },
  {
    "id": "lwf-036",
    "title": "Java Real-World Projects & Case Studies",
    "category": "Java",
    "level": "Intermediate",
    "description": "Build complete end-to-end applications and solve realistic engineering challenges utilizing modern Java toolchains.",
    "thumbnail": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Industry Mentors",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Java Real-World Case Studies",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Java",
      "Projects",
      "Hands-on",
      "Case Studies"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Project Scaffolding & Domain Modeling",
        "lessons": [
          "1. Requirements Gathering & Schema Blueprint",
          "2. Core Logic & Service Integration",
          "3. State & Error Resiliency"
        ]
      },
      {
        "title": "Module 2: Deployment & Verification",
        "lessons": [
          "1. Integration Verification",
          "2. Performance Tuning & Caching",
          "3. Production Launch Checklist"
        ]
      }
    ]
  },
  {
    "id": "lwf-037",
    "title": "C Essentials & Core Architecture",
    "category": "C",
    "level": "Beginner",
    "description": "Comprehensive foundations in C. Master key terminology, industry best practices, and hands-on workflows designed for real-world production.",
    "thumbnail": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "C Curriculum Playlist",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "C",
      "Foundations",
      "Engineering",
      "Best Practices"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Foundations of C",
        "lessons": [
          "1. Core Concepts & Paradigm Overview",
          "2. Architecture & Environment Setup",
          "3. Fundamental Syntax & Building Blocks"
        ]
      },
      {
        "title": "Module 2: Applied Workflows in C",
        "lessons": [
          "1. Hands-on Implementation Patterns",
          "2. Debugging & Performance Considerations",
          "3. Testing & Production Readiness"
        ]
      }
    ]
  },
  {
    "id": "lwf-038",
    "title": "Advanced C & Enterprise Engineering",
    "category": "C",
    "level": "Advanced",
    "description": "Deep-dive into enterprise patterns, optimization, scaling, and architectural paradigms for senior engineers working with C.",
    "thumbnail": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Advanced C Enterprise Series",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "C",
      "Advanced",
      "Architecture",
      "Enterprise",
      "Scale"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Advanced Paradigms in C",
        "lessons": [
          "1. High-Performance Design Patterns",
          "2. Asynchronous & Distributed Considerations",
          "3. Security Hardening & Edge Cases"
        ]
      },
      {
        "title": "Module 2: Enterprise Deployment & Reliability",
        "lessons": [
          "1. Automated CI/CD & Observability",
          "2. Scalability Bottlenecks & Benchmarking",
          "3. Capstone Architecture Evaluation"
        ]
      }
    ]
  },
  {
    "id": "lwf-039",
    "title": "C++ Essentials & Core Architecture",
    "category": "C++",
    "level": "Beginner",
    "description": "Comprehensive foundations in C++. Master key terminology, industry best practices, and hands-on workflows designed for real-world production.",
    "thumbnail": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "C++ Curriculum Playlist",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "C++",
      "Foundations",
      "Engineering",
      "Best Practices"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Foundations of C++",
        "lessons": [
          "1. Core Concepts & Paradigm Overview",
          "2. Architecture & Environment Setup",
          "3. Fundamental Syntax & Building Blocks"
        ]
      },
      {
        "title": "Module 2: Applied Workflows in C++",
        "lessons": [
          "1. Hands-on Implementation Patterns",
          "2. Debugging & Performance Considerations",
          "3. Testing & Production Readiness"
        ]
      }
    ]
  },
  {
    "id": "lwf-040",
    "title": "Advanced C++ & Enterprise Engineering",
    "category": "C++",
    "level": "Advanced",
    "description": "Deep-dive into enterprise patterns, optimization, scaling, and architectural paradigms for senior engineers working with C++.",
    "thumbnail": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Advanced C++ Enterprise Series",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "C++",
      "Advanced",
      "Architecture",
      "Enterprise",
      "Scale"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Advanced Paradigms in C++",
        "lessons": [
          "1. High-Performance Design Patterns",
          "2. Asynchronous & Distributed Considerations",
          "3. Security Hardening & Edge Cases"
        ]
      },
      {
        "title": "Module 2: Enterprise Deployment & Reliability",
        "lessons": [
          "1. Automated CI/CD & Observability",
          "2. Scalability Bottlenecks & Benchmarking",
          "3. Capstone Architecture Evaluation"
        ]
      }
    ]
  },
  {
    "id": "lwf-041",
    "title": "C++ Real-World Projects & Case Studies",
    "category": "C++",
    "level": "Intermediate",
    "description": "Build complete end-to-end applications and solve realistic engineering challenges utilizing modern C++ toolchains.",
    "thumbnail": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Industry Mentors",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "C++ Real-World Case Studies",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "C++",
      "Projects",
      "Hands-on",
      "Case Studies"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Project Scaffolding & Domain Modeling",
        "lessons": [
          "1. Requirements Gathering & Schema Blueprint",
          "2. Core Logic & Service Integration",
          "3. State & Error Resiliency"
        ]
      },
      {
        "title": "Module 2: Deployment & Verification",
        "lessons": [
          "1. Integration Verification",
          "2. Performance Tuning & Caching",
          "3. Production Launch Checklist"
        ]
      }
    ]
  },
  {
    "id": "lwf-042",
    "title": "C# Essentials & Core Architecture",
    "category": "C#",
    "level": "Beginner",
    "description": "Comprehensive foundations in C#. Master key terminology, industry best practices, and hands-on workflows designed for real-world production.",
    "thumbnail": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "C# Curriculum Playlist",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "C#",
      "Foundations",
      "Engineering",
      "Best Practices"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Foundations of C#",
        "lessons": [
          "1. Core Concepts & Paradigm Overview",
          "2. Architecture & Environment Setup",
          "3. Fundamental Syntax & Building Blocks"
        ]
      },
      {
        "title": "Module 2: Applied Workflows in C#",
        "lessons": [
          "1. Hands-on Implementation Patterns",
          "2. Debugging & Performance Considerations",
          "3. Testing & Production Readiness"
        ]
      }
    ]
  },
  {
    "id": "lwf-043",
    "title": "Advanced C# & Enterprise Engineering",
    "category": "C#",
    "level": "Advanced",
    "description": "Deep-dive into enterprise patterns, optimization, scaling, and architectural paradigms for senior engineers working with C#.",
    "thumbnail": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Advanced C# Enterprise Series",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "C#",
      "Advanced",
      "Architecture",
      "Enterprise",
      "Scale"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Advanced Paradigms in C#",
        "lessons": [
          "1. High-Performance Design Patterns",
          "2. Asynchronous & Distributed Considerations",
          "3. Security Hardening & Edge Cases"
        ]
      },
      {
        "title": "Module 2: Enterprise Deployment & Reliability",
        "lessons": [
          "1. Automated CI/CD & Observability",
          "2. Scalability Bottlenecks & Benchmarking",
          "3. Capstone Architecture Evaluation"
        ]
      }
    ]
  },
  {
    "id": "lwf-044",
    "title": "C# Real-World Projects & Case Studies",
    "category": "C#",
    "level": "Intermediate",
    "description": "Build complete end-to-end applications and solve realistic engineering challenges utilizing modern C# toolchains.",
    "thumbnail": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Industry Mentors",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "C# Real-World Case Studies",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "C#",
      "Projects",
      "Hands-on",
      "Case Studies"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Project Scaffolding & Domain Modeling",
        "lessons": [
          "1. Requirements Gathering & Schema Blueprint",
          "2. Core Logic & Service Integration",
          "3. State & Error Resiliency"
        ]
      },
      {
        "title": "Module 2: Deployment & Verification",
        "lessons": [
          "1. Integration Verification",
          "2. Performance Tuning & Caching",
          "3. Production Launch Checklist"
        ]
      }
    ]
  },
  {
    "id": "lwf-045",
    "title": "Go Essentials & Core Architecture",
    "category": "Go",
    "level": "Beginner",
    "description": "Comprehensive foundations in Go. Master key terminology, industry best practices, and hands-on workflows designed for real-world production.",
    "thumbnail": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Go Curriculum Playlist",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Go",
      "Foundations",
      "Engineering",
      "Best Practices"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Foundations of Go",
        "lessons": [
          "1. Core Concepts & Paradigm Overview",
          "2. Architecture & Environment Setup",
          "3. Fundamental Syntax & Building Blocks"
        ]
      },
      {
        "title": "Module 2: Applied Workflows in Go",
        "lessons": [
          "1. Hands-on Implementation Patterns",
          "2. Debugging & Performance Considerations",
          "3. Testing & Production Readiness"
        ]
      }
    ]
  },
  {
    "id": "lwf-046",
    "title": "Advanced Go & Enterprise Engineering",
    "category": "Go",
    "level": "Advanced",
    "description": "Deep-dive into enterprise patterns, optimization, scaling, and architectural paradigms for senior engineers working with Go.",
    "thumbnail": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Advanced Go Enterprise Series",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Go",
      "Advanced",
      "Architecture",
      "Enterprise",
      "Scale"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Advanced Paradigms in Go",
        "lessons": [
          "1. High-Performance Design Patterns",
          "2. Asynchronous & Distributed Considerations",
          "3. Security Hardening & Edge Cases"
        ]
      },
      {
        "title": "Module 2: Enterprise Deployment & Reliability",
        "lessons": [
          "1. Automated CI/CD & Observability",
          "2. Scalability Bottlenecks & Benchmarking",
          "3. Capstone Architecture Evaluation"
        ]
      }
    ]
  },
  {
    "id": "lwf-047",
    "title": "Go Real-World Projects & Case Studies",
    "category": "Go",
    "level": "Intermediate",
    "description": "Build complete end-to-end applications and solve realistic engineering challenges utilizing modern Go toolchains.",
    "thumbnail": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Industry Mentors",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Go Real-World Case Studies",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Go",
      "Projects",
      "Hands-on",
      "Case Studies"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Project Scaffolding & Domain Modeling",
        "lessons": [
          "1. Requirements Gathering & Schema Blueprint",
          "2. Core Logic & Service Integration",
          "3. State & Error Resiliency"
        ]
      },
      {
        "title": "Module 2: Deployment & Verification",
        "lessons": [
          "1. Integration Verification",
          "2. Performance Tuning & Caching",
          "3. Production Launch Checklist"
        ]
      }
    ]
  },
  {
    "id": "lwf-048",
    "title": "Rust Essentials & Core Architecture",
    "category": "Rust",
    "level": "Beginner",
    "description": "Comprehensive foundations in Rust. Master key terminology, industry best practices, and hands-on workflows designed for real-world production.",
    "thumbnail": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Rust Curriculum Playlist",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Rust",
      "Foundations",
      "Engineering",
      "Best Practices"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Foundations of Rust",
        "lessons": [
          "1. Core Concepts & Paradigm Overview",
          "2. Architecture & Environment Setup",
          "3. Fundamental Syntax & Building Blocks"
        ]
      },
      {
        "title": "Module 2: Applied Workflows in Rust",
        "lessons": [
          "1. Hands-on Implementation Patterns",
          "2. Debugging & Performance Considerations",
          "3. Testing & Production Readiness"
        ]
      }
    ]
  },
  {
    "id": "lwf-049",
    "title": "Advanced Rust & Enterprise Engineering",
    "category": "Rust",
    "level": "Advanced",
    "description": "Deep-dive into enterprise patterns, optimization, scaling, and architectural paradigms for senior engineers working with Rust.",
    "thumbnail": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Advanced Rust Enterprise Series",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Rust",
      "Advanced",
      "Architecture",
      "Enterprise",
      "Scale"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Advanced Paradigms in Rust",
        "lessons": [
          "1. High-Performance Design Patterns",
          "2. Asynchronous & Distributed Considerations",
          "3. Security Hardening & Edge Cases"
        ]
      },
      {
        "title": "Module 2: Enterprise Deployment & Reliability",
        "lessons": [
          "1. Automated CI/CD & Observability",
          "2. Scalability Bottlenecks & Benchmarking",
          "3. Capstone Architecture Evaluation"
        ]
      }
    ]
  },
  {
    "id": "lwf-050",
    "title": "Rust Real-World Projects & Case Studies",
    "category": "Rust",
    "level": "Intermediate",
    "description": "Build complete end-to-end applications and solve realistic engineering challenges utilizing modern Rust toolchains.",
    "thumbnail": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Industry Mentors",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Rust Real-World Case Studies",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Rust",
      "Projects",
      "Hands-on",
      "Case Studies"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Project Scaffolding & Domain Modeling",
        "lessons": [
          "1. Requirements Gathering & Schema Blueprint",
          "2. Core Logic & Service Integration",
          "3. State & Error Resiliency"
        ]
      },
      {
        "title": "Module 2: Deployment & Verification",
        "lessons": [
          "1. Integration Verification",
          "2. Performance Tuning & Caching",
          "3. Production Launch Checklist"
        ]
      }
    ]
  },
  {
    "id": "lwf-051",
    "title": "PHP Essentials & Core Architecture",
    "category": "PHP",
    "level": "Beginner",
    "description": "Comprehensive foundations in PHP. Master key terminology, industry best practices, and hands-on workflows designed for real-world production.",
    "thumbnail": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "PHP Curriculum Playlist",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "PHP",
      "Foundations",
      "Engineering",
      "Best Practices"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Foundations of PHP",
        "lessons": [
          "1. Core Concepts & Paradigm Overview",
          "2. Architecture & Environment Setup",
          "3. Fundamental Syntax & Building Blocks"
        ]
      },
      {
        "title": "Module 2: Applied Workflows in PHP",
        "lessons": [
          "1. Hands-on Implementation Patterns",
          "2. Debugging & Performance Considerations",
          "3. Testing & Production Readiness"
        ]
      }
    ]
  },
  {
    "id": "lwf-052",
    "title": "Advanced PHP & Enterprise Engineering",
    "category": "PHP",
    "level": "Advanced",
    "description": "Deep-dive into enterprise patterns, optimization, scaling, and architectural paradigms for senior engineers working with PHP.",
    "thumbnail": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Advanced PHP Enterprise Series",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "PHP",
      "Advanced",
      "Architecture",
      "Enterprise",
      "Scale"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Advanced Paradigms in PHP",
        "lessons": [
          "1. High-Performance Design Patterns",
          "2. Asynchronous & Distributed Considerations",
          "3. Security Hardening & Edge Cases"
        ]
      },
      {
        "title": "Module 2: Enterprise Deployment & Reliability",
        "lessons": [
          "1. Automated CI/CD & Observability",
          "2. Scalability Bottlenecks & Benchmarking",
          "3. Capstone Architecture Evaluation"
        ]
      }
    ]
  },
  {
    "id": "lwf-053",
    "title": "PHP Real-World Projects & Case Studies",
    "category": "PHP",
    "level": "Intermediate",
    "description": "Build complete end-to-end applications and solve realistic engineering challenges utilizing modern PHP toolchains.",
    "thumbnail": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Industry Mentors",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "PHP Real-World Case Studies",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "PHP",
      "Projects",
      "Hands-on",
      "Case Studies"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Project Scaffolding & Domain Modeling",
        "lessons": [
          "1. Requirements Gathering & Schema Blueprint",
          "2. Core Logic & Service Integration",
          "3. State & Error Resiliency"
        ]
      },
      {
        "title": "Module 2: Deployment & Verification",
        "lessons": [
          "1. Integration Verification",
          "2. Performance Tuning & Caching",
          "3. Production Launch Checklist"
        ]
      }
    ]
  },
  {
    "id": "lwf-054",
    "title": "SQL Essentials & Core Architecture",
    "category": "SQL",
    "level": "Beginner",
    "description": "Comprehensive foundations in SQL. Master key terminology, industry best practices, and hands-on workflows designed for real-world production.",
    "thumbnail": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
    "instructor": "freeCodeCamp.org",
    "youtubeChannel": "freeCodeCamp.org",
    "playlistId": "PLWKjhJtqVAbm4WPR4POms28hG-5p3lI38",
    "playlistUrl": "https://www.youtube.com/playlist?list=PLWKjhJtqVAbm4WPR4POms28hG-5p3lI38",
    "playlistTitle": "SQL and Relational Database Design",
    "playlistStatus": "verified",
    "certificateEligibility": true,
    "tags": [
      "SQL",
      "Foundations",
      "Engineering",
      "Best Practices"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Foundations of SQL",
        "lessons": [
          "1. Core Concepts & Paradigm Overview",
          "2. Architecture & Environment Setup",
          "3. Fundamental Syntax & Building Blocks"
        ]
      },
      {
        "title": "Module 2: Applied Workflows in SQL",
        "lessons": [
          "1. Hands-on Implementation Patterns",
          "2. Debugging & Performance Considerations",
          "3. Testing & Production Readiness"
        ]
      }
    ]
  },
  {
    "id": "lwf-055",
    "title": "Advanced SQL & Enterprise Engineering",
    "category": "SQL",
    "level": "Advanced",
    "description": "Deep-dive into enterprise patterns, optimization, scaling, and architectural paradigms for senior engineers working with SQL.",
    "thumbnail": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Advanced SQL Enterprise Series",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "SQL",
      "Advanced",
      "Architecture",
      "Enterprise",
      "Scale"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Advanced Paradigms in SQL",
        "lessons": [
          "1. High-Performance Design Patterns",
          "2. Asynchronous & Distributed Considerations",
          "3. Security Hardening & Edge Cases"
        ]
      },
      {
        "title": "Module 2: Enterprise Deployment & Reliability",
        "lessons": [
          "1. Automated CI/CD & Observability",
          "2. Scalability Bottlenecks & Benchmarking",
          "3. Capstone Architecture Evaluation"
        ]
      }
    ]
  },
  {
    "id": "lwf-056",
    "title": "SQL Real-World Projects & Case Studies",
    "category": "SQL",
    "level": "Intermediate",
    "description": "Build complete end-to-end applications and solve realistic engineering challenges utilizing modern SQL toolchains.",
    "thumbnail": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Industry Mentors",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "SQL Real-World Case Studies",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "SQL",
      "Projects",
      "Hands-on",
      "Case Studies"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Project Scaffolding & Domain Modeling",
        "lessons": [
          "1. Requirements Gathering & Schema Blueprint",
          "2. Core Logic & Service Integration",
          "3. State & Error Resiliency"
        ]
      },
      {
        "title": "Module 2: Deployment & Verification",
        "lessons": [
          "1. Integration Verification",
          "2. Performance Tuning & Caching",
          "3. Production Launch Checklist"
        ]
      }
    ]
  },
  {
    "id": "lwf-057",
    "title": "Data Science Essentials & Core Architecture",
    "category": "Data Science",
    "level": "Beginner",
    "description": "Comprehensive foundations in Data Science. Master key terminology, industry best practices, and hands-on workflows designed for real-world production.",
    "thumbnail": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Data Science Curriculum Playlist",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Data Science",
      "Foundations",
      "Engineering",
      "Best Practices"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Foundations of Data Science",
        "lessons": [
          "1. Core Concepts & Paradigm Overview",
          "2. Architecture & Environment Setup",
          "3. Fundamental Syntax & Building Blocks"
        ]
      },
      {
        "title": "Module 2: Applied Workflows in Data Science",
        "lessons": [
          "1. Hands-on Implementation Patterns",
          "2. Debugging & Performance Considerations",
          "3. Testing & Production Readiness"
        ]
      }
    ]
  },
  {
    "id": "lwf-058",
    "title": "Advanced Data Science & Enterprise Engineering",
    "category": "Data Science",
    "level": "Advanced",
    "description": "Deep-dive into enterprise patterns, optimization, scaling, and architectural paradigms for senior engineers working with Data Science.",
    "thumbnail": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Advanced Data Science Enterprise Series",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Data Science",
      "Advanced",
      "Architecture",
      "Enterprise",
      "Scale"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Advanced Paradigms in Data Science",
        "lessons": [
          "1. High-Performance Design Patterns",
          "2. Asynchronous & Distributed Considerations",
          "3. Security Hardening & Edge Cases"
        ]
      },
      {
        "title": "Module 2: Enterprise Deployment & Reliability",
        "lessons": [
          "1. Automated CI/CD & Observability",
          "2. Scalability Bottlenecks & Benchmarking",
          "3. Capstone Architecture Evaluation"
        ]
      }
    ]
  },
  {
    "id": "lwf-059",
    "title": "Data Science Real-World Projects & Case Studies",
    "category": "Data Science",
    "level": "Intermediate",
    "description": "Build complete end-to-end applications and solve realistic engineering challenges utilizing modern Data Science toolchains.",
    "thumbnail": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Industry Mentors",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Data Science Real-World Case Studies",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Data Science",
      "Projects",
      "Hands-on",
      "Case Studies"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Project Scaffolding & Domain Modeling",
        "lessons": [
          "1. Requirements Gathering & Schema Blueprint",
          "2. Core Logic & Service Integration",
          "3. State & Error Resiliency"
        ]
      },
      {
        "title": "Module 2: Deployment & Verification",
        "lessons": [
          "1. Integration Verification",
          "2. Performance Tuning & Caching",
          "3. Production Launch Checklist"
        ]
      }
    ]
  },
  {
    "id": "lwf-060",
    "title": "Data Analytics Essentials & Core Architecture",
    "category": "Data Analytics",
    "level": "Beginner",
    "description": "Comprehensive foundations in Data Analytics. Master key terminology, industry best practices, and hands-on workflows designed for real-world production.",
    "thumbnail": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Data Analytics Curriculum Playlist",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Data Analytics",
      "Foundations",
      "Engineering",
      "Best Practices"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Foundations of Data Analytics",
        "lessons": [
          "1. Core Concepts & Paradigm Overview",
          "2. Architecture & Environment Setup",
          "3. Fundamental Syntax & Building Blocks"
        ]
      },
      {
        "title": "Module 2: Applied Workflows in Data Analytics",
        "lessons": [
          "1. Hands-on Implementation Patterns",
          "2. Debugging & Performance Considerations",
          "3. Testing & Production Readiness"
        ]
      }
    ]
  },
  {
    "id": "lwf-061",
    "title": "Advanced Data Analytics & Enterprise Engineering",
    "category": "Data Analytics",
    "level": "Advanced",
    "description": "Deep-dive into enterprise patterns, optimization, scaling, and architectural paradigms for senior engineers working with Data Analytics.",
    "thumbnail": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Advanced Data Analytics Enterprise Series",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Data Analytics",
      "Advanced",
      "Architecture",
      "Enterprise",
      "Scale"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Advanced Paradigms in Data Analytics",
        "lessons": [
          "1. High-Performance Design Patterns",
          "2. Asynchronous & Distributed Considerations",
          "3. Security Hardening & Edge Cases"
        ]
      },
      {
        "title": "Module 2: Enterprise Deployment & Reliability",
        "lessons": [
          "1. Automated CI/CD & Observability",
          "2. Scalability Bottlenecks & Benchmarking",
          "3. Capstone Architecture Evaluation"
        ]
      }
    ]
  },
  {
    "id": "lwf-062",
    "title": "Data Analytics Real-World Projects & Case Studies",
    "category": "Data Analytics",
    "level": "Intermediate",
    "description": "Build complete end-to-end applications and solve realistic engineering challenges utilizing modern Data Analytics toolchains.",
    "thumbnail": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Industry Mentors",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Data Analytics Real-World Case Studies",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Data Analytics",
      "Projects",
      "Hands-on",
      "Case Studies"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Project Scaffolding & Domain Modeling",
        "lessons": [
          "1. Requirements Gathering & Schema Blueprint",
          "2. Core Logic & Service Integration",
          "3. State & Error Resiliency"
        ]
      },
      {
        "title": "Module 2: Deployment & Verification",
        "lessons": [
          "1. Integration Verification",
          "2. Performance Tuning & Caching",
          "3. Production Launch Checklist"
        ]
      }
    ]
  },
  {
    "id": "lwf-063",
    "title": "Data Engineering Essentials & Core Architecture",
    "category": "Data Engineering",
    "level": "Beginner",
    "description": "Comprehensive foundations in Data Engineering. Master key terminology, industry best practices, and hands-on workflows designed for real-world production.",
    "thumbnail": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Data Engineering Curriculum Playlist",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Data Engineering",
      "Foundations",
      "Engineering",
      "Best Practices"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Foundations of Data Engineering",
        "lessons": [
          "1. Core Concepts & Paradigm Overview",
          "2. Architecture & Environment Setup",
          "3. Fundamental Syntax & Building Blocks"
        ]
      },
      {
        "title": "Module 2: Applied Workflows in Data Engineering",
        "lessons": [
          "1. Hands-on Implementation Patterns",
          "2. Debugging & Performance Considerations",
          "3. Testing & Production Readiness"
        ]
      }
    ]
  },
  {
    "id": "lwf-064",
    "title": "Advanced Data Engineering & Enterprise Engineering",
    "category": "Data Engineering",
    "level": "Advanced",
    "description": "Deep-dive into enterprise patterns, optimization, scaling, and architectural paradigms for senior engineers working with Data Engineering.",
    "thumbnail": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Advanced Data Engineering Enterprise Series",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Data Engineering",
      "Advanced",
      "Architecture",
      "Enterprise",
      "Scale"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Advanced Paradigms in Data Engineering",
        "lessons": [
          "1. High-Performance Design Patterns",
          "2. Asynchronous & Distributed Considerations",
          "3. Security Hardening & Edge Cases"
        ]
      },
      {
        "title": "Module 2: Enterprise Deployment & Reliability",
        "lessons": [
          "1. Automated CI/CD & Observability",
          "2. Scalability Bottlenecks & Benchmarking",
          "3. Capstone Architecture Evaluation"
        ]
      }
    ]
  },
  {
    "id": "lwf-065",
    "title": "Data Engineering Real-World Projects & Case Studies",
    "category": "Data Engineering",
    "level": "Intermediate",
    "description": "Build complete end-to-end applications and solve realistic engineering challenges utilizing modern Data Engineering toolchains.",
    "thumbnail": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Industry Mentors",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Data Engineering Real-World Case Studies",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Data Engineering",
      "Projects",
      "Hands-on",
      "Case Studies"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Project Scaffolding & Domain Modeling",
        "lessons": [
          "1. Requirements Gathering & Schema Blueprint",
          "2. Core Logic & Service Integration",
          "3. State & Error Resiliency"
        ]
      },
      {
        "title": "Module 2: Deployment & Verification",
        "lessons": [
          "1. Integration Verification",
          "2. Performance Tuning & Caching",
          "3. Production Launch Checklist"
        ]
      }
    ]
  },
  {
    "id": "lwf-066",
    "title": "Power BI Essentials & Core Architecture",
    "category": "Power BI",
    "level": "Beginner",
    "description": "Comprehensive foundations in Power BI. Master key terminology, industry best practices, and hands-on workflows designed for real-world production.",
    "thumbnail": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Power BI Curriculum Playlist",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Power BI",
      "Foundations",
      "Engineering",
      "Best Practices"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Foundations of Power BI",
        "lessons": [
          "1. Core Concepts & Paradigm Overview",
          "2. Architecture & Environment Setup",
          "3. Fundamental Syntax & Building Blocks"
        ]
      },
      {
        "title": "Module 2: Applied Workflows in Power BI",
        "lessons": [
          "1. Hands-on Implementation Patterns",
          "2. Debugging & Performance Considerations",
          "3. Testing & Production Readiness"
        ]
      }
    ]
  },
  {
    "id": "lwf-067",
    "title": "Advanced Power BI & Enterprise Engineering",
    "category": "Power BI",
    "level": "Advanced",
    "description": "Deep-dive into enterprise patterns, optimization, scaling, and architectural paradigms for senior engineers working with Power BI.",
    "thumbnail": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Advanced Power BI Enterprise Series",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Power BI",
      "Advanced",
      "Architecture",
      "Enterprise",
      "Scale"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Advanced Paradigms in Power BI",
        "lessons": [
          "1. High-Performance Design Patterns",
          "2. Asynchronous & Distributed Considerations",
          "3. Security Hardening & Edge Cases"
        ]
      },
      {
        "title": "Module 2: Enterprise Deployment & Reliability",
        "lessons": [
          "1. Automated CI/CD & Observability",
          "2. Scalability Bottlenecks & Benchmarking",
          "3. Capstone Architecture Evaluation"
        ]
      }
    ]
  },
  {
    "id": "lwf-068",
    "title": "Power BI Real-World Projects & Case Studies",
    "category": "Power BI",
    "level": "Intermediate",
    "description": "Build complete end-to-end applications and solve realistic engineering challenges utilizing modern Power BI toolchains.",
    "thumbnail": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Industry Mentors",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Power BI Real-World Case Studies",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Power BI",
      "Projects",
      "Hands-on",
      "Case Studies"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Project Scaffolding & Domain Modeling",
        "lessons": [
          "1. Requirements Gathering & Schema Blueprint",
          "2. Core Logic & Service Integration",
          "3. State & Error Resiliency"
        ]
      },
      {
        "title": "Module 2: Deployment & Verification",
        "lessons": [
          "1. Integration Verification",
          "2. Performance Tuning & Caching",
          "3. Production Launch Checklist"
        ]
      }
    ]
  },
  {
    "id": "lwf-069",
    "title": "Microsoft Fabric Essentials & Core Architecture",
    "category": "Microsoft Fabric",
    "level": "Beginner",
    "description": "Comprehensive foundations in Microsoft Fabric. Master key terminology, industry best practices, and hands-on workflows designed for real-world production.",
    "thumbnail": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Microsoft Fabric Curriculum Playlist",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Microsoft Fabric",
      "Foundations",
      "Engineering",
      "Best Practices"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Foundations of Microsoft Fabric",
        "lessons": [
          "1. Core Concepts & Paradigm Overview",
          "2. Architecture & Environment Setup",
          "3. Fundamental Syntax & Building Blocks"
        ]
      },
      {
        "title": "Module 2: Applied Workflows in Microsoft Fabric",
        "lessons": [
          "1. Hands-on Implementation Patterns",
          "2. Debugging & Performance Considerations",
          "3. Testing & Production Readiness"
        ]
      }
    ]
  },
  {
    "id": "lwf-070",
    "title": "Advanced Microsoft Fabric & Enterprise Engineering",
    "category": "Microsoft Fabric",
    "level": "Advanced",
    "description": "Deep-dive into enterprise patterns, optimization, scaling, and architectural paradigms for senior engineers working with Microsoft Fabric.",
    "thumbnail": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Advanced Microsoft Fabric Enterprise Series",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Microsoft Fabric",
      "Advanced",
      "Architecture",
      "Enterprise",
      "Scale"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Advanced Paradigms in Microsoft Fabric",
        "lessons": [
          "1. High-Performance Design Patterns",
          "2. Asynchronous & Distributed Considerations",
          "3. Security Hardening & Edge Cases"
        ]
      },
      {
        "title": "Module 2: Enterprise Deployment & Reliability",
        "lessons": [
          "1. Automated CI/CD & Observability",
          "2. Scalability Bottlenecks & Benchmarking",
          "3. Capstone Architecture Evaluation"
        ]
      }
    ]
  },
  {
    "id": "lwf-071",
    "title": "UI/UX Essentials & Core Architecture",
    "category": "UI/UX",
    "level": "Beginner",
    "description": "Comprehensive foundations in UI/UX. Master key terminology, industry best practices, and hands-on workflows designed for real-world production.",
    "thumbnail": "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "UI/UX Curriculum Playlist",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "UI/UX",
      "Foundations",
      "Engineering",
      "Best Practices"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Foundations of UI/UX",
        "lessons": [
          "1. Core Concepts & Paradigm Overview",
          "2. Architecture & Environment Setup",
          "3. Fundamental Syntax & Building Blocks"
        ]
      },
      {
        "title": "Module 2: Applied Workflows in UI/UX",
        "lessons": [
          "1. Hands-on Implementation Patterns",
          "2. Debugging & Performance Considerations",
          "3. Testing & Production Readiness"
        ]
      }
    ]
  },
  {
    "id": "lwf-072",
    "title": "Advanced UI/UX & Enterprise Engineering",
    "category": "UI/UX",
    "level": "Advanced",
    "description": "Deep-dive into enterprise patterns, optimization, scaling, and architectural paradigms for senior engineers working with UI/UX.",
    "thumbnail": "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Advanced UI/UX Enterprise Series",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "UI/UX",
      "Advanced",
      "Architecture",
      "Enterprise",
      "Scale"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Advanced Paradigms in UI/UX",
        "lessons": [
          "1. High-Performance Design Patterns",
          "2. Asynchronous & Distributed Considerations",
          "3. Security Hardening & Edge Cases"
        ]
      },
      {
        "title": "Module 2: Enterprise Deployment & Reliability",
        "lessons": [
          "1. Automated CI/CD & Observability",
          "2. Scalability Bottlenecks & Benchmarking",
          "3. Capstone Architecture Evaluation"
        ]
      }
    ]
  },
  {
    "id": "lwf-073",
    "title": "UI/UX Real-World Projects & Case Studies",
    "category": "UI/UX",
    "level": "Intermediate",
    "description": "Build complete end-to-end applications and solve realistic engineering challenges utilizing modern UI/UX toolchains.",
    "thumbnail": "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Industry Mentors",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "UI/UX Real-World Case Studies",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "UI/UX",
      "Projects",
      "Hands-on",
      "Case Studies"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Project Scaffolding & Domain Modeling",
        "lessons": [
          "1. Requirements Gathering & Schema Blueprint",
          "2. Core Logic & Service Integration",
          "3. State & Error Resiliency"
        ]
      },
      {
        "title": "Module 2: Deployment & Verification",
        "lessons": [
          "1. Integration Verification",
          "2. Performance Tuning & Caching",
          "3. Production Launch Checklist"
        ]
      }
    ]
  },
  {
    "id": "lwf-074",
    "title": "Figma Essentials & Core Architecture",
    "category": "Figma",
    "level": "Beginner",
    "description": "Comprehensive foundations in Figma. Master key terminology, industry best practices, and hands-on workflows designed for real-world production.",
    "thumbnail": "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Figma Curriculum Playlist",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Figma",
      "Foundations",
      "Engineering",
      "Best Practices"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Foundations of Figma",
        "lessons": [
          "1. Core Concepts & Paradigm Overview",
          "2. Architecture & Environment Setup",
          "3. Fundamental Syntax & Building Blocks"
        ]
      },
      {
        "title": "Module 2: Applied Workflows in Figma",
        "lessons": [
          "1. Hands-on Implementation Patterns",
          "2. Debugging & Performance Considerations",
          "3. Testing & Production Readiness"
        ]
      }
    ]
  },
  {
    "id": "lwf-075",
    "title": "Advanced Figma & Enterprise Engineering",
    "category": "Figma",
    "level": "Advanced",
    "description": "Deep-dive into enterprise patterns, optimization, scaling, and architectural paradigms for senior engineers working with Figma.",
    "thumbnail": "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Advanced Figma Enterprise Series",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Figma",
      "Advanced",
      "Architecture",
      "Enterprise",
      "Scale"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Advanced Paradigms in Figma",
        "lessons": [
          "1. High-Performance Design Patterns",
          "2. Asynchronous & Distributed Considerations",
          "3. Security Hardening & Edge Cases"
        ]
      },
      {
        "title": "Module 2: Enterprise Deployment & Reliability",
        "lessons": [
          "1. Automated CI/CD & Observability",
          "2. Scalability Bottlenecks & Benchmarking",
          "3. Capstone Architecture Evaluation"
        ]
      }
    ]
  },
  {
    "id": "lwf-076",
    "title": "Figma Real-World Projects & Case Studies",
    "category": "Figma",
    "level": "Intermediate",
    "description": "Build complete end-to-end applications and solve realistic engineering challenges utilizing modern Figma toolchains.",
    "thumbnail": "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Industry Mentors",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Figma Real-World Case Studies",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Figma",
      "Projects",
      "Hands-on",
      "Case Studies"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Project Scaffolding & Domain Modeling",
        "lessons": [
          "1. Requirements Gathering & Schema Blueprint",
          "2. Core Logic & Service Integration",
          "3. State & Error Resiliency"
        ]
      },
      {
        "title": "Module 2: Deployment & Verification",
        "lessons": [
          "1. Integration Verification",
          "2. Performance Tuning & Caching",
          "3. Production Launch Checklist"
        ]
      }
    ]
  },
  {
    "id": "lwf-077",
    "title": "Graphic Design Essentials & Core Architecture",
    "category": "Graphic Design",
    "level": "Beginner",
    "description": "Comprehensive foundations in Graphic Design. Master key terminology, industry best practices, and hands-on workflows designed for real-world production.",
    "thumbnail": "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Graphic Design Curriculum Playlist",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Graphic Design",
      "Foundations",
      "Engineering",
      "Best Practices"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Foundations of Graphic Design",
        "lessons": [
          "1. Core Concepts & Paradigm Overview",
          "2. Architecture & Environment Setup",
          "3. Fundamental Syntax & Building Blocks"
        ]
      },
      {
        "title": "Module 2: Applied Workflows in Graphic Design",
        "lessons": [
          "1. Hands-on Implementation Patterns",
          "2. Debugging & Performance Considerations",
          "3. Testing & Production Readiness"
        ]
      }
    ]
  },
  {
    "id": "lwf-078",
    "title": "Advanced Graphic Design & Enterprise Engineering",
    "category": "Graphic Design",
    "level": "Advanced",
    "description": "Deep-dive into enterprise patterns, optimization, scaling, and architectural paradigms for senior engineers working with Graphic Design.",
    "thumbnail": "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Advanced Graphic Design Enterprise Series",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Graphic Design",
      "Advanced",
      "Architecture",
      "Enterprise",
      "Scale"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Advanced Paradigms in Graphic Design",
        "lessons": [
          "1. High-Performance Design Patterns",
          "2. Asynchronous & Distributed Considerations",
          "3. Security Hardening & Edge Cases"
        ]
      },
      {
        "title": "Module 2: Enterprise Deployment & Reliability",
        "lessons": [
          "1. Automated CI/CD & Observability",
          "2. Scalability Bottlenecks & Benchmarking",
          "3. Capstone Architecture Evaluation"
        ]
      }
    ]
  },
  {
    "id": "lwf-079",
    "title": "Front-End Development Essentials & Core Architecture",
    "category": "Front-End Development",
    "level": "Beginner",
    "description": "Comprehensive foundations in Front-End Development. Master key terminology, industry best practices, and hands-on workflows designed for real-world production.",
    "thumbnail": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Front-End Development Curriculum Playlist",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Front-End Development",
      "Foundations",
      "Engineering",
      "Best Practices"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Foundations of Front-End Development",
        "lessons": [
          "1. Core Concepts & Paradigm Overview",
          "2. Architecture & Environment Setup",
          "3. Fundamental Syntax & Building Blocks"
        ]
      },
      {
        "title": "Module 2: Applied Workflows in Front-End Development",
        "lessons": [
          "1. Hands-on Implementation Patterns",
          "2. Debugging & Performance Considerations",
          "3. Testing & Production Readiness"
        ]
      }
    ]
  },
  {
    "id": "lwf-080",
    "title": "Advanced Front-End Development & Enterprise Engineering",
    "category": "Front-End Development",
    "level": "Advanced",
    "description": "Deep-dive into enterprise patterns, optimization, scaling, and architectural paradigms for senior engineers working with Front-End Development.",
    "thumbnail": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Advanced Front-End Development Enterprise Series",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Front-End Development",
      "Advanced",
      "Architecture",
      "Enterprise",
      "Scale"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Advanced Paradigms in Front-End Development",
        "lessons": [
          "1. High-Performance Design Patterns",
          "2. Asynchronous & Distributed Considerations",
          "3. Security Hardening & Edge Cases"
        ]
      },
      {
        "title": "Module 2: Enterprise Deployment & Reliability",
        "lessons": [
          "1. Automated CI/CD & Observability",
          "2. Scalability Bottlenecks & Benchmarking",
          "3. Capstone Architecture Evaluation"
        ]
      }
    ]
  },
  {
    "id": "lwf-081",
    "title": "Front-End Development Real-World Projects & Case Studies",
    "category": "Front-End Development",
    "level": "Intermediate",
    "description": "Build complete end-to-end applications and solve realistic engineering challenges utilizing modern Front-End Development toolchains.",
    "thumbnail": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Industry Mentors",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Front-End Development Real-World Case Studies",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Front-End Development",
      "Projects",
      "Hands-on",
      "Case Studies"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Project Scaffolding & Domain Modeling",
        "lessons": [
          "1. Requirements Gathering & Schema Blueprint",
          "2. Core Logic & Service Integration",
          "3. State & Error Resiliency"
        ]
      },
      {
        "title": "Module 2: Deployment & Verification",
        "lessons": [
          "1. Integration Verification",
          "2. Performance Tuning & Caching",
          "3. Production Launch Checklist"
        ]
      }
    ]
  },
  {
    "id": "lwf-082",
    "title": "React Essentials & Core Architecture",
    "category": "React",
    "level": "Beginner",
    "description": "Comprehensive foundations in React. Master key terminology, industry best practices, and hands-on workflows designed for real-world production.",
    "thumbnail": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    "instructor": "The Net Ninja",
    "youtubeChannel": "The Net Ninja",
    "playlistId": "PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d",
    "playlistUrl": "https://www.youtube.com/playlist?list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d",
    "playlistTitle": "Full Modern React Tutorial",
    "playlistStatus": "verified",
    "certificateEligibility": true,
    "tags": [
      "React",
      "Foundations",
      "Engineering",
      "Best Practices"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Foundations of React",
        "lessons": [
          "1. Core Concepts & Paradigm Overview",
          "2. Architecture & Environment Setup",
          "3. Fundamental Syntax & Building Blocks"
        ]
      },
      {
        "title": "Module 2: Applied Workflows in React",
        "lessons": [
          "1. Hands-on Implementation Patterns",
          "2. Debugging & Performance Considerations",
          "3. Testing & Production Readiness"
        ]
      }
    ]
  },
  {
    "id": "lwf-083",
    "title": "Advanced React & Enterprise Engineering",
    "category": "React",
    "level": "Advanced",
    "description": "Deep-dive into enterprise patterns, optimization, scaling, and architectural paradigms for senior engineers working with React.",
    "thumbnail": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Advanced React Enterprise Series",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "React",
      "Advanced",
      "Architecture",
      "Enterprise",
      "Scale"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Advanced Paradigms in React",
        "lessons": [
          "1. High-Performance Design Patterns",
          "2. Asynchronous & Distributed Considerations",
          "3. Security Hardening & Edge Cases"
        ]
      },
      {
        "title": "Module 2: Enterprise Deployment & Reliability",
        "lessons": [
          "1. Automated CI/CD & Observability",
          "2. Scalability Bottlenecks & Benchmarking",
          "3. Capstone Architecture Evaluation"
        ]
      }
    ]
  },
  {
    "id": "lwf-084",
    "title": "React Real-World Projects & Case Studies",
    "category": "React",
    "level": "Intermediate",
    "description": "Build complete end-to-end applications and solve realistic engineering challenges utilizing modern React toolchains.",
    "thumbnail": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Industry Mentors",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "React Real-World Case Studies",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "React",
      "Projects",
      "Hands-on",
      "Case Studies"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Project Scaffolding & Domain Modeling",
        "lessons": [
          "1. Requirements Gathering & Schema Blueprint",
          "2. Core Logic & Service Integration",
          "3. State & Error Resiliency"
        ]
      },
      {
        "title": "Module 2: Deployment & Verification",
        "lessons": [
          "1. Integration Verification",
          "2. Performance Tuning & Caching",
          "3. Production Launch Checklist"
        ]
      }
    ]
  },
  {
    "id": "lwf-085",
    "title": "Next.js Essentials & Core Architecture",
    "category": "Next.js",
    "level": "Beginner",
    "description": "Comprehensive foundations in Next.js. Master key terminology, industry best practices, and hands-on workflows designed for real-world production.",
    "thumbnail": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Next.js Curriculum Playlist",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Next.js",
      "Foundations",
      "Engineering",
      "Best Practices"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Foundations of Next.js",
        "lessons": [
          "1. Core Concepts & Paradigm Overview",
          "2. Architecture & Environment Setup",
          "3. Fundamental Syntax & Building Blocks"
        ]
      },
      {
        "title": "Module 2: Applied Workflows in Next.js",
        "lessons": [
          "1. Hands-on Implementation Patterns",
          "2. Debugging & Performance Considerations",
          "3. Testing & Production Readiness"
        ]
      }
    ]
  },
  {
    "id": "lwf-086",
    "title": "Advanced Next.js & Enterprise Engineering",
    "category": "Next.js",
    "level": "Advanced",
    "description": "Deep-dive into enterprise patterns, optimization, scaling, and architectural paradigms for senior engineers working with Next.js.",
    "thumbnail": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Advanced Next.js Enterprise Series",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Next.js",
      "Advanced",
      "Architecture",
      "Enterprise",
      "Scale"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Advanced Paradigms in Next.js",
        "lessons": [
          "1. High-Performance Design Patterns",
          "2. Asynchronous & Distributed Considerations",
          "3. Security Hardening & Edge Cases"
        ]
      },
      {
        "title": "Module 2: Enterprise Deployment & Reliability",
        "lessons": [
          "1. Automated CI/CD & Observability",
          "2. Scalability Bottlenecks & Benchmarking",
          "3. Capstone Architecture Evaluation"
        ]
      }
    ]
  },
  {
    "id": "lwf-087",
    "title": "Next.js Real-World Projects & Case Studies",
    "category": "Next.js",
    "level": "Intermediate",
    "description": "Build complete end-to-end applications and solve realistic engineering challenges utilizing modern Next.js toolchains.",
    "thumbnail": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Industry Mentors",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Next.js Real-World Case Studies",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Next.js",
      "Projects",
      "Hands-on",
      "Case Studies"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Project Scaffolding & Domain Modeling",
        "lessons": [
          "1. Requirements Gathering & Schema Blueprint",
          "2. Core Logic & Service Integration",
          "3. State & Error Resiliency"
        ]
      },
      {
        "title": "Module 2: Deployment & Verification",
        "lessons": [
          "1. Integration Verification",
          "2. Performance Tuning & Caching",
          "3. Production Launch Checklist"
        ]
      }
    ]
  },
  {
    "id": "lwf-088",
    "title": "Angular Essentials & Core Architecture",
    "category": "Angular",
    "level": "Beginner",
    "description": "Comprehensive foundations in Angular. Master key terminology, industry best practices, and hands-on workflows designed for real-world production.",
    "thumbnail": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Angular Curriculum Playlist",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Angular",
      "Foundations",
      "Engineering",
      "Best Practices"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Foundations of Angular",
        "lessons": [
          "1. Core Concepts & Paradigm Overview",
          "2. Architecture & Environment Setup",
          "3. Fundamental Syntax & Building Blocks"
        ]
      },
      {
        "title": "Module 2: Applied Workflows in Angular",
        "lessons": [
          "1. Hands-on Implementation Patterns",
          "2. Debugging & Performance Considerations",
          "3. Testing & Production Readiness"
        ]
      }
    ]
  },
  {
    "id": "lwf-089",
    "title": "Advanced Angular & Enterprise Engineering",
    "category": "Angular",
    "level": "Advanced",
    "description": "Deep-dive into enterprise patterns, optimization, scaling, and architectural paradigms for senior engineers working with Angular.",
    "thumbnail": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Advanced Angular Enterprise Series",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Angular",
      "Advanced",
      "Architecture",
      "Enterprise",
      "Scale"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Advanced Paradigms in Angular",
        "lessons": [
          "1. High-Performance Design Patterns",
          "2. Asynchronous & Distributed Considerations",
          "3. Security Hardening & Edge Cases"
        ]
      },
      {
        "title": "Module 2: Enterprise Deployment & Reliability",
        "lessons": [
          "1. Automated CI/CD & Observability",
          "2. Scalability Bottlenecks & Benchmarking",
          "3. Capstone Architecture Evaluation"
        ]
      }
    ]
  },
  {
    "id": "lwf-090",
    "title": "Angular Real-World Projects & Case Studies",
    "category": "Angular",
    "level": "Intermediate",
    "description": "Build complete end-to-end applications and solve realistic engineering challenges utilizing modern Angular toolchains.",
    "thumbnail": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Industry Mentors",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Angular Real-World Case Studies",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Angular",
      "Projects",
      "Hands-on",
      "Case Studies"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Project Scaffolding & Domain Modeling",
        "lessons": [
          "1. Requirements Gathering & Schema Blueprint",
          "2. Core Logic & Service Integration",
          "3. State & Error Resiliency"
        ]
      },
      {
        "title": "Module 2: Deployment & Verification",
        "lessons": [
          "1. Integration Verification",
          "2. Performance Tuning & Caching",
          "3. Production Launch Checklist"
        ]
      }
    ]
  },
  {
    "id": "lwf-091",
    "title": "Vue Essentials & Core Architecture",
    "category": "Vue",
    "level": "Beginner",
    "description": "Comprehensive foundations in Vue. Master key terminology, industry best practices, and hands-on workflows designed for real-world production.",
    "thumbnail": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Vue Curriculum Playlist",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Vue",
      "Foundations",
      "Engineering",
      "Best Practices"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Foundations of Vue",
        "lessons": [
          "1. Core Concepts & Paradigm Overview",
          "2. Architecture & Environment Setup",
          "3. Fundamental Syntax & Building Blocks"
        ]
      },
      {
        "title": "Module 2: Applied Workflows in Vue",
        "lessons": [
          "1. Hands-on Implementation Patterns",
          "2. Debugging & Performance Considerations",
          "3. Testing & Production Readiness"
        ]
      }
    ]
  },
  {
    "id": "lwf-092",
    "title": "Advanced Vue & Enterprise Engineering",
    "category": "Vue",
    "level": "Advanced",
    "description": "Deep-dive into enterprise patterns, optimization, scaling, and architectural paradigms for senior engineers working with Vue.",
    "thumbnail": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Advanced Vue Enterprise Series",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Vue",
      "Advanced",
      "Architecture",
      "Enterprise",
      "Scale"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Advanced Paradigms in Vue",
        "lessons": [
          "1. High-Performance Design Patterns",
          "2. Asynchronous & Distributed Considerations",
          "3. Security Hardening & Edge Cases"
        ]
      },
      {
        "title": "Module 2: Enterprise Deployment & Reliability",
        "lessons": [
          "1. Automated CI/CD & Observability",
          "2. Scalability Bottlenecks & Benchmarking",
          "3. Capstone Architecture Evaluation"
        ]
      }
    ]
  },
  {
    "id": "lwf-093",
    "title": "Vue Real-World Projects & Case Studies",
    "category": "Vue",
    "level": "Intermediate",
    "description": "Build complete end-to-end applications and solve realistic engineering challenges utilizing modern Vue toolchains.",
    "thumbnail": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Industry Mentors",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Vue Real-World Case Studies",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Vue",
      "Projects",
      "Hands-on",
      "Case Studies"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Project Scaffolding & Domain Modeling",
        "lessons": [
          "1. Requirements Gathering & Schema Blueprint",
          "2. Core Logic & Service Integration",
          "3. State & Error Resiliency"
        ]
      },
      {
        "title": "Module 2: Deployment & Verification",
        "lessons": [
          "1. Integration Verification",
          "2. Performance Tuning & Caching",
          "3. Production Launch Checklist"
        ]
      }
    ]
  },
  {
    "id": "lwf-094",
    "title": "Back-End Development Essentials & Core Architecture",
    "category": "Back-End Development",
    "level": "Beginner",
    "description": "Comprehensive foundations in Back-End Development. Master key terminology, industry best practices, and hands-on workflows designed for real-world production.",
    "thumbnail": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Back-End Development Curriculum Playlist",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Back-End Development",
      "Foundations",
      "Engineering",
      "Best Practices"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Foundations of Back-End Development",
        "lessons": [
          "1. Core Concepts & Paradigm Overview",
          "2. Architecture & Environment Setup",
          "3. Fundamental Syntax & Building Blocks"
        ]
      },
      {
        "title": "Module 2: Applied Workflows in Back-End Development",
        "lessons": [
          "1. Hands-on Implementation Patterns",
          "2. Debugging & Performance Considerations",
          "3. Testing & Production Readiness"
        ]
      }
    ]
  },
  {
    "id": "lwf-095",
    "title": "Advanced Back-End Development & Enterprise Engineering",
    "category": "Back-End Development",
    "level": "Advanced",
    "description": "Deep-dive into enterprise patterns, optimization, scaling, and architectural paradigms for senior engineers working with Back-End Development.",
    "thumbnail": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Advanced Back-End Development Enterprise Series",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Back-End Development",
      "Advanced",
      "Architecture",
      "Enterprise",
      "Scale"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Advanced Paradigms in Back-End Development",
        "lessons": [
          "1. High-Performance Design Patterns",
          "2. Asynchronous & Distributed Considerations",
          "3. Security Hardening & Edge Cases"
        ]
      },
      {
        "title": "Module 2: Enterprise Deployment & Reliability",
        "lessons": [
          "1. Automated CI/CD & Observability",
          "2. Scalability Bottlenecks & Benchmarking",
          "3. Capstone Architecture Evaluation"
        ]
      }
    ]
  },
  {
    "id": "lwf-096",
    "title": "Back-End Development Real-World Projects & Case Studies",
    "category": "Back-End Development",
    "level": "Intermediate",
    "description": "Build complete end-to-end applications and solve realistic engineering challenges utilizing modern Back-End Development toolchains.",
    "thumbnail": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Industry Mentors",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Back-End Development Real-World Case Studies",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Back-End Development",
      "Projects",
      "Hands-on",
      "Case Studies"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Project Scaffolding & Domain Modeling",
        "lessons": [
          "1. Requirements Gathering & Schema Blueprint",
          "2. Core Logic & Service Integration",
          "3. State & Error Resiliency"
        ]
      },
      {
        "title": "Module 2: Deployment & Verification",
        "lessons": [
          "1. Integration Verification",
          "2. Performance Tuning & Caching",
          "3. Production Launch Checklist"
        ]
      }
    ]
  },
  {
    "id": "lwf-097",
    "title": "Node.js Essentials & Core Architecture",
    "category": "Node.js",
    "level": "Beginner",
    "description": "Comprehensive foundations in Node.js. Master key terminology, industry best practices, and hands-on workflows designed for real-world production.",
    "thumbnail": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Node.js Curriculum Playlist",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Node.js",
      "Foundations",
      "Engineering",
      "Best Practices"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Foundations of Node.js",
        "lessons": [
          "1. Core Concepts & Paradigm Overview",
          "2. Architecture & Environment Setup",
          "3. Fundamental Syntax & Building Blocks"
        ]
      },
      {
        "title": "Module 2: Applied Workflows in Node.js",
        "lessons": [
          "1. Hands-on Implementation Patterns",
          "2. Debugging & Performance Considerations",
          "3. Testing & Production Readiness"
        ]
      }
    ]
  },
  {
    "id": "lwf-098",
    "title": "Advanced Node.js & Enterprise Engineering",
    "category": "Node.js",
    "level": "Advanced",
    "description": "Deep-dive into enterprise patterns, optimization, scaling, and architectural paradigms for senior engineers working with Node.js.",
    "thumbnail": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Advanced Node.js Enterprise Series",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Node.js",
      "Advanced",
      "Architecture",
      "Enterprise",
      "Scale"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Advanced Paradigms in Node.js",
        "lessons": [
          "1. High-Performance Design Patterns",
          "2. Asynchronous & Distributed Considerations",
          "3. Security Hardening & Edge Cases"
        ]
      },
      {
        "title": "Module 2: Enterprise Deployment & Reliability",
        "lessons": [
          "1. Automated CI/CD & Observability",
          "2. Scalability Bottlenecks & Benchmarking",
          "3. Capstone Architecture Evaluation"
        ]
      }
    ]
  },
  {
    "id": "lwf-099",
    "title": "Node.js Real-World Projects & Case Studies",
    "category": "Node.js",
    "level": "Intermediate",
    "description": "Build complete end-to-end applications and solve realistic engineering challenges utilizing modern Node.js toolchains.",
    "thumbnail": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Industry Mentors",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Node.js Real-World Case Studies",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Node.js",
      "Projects",
      "Hands-on",
      "Case Studies"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Project Scaffolding & Domain Modeling",
        "lessons": [
          "1. Requirements Gathering & Schema Blueprint",
          "2. Core Logic & Service Integration",
          "3. State & Error Resiliency"
        ]
      },
      {
        "title": "Module 2: Deployment & Verification",
        "lessons": [
          "1. Integration Verification",
          "2. Performance Tuning & Caching",
          "3. Production Launch Checklist"
        ]
      }
    ]
  },
  {
    "id": "lwf-100",
    "title": "Django Essentials & Core Architecture",
    "category": "Django",
    "level": "Beginner",
    "description": "Comprehensive foundations in Django. Master key terminology, industry best practices, and hands-on workflows designed for real-world production.",
    "thumbnail": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Django Curriculum Playlist",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Django",
      "Foundations",
      "Engineering",
      "Best Practices"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Foundations of Django",
        "lessons": [
          "1. Core Concepts & Paradigm Overview",
          "2. Architecture & Environment Setup",
          "3. Fundamental Syntax & Building Blocks"
        ]
      },
      {
        "title": "Module 2: Applied Workflows in Django",
        "lessons": [
          "1. Hands-on Implementation Patterns",
          "2. Debugging & Performance Considerations",
          "3. Testing & Production Readiness"
        ]
      }
    ]
  },
  {
    "id": "lwf-101",
    "title": "Advanced Django & Enterprise Engineering",
    "category": "Django",
    "level": "Advanced",
    "description": "Deep-dive into enterprise patterns, optimization, scaling, and architectural paradigms for senior engineers working with Django.",
    "thumbnail": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Advanced Django Enterprise Series",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Django",
      "Advanced",
      "Architecture",
      "Enterprise",
      "Scale"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Advanced Paradigms in Django",
        "lessons": [
          "1. High-Performance Design Patterns",
          "2. Asynchronous & Distributed Considerations",
          "3. Security Hardening & Edge Cases"
        ]
      },
      {
        "title": "Module 2: Enterprise Deployment & Reliability",
        "lessons": [
          "1. Automated CI/CD & Observability",
          "2. Scalability Bottlenecks & Benchmarking",
          "3. Capstone Architecture Evaluation"
        ]
      }
    ]
  },
  {
    "id": "lwf-102",
    "title": "Django Real-World Projects & Case Studies",
    "category": "Django",
    "level": "Intermediate",
    "description": "Build complete end-to-end applications and solve realistic engineering challenges utilizing modern Django toolchains.",
    "thumbnail": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Industry Mentors",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Django Real-World Case Studies",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Django",
      "Projects",
      "Hands-on",
      "Case Studies"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Project Scaffolding & Domain Modeling",
        "lessons": [
          "1. Requirements Gathering & Schema Blueprint",
          "2. Core Logic & Service Integration",
          "3. State & Error Resiliency"
        ]
      },
      {
        "title": "Module 2: Deployment & Verification",
        "lessons": [
          "1. Integration Verification",
          "2. Performance Tuning & Caching",
          "3. Production Launch Checklist"
        ]
      }
    ]
  },
  {
    "id": "lwf-103",
    "title": "Flask Essentials & Core Architecture",
    "category": "Flask",
    "level": "Beginner",
    "description": "Comprehensive foundations in Flask. Master key terminology, industry best practices, and hands-on workflows designed for real-world production.",
    "thumbnail": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Flask Curriculum Playlist",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Flask",
      "Foundations",
      "Engineering",
      "Best Practices"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Foundations of Flask",
        "lessons": [
          "1. Core Concepts & Paradigm Overview",
          "2. Architecture & Environment Setup",
          "3. Fundamental Syntax & Building Blocks"
        ]
      },
      {
        "title": "Module 2: Applied Workflows in Flask",
        "lessons": [
          "1. Hands-on Implementation Patterns",
          "2. Debugging & Performance Considerations",
          "3. Testing & Production Readiness"
        ]
      }
    ]
  },
  {
    "id": "lwf-104",
    "title": "Advanced Flask & Enterprise Engineering",
    "category": "Flask",
    "level": "Advanced",
    "description": "Deep-dive into enterprise patterns, optimization, scaling, and architectural paradigms for senior engineers working with Flask.",
    "thumbnail": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Advanced Flask Enterprise Series",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Flask",
      "Advanced",
      "Architecture",
      "Enterprise",
      "Scale"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Advanced Paradigms in Flask",
        "lessons": [
          "1. High-Performance Design Patterns",
          "2. Asynchronous & Distributed Considerations",
          "3. Security Hardening & Edge Cases"
        ]
      },
      {
        "title": "Module 2: Enterprise Deployment & Reliability",
        "lessons": [
          "1. Automated CI/CD & Observability",
          "2. Scalability Bottlenecks & Benchmarking",
          "3. Capstone Architecture Evaluation"
        ]
      }
    ]
  },
  {
    "id": "lwf-105",
    "title": "Full Stack Development Essentials & Core Architecture",
    "category": "Full Stack Development",
    "level": "Beginner",
    "description": "Comprehensive foundations in Full Stack Development. Master key terminology, industry best practices, and hands-on workflows designed for real-world production.",
    "thumbnail": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Full Stack Development Curriculum Playlist",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Full Stack Development",
      "Foundations",
      "Engineering",
      "Best Practices"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Foundations of Full Stack Development",
        "lessons": [
          "1. Core Concepts & Paradigm Overview",
          "2. Architecture & Environment Setup",
          "3. Fundamental Syntax & Building Blocks"
        ]
      },
      {
        "title": "Module 2: Applied Workflows in Full Stack Development",
        "lessons": [
          "1. Hands-on Implementation Patterns",
          "2. Debugging & Performance Considerations",
          "3. Testing & Production Readiness"
        ]
      }
    ]
  },
  {
    "id": "lwf-106",
    "title": "Advanced Full Stack Development & Enterprise Engineering",
    "category": "Full Stack Development",
    "level": "Advanced",
    "description": "Deep-dive into enterprise patterns, optimization, scaling, and architectural paradigms for senior engineers working with Full Stack Development.",
    "thumbnail": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Advanced Full Stack Development Enterprise Series",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Full Stack Development",
      "Advanced",
      "Architecture",
      "Enterprise",
      "Scale"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Advanced Paradigms in Full Stack Development",
        "lessons": [
          "1. High-Performance Design Patterns",
          "2. Asynchronous & Distributed Considerations",
          "3. Security Hardening & Edge Cases"
        ]
      },
      {
        "title": "Module 2: Enterprise Deployment & Reliability",
        "lessons": [
          "1. Automated CI/CD & Observability",
          "2. Scalability Bottlenecks & Benchmarking",
          "3. Capstone Architecture Evaluation"
        ]
      }
    ]
  },
  {
    "id": "lwf-107",
    "title": "Full Stack Development Real-World Projects & Case Studies",
    "category": "Full Stack Development",
    "level": "Intermediate",
    "description": "Build complete end-to-end applications and solve realistic engineering challenges utilizing modern Full Stack Development toolchains.",
    "thumbnail": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Industry Mentors",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Full Stack Development Real-World Case Studies",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Full Stack Development",
      "Projects",
      "Hands-on",
      "Case Studies"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Project Scaffolding & Domain Modeling",
        "lessons": [
          "1. Requirements Gathering & Schema Blueprint",
          "2. Core Logic & Service Integration",
          "3. State & Error Resiliency"
        ]
      },
      {
        "title": "Module 2: Deployment & Verification",
        "lessons": [
          "1. Integration Verification",
          "2. Performance Tuning & Caching",
          "3. Production Launch Checklist"
        ]
      }
    ]
  },
  {
    "id": "lwf-108",
    "title": "Software Engineering Essentials & Core Architecture",
    "category": "Software Engineering",
    "level": "Beginner",
    "description": "Comprehensive foundations in Software Engineering. Master key terminology, industry best practices, and hands-on workflows designed for real-world production.",
    "thumbnail": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Software Engineering Curriculum Playlist",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Software Engineering",
      "Foundations",
      "Engineering",
      "Best Practices"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Foundations of Software Engineering",
        "lessons": [
          "1. Core Concepts & Paradigm Overview",
          "2. Architecture & Environment Setup",
          "3. Fundamental Syntax & Building Blocks"
        ]
      },
      {
        "title": "Module 2: Applied Workflows in Software Engineering",
        "lessons": [
          "1. Hands-on Implementation Patterns",
          "2. Debugging & Performance Considerations",
          "3. Testing & Production Readiness"
        ]
      }
    ]
  },
  {
    "id": "lwf-109",
    "title": "Advanced Software Engineering & Enterprise Engineering",
    "category": "Software Engineering",
    "level": "Advanced",
    "description": "Deep-dive into enterprise patterns, optimization, scaling, and architectural paradigms for senior engineers working with Software Engineering.",
    "thumbnail": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Advanced Software Engineering Enterprise Series",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Software Engineering",
      "Advanced",
      "Architecture",
      "Enterprise",
      "Scale"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Advanced Paradigms in Software Engineering",
        "lessons": [
          "1. High-Performance Design Patterns",
          "2. Asynchronous & Distributed Considerations",
          "3. Security Hardening & Edge Cases"
        ]
      },
      {
        "title": "Module 2: Enterprise Deployment & Reliability",
        "lessons": [
          "1. Automated CI/CD & Observability",
          "2. Scalability Bottlenecks & Benchmarking",
          "3. Capstone Architecture Evaluation"
        ]
      }
    ]
  },
  {
    "id": "lwf-110",
    "title": "Software Engineering Real-World Projects & Case Studies",
    "category": "Software Engineering",
    "level": "Intermediate",
    "description": "Build complete end-to-end applications and solve realistic engineering challenges utilizing modern Software Engineering toolchains.",
    "thumbnail": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Industry Mentors",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Software Engineering Real-World Case Studies",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Software Engineering",
      "Projects",
      "Hands-on",
      "Case Studies"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Project Scaffolding & Domain Modeling",
        "lessons": [
          "1. Requirements Gathering & Schema Blueprint",
          "2. Core Logic & Service Integration",
          "3. State & Error Resiliency"
        ]
      },
      {
        "title": "Module 2: Deployment & Verification",
        "lessons": [
          "1. Integration Verification",
          "2. Performance Tuning & Caching",
          "3. Production Launch Checklist"
        ]
      }
    ]
  },
  {
    "id": "lwf-111",
    "title": "System Design Essentials & Core Architecture",
    "category": "System Design",
    "level": "Beginner",
    "description": "Comprehensive foundations in System Design. Master key terminology, industry best practices, and hands-on workflows designed for real-world production.",
    "thumbnail": "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "System Design Curriculum Playlist",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "System Design",
      "Foundations",
      "Engineering",
      "Best Practices"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Foundations of System Design",
        "lessons": [
          "1. Core Concepts & Paradigm Overview",
          "2. Architecture & Environment Setup",
          "3. Fundamental Syntax & Building Blocks"
        ]
      },
      {
        "title": "Module 2: Applied Workflows in System Design",
        "lessons": [
          "1. Hands-on Implementation Patterns",
          "2. Debugging & Performance Considerations",
          "3. Testing & Production Readiness"
        ]
      }
    ]
  },
  {
    "id": "lwf-112",
    "title": "Advanced System Design & Enterprise Engineering",
    "category": "System Design",
    "level": "Advanced",
    "description": "Deep-dive into enterprise patterns, optimization, scaling, and architectural paradigms for senior engineers working with System Design.",
    "thumbnail": "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Advanced System Design Enterprise Series",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "System Design",
      "Advanced",
      "Architecture",
      "Enterprise",
      "Scale"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Advanced Paradigms in System Design",
        "lessons": [
          "1. High-Performance Design Patterns",
          "2. Asynchronous & Distributed Considerations",
          "3. Security Hardening & Edge Cases"
        ]
      },
      {
        "title": "Module 2: Enterprise Deployment & Reliability",
        "lessons": [
          "1. Automated CI/CD & Observability",
          "2. Scalability Bottlenecks & Benchmarking",
          "3. Capstone Architecture Evaluation"
        ]
      }
    ]
  },
  {
    "id": "lwf-113",
    "title": "System Design Real-World Projects & Case Studies",
    "category": "System Design",
    "level": "Intermediate",
    "description": "Build complete end-to-end applications and solve realistic engineering challenges utilizing modern System Design toolchains.",
    "thumbnail": "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Industry Mentors",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "System Design Real-World Case Studies",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "System Design",
      "Projects",
      "Hands-on",
      "Case Studies"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Project Scaffolding & Domain Modeling",
        "lessons": [
          "1. Requirements Gathering & Schema Blueprint",
          "2. Core Logic & Service Integration",
          "3. State & Error Resiliency"
        ]
      },
      {
        "title": "Module 2: Deployment & Verification",
        "lessons": [
          "1. Integration Verification",
          "2. Performance Tuning & Caching",
          "3. Production Launch Checklist"
        ]
      }
    ]
  },
  {
    "id": "lwf-114",
    "title": "DevOps Essentials & Core Architecture",
    "category": "DevOps",
    "level": "Beginner",
    "description": "Comprehensive foundations in DevOps. Master key terminology, industry best practices, and hands-on workflows designed for real-world production.",
    "thumbnail": "https://images.unsplash.com/photo-1618401471353-b98aedd04e11?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "DevOps Curriculum Playlist",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "DevOps",
      "Foundations",
      "Engineering",
      "Best Practices"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Foundations of DevOps",
        "lessons": [
          "1. Core Concepts & Paradigm Overview",
          "2. Architecture & Environment Setup",
          "3. Fundamental Syntax & Building Blocks"
        ]
      },
      {
        "title": "Module 2: Applied Workflows in DevOps",
        "lessons": [
          "1. Hands-on Implementation Patterns",
          "2. Debugging & Performance Considerations",
          "3. Testing & Production Readiness"
        ]
      }
    ]
  },
  {
    "id": "lwf-115",
    "title": "Advanced DevOps & Enterprise Engineering",
    "category": "DevOps",
    "level": "Advanced",
    "description": "Deep-dive into enterprise patterns, optimization, scaling, and architectural paradigms for senior engineers working with DevOps.",
    "thumbnail": "https://images.unsplash.com/photo-1618401471353-b98aedd04e11?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Advanced DevOps Enterprise Series",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "DevOps",
      "Advanced",
      "Architecture",
      "Enterprise",
      "Scale"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Advanced Paradigms in DevOps",
        "lessons": [
          "1. High-Performance Design Patterns",
          "2. Asynchronous & Distributed Considerations",
          "3. Security Hardening & Edge Cases"
        ]
      },
      {
        "title": "Module 2: Enterprise Deployment & Reliability",
        "lessons": [
          "1. Automated CI/CD & Observability",
          "2. Scalability Bottlenecks & Benchmarking",
          "3. Capstone Architecture Evaluation"
        ]
      }
    ]
  },
  {
    "id": "lwf-116",
    "title": "DevOps Real-World Projects & Case Studies",
    "category": "DevOps",
    "level": "Intermediate",
    "description": "Build complete end-to-end applications and solve realistic engineering challenges utilizing modern DevOps toolchains.",
    "thumbnail": "https://images.unsplash.com/photo-1618401471353-b98aedd04e11?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Industry Mentors",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "DevOps Real-World Case Studies",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "DevOps",
      "Projects",
      "Hands-on",
      "Case Studies"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Project Scaffolding & Domain Modeling",
        "lessons": [
          "1. Requirements Gathering & Schema Blueprint",
          "2. Core Logic & Service Integration",
          "3. State & Error Resiliency"
        ]
      },
      {
        "title": "Module 2: Deployment & Verification",
        "lessons": [
          "1. Integration Verification",
          "2. Performance Tuning & Caching",
          "3. Production Launch Checklist"
        ]
      }
    ]
  },
  {
    "id": "lwf-117",
    "title": "Docker Essentials & Core Architecture",
    "category": "Docker",
    "level": "Beginner",
    "description": "Comprehensive foundations in Docker. Master key terminology, industry best practices, and hands-on workflows designed for real-world production.",
    "thumbnail": "https://images.unsplash.com/photo-1618401471353-b98aedd04e11?w=800&auto=format&fit=crop&q=80",
    "instructor": "freeCodeCamp.org",
    "youtubeChannel": "freeCodeCamp.org",
    "playlistId": "PLWKjhJtqVAbkFiqHnNaxpOPhh9tSWMXIF",
    "playlistUrl": "https://www.youtube.com/playlist?list=PLWKjhJtqVAbkFiqHnNaxpOPhh9tSWMXIF",
    "playlistTitle": "Docker and Containers Fundamentals",
    "playlistStatus": "verified",
    "certificateEligibility": true,
    "tags": [
      "Docker",
      "Foundations",
      "Engineering",
      "Best Practices"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Foundations of Docker",
        "lessons": [
          "1. Core Concepts & Paradigm Overview",
          "2. Architecture & Environment Setup",
          "3. Fundamental Syntax & Building Blocks"
        ]
      },
      {
        "title": "Module 2: Applied Workflows in Docker",
        "lessons": [
          "1. Hands-on Implementation Patterns",
          "2. Debugging & Performance Considerations",
          "3. Testing & Production Readiness"
        ]
      }
    ]
  },
  {
    "id": "lwf-118",
    "title": "Advanced Docker & Enterprise Engineering",
    "category": "Docker",
    "level": "Advanced",
    "description": "Deep-dive into enterprise patterns, optimization, scaling, and architectural paradigms for senior engineers working with Docker.",
    "thumbnail": "https://images.unsplash.com/photo-1618401471353-b98aedd04e11?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Advanced Docker Enterprise Series",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Docker",
      "Advanced",
      "Architecture",
      "Enterprise",
      "Scale"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Advanced Paradigms in Docker",
        "lessons": [
          "1. High-Performance Design Patterns",
          "2. Asynchronous & Distributed Considerations",
          "3. Security Hardening & Edge Cases"
        ]
      },
      {
        "title": "Module 2: Enterprise Deployment & Reliability",
        "lessons": [
          "1. Automated CI/CD & Observability",
          "2. Scalability Bottlenecks & Benchmarking",
          "3. Capstone Architecture Evaluation"
        ]
      }
    ]
  },
  {
    "id": "lwf-119",
    "title": "Docker Real-World Projects & Case Studies",
    "category": "Docker",
    "level": "Intermediate",
    "description": "Build complete end-to-end applications and solve realistic engineering challenges utilizing modern Docker toolchains.",
    "thumbnail": "https://images.unsplash.com/photo-1618401471353-b98aedd04e11?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Industry Mentors",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Docker Real-World Case Studies",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Docker",
      "Projects",
      "Hands-on",
      "Case Studies"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Project Scaffolding & Domain Modeling",
        "lessons": [
          "1. Requirements Gathering & Schema Blueprint",
          "2. Core Logic & Service Integration",
          "3. State & Error Resiliency"
        ]
      },
      {
        "title": "Module 2: Deployment & Verification",
        "lessons": [
          "1. Integration Verification",
          "2. Performance Tuning & Caching",
          "3. Production Launch Checklist"
        ]
      }
    ]
  },
  {
    "id": "lwf-120",
    "title": "Kubernetes Essentials & Core Architecture",
    "category": "Kubernetes",
    "level": "Beginner",
    "description": "Comprehensive foundations in Kubernetes. Master key terminology, industry best practices, and hands-on workflows designed for real-world production.",
    "thumbnail": "https://images.unsplash.com/photo-1618401471353-b98aedd04e11?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Kubernetes Curriculum Playlist",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Kubernetes",
      "Foundations",
      "Engineering",
      "Best Practices"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Foundations of Kubernetes",
        "lessons": [
          "1. Core Concepts & Paradigm Overview",
          "2. Architecture & Environment Setup",
          "3. Fundamental Syntax & Building Blocks"
        ]
      },
      {
        "title": "Module 2: Applied Workflows in Kubernetes",
        "lessons": [
          "1. Hands-on Implementation Patterns",
          "2. Debugging & Performance Considerations",
          "3. Testing & Production Readiness"
        ]
      }
    ]
  },
  {
    "id": "lwf-121",
    "title": "Advanced Kubernetes & Enterprise Engineering",
    "category": "Kubernetes",
    "level": "Advanced",
    "description": "Deep-dive into enterprise patterns, optimization, scaling, and architectural paradigms for senior engineers working with Kubernetes.",
    "thumbnail": "https://images.unsplash.com/photo-1618401471353-b98aedd04e11?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Advanced Kubernetes Enterprise Series",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Kubernetes",
      "Advanced",
      "Architecture",
      "Enterprise",
      "Scale"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Advanced Paradigms in Kubernetes",
        "lessons": [
          "1. High-Performance Design Patterns",
          "2. Asynchronous & Distributed Considerations",
          "3. Security Hardening & Edge Cases"
        ]
      },
      {
        "title": "Module 2: Enterprise Deployment & Reliability",
        "lessons": [
          "1. Automated CI/CD & Observability",
          "2. Scalability Bottlenecks & Benchmarking",
          "3. Capstone Architecture Evaluation"
        ]
      }
    ]
  },
  {
    "id": "lwf-122",
    "title": "Kubernetes Real-World Projects & Case Studies",
    "category": "Kubernetes",
    "level": "Intermediate",
    "description": "Build complete end-to-end applications and solve realistic engineering challenges utilizing modern Kubernetes toolchains.",
    "thumbnail": "https://images.unsplash.com/photo-1618401471353-b98aedd04e11?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Industry Mentors",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Kubernetes Real-World Case Studies",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Kubernetes",
      "Projects",
      "Hands-on",
      "Case Studies"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Project Scaffolding & Domain Modeling",
        "lessons": [
          "1. Requirements Gathering & Schema Blueprint",
          "2. Core Logic & Service Integration",
          "3. State & Error Resiliency"
        ]
      },
      {
        "title": "Module 2: Deployment & Verification",
        "lessons": [
          "1. Integration Verification",
          "2. Performance Tuning & Caching",
          "3. Production Launch Checklist"
        ]
      }
    ]
  },
  {
    "id": "lwf-123",
    "title": "Git Essentials & Core Architecture",
    "category": "Git",
    "level": "Beginner",
    "description": "Comprehensive foundations in Git. Master key terminology, industry best practices, and hands-on workflows designed for real-world production.",
    "thumbnail": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Git Curriculum Playlist",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Git",
      "Foundations",
      "Engineering",
      "Best Practices"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Foundations of Git",
        "lessons": [
          "1. Core Concepts & Paradigm Overview",
          "2. Architecture & Environment Setup",
          "3. Fundamental Syntax & Building Blocks"
        ]
      },
      {
        "title": "Module 2: Applied Workflows in Git",
        "lessons": [
          "1. Hands-on Implementation Patterns",
          "2. Debugging & Performance Considerations",
          "3. Testing & Production Readiness"
        ]
      }
    ]
  },
  {
    "id": "lwf-124",
    "title": "Advanced Git & Enterprise Engineering",
    "category": "Git",
    "level": "Advanced",
    "description": "Deep-dive into enterprise patterns, optimization, scaling, and architectural paradigms for senior engineers working with Git.",
    "thumbnail": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Advanced Git Enterprise Series",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Git",
      "Advanced",
      "Architecture",
      "Enterprise",
      "Scale"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Advanced Paradigms in Git",
        "lessons": [
          "1. High-Performance Design Patterns",
          "2. Asynchronous & Distributed Considerations",
          "3. Security Hardening & Edge Cases"
        ]
      },
      {
        "title": "Module 2: Enterprise Deployment & Reliability",
        "lessons": [
          "1. Automated CI/CD & Observability",
          "2. Scalability Bottlenecks & Benchmarking",
          "3. Capstone Architecture Evaluation"
        ]
      }
    ]
  },
  {
    "id": "lwf-125",
    "title": "Git Real-World Projects & Case Studies",
    "category": "Git",
    "level": "Intermediate",
    "description": "Build complete end-to-end applications and solve realistic engineering challenges utilizing modern Git toolchains.",
    "thumbnail": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Industry Mentors",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Git Real-World Case Studies",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Git",
      "Projects",
      "Hands-on",
      "Case Studies"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Project Scaffolding & Domain Modeling",
        "lessons": [
          "1. Requirements Gathering & Schema Blueprint",
          "2. Core Logic & Service Integration",
          "3. State & Error Resiliency"
        ]
      },
      {
        "title": "Module 2: Deployment & Verification",
        "lessons": [
          "1. Integration Verification",
          "2. Performance Tuning & Caching",
          "3. Production Launch Checklist"
        ]
      }
    ]
  },
  {
    "id": "lwf-126",
    "title": "GitHub Essentials & Core Architecture",
    "category": "GitHub",
    "level": "Beginner",
    "description": "Comprehensive foundations in GitHub. Master key terminology, industry best practices, and hands-on workflows designed for real-world production.",
    "thumbnail": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "GitHub Curriculum Playlist",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "GitHub",
      "Foundations",
      "Engineering",
      "Best Practices"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Foundations of GitHub",
        "lessons": [
          "1. Core Concepts & Paradigm Overview",
          "2. Architecture & Environment Setup",
          "3. Fundamental Syntax & Building Blocks"
        ]
      },
      {
        "title": "Module 2: Applied Workflows in GitHub",
        "lessons": [
          "1. Hands-on Implementation Patterns",
          "2. Debugging & Performance Considerations",
          "3. Testing & Production Readiness"
        ]
      }
    ]
  },
  {
    "id": "lwf-127",
    "title": "Advanced GitHub & Enterprise Engineering",
    "category": "GitHub",
    "level": "Advanced",
    "description": "Deep-dive into enterprise patterns, optimization, scaling, and architectural paradigms for senior engineers working with GitHub.",
    "thumbnail": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Advanced GitHub Enterprise Series",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "GitHub",
      "Advanced",
      "Architecture",
      "Enterprise",
      "Scale"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Advanced Paradigms in GitHub",
        "lessons": [
          "1. High-Performance Design Patterns",
          "2. Asynchronous & Distributed Considerations",
          "3. Security Hardening & Edge Cases"
        ]
      },
      {
        "title": "Module 2: Enterprise Deployment & Reliability",
        "lessons": [
          "1. Automated CI/CD & Observability",
          "2. Scalability Bottlenecks & Benchmarking",
          "3. Capstone Architecture Evaluation"
        ]
      }
    ]
  },
  {
    "id": "lwf-128",
    "title": "CI/CD Essentials & Core Architecture",
    "category": "CI/CD",
    "level": "Beginner",
    "description": "Comprehensive foundations in CI/CD. Master key terminology, industry best practices, and hands-on workflows designed for real-world production.",
    "thumbnail": "https://images.unsplash.com/photo-1618401471353-b98aedd04e11?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "CI/CD Curriculum Playlist",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "CI/CD",
      "Foundations",
      "Engineering",
      "Best Practices"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Foundations of CI/CD",
        "lessons": [
          "1. Core Concepts & Paradigm Overview",
          "2. Architecture & Environment Setup",
          "3. Fundamental Syntax & Building Blocks"
        ]
      },
      {
        "title": "Module 2: Applied Workflows in CI/CD",
        "lessons": [
          "1. Hands-on Implementation Patterns",
          "2. Debugging & Performance Considerations",
          "3. Testing & Production Readiness"
        ]
      }
    ]
  },
  {
    "id": "lwf-129",
    "title": "Advanced CI/CD & Enterprise Engineering",
    "category": "CI/CD",
    "level": "Advanced",
    "description": "Deep-dive into enterprise patterns, optimization, scaling, and architectural paradigms for senior engineers working with CI/CD.",
    "thumbnail": "https://images.unsplash.com/photo-1618401471353-b98aedd04e11?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Advanced CI/CD Enterprise Series",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "CI/CD",
      "Advanced",
      "Architecture",
      "Enterprise",
      "Scale"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Advanced Paradigms in CI/CD",
        "lessons": [
          "1. High-Performance Design Patterns",
          "2. Asynchronous & Distributed Considerations",
          "3. Security Hardening & Edge Cases"
        ]
      },
      {
        "title": "Module 2: Enterprise Deployment & Reliability",
        "lessons": [
          "1. Automated CI/CD & Observability",
          "2. Scalability Bottlenecks & Benchmarking",
          "3. Capstone Architecture Evaluation"
        ]
      }
    ]
  },
  {
    "id": "lwf-130",
    "title": "AWS Essentials & Core Architecture",
    "category": "AWS",
    "level": "Beginner",
    "description": "Comprehensive foundations in AWS. Master key terminology, industry best practices, and hands-on workflows designed for real-world production.",
    "thumbnail": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "AWS Curriculum Playlist",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "AWS",
      "Foundations",
      "Engineering",
      "Best Practices"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Foundations of AWS",
        "lessons": [
          "1. Core Concepts & Paradigm Overview",
          "2. Architecture & Environment Setup",
          "3. Fundamental Syntax & Building Blocks"
        ]
      },
      {
        "title": "Module 2: Applied Workflows in AWS",
        "lessons": [
          "1. Hands-on Implementation Patterns",
          "2. Debugging & Performance Considerations",
          "3. Testing & Production Readiness"
        ]
      }
    ]
  },
  {
    "id": "lwf-131",
    "title": "Advanced AWS & Enterprise Engineering",
    "category": "AWS",
    "level": "Advanced",
    "description": "Deep-dive into enterprise patterns, optimization, scaling, and architectural paradigms for senior engineers working with AWS.",
    "thumbnail": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Advanced AWS Enterprise Series",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "AWS",
      "Advanced",
      "Architecture",
      "Enterprise",
      "Scale"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Advanced Paradigms in AWS",
        "lessons": [
          "1. High-Performance Design Patterns",
          "2. Asynchronous & Distributed Considerations",
          "3. Security Hardening & Edge Cases"
        ]
      },
      {
        "title": "Module 2: Enterprise Deployment & Reliability",
        "lessons": [
          "1. Automated CI/CD & Observability",
          "2. Scalability Bottlenecks & Benchmarking",
          "3. Capstone Architecture Evaluation"
        ]
      }
    ]
  },
  {
    "id": "lwf-132",
    "title": "AWS Real-World Projects & Case Studies",
    "category": "AWS",
    "level": "Intermediate",
    "description": "Build complete end-to-end applications and solve realistic engineering challenges utilizing modern AWS toolchains.",
    "thumbnail": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Industry Mentors",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "AWS Real-World Case Studies",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "AWS",
      "Projects",
      "Hands-on",
      "Case Studies"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Project Scaffolding & Domain Modeling",
        "lessons": [
          "1. Requirements Gathering & Schema Blueprint",
          "2. Core Logic & Service Integration",
          "3. State & Error Resiliency"
        ]
      },
      {
        "title": "Module 2: Deployment & Verification",
        "lessons": [
          "1. Integration Verification",
          "2. Performance Tuning & Caching",
          "3. Production Launch Checklist"
        ]
      }
    ]
  },
  {
    "id": "lwf-133",
    "title": "Microsoft Azure Essentials & Core Architecture",
    "category": "Microsoft Azure",
    "level": "Beginner",
    "description": "Comprehensive foundations in Microsoft Azure. Master key terminology, industry best practices, and hands-on workflows designed for real-world production.",
    "thumbnail": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Microsoft Azure Curriculum Playlist",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Microsoft Azure",
      "Foundations",
      "Engineering",
      "Best Practices"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Foundations of Microsoft Azure",
        "lessons": [
          "1. Core Concepts & Paradigm Overview",
          "2. Architecture & Environment Setup",
          "3. Fundamental Syntax & Building Blocks"
        ]
      },
      {
        "title": "Module 2: Applied Workflows in Microsoft Azure",
        "lessons": [
          "1. Hands-on Implementation Patterns",
          "2. Debugging & Performance Considerations",
          "3. Testing & Production Readiness"
        ]
      }
    ]
  },
  {
    "id": "lwf-134",
    "title": "Advanced Microsoft Azure & Enterprise Engineering",
    "category": "Microsoft Azure",
    "level": "Advanced",
    "description": "Deep-dive into enterprise patterns, optimization, scaling, and architectural paradigms for senior engineers working with Microsoft Azure.",
    "thumbnail": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Advanced Microsoft Azure Enterprise Series",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Microsoft Azure",
      "Advanced",
      "Architecture",
      "Enterprise",
      "Scale"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Advanced Paradigms in Microsoft Azure",
        "lessons": [
          "1. High-Performance Design Patterns",
          "2. Asynchronous & Distributed Considerations",
          "3. Security Hardening & Edge Cases"
        ]
      },
      {
        "title": "Module 2: Enterprise Deployment & Reliability",
        "lessons": [
          "1. Automated CI/CD & Observability",
          "2. Scalability Bottlenecks & Benchmarking",
          "3. Capstone Architecture Evaluation"
        ]
      }
    ]
  },
  {
    "id": "lwf-135",
    "title": "Microsoft Azure Real-World Projects & Case Studies",
    "category": "Microsoft Azure",
    "level": "Intermediate",
    "description": "Build complete end-to-end applications and solve realistic engineering challenges utilizing modern Microsoft Azure toolchains.",
    "thumbnail": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Industry Mentors",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Microsoft Azure Real-World Case Studies",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Microsoft Azure",
      "Projects",
      "Hands-on",
      "Case Studies"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Project Scaffolding & Domain Modeling",
        "lessons": [
          "1. Requirements Gathering & Schema Blueprint",
          "2. Core Logic & Service Integration",
          "3. State & Error Resiliency"
        ]
      },
      {
        "title": "Module 2: Deployment & Verification",
        "lessons": [
          "1. Integration Verification",
          "2. Performance Tuning & Caching",
          "3. Production Launch Checklist"
        ]
      }
    ]
  },
  {
    "id": "lwf-136",
    "title": "Google Cloud Essentials & Core Architecture",
    "category": "Google Cloud",
    "level": "Beginner",
    "description": "Comprehensive foundations in Google Cloud. Master key terminology, industry best practices, and hands-on workflows designed for real-world production.",
    "thumbnail": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80",
    "instructor": "Google Cloud Tech",
    "youtubeChannel": "Google Cloud Tech",
    "playlistId": "PLIivdWyY5SsqkWvhqXwz_8b317bK1wWq_",
    "playlistUrl": "https://www.youtube.com/playlist?list=PLIivdWyY5SsqkWvhqXwz_8b317bK1wWq_",
    "playlistTitle": "Google Cloud Architecture and Engineering",
    "playlistStatus": "verified",
    "certificateEligibility": true,
    "tags": [
      "Google Cloud",
      "Foundations",
      "Engineering",
      "Best Practices"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Foundations of Google Cloud",
        "lessons": [
          "1. Core Concepts & Paradigm Overview",
          "2. Architecture & Environment Setup",
          "3. Fundamental Syntax & Building Blocks"
        ]
      },
      {
        "title": "Module 2: Applied Workflows in Google Cloud",
        "lessons": [
          "1. Hands-on Implementation Patterns",
          "2. Debugging & Performance Considerations",
          "3. Testing & Production Readiness"
        ]
      }
    ]
  },
  {
    "id": "lwf-137",
    "title": "Advanced Google Cloud & Enterprise Engineering",
    "category": "Google Cloud",
    "level": "Advanced",
    "description": "Deep-dive into enterprise patterns, optimization, scaling, and architectural paradigms for senior engineers working with Google Cloud.",
    "thumbnail": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Advanced Google Cloud Enterprise Series",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Google Cloud",
      "Advanced",
      "Architecture",
      "Enterprise",
      "Scale"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Advanced Paradigms in Google Cloud",
        "lessons": [
          "1. High-Performance Design Patterns",
          "2. Asynchronous & Distributed Considerations",
          "3. Security Hardening & Edge Cases"
        ]
      },
      {
        "title": "Module 2: Enterprise Deployment & Reliability",
        "lessons": [
          "1. Automated CI/CD & Observability",
          "2. Scalability Bottlenecks & Benchmarking",
          "3. Capstone Architecture Evaluation"
        ]
      }
    ]
  },
  {
    "id": "lwf-138",
    "title": "Google Cloud Real-World Projects & Case Studies",
    "category": "Google Cloud",
    "level": "Intermediate",
    "description": "Build complete end-to-end applications and solve realistic engineering challenges utilizing modern Google Cloud toolchains.",
    "thumbnail": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Industry Mentors",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Google Cloud Real-World Case Studies",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Google Cloud",
      "Projects",
      "Hands-on",
      "Case Studies"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Project Scaffolding & Domain Modeling",
        "lessons": [
          "1. Requirements Gathering & Schema Blueprint",
          "2. Core Logic & Service Integration",
          "3. State & Error Resiliency"
        ]
      },
      {
        "title": "Module 2: Deployment & Verification",
        "lessons": [
          "1. Integration Verification",
          "2. Performance Tuning & Caching",
          "3. Production Launch Checklist"
        ]
      }
    ]
  },
  {
    "id": "lwf-139",
    "title": "Linux Essentials & Core Architecture",
    "category": "Linux",
    "level": "Beginner",
    "description": "Comprehensive foundations in Linux. Master key terminology, industry best practices, and hands-on workflows designed for real-world production.",
    "thumbnail": "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Linux Curriculum Playlist",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Linux",
      "Foundations",
      "Engineering",
      "Best Practices"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Foundations of Linux",
        "lessons": [
          "1. Core Concepts & Paradigm Overview",
          "2. Architecture & Environment Setup",
          "3. Fundamental Syntax & Building Blocks"
        ]
      },
      {
        "title": "Module 2: Applied Workflows in Linux",
        "lessons": [
          "1. Hands-on Implementation Patterns",
          "2. Debugging & Performance Considerations",
          "3. Testing & Production Readiness"
        ]
      }
    ]
  },
  {
    "id": "lwf-140",
    "title": "Advanced Linux & Enterprise Engineering",
    "category": "Linux",
    "level": "Advanced",
    "description": "Deep-dive into enterprise patterns, optimization, scaling, and architectural paradigms for senior engineers working with Linux.",
    "thumbnail": "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Advanced Linux Enterprise Series",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Linux",
      "Advanced",
      "Architecture",
      "Enterprise",
      "Scale"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Advanced Paradigms in Linux",
        "lessons": [
          "1. High-Performance Design Patterns",
          "2. Asynchronous & Distributed Considerations",
          "3. Security Hardening & Edge Cases"
        ]
      },
      {
        "title": "Module 2: Enterprise Deployment & Reliability",
        "lessons": [
          "1. Automated CI/CD & Observability",
          "2. Scalability Bottlenecks & Benchmarking",
          "3. Capstone Architecture Evaluation"
        ]
      }
    ]
  },
  {
    "id": "lwf-141",
    "title": "Linux Real-World Projects & Case Studies",
    "category": "Linux",
    "level": "Intermediate",
    "description": "Build complete end-to-end applications and solve realistic engineering challenges utilizing modern Linux toolchains.",
    "thumbnail": "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Industry Mentors",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Linux Real-World Case Studies",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Linux",
      "Projects",
      "Hands-on",
      "Case Studies"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Project Scaffolding & Domain Modeling",
        "lessons": [
          "1. Requirements Gathering & Schema Blueprint",
          "2. Core Logic & Service Integration",
          "3. State & Error Resiliency"
        ]
      },
      {
        "title": "Module 2: Deployment & Verification",
        "lessons": [
          "1. Integration Verification",
          "2. Performance Tuning & Caching",
          "3. Production Launch Checklist"
        ]
      }
    ]
  },
  {
    "id": "lwf-142",
    "title": "Databases Essentials & Core Architecture",
    "category": "Databases",
    "level": "Beginner",
    "description": "Comprehensive foundations in Databases. Master key terminology, industry best practices, and hands-on workflows designed for real-world production.",
    "thumbnail": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Databases Curriculum Playlist",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Databases",
      "Foundations",
      "Engineering",
      "Best Practices"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Foundations of Databases",
        "lessons": [
          "1. Core Concepts & Paradigm Overview",
          "2. Architecture & Environment Setup",
          "3. Fundamental Syntax & Building Blocks"
        ]
      },
      {
        "title": "Module 2: Applied Workflows in Databases",
        "lessons": [
          "1. Hands-on Implementation Patterns",
          "2. Debugging & Performance Considerations",
          "3. Testing & Production Readiness"
        ]
      }
    ]
  },
  {
    "id": "lwf-143",
    "title": "Advanced Databases & Enterprise Engineering",
    "category": "Databases",
    "level": "Advanced",
    "description": "Deep-dive into enterprise patterns, optimization, scaling, and architectural paradigms for senior engineers working with Databases.",
    "thumbnail": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Advanced Databases Enterprise Series",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Databases",
      "Advanced",
      "Architecture",
      "Enterprise",
      "Scale"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Advanced Paradigms in Databases",
        "lessons": [
          "1. High-Performance Design Patterns",
          "2. Asynchronous & Distributed Considerations",
          "3. Security Hardening & Edge Cases"
        ]
      },
      {
        "title": "Module 2: Enterprise Deployment & Reliability",
        "lessons": [
          "1. Automated CI/CD & Observability",
          "2. Scalability Bottlenecks & Benchmarking",
          "3. Capstone Architecture Evaluation"
        ]
      }
    ]
  },
  {
    "id": "lwf-144",
    "title": "Databases Real-World Projects & Case Studies",
    "category": "Databases",
    "level": "Intermediate",
    "description": "Build complete end-to-end applications and solve realistic engineering challenges utilizing modern Databases toolchains.",
    "thumbnail": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Industry Mentors",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Databases Real-World Case Studies",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Databases",
      "Projects",
      "Hands-on",
      "Case Studies"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Project Scaffolding & Domain Modeling",
        "lessons": [
          "1. Requirements Gathering & Schema Blueprint",
          "2. Core Logic & Service Integration",
          "3. State & Error Resiliency"
        ]
      },
      {
        "title": "Module 2: Deployment & Verification",
        "lessons": [
          "1. Integration Verification",
          "2. Performance Tuning & Caching",
          "3. Production Launch Checklist"
        ]
      }
    ]
  },
  {
    "id": "lwf-145",
    "title": "PostgreSQL Essentials & Core Architecture",
    "category": "PostgreSQL",
    "level": "Beginner",
    "description": "Comprehensive foundations in PostgreSQL. Master key terminology, industry best practices, and hands-on workflows designed for real-world production.",
    "thumbnail": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "PostgreSQL Curriculum Playlist",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "PostgreSQL",
      "Foundations",
      "Engineering",
      "Best Practices"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Foundations of PostgreSQL",
        "lessons": [
          "1. Core Concepts & Paradigm Overview",
          "2. Architecture & Environment Setup",
          "3. Fundamental Syntax & Building Blocks"
        ]
      },
      {
        "title": "Module 2: Applied Workflows in PostgreSQL",
        "lessons": [
          "1. Hands-on Implementation Patterns",
          "2. Debugging & Performance Considerations",
          "3. Testing & Production Readiness"
        ]
      }
    ]
  },
  {
    "id": "lwf-146",
    "title": "Advanced PostgreSQL & Enterprise Engineering",
    "category": "PostgreSQL",
    "level": "Advanced",
    "description": "Deep-dive into enterprise patterns, optimization, scaling, and architectural paradigms for senior engineers working with PostgreSQL.",
    "thumbnail": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Advanced PostgreSQL Enterprise Series",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "PostgreSQL",
      "Advanced",
      "Architecture",
      "Enterprise",
      "Scale"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Advanced Paradigms in PostgreSQL",
        "lessons": [
          "1. High-Performance Design Patterns",
          "2. Asynchronous & Distributed Considerations",
          "3. Security Hardening & Edge Cases"
        ]
      },
      {
        "title": "Module 2: Enterprise Deployment & Reliability",
        "lessons": [
          "1. Automated CI/CD & Observability",
          "2. Scalability Bottlenecks & Benchmarking",
          "3. Capstone Architecture Evaluation"
        ]
      }
    ]
  },
  {
    "id": "lwf-147",
    "title": "PostgreSQL Real-World Projects & Case Studies",
    "category": "PostgreSQL",
    "level": "Intermediate",
    "description": "Build complete end-to-end applications and solve realistic engineering challenges utilizing modern PostgreSQL toolchains.",
    "thumbnail": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Industry Mentors",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "PostgreSQL Real-World Case Studies",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "PostgreSQL",
      "Projects",
      "Hands-on",
      "Case Studies"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Project Scaffolding & Domain Modeling",
        "lessons": [
          "1. Requirements Gathering & Schema Blueprint",
          "2. Core Logic & Service Integration",
          "3. State & Error Resiliency"
        ]
      },
      {
        "title": "Module 2: Deployment & Verification",
        "lessons": [
          "1. Integration Verification",
          "2. Performance Tuning & Caching",
          "3. Production Launch Checklist"
        ]
      }
    ]
  },
  {
    "id": "lwf-148",
    "title": "MySQL Essentials & Core Architecture",
    "category": "MySQL",
    "level": "Beginner",
    "description": "Comprehensive foundations in MySQL. Master key terminology, industry best practices, and hands-on workflows designed for real-world production.",
    "thumbnail": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "MySQL Curriculum Playlist",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "MySQL",
      "Foundations",
      "Engineering",
      "Best Practices"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Foundations of MySQL",
        "lessons": [
          "1. Core Concepts & Paradigm Overview",
          "2. Architecture & Environment Setup",
          "3. Fundamental Syntax & Building Blocks"
        ]
      },
      {
        "title": "Module 2: Applied Workflows in MySQL",
        "lessons": [
          "1. Hands-on Implementation Patterns",
          "2. Debugging & Performance Considerations",
          "3. Testing & Production Readiness"
        ]
      }
    ]
  },
  {
    "id": "lwf-149",
    "title": "Advanced MySQL & Enterprise Engineering",
    "category": "MySQL",
    "level": "Advanced",
    "description": "Deep-dive into enterprise patterns, optimization, scaling, and architectural paradigms for senior engineers working with MySQL.",
    "thumbnail": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Advanced MySQL Enterprise Series",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "MySQL",
      "Advanced",
      "Architecture",
      "Enterprise",
      "Scale"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Advanced Paradigms in MySQL",
        "lessons": [
          "1. High-Performance Design Patterns",
          "2. Asynchronous & Distributed Considerations",
          "3. Security Hardening & Edge Cases"
        ]
      },
      {
        "title": "Module 2: Enterprise Deployment & Reliability",
        "lessons": [
          "1. Automated CI/CD & Observability",
          "2. Scalability Bottlenecks & Benchmarking",
          "3. Capstone Architecture Evaluation"
        ]
      }
    ]
  },
  {
    "id": "lwf-150",
    "title": "MySQL Real-World Projects & Case Studies",
    "category": "MySQL",
    "level": "Intermediate",
    "description": "Build complete end-to-end applications and solve realistic engineering challenges utilizing modern MySQL toolchains.",
    "thumbnail": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Industry Mentors",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "MySQL Real-World Case Studies",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "MySQL",
      "Projects",
      "Hands-on",
      "Case Studies"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Project Scaffolding & Domain Modeling",
        "lessons": [
          "1. Requirements Gathering & Schema Blueprint",
          "2. Core Logic & Service Integration",
          "3. State & Error Resiliency"
        ]
      },
      {
        "title": "Module 2: Deployment & Verification",
        "lessons": [
          "1. Integration Verification",
          "2. Performance Tuning & Caching",
          "3. Production Launch Checklist"
        ]
      }
    ]
  },
  {
    "id": "lwf-151",
    "title": "MongoDB Essentials & Core Architecture",
    "category": "MongoDB",
    "level": "Beginner",
    "description": "Comprehensive foundations in MongoDB. Master key terminology, industry best practices, and hands-on workflows designed for real-world production.",
    "thumbnail": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "MongoDB Curriculum Playlist",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "MongoDB",
      "Foundations",
      "Engineering",
      "Best Practices"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Foundations of MongoDB",
        "lessons": [
          "1. Core Concepts & Paradigm Overview",
          "2. Architecture & Environment Setup",
          "3. Fundamental Syntax & Building Blocks"
        ]
      },
      {
        "title": "Module 2: Applied Workflows in MongoDB",
        "lessons": [
          "1. Hands-on Implementation Patterns",
          "2. Debugging & Performance Considerations",
          "3. Testing & Production Readiness"
        ]
      }
    ]
  },
  {
    "id": "lwf-152",
    "title": "Advanced MongoDB & Enterprise Engineering",
    "category": "MongoDB",
    "level": "Advanced",
    "description": "Deep-dive into enterprise patterns, optimization, scaling, and architectural paradigms for senior engineers working with MongoDB.",
    "thumbnail": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Advanced MongoDB Enterprise Series",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "MongoDB",
      "Advanced",
      "Architecture",
      "Enterprise",
      "Scale"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Advanced Paradigms in MongoDB",
        "lessons": [
          "1. High-Performance Design Patterns",
          "2. Asynchronous & Distributed Considerations",
          "3. Security Hardening & Edge Cases"
        ]
      },
      {
        "title": "Module 2: Enterprise Deployment & Reliability",
        "lessons": [
          "1. Automated CI/CD & Observability",
          "2. Scalability Bottlenecks & Benchmarking",
          "3. Capstone Architecture Evaluation"
        ]
      }
    ]
  },
  {
    "id": "lwf-153",
    "title": "MongoDB Real-World Projects & Case Studies",
    "category": "MongoDB",
    "level": "Intermediate",
    "description": "Build complete end-to-end applications and solve realistic engineering challenges utilizing modern MongoDB toolchains.",
    "thumbnail": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Industry Mentors",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "MongoDB Real-World Case Studies",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "MongoDB",
      "Projects",
      "Hands-on",
      "Case Studies"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Project Scaffolding & Domain Modeling",
        "lessons": [
          "1. Requirements Gathering & Schema Blueprint",
          "2. Core Logic & Service Integration",
          "3. State & Error Resiliency"
        ]
      },
      {
        "title": "Module 2: Deployment & Verification",
        "lessons": [
          "1. Integration Verification",
          "2. Performance Tuning & Caching",
          "3. Production Launch Checklist"
        ]
      }
    ]
  },
  {
    "id": "lwf-154",
    "title": "Testing Essentials & Core Architecture",
    "category": "Testing",
    "level": "Beginner",
    "description": "Comprehensive foundations in Testing. Master key terminology, industry best practices, and hands-on workflows designed for real-world production.",
    "thumbnail": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Testing Curriculum Playlist",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Testing",
      "Foundations",
      "Engineering",
      "Best Practices"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Foundations of Testing",
        "lessons": [
          "1. Core Concepts & Paradigm Overview",
          "2. Architecture & Environment Setup",
          "3. Fundamental Syntax & Building Blocks"
        ]
      },
      {
        "title": "Module 2: Applied Workflows in Testing",
        "lessons": [
          "1. Hands-on Implementation Patterns",
          "2. Debugging & Performance Considerations",
          "3. Testing & Production Readiness"
        ]
      }
    ]
  },
  {
    "id": "lwf-155",
    "title": "Advanced Testing & Enterprise Engineering",
    "category": "Testing",
    "level": "Advanced",
    "description": "Deep-dive into enterprise patterns, optimization, scaling, and architectural paradigms for senior engineers working with Testing.",
    "thumbnail": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Advanced Testing Enterprise Series",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Testing",
      "Advanced",
      "Architecture",
      "Enterprise",
      "Scale"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Advanced Paradigms in Testing",
        "lessons": [
          "1. High-Performance Design Patterns",
          "2. Asynchronous & Distributed Considerations",
          "3. Security Hardening & Edge Cases"
        ]
      },
      {
        "title": "Module 2: Enterprise Deployment & Reliability",
        "lessons": [
          "1. Automated CI/CD & Observability",
          "2. Scalability Bottlenecks & Benchmarking",
          "3. Capstone Architecture Evaluation"
        ]
      }
    ]
  },
  {
    "id": "lwf-156",
    "title": "Testing Real-World Projects & Case Studies",
    "category": "Testing",
    "level": "Intermediate",
    "description": "Build complete end-to-end applications and solve realistic engineering challenges utilizing modern Testing toolchains.",
    "thumbnail": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Industry Mentors",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Testing Real-World Case Studies",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Testing",
      "Projects",
      "Hands-on",
      "Case Studies"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Project Scaffolding & Domain Modeling",
        "lessons": [
          "1. Requirements Gathering & Schema Blueprint",
          "2. Core Logic & Service Integration",
          "3. State & Error Resiliency"
        ]
      },
      {
        "title": "Module 2: Deployment & Verification",
        "lessons": [
          "1. Integration Verification",
          "2. Performance Tuning & Caching",
          "3. Production Launch Checklist"
        ]
      }
    ]
  },
  {
    "id": "lwf-157",
    "title": "QA Essentials & Core Architecture",
    "category": "QA",
    "level": "Beginner",
    "description": "Comprehensive foundations in QA. Master key terminology, industry best practices, and hands-on workflows designed for real-world production.",
    "thumbnail": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "QA Curriculum Playlist",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "QA",
      "Foundations",
      "Engineering",
      "Best Practices"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Foundations of QA",
        "lessons": [
          "1. Core Concepts & Paradigm Overview",
          "2. Architecture & Environment Setup",
          "3. Fundamental Syntax & Building Blocks"
        ]
      },
      {
        "title": "Module 2: Applied Workflows in QA",
        "lessons": [
          "1. Hands-on Implementation Patterns",
          "2. Debugging & Performance Considerations",
          "3. Testing & Production Readiness"
        ]
      }
    ]
  },
  {
    "id": "lwf-158",
    "title": "Advanced QA & Enterprise Engineering",
    "category": "QA",
    "level": "Advanced",
    "description": "Deep-dive into enterprise patterns, optimization, scaling, and architectural paradigms for senior engineers working with QA.",
    "thumbnail": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Advanced QA Enterprise Series",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "QA",
      "Advanced",
      "Architecture",
      "Enterprise",
      "Scale"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Advanced Paradigms in QA",
        "lessons": [
          "1. High-Performance Design Patterns",
          "2. Asynchronous & Distributed Considerations",
          "3. Security Hardening & Edge Cases"
        ]
      },
      {
        "title": "Module 2: Enterprise Deployment & Reliability",
        "lessons": [
          "1. Automated CI/CD & Observability",
          "2. Scalability Bottlenecks & Benchmarking",
          "3. Capstone Architecture Evaluation"
        ]
      }
    ]
  },
  {
    "id": "lwf-159",
    "title": "QA Real-World Projects & Case Studies",
    "category": "QA",
    "level": "Intermediate",
    "description": "Build complete end-to-end applications and solve realistic engineering challenges utilizing modern QA toolchains.",
    "thumbnail": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Industry Mentors",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "QA Real-World Case Studies",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "QA",
      "Projects",
      "Hands-on",
      "Case Studies"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Project Scaffolding & Domain Modeling",
        "lessons": [
          "1. Requirements Gathering & Schema Blueprint",
          "2. Core Logic & Service Integration",
          "3. State & Error Resiliency"
        ]
      },
      {
        "title": "Module 2: Deployment & Verification",
        "lessons": [
          "1. Integration Verification",
          "2. Performance Tuning & Caching",
          "3. Production Launch Checklist"
        ]
      }
    ]
  },
  {
    "id": "lwf-160",
    "title": "Mobile Development Essentials & Core Architecture",
    "category": "Mobile Development",
    "level": "Beginner",
    "description": "Comprehensive foundations in Mobile Development. Master key terminology, industry best practices, and hands-on workflows designed for real-world production.",
    "thumbnail": "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Mobile Development Curriculum Playlist",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Mobile Development",
      "Foundations",
      "Engineering",
      "Best Practices"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Foundations of Mobile Development",
        "lessons": [
          "1. Core Concepts & Paradigm Overview",
          "2. Architecture & Environment Setup",
          "3. Fundamental Syntax & Building Blocks"
        ]
      },
      {
        "title": "Module 2: Applied Workflows in Mobile Development",
        "lessons": [
          "1. Hands-on Implementation Patterns",
          "2. Debugging & Performance Considerations",
          "3. Testing & Production Readiness"
        ]
      }
    ]
  },
  {
    "id": "lwf-161",
    "title": "Advanced Mobile Development & Enterprise Engineering",
    "category": "Mobile Development",
    "level": "Advanced",
    "description": "Deep-dive into enterprise patterns, optimization, scaling, and architectural paradigms for senior engineers working with Mobile Development.",
    "thumbnail": "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Advanced Mobile Development Enterprise Series",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Mobile Development",
      "Advanced",
      "Architecture",
      "Enterprise",
      "Scale"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Advanced Paradigms in Mobile Development",
        "lessons": [
          "1. High-Performance Design Patterns",
          "2. Asynchronous & Distributed Considerations",
          "3. Security Hardening & Edge Cases"
        ]
      },
      {
        "title": "Module 2: Enterprise Deployment & Reliability",
        "lessons": [
          "1. Automated CI/CD & Observability",
          "2. Scalability Bottlenecks & Benchmarking",
          "3. Capstone Architecture Evaluation"
        ]
      }
    ]
  },
  {
    "id": "lwf-162",
    "title": "Mobile Development Real-World Projects & Case Studies",
    "category": "Mobile Development",
    "level": "Intermediate",
    "description": "Build complete end-to-end applications and solve realistic engineering challenges utilizing modern Mobile Development toolchains.",
    "thumbnail": "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Industry Mentors",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Mobile Development Real-World Case Studies",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Mobile Development",
      "Projects",
      "Hands-on",
      "Case Studies"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Project Scaffolding & Domain Modeling",
        "lessons": [
          "1. Requirements Gathering & Schema Blueprint",
          "2. Core Logic & Service Integration",
          "3. State & Error Resiliency"
        ]
      },
      {
        "title": "Module 2: Deployment & Verification",
        "lessons": [
          "1. Integration Verification",
          "2. Performance Tuning & Caching",
          "3. Production Launch Checklist"
        ]
      }
    ]
  },
  {
    "id": "lwf-163",
    "title": "Android Essentials & Core Architecture",
    "category": "Android",
    "level": "Beginner",
    "description": "Comprehensive foundations in Android. Master key terminology, industry best practices, and hands-on workflows designed for real-world production.",
    "thumbnail": "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Android Curriculum Playlist",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Android",
      "Foundations",
      "Engineering",
      "Best Practices"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Foundations of Android",
        "lessons": [
          "1. Core Concepts & Paradigm Overview",
          "2. Architecture & Environment Setup",
          "3. Fundamental Syntax & Building Blocks"
        ]
      },
      {
        "title": "Module 2: Applied Workflows in Android",
        "lessons": [
          "1. Hands-on Implementation Patterns",
          "2. Debugging & Performance Considerations",
          "3. Testing & Production Readiness"
        ]
      }
    ]
  },
  {
    "id": "lwf-164",
    "title": "Advanced Android & Enterprise Engineering",
    "category": "Android",
    "level": "Advanced",
    "description": "Deep-dive into enterprise patterns, optimization, scaling, and architectural paradigms for senior engineers working with Android.",
    "thumbnail": "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Advanced Android Enterprise Series",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Android",
      "Advanced",
      "Architecture",
      "Enterprise",
      "Scale"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Advanced Paradigms in Android",
        "lessons": [
          "1. High-Performance Design Patterns",
          "2. Asynchronous & Distributed Considerations",
          "3. Security Hardening & Edge Cases"
        ]
      },
      {
        "title": "Module 2: Enterprise Deployment & Reliability",
        "lessons": [
          "1. Automated CI/CD & Observability",
          "2. Scalability Bottlenecks & Benchmarking",
          "3. Capstone Architecture Evaluation"
        ]
      }
    ]
  },
  {
    "id": "lwf-165",
    "title": "Android Real-World Projects & Case Studies",
    "category": "Android",
    "level": "Intermediate",
    "description": "Build complete end-to-end applications and solve realistic engineering challenges utilizing modern Android toolchains.",
    "thumbnail": "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Industry Mentors",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Android Real-World Case Studies",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Android",
      "Projects",
      "Hands-on",
      "Case Studies"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Project Scaffolding & Domain Modeling",
        "lessons": [
          "1. Requirements Gathering & Schema Blueprint",
          "2. Core Logic & Service Integration",
          "3. State & Error Resiliency"
        ]
      },
      {
        "title": "Module 2: Deployment & Verification",
        "lessons": [
          "1. Integration Verification",
          "2. Performance Tuning & Caching",
          "3. Production Launch Checklist"
        ]
      }
    ]
  },
  {
    "id": "lwf-166",
    "title": "Flutter Essentials & Core Architecture",
    "category": "Flutter",
    "level": "Beginner",
    "description": "Comprehensive foundations in Flutter. Master key terminology, industry best practices, and hands-on workflows designed for real-world production.",
    "thumbnail": "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Flutter Curriculum Playlist",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Flutter",
      "Foundations",
      "Engineering",
      "Best Practices"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Foundations of Flutter",
        "lessons": [
          "1. Core Concepts & Paradigm Overview",
          "2. Architecture & Environment Setup",
          "3. Fundamental Syntax & Building Blocks"
        ]
      },
      {
        "title": "Module 2: Applied Workflows in Flutter",
        "lessons": [
          "1. Hands-on Implementation Patterns",
          "2. Debugging & Performance Considerations",
          "3. Testing & Production Readiness"
        ]
      }
    ]
  },
  {
    "id": "lwf-167",
    "title": "Advanced Flutter & Enterprise Engineering",
    "category": "Flutter",
    "level": "Advanced",
    "description": "Deep-dive into enterprise patterns, optimization, scaling, and architectural paradigms for senior engineers working with Flutter.",
    "thumbnail": "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Advanced Flutter Enterprise Series",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Flutter",
      "Advanced",
      "Architecture",
      "Enterprise",
      "Scale"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Advanced Paradigms in Flutter",
        "lessons": [
          "1. High-Performance Design Patterns",
          "2. Asynchronous & Distributed Considerations",
          "3. Security Hardening & Edge Cases"
        ]
      },
      {
        "title": "Module 2: Enterprise Deployment & Reliability",
        "lessons": [
          "1. Automated CI/CD & Observability",
          "2. Scalability Bottlenecks & Benchmarking",
          "3. Capstone Architecture Evaluation"
        ]
      }
    ]
  },
  {
    "id": "lwf-168",
    "title": "Flutter Real-World Projects & Case Studies",
    "category": "Flutter",
    "level": "Intermediate",
    "description": "Build complete end-to-end applications and solve realistic engineering challenges utilizing modern Flutter toolchains.",
    "thumbnail": "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Industry Mentors",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Flutter Real-World Case Studies",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Flutter",
      "Projects",
      "Hands-on",
      "Case Studies"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Project Scaffolding & Domain Modeling",
        "lessons": [
          "1. Requirements Gathering & Schema Blueprint",
          "2. Core Logic & Service Integration",
          "3. State & Error Resiliency"
        ]
      },
      {
        "title": "Module 2: Deployment & Verification",
        "lessons": [
          "1. Integration Verification",
          "2. Performance Tuning & Caching",
          "3. Production Launch Checklist"
        ]
      }
    ]
  },
  {
    "id": "lwf-169",
    "title": "Game Development Essentials & Core Architecture",
    "category": "Game Development",
    "level": "Beginner",
    "description": "Comprehensive foundations in Game Development. Master key terminology, industry best practices, and hands-on workflows designed for real-world production.",
    "thumbnail": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Game Development Curriculum Playlist",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Game Development",
      "Foundations",
      "Engineering",
      "Best Practices"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Foundations of Game Development",
        "lessons": [
          "1. Core Concepts & Paradigm Overview",
          "2. Architecture & Environment Setup",
          "3. Fundamental Syntax & Building Blocks"
        ]
      },
      {
        "title": "Module 2: Applied Workflows in Game Development",
        "lessons": [
          "1. Hands-on Implementation Patterns",
          "2. Debugging & Performance Considerations",
          "3. Testing & Production Readiness"
        ]
      }
    ]
  },
  {
    "id": "lwf-170",
    "title": "Advanced Game Development & Enterprise Engineering",
    "category": "Game Development",
    "level": "Advanced",
    "description": "Deep-dive into enterprise patterns, optimization, scaling, and architectural paradigms for senior engineers working with Game Development.",
    "thumbnail": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Advanced Game Development Enterprise Series",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Game Development",
      "Advanced",
      "Architecture",
      "Enterprise",
      "Scale"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Advanced Paradigms in Game Development",
        "lessons": [
          "1. High-Performance Design Patterns",
          "2. Asynchronous & Distributed Considerations",
          "3. Security Hardening & Edge Cases"
        ]
      },
      {
        "title": "Module 2: Enterprise Deployment & Reliability",
        "lessons": [
          "1. Automated CI/CD & Observability",
          "2. Scalability Bottlenecks & Benchmarking",
          "3. Capstone Architecture Evaluation"
        ]
      }
    ]
  },
  {
    "id": "lwf-171",
    "title": "Blockchain Essentials & Core Architecture",
    "category": "Blockchain",
    "level": "Beginner",
    "description": "Comprehensive foundations in Blockchain. Master key terminology, industry best practices, and hands-on workflows designed for real-world production.",
    "thumbnail": "https://images.unsplash.com/photo-1677442136019-21780efad99a?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Blockchain Curriculum Playlist",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Blockchain",
      "Foundations",
      "Engineering",
      "Best Practices"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Foundations of Blockchain",
        "lessons": [
          "1. Core Concepts & Paradigm Overview",
          "2. Architecture & Environment Setup",
          "3. Fundamental Syntax & Building Blocks"
        ]
      },
      {
        "title": "Module 2: Applied Workflows in Blockchain",
        "lessons": [
          "1. Hands-on Implementation Patterns",
          "2. Debugging & Performance Considerations",
          "3. Testing & Production Readiness"
        ]
      }
    ]
  },
  {
    "id": "lwf-172",
    "title": "Advanced Blockchain & Enterprise Engineering",
    "category": "Blockchain",
    "level": "Advanced",
    "description": "Deep-dive into enterprise patterns, optimization, scaling, and architectural paradigms for senior engineers working with Blockchain.",
    "thumbnail": "https://images.unsplash.com/photo-1677442136019-21780efad99a?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Advanced Blockchain Enterprise Series",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Blockchain",
      "Advanced",
      "Architecture",
      "Enterprise",
      "Scale"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Advanced Paradigms in Blockchain",
        "lessons": [
          "1. High-Performance Design Patterns",
          "2. Asynchronous & Distributed Considerations",
          "3. Security Hardening & Edge Cases"
        ]
      },
      {
        "title": "Module 2: Enterprise Deployment & Reliability",
        "lessons": [
          "1. Automated CI/CD & Observability",
          "2. Scalability Bottlenecks & Benchmarking",
          "3. Capstone Architecture Evaluation"
        ]
      }
    ]
  },
  {
    "id": "lwf-173",
    "title": "Blockchain Real-World Projects & Case Studies",
    "category": "Blockchain",
    "level": "Intermediate",
    "description": "Build complete end-to-end applications and solve realistic engineering challenges utilizing modern Blockchain toolchains.",
    "thumbnail": "https://images.unsplash.com/photo-1677442136019-21780efad99a?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Industry Mentors",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Blockchain Real-World Case Studies",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Blockchain",
      "Projects",
      "Hands-on",
      "Case Studies"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Project Scaffolding & Domain Modeling",
        "lessons": [
          "1. Requirements Gathering & Schema Blueprint",
          "2. Core Logic & Service Integration",
          "3. State & Error Resiliency"
        ]
      },
      {
        "title": "Module 2: Deployment & Verification",
        "lessons": [
          "1. Integration Verification",
          "2. Performance Tuning & Caching",
          "3. Production Launch Checklist"
        ]
      }
    ]
  },
  {
    "id": "lwf-174",
    "title": "Web3 Essentials & Core Architecture",
    "category": "Web3",
    "level": "Beginner",
    "description": "Comprehensive foundations in Web3. Master key terminology, industry best practices, and hands-on workflows designed for real-world production.",
    "thumbnail": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Web3 Curriculum Playlist",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Web3",
      "Foundations",
      "Engineering",
      "Best Practices"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Foundations of Web3",
        "lessons": [
          "1. Core Concepts & Paradigm Overview",
          "2. Architecture & Environment Setup",
          "3. Fundamental Syntax & Building Blocks"
        ]
      },
      {
        "title": "Module 2: Applied Workflows in Web3",
        "lessons": [
          "1. Hands-on Implementation Patterns",
          "2. Debugging & Performance Considerations",
          "3. Testing & Production Readiness"
        ]
      }
    ]
  },
  {
    "id": "lwf-175",
    "title": "Advanced Web3 & Enterprise Engineering",
    "category": "Web3",
    "level": "Advanced",
    "description": "Deep-dive into enterprise patterns, optimization, scaling, and architectural paradigms for senior engineers working with Web3.",
    "thumbnail": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Advanced Web3 Enterprise Series",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Web3",
      "Advanced",
      "Architecture",
      "Enterprise",
      "Scale"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Advanced Paradigms in Web3",
        "lessons": [
          "1. High-Performance Design Patterns",
          "2. Asynchronous & Distributed Considerations",
          "3. Security Hardening & Edge Cases"
        ]
      },
      {
        "title": "Module 2: Enterprise Deployment & Reliability",
        "lessons": [
          "1. Automated CI/CD & Observability",
          "2. Scalability Bottlenecks & Benchmarking",
          "3. Capstone Architecture Evaluation"
        ]
      }
    ]
  },
  {
    "id": "lwf-176",
    "title": "Web3 Real-World Projects & Case Studies",
    "category": "Web3",
    "level": "Intermediate",
    "description": "Build complete end-to-end applications and solve realistic engineering challenges utilizing modern Web3 toolchains.",
    "thumbnail": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Industry Mentors",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Web3 Real-World Case Studies",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Web3",
      "Projects",
      "Hands-on",
      "Case Studies"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Project Scaffolding & Domain Modeling",
        "lessons": [
          "1. Requirements Gathering & Schema Blueprint",
          "2. Core Logic & Service Integration",
          "3. State & Error Resiliency"
        ]
      },
      {
        "title": "Module 2: Deployment & Verification",
        "lessons": [
          "1. Integration Verification",
          "2. Performance Tuning & Caching",
          "3. Production Launch Checklist"
        ]
      }
    ]
  },
  {
    "id": "lwf-177",
    "title": "IT Support Essentials & Core Architecture",
    "category": "IT Support",
    "level": "Beginner",
    "description": "Comprehensive foundations in IT Support. Master key terminology, industry best practices, and hands-on workflows designed for real-world production.",
    "thumbnail": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "IT Support Curriculum Playlist",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "IT Support",
      "Foundations",
      "Engineering",
      "Best Practices"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Foundations of IT Support",
        "lessons": [
          "1. Core Concepts & Paradigm Overview",
          "2. Architecture & Environment Setup",
          "3. Fundamental Syntax & Building Blocks"
        ]
      },
      {
        "title": "Module 2: Applied Workflows in IT Support",
        "lessons": [
          "1. Hands-on Implementation Patterns",
          "2. Debugging & Performance Considerations",
          "3. Testing & Production Readiness"
        ]
      }
    ]
  },
  {
    "id": "lwf-178",
    "title": "Advanced IT Support & Enterprise Engineering",
    "category": "IT Support",
    "level": "Advanced",
    "description": "Deep-dive into enterprise patterns, optimization, scaling, and architectural paradigms for senior engineers working with IT Support.",
    "thumbnail": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Advanced IT Support Enterprise Series",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "IT Support",
      "Advanced",
      "Architecture",
      "Enterprise",
      "Scale"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Advanced Paradigms in IT Support",
        "lessons": [
          "1. High-Performance Design Patterns",
          "2. Asynchronous & Distributed Considerations",
          "3. Security Hardening & Edge Cases"
        ]
      },
      {
        "title": "Module 2: Enterprise Deployment & Reliability",
        "lessons": [
          "1. Automated CI/CD & Observability",
          "2. Scalability Bottlenecks & Benchmarking",
          "3. Capstone Architecture Evaluation"
        ]
      }
    ]
  },
  {
    "id": "lwf-179",
    "title": "Operating Systems Essentials & Core Architecture",
    "category": "Operating Systems",
    "level": "Beginner",
    "description": "Comprehensive foundations in Operating Systems. Master key terminology, industry best practices, and hands-on workflows designed for real-world production.",
    "thumbnail": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Operating Systems Curriculum Playlist",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Operating Systems",
      "Foundations",
      "Engineering",
      "Best Practices"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Foundations of Operating Systems",
        "lessons": [
          "1. Core Concepts & Paradigm Overview",
          "2. Architecture & Environment Setup",
          "3. Fundamental Syntax & Building Blocks"
        ]
      },
      {
        "title": "Module 2: Applied Workflows in Operating Systems",
        "lessons": [
          "1. Hands-on Implementation Patterns",
          "2. Debugging & Performance Considerations",
          "3. Testing & Production Readiness"
        ]
      }
    ]
  },
  {
    "id": "lwf-180",
    "title": "Advanced Operating Systems & Enterprise Engineering",
    "category": "Operating Systems",
    "level": "Advanced",
    "description": "Deep-dive into enterprise patterns, optimization, scaling, and architectural paradigms for senior engineers working with Operating Systems.",
    "thumbnail": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Advanced Operating Systems Enterprise Series",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Operating Systems",
      "Advanced",
      "Architecture",
      "Enterprise",
      "Scale"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Advanced Paradigms in Operating Systems",
        "lessons": [
          "1. High-Performance Design Patterns",
          "2. Asynchronous & Distributed Considerations",
          "3. Security Hardening & Edge Cases"
        ]
      },
      {
        "title": "Module 2: Enterprise Deployment & Reliability",
        "lessons": [
          "1. Automated CI/CD & Observability",
          "2. Scalability Bottlenecks & Benchmarking",
          "3. Capstone Architecture Evaluation"
        ]
      }
    ]
  },
  {
    "id": "lwf-181",
    "title": "Computer Architecture Essentials & Core Architecture",
    "category": "Computer Architecture",
    "level": "Beginner",
    "description": "Comprehensive foundations in Computer Architecture. Master key terminology, industry best practices, and hands-on workflows designed for real-world production.",
    "thumbnail": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80",
    "instructor": "CS50 / Harvard",
    "youtubeChannel": "CS50 / Harvard",
    "playlistId": "PLhQjrBD2T382_RTW3Omv57g98iq83uSzz",
    "playlistUrl": "https://www.youtube.com/playlist?list=PLhQjrBD2T382_RTW3Omv57g98iq83uSzz",
    "playlistTitle": "CS50 Introduction to Computer Science",
    "playlistStatus": "verified",
    "certificateEligibility": true,
    "tags": [
      "Computer Architecture",
      "Foundations",
      "Engineering",
      "Best Practices"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Foundations of Computer Architecture",
        "lessons": [
          "1. Core Concepts & Paradigm Overview",
          "2. Architecture & Environment Setup",
          "3. Fundamental Syntax & Building Blocks"
        ]
      },
      {
        "title": "Module 2: Applied Workflows in Computer Architecture",
        "lessons": [
          "1. Hands-on Implementation Patterns",
          "2. Debugging & Performance Considerations",
          "3. Testing & Production Readiness"
        ]
      }
    ]
  },
  {
    "id": "lwf-182",
    "title": "Advanced Computer Architecture & Enterprise Engineering",
    "category": "Computer Architecture",
    "level": "Advanced",
    "description": "Deep-dive into enterprise patterns, optimization, scaling, and architectural paradigms for senior engineers working with Computer Architecture.",
    "thumbnail": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80",
    "instructor": "Learn With Flow Faculty",
    "youtubeChannel": "Learn With Flow Curated",
    "playlistId": "",
    "playlistUrl": "",
    "playlistTitle": "Advanced Computer Architecture Enterprise Series",
    "playlistStatus": "pending-verification",
    "certificateEligibility": true,
    "tags": [
      "Computer Architecture",
      "Advanced",
      "Architecture",
      "Enterprise",
      "Scale"
    ],
    "moduleTitles": [
      {
        "title": "Module 1: Advanced Paradigms in Computer Architecture",
        "lessons": [
          "1. High-Performance Design Patterns",
          "2. Asynchronous & Distributed Considerations",
          "3. Security Hardening & Edge Cases"
        ]
      },
      {
        "title": "Module 2: Enterprise Deployment & Reliability",
        "lessons": [
          "1. Automated CI/CD & Observability",
          "2. Scalability Bottlenecks & Benchmarking",
          "3. Capstone Architecture Evaluation"
        ]
      }
    ]
  }
];

export function buildCourseFromSpec(spec: CourseSeedSpec): Course {
  const modules: CourseModule[] = spec.moduleTitles.map((modSpec, modIdx) => {
    const lessons: CourseLesson[] = modSpec.lessons.map((lessonTitle, lessonIdx) => {
      // Exactly 8 questions per lesson quiz
      const lessonQuestions = generateQuestionSet(
        spec.category,
        8,
        `${spec.id}-m${modIdx + 1}-l${lessonIdx + 1}`
      );

      return {
        id: `${spec.id}-m${modIdx + 1}-l${lessonIdx + 1}`,
        title: lessonTitle,
        duration: '15-25 min',
        position: lessonIdx + 1,
        order: lessonIdx + 1,
        youtubeVideoId: '',
        youtubeUrl: spec.playlistStatus === 'verified' && spec.playlistId
          ? `https://www.youtube.com/playlist?list=${spec.playlistId}`
          : '',
        summary: `In-depth exploration of ${lessonTitle} within ${spec.category}.`,
        quiz: lessonQuestions,
      };
    });

    // Exactly 15 questions per module assessment
    const moduleAssessment = generateQuestionSet(
      spec.category,
      15,
      `${spec.id}-m${modIdx + 1}-assessment`
    );

    return {
      id: `${spec.id}-m${modIdx + 1}`,
      title: modSpec.title,
      description: `Structured module covering foundational theory, practices, and exercises in ${modSpec.title}.`,
      order: modIdx + 1,
      position: modIdx + 1,
      lessons,
      moduleAssessment,
    };
  });

  // Exactly 25 questions for final graduation exam
  const finalExam = generateQuestionSet(spec.category, 25, `${spec.id}-final-exam`);

  return {
    id: spec.id,
    title: spec.title,
    category: spec.category,
    description: spec.description,
    level: spec.level,
    thumbnail: spec.thumbnail,
    instructor: spec.instructor,
    youtubeChannel: spec.youtubeChannel,
    playlistId: spec.playlistId,
    playlistUrl: spec.playlistUrl,
    playlistTitle: spec.playlistTitle,
    playlistStatus: spec.playlistStatus,
    certificateEligibility: true,
    tags: spec.tags,
    modules,
    finalExam,
    createdAt: '2026-01-01T00:00:00.000Z',
    updatedAt: '2026-09-01T00:00:00.000Z',
  };
}

// Scalable pre-instantiated catalog of 150+ courses
export const FULL_COURSES_CATALOG: Course[] = RAW_COURSE_SPECS.map(buildCourseFromSpec);
