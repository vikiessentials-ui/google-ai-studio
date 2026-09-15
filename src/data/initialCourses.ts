import type { Course, CourseModule, CourseLesson } from '@/types';
import { generateQuestionSet } from './questionBanks';

type CourseSeedSpec = {
  id: string;
  title: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  description: string;
  playlistId: string;
  playlistStatus: 'verified' | 'pending-verification';
  youtubeChannel: string;
  tags: string[];
  thumbnail: string;
  moduleTitles: {
    title: string;
    lessons: string[];
  }[];
};

function createCourseFromSpec(spec: CourseSeedSpec): Course {
  const playlistUrl = spec.playlistId && spec.playlistStatus === 'verified'
    ? `https://www.youtube.com/playlist?list=${spec.playlistId}`
    : '';

  const modules: CourseModule[] = spec.moduleTitles.map((modSpec, modIdx) => {
    const lessons: CourseLesson[] = modSpec.lessons.map((lessonTitle, lessonIdx) => {
      // Generate exactly 8 questions for each lesson
      const lessonQuestions = generateQuestionSet(
        spec.category,
        8,
        `mod${modIdx + 1}-les${lessonIdx + 1}`
      );

      return {
        id: `${spec.id}-m${modIdx + 1}-l${lessonIdx + 1}`,
        title: lessonTitle,
        youtubeUrl: spec.playlistStatus === 'verified' && spec.playlistId
          ? `https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=${spec.playlistId}`
          : '',
        duration: '15-30 min',
        position: lessonIdx + 1,
        quiz: lessonQuestions,
      };
    });

    // Generate exactly 15 questions for each module assessment
    const moduleAssessmentQuestions = generateQuestionSet(
      spec.category,
      15,
      `mod${modIdx + 1}-assessment`
    );

    return {
      id: `${spec.id}-m${modIdx + 1}`,
      title: modSpec.title,
      description: `Comprehensive module covering foundational concepts and applied practices in ${modSpec.title}.`,
      position: modIdx + 1,
      lessons,
      moduleAssessment: moduleAssessmentQuestions,
    };
  });

  // Generate exactly 25 questions for final graduation exam
  const finalExamQuestions = generateQuestionSet(spec.category, 25, `${spec.id}-final`);

  return {
    id: spec.id,
    title: spec.title,
    category: spec.category,
    description: spec.description,
    level: spec.level,
    thumbnail: spec.thumbnail,
    playlistId: spec.playlistId,
    playlistUrl,
    playlistStatus: spec.playlistStatus,
    youtubeChannel: spec.youtubeChannel,
    modules,
    finalExam: finalExamQuestions,
    certificateEligibility: true,
    tags: spec.tags,
    createdAt: '2026-01-01T00:00:00.000Z',
    updatedAt: '2026-09-01T00:00:00.000Z',
  };
}

const seedSpecs: CourseSeedSpec[] = [
  // 1. Artificial Intelligence
  {
    id: 'course-001',
    title: 'Foundations of Artificial Intelligence & LLMs',
    category: 'Artificial Intelligence',
    level: 'Beginner',
    description: 'Master the principles of AI, transformer architectures, vector embeddings, and generative language models.',
    playlistId: 'PLWKjhJtqVAbmGQgaEOAM744p80n84u2v7',
    playlistStatus: 'verified',
    youtubeChannel: 'freeCodeCamp.org',
    tags: ['AI', 'Transformers', 'LLMs', 'Deep Learning'],
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?w=800&auto=format&fit=crop&q=80',
    moduleTitles: [
      {
        title: 'Module 1: Introduction to Modern AI Systems',
        lessons: ['AI Fundamentals & Evolution', 'Symbolic vs Statistical AI', 'Core Machine Perception'],
      },
      {
        title: 'Module 2: Neural Networks & Transformers',
        lessons: ['Perceptrons & Backpropagation', 'Attention Mechanism & Transformers', 'Self-Attention in Action'],
      },
      {
        title: 'Module 3: Generative Models & Production AI',
        lessons: ['Prompt Engineering & System Directives', 'Retrieval-Augmented Generation (RAG)', 'AI Alignment & Safety'],
      },
    ],
  },
  // 2. Machine Learning
  {
    id: 'course-002',
    title: 'Machine Learning from Scratch with Python',
    category: 'Machine Learning',
    level: 'Intermediate',
    description: 'Learn supervised, unsupervised, and reinforcement learning algorithms with hands-on mathematical intuition.',
    playlistId: 'PLWKjhJtqVAbmGQgaEOAM744p80n84u2v7',
    playlistStatus: 'verified',
    youtubeChannel: 'freeCodeCamp.org',
    tags: ['Machine Learning', 'Python', 'Scikit-Learn', 'Math'],
    thumbnail: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=80',
    moduleTitles: [
      {
        title: 'Module 1: Supervised Learning Foundations',
        lessons: ['Linear & Logistic Regression', 'Decision Trees & Ensembles', 'Support Vector Machines'],
      },
      {
        title: 'Module 2: Unsupervised Learning & Clustering',
        lessons: ['K-Means Clustering', 'Dimensionality Reduction with PCA', 'Anomaly Detection'],
      },
    ],
  },
  // 3. Cyber Security
  {
    id: 'course-003',
    title: 'Cyber Security Essentials & Defense Strategies',
    category: 'Cyber Security',
    level: 'Beginner',
    description: 'Understand the CIA Triad, threat intelligence, cryptography, secure network architecture, and defense-in-depth.',
    playlistId: 'PLWKjhJtqVAblXqFsmYgX3iN2lOuhjYy_P',
    playlistStatus: 'pending-verification',
    youtubeChannel: 'Cyber Defense Academy',
    tags: ['Cyber Security', 'Defense', 'Network Security', 'Cryptography'],
    thumbnail: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80',
    moduleTitles: [
      {
        title: 'Module 1: Foundations of Cyber Defense',
        lessons: ['The CIA Triad & Risk Assessment', 'Authentication Protocols & MFA', 'Access Control Models'],
      },
      {
        title: 'Module 2: Threats, Vulnerabilities & Defense',
        lessons: ['Malware Types & Infection Vectors', 'Social Engineering & Phishing Defense', 'Incident Response Protocols'],
      },
    ],
  },
  // 4. Ethical Hacking
  {
    id: 'course-004',
    title: 'Ethical Hacking & Penetration Testing',
    category: 'Ethical Hacking',
    level: 'Intermediate',
    description: 'Learn authorized vulnerability assessment, network reconnaissance, port scanning, and web exploitation testing.',
    playlistId: 'PLWKjhJtqVAblXqFsmYgX3iN2lOuhjYy_Q',
    playlistStatus: 'pending-verification',
    youtubeChannel: 'Security Labs Online',
    tags: ['Ethical Hacking', 'Penetration Testing', 'Kali Linux', 'Burp Suite'],
    thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=80',
    moduleTitles: [
      {
        title: 'Module 1: Reconnaissance & Scanning',
        lessons: ['Passive vs Active Information Gathering', 'Port Scanning with Nmap', 'Vulnerability Assessment'],
      },
      {
        title: 'Module 2: Web Application Penetration Testing',
        lessons: ['Testing for SQL Injection', 'Cross-Site Scripting Exploitation', 'Reporting & Remediation'],
      },
    ],
  },
  // 5. UI/UX Design
  {
    id: 'course-005',
    title: 'UI/UX Design Systems & Human-Centered Design',
    category: 'UI/UX Design',
    level: 'Beginner',
    description: 'Design intuitive, accessible digital products using user research, wireframing, typography, and optical balance.',
    playlistId: 'PLWKjhJtqVAblnSe1qUNMG7AbPmjIG54288',
    playlistStatus: 'pending-verification',
    youtubeChannel: 'Design Flow Media',
    tags: ['UI/UX', 'Design Systems', 'User Research', 'Accessibility'],
    thumbnail: 'https://images.unsplash.com/photo-1581291518655-9523c932edcf?w=800&auto=format&fit=crop&q=80',
    moduleTitles: [
      {
        title: 'Module 1: UX Research & Information Architecture',
        lessons: ['User Personas & Journey Mapping', 'Information Architecture & Wireframing', 'Usability Testing'],
      },
      {
        title: 'Module 2: Visual Hierarchy & Design Systems',
        lessons: ['Color Theory & Contrast Ratios', 'Typographic Hierarchy & Grids', 'Design System Components'],
      },
    ],
  },
  // 6. Figma
  {
    id: 'course-006',
    title: 'Mastering Figma for Modern Product Design',
    category: 'Figma',
    level: 'Beginner',
    description: 'Deep dive into Auto Layout, component variants, design tokens, interactive prototyping, and developer handoff.',
    playlistId: 'PLWKjhJtqVAblnSe1qUNMG7AbPmjIG54289',
    playlistStatus: 'pending-verification',
    youtubeChannel: 'UI Mastery',
    tags: ['Figma', 'Auto Layout', 'Prototyping', 'Design'],
    thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80',
    moduleTitles: [
      {
        title: 'Module 1: Figma Layout Mechanics',
        lessons: ['Frames, Groups & Auto Layout 5.0', 'Constraints & Fluid Resizing', 'Color Styles & Variables'],
      },
      {
        title: 'Module 2: Components & Interactive Prototyping',
        lessons: ['Component Sets & Component Properties', 'Interactive Component States', 'Smart Animate Transitions'],
      },
    ],
  },
  // 7. Front-End Development
  {
    id: 'course-007',
    title: 'Modern Front-End Development with HTML, CSS & JS',
    category: 'Front-End Development',
    level: 'Beginner',
    description: 'Build responsive, accessible, high-performance web applications using modern web standards and clean layout mechanics.',
    playlistId: 'PLWKjhJtqVAbnSe1qUNMG7AbPmjIG54288',
    playlistStatus: 'verified',
    youtubeChannel: 'freeCodeCamp.org',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    thumbnail: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=80',
    moduleTitles: [
      {
        title: 'Module 1: Semantic HTML & Modern CSS',
        lessons: ['Semantic Document Structure & SEO', 'Flexbox & CSS Grid Mechanics', 'Responsive Breakpoints & Media Queries'],
      },
      {
        title: 'Module 2: Interactive JavaScript & DOM',
        lessons: ['DOM Tree Manipulation & Events', 'Fetch API & Async/Await', 'Browser Storage & State Management'],
      },
    ],
  },
  // 8. Full Stack Development
  {
    id: 'course-008',
    title: 'Full Stack Web Architecture & RESTful APIs',
    category: 'Full Stack Development',
    level: 'Intermediate',
    description: 'Construct end-to-end applications bridging client UI, server routing, relational databases, and secure token auth.',
    playlistId: 'PLWKjhJtqVAbm31O2rL9eB6e6e2f-5n4s0',
    playlistStatus: 'pending-verification',
    youtubeChannel: 'Full Stack Campus',
    tags: ['Full Stack', 'Node.js', 'React', 'APIs'],
    thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=80',
    moduleTitles: [
      {
        title: 'Module 1: API Architecture & Server Design',
        lessons: ['REST Principles & HTTP Methods', 'Routing, Middleware & Controller Patterns', 'Request Validation & Sanitization'],
      },
      {
        title: 'Module 2: Database Integration & Authentication',
        lessons: ['Connecting Database Drivers', 'JWT & Secure Cookie Sessions', 'Full-Stack Deployment Patterns'],
      },
    ],
  },
  // 9. Software Engineering
  {
    id: 'course-009',
    title: 'Software Engineering Principles & Clean Code',
    category: 'Software Engineering',
    level: 'Intermediate',
    description: 'Learn SOLID design principles, clean architecture patterns, code review standards, and refactoring techniques.',
    playlistId: 'PLWKjhJtqVAblnSe1qUNMG7AbPmjIG54291',
    playlistStatus: 'pending-verification',
    youtubeChannel: 'Engineering Excellence',
    tags: ['Software Engineering', 'Clean Code', 'SOLID', 'Architecture'],
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=80',
    moduleTitles: [
      {
        title: 'Module 1: SOLID Principles & Modularity',
        lessons: ['Single Responsibility & Open-Closed', 'Liskov Substitution & Interface Segregation', 'Dependency Inversion Principle'],
      },
      {
        title: 'Module 2: Clean Code & Architecture',
        lessons: ['Meaningful Naming & Small Functions', 'Error Handling & Guard Clauses', 'Layered Architecture Patterns'],
      },
    ],
  },
  // 10. Python
  {
    id: 'course-010',
    title: 'Python Programming: From Zero to Mastery',
    category: 'Python',
    level: 'Beginner',
    description: 'Master Python syntax, object-oriented programming, data structures, file I/O, decorators, and modern idioms.',
    playlistId: 'PLWKjhJtqVAbkmRvnFmOd4KhDdlK1oIq23',
    playlistStatus: 'verified',
    youtubeChannel: 'freeCodeCamp.org',
    tags: ['Python', 'OOP', 'Data Structures', 'Programming'],
    thumbnail: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&auto=format&fit=crop&q=80',
    moduleTitles: [
      {
        title: 'Module 1: Python Fundamentals',
        lessons: ['Variables, Types & Operations', 'Control Flow & Comprehensions', 'Functions & Scope'],
      },
      {
        title: 'Module 2: Advanced Python & OOP',
        lessons: ['Object-Oriented Programming & Classes', 'Generators, Iterators & Decorators', 'Modules, Packages & Virtual Environments'],
      },
    ],
  },
  // 11. JavaScript
  {
    id: 'course-011',
    title: 'JavaScript Core: Deep Dive into Modern ES6+',
    category: 'JavaScript',
    level: 'Beginner',
    description: 'Understand the JavaScript engine, execution context, closures, prototypes, promises, and the async event loop.',
    playlistId: 'PLWKjhJtqVAbk2qRZtWSzCIN38JC_NdhW5',
    playlistStatus: 'verified',
    youtubeChannel: 'freeCodeCamp.org',
    tags: ['JavaScript', 'ES6', 'Event Loop', 'Web'],
    thumbnail: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=800&auto=format&fit=crop&q=80',
    moduleTitles: [
      {
        title: 'Module 1: JS Execution Mechanics',
        lessons: ['Execution Context & Call Stack', 'Closures & Lexical Scoping', 'Prototypal Inheritance & `this`'],
      },
      {
        title: 'Module 2: Asynchronous JavaScript',
        lessons: ['Microtasks, Macrotasks & Event Loop', 'Promises & Promise Combinators', 'Modern Async/Await Patterns'],
      },
    ],
  },
  // 12. Java
  {
    id: 'course-012',
    title: 'Java Enterprise: Modern OOP & JVM Internals',
    category: 'Java',
    level: 'Intermediate',
    description: 'Learn modern Java syntax, concurrency, streams, generics, garbage collection, and Spring Boot foundations.',
    playlistId: 'PLWKjhJtqVAblnSe1qUNMG7AbPmjIG54294',
    playlistStatus: 'pending-verification',
    youtubeChannel: 'Java Developers Guild',
    tags: ['Java', 'JVM', 'OOP', 'Enterprise'],
    thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=80',
    moduleTitles: [
      {
        title: 'Module 1: Core Java & Generics',
        lessons: ['Strong Typing & Object Models', 'Java Collections Framework', 'Generics & Type Safety'],
      },
      {
        title: 'Module 2: Concurrency & Modern Features',
        lessons: ['Functional Interfaces & Streams API', 'Multithreading & Virtual Threads', 'JVM Memory Management & GC'],
      },
    ],
  },
  // 13. Data Science
  {
    id: 'course-013',
    title: 'Data Science & Statistical Analysis',
    category: 'Data Science',
    level: 'Intermediate',
    description: 'Analyze real-world data with Pandas, NumPy, statistical hypothesis testing, data visualization, and exploratory analysis.',
    playlistId: 'PLWKjhJtqVAblnSe1qUNMG7AbPmjIG54295',
    playlistStatus: 'pending-verification',
    youtubeChannel: 'Data Science Hub',
    tags: ['Data Science', 'Pandas', 'Statistics', 'NumPy'],
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
    moduleTitles: [
      {
        title: 'Module 1: Data Wrangling with Pandas',
        lessons: ['DataFrames, Indexing & Filtering', 'Handling Missing Data & Outliers', 'Grouping, Merging & Aggregations'],
      },
      {
        title: 'Module 2: Statistical Modeling & Inference',
        lessons: ['Probability Distributions', 'Hypothesis Testing & p-Values', 'Feature Engineering for ML'],
      },
    ],
  },
  // 14. SQL
  {
    id: 'course-014',
    title: 'SQL Mastery: Queries, Joins & Performance',
    category: 'SQL',
    level: 'Beginner',
    description: 'Master relational SQL querying, multi-table joins, subqueries, window functions, and query plan optimization.',
    playlistId: 'PLWKjhJtqVAblvI1i46ScbKV2jH1pp4CRm',
    playlistStatus: 'verified',
    youtubeChannel: 'freeCodeCamp.org',
    tags: ['SQL', 'Relational', 'Queries', 'Database'],
    thumbnail: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&auto=format&fit=crop&q=80',
    moduleTitles: [
      {
        title: 'Module 1: Core SQL Querying',
        lessons: ['SELECT, WHERE & Filtering Rules', 'Aggregations & GROUP BY Having', 'INNER, LEFT & FULL OUTER Joins'],
      },
      {
        title: 'Module 2: Advanced SQL & Optimization',
        lessons: ['Subqueries & Common Table Expressions (CTEs)', 'Window Functions (RANK, OVER, PARTITION)', 'EXPLAIN ANALYZE & Query Optimization'],
      },
    ],
  },
  // 15. Databases
  {
    id: 'course-015',
    title: 'Database Architecture: Relational, NoSQL & NewSQL',
    category: 'Databases',
    level: 'Intermediate',
    description: 'Understand B-Trees, LSM-Trees, write-ahead logs, distributed consensus, partitioning, and ACID transactions.',
    playlistId: 'PLWKjhJtqVAblnSe1qUNMG7AbPmjIG54297',
    playlistStatus: 'pending-verification',
    youtubeChannel: 'Database Systems Lab',
    tags: ['Databases', 'ACID', 'PostgreSQL', 'NoSQL'],
    thumbnail: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=80',
    moduleTitles: [
      {
        title: 'Module 1: Storage Engines & Indexing',
        lessons: ['B-Tree vs LSM-Tree Storage Internals', 'Write-Ahead Logging (WAL) & Crash Recovery', 'Normalization vs Denormalization'],
      },
      {
        title: 'Module 2: Distributed Databases & Consensus',
        lessons: ['Horizontal Sharding & Replication Lag', 'CAP Theorem & PACELC Trade-offs', 'Distributed Transactions & 2PC'],
      },
    ],
  },
  // 16. Computer Networking
  {
    id: 'course-016',
    title: 'Computer Networking: Protocols, Routing & Architecture',
    category: 'Computer Networking',
    level: 'Beginner',
    description: 'Comprehensive study of OSI & TCP/IP models, subnetting, DNS, BGP, TCP congestion control, and modern HTTP/3.',
    playlistId: 'PLWKjhJtqVAblnSe1qUNMG7AbPmjIG54298',
    playlistStatus: 'pending-verification',
    youtubeChannel: 'Network Engineering Institute',
    tags: ['Networking', 'TCP/IP', 'DNS', 'HTTP'],
    thumbnail: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format&fit=crop&q=80',
    moduleTitles: [
      {
        title: 'Module 1: Layered Models & Transport',
        lessons: ['OSI 7-Layer vs TCP/IP Stack', 'IPv4 Addressing, Subnetting & CIDR', 'TCP Handshake & Congestion Control'],
      },
      {
        title: 'Module 2: Application Layer & Security',
        lessons: ['DNS Resolution & Record Types', 'TLS/HTTPS Handshake & Certificates', 'HTTP/2 vs HTTP/3 QUIC Protocol'],
      },
    ],
  },
  // 17. Linux
  {
    id: 'course-017',
    title: 'Linux System Administration & Shell Scripting',
    category: 'Linux',
    level: 'Beginner',
    description: 'Command line proficiency, filesystem permissions, process management, systemd services, and automated Bash scripts.',
    playlistId: 'PLWKjhJtqVAblnSe1qUNMG7AbPmjIG54299',
    playlistStatus: 'pending-verification',
    youtubeChannel: 'Linux Academy Network',
    tags: ['Linux', 'Bash', 'Sysadmin', 'CLI'],
    thumbnail: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&auto=format&fit=crop&q=80',
    moduleTitles: [
      {
        title: 'Module 1: CLI Navigation & File Permissions',
        lessons: ['Filesystem Hierarchy Standard', 'Permissions (chmod, chown) & Octal Masks', 'Streams, Pipes & Redirection'],
      },
      {
        title: 'Module 2: Processes & System Management',
        lessons: ['Process Lifecycle, top & kill signals', 'Systemd Units & Service Management', 'Bash Shell Scripting & Automation'],
      },
    ],
  },
  // 18. Cloud Computing
  {
    id: 'course-018',
    title: 'Cloud Computing Fundamentals & Architecture',
    category: 'Cloud Computing',
    level: 'Beginner',
    description: 'Learn cloud delivery models (IaaS, PaaS, Serverless), multi-region availability, auto-scaling, and cost engineering.',
    playlistId: 'PLWKjhJtqVAblnSe1qUNMG7AbPmjIG54300',
    playlistStatus: 'pending-verification',
    youtubeChannel: 'Cloud Architecture Channel',
    tags: ['Cloud', 'IaaS', 'Serverless', 'Infrastructure'],
    thumbnail: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format&fit=crop&q=80',
    moduleTitles: [
      {
        title: 'Module 1: Cloud Concepts & Models',
        lessons: ['IaaS vs PaaS vs SaaS vs FaaS', 'Regions, Availability Zones & Edge PoPs', 'Shared Responsibility Security Model'],
      },
      {
        title: 'Module 2: Core Cloud Infrastructure',
        lessons: ['Virtual Private Clouds (VPC) & Subnets', 'Block, Object & File Storage Systems', 'Auto-Scaling Groups & Load Balancers'],
      },
    ],
  },
  // 19. AWS
  {
    id: 'course-019',
    title: 'AWS Certified Solutions Architect Foundations',
    category: 'AWS',
    level: 'Intermediate',
    description: 'Master Amazon Web Services: EC2, S3, RDS, Lambda, IAM, VPC, CloudFront, Route53, and well-architected best practices.',
    playlistId: 'PLWKjhJtqVAblnSe1qUNMG7AbPmjIG54301',
    playlistStatus: 'pending-verification',
    youtubeChannel: 'Cloud Training Hub',
    tags: ['AWS', 'EC2', 'S3', 'Lambda', 'Cloud'],
    thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80',
    moduleTitles: [
      {
        title: 'Module 1: Compute & Storage Services',
        lessons: ['EC2 Instance Types & Pricing Models', 'Amazon S3 Storage Tiers & Bucket Policies', 'Elastic Block Store (EBS) & Snapshots'],
      },
      {
        title: 'Module 2: Serverless & Networking',
        lessons: ['AWS Lambda & Event-Driven Architecture', 'Amazon VPC, Route Tables & Gateways', 'Identity & Access Management (IAM) Policies'],
      },
    ],
  },
  // 20. Microsoft Azure
  {
    id: 'course-020',
    title: 'Microsoft Azure Cloud Solutions Engineering',
    category: 'Microsoft Azure',
    level: 'Intermediate',
    description: 'Design resilient Azure architectures utilizing Virtual Machines, App Services, Blob Storage, Cosmos DB, and Azure AD.',
    playlistId: 'PLWKjhJtqVAblnSe1qUNMG7AbPmjIG54302',
    playlistStatus: 'pending-verification',
    youtubeChannel: 'Azure Cloud Academy',
    tags: ['Azure', 'Microsoft', 'Cloud', 'DevOps'],
    thumbnail: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&auto=format&fit=crop&q=80',
    moduleTitles: [
      {
        title: 'Module 1: Azure Compute & Networking',
        lessons: ['Azure Resource Manager (ARM) Concepts', 'Azure Virtual Machines & Virtual Networks', 'Azure App Services & Deployment Slots'],
      },
      {
        title: 'Module 2: Storage & Governance',
        lessons: ['Azure Blob Storage & Access Tiers', 'Microsoft Entra ID (Azure AD) Fundamentals', 'Azure Monitor & Cost Management'],
      },
    ],
  },
  // 21. Google Cloud
  {
    id: 'course-021',
    title: 'Google Cloud Platform (GCP) Architecture',
    category: 'Google Cloud',
    level: 'Intermediate',
    description: 'Build scalable GCP infrastructure using Compute Engine, Cloud Storage, BigQuery, Cloud Run, and GKE.',
    playlistId: 'PLWKjhJtqVAblnSe1qUNMG7AbPmjIG54303',
    playlistStatus: 'pending-verification',
    youtubeChannel: 'GCP Masterclass',
    tags: ['GCP', 'Google Cloud', 'Cloud Run', 'BigQuery'],
    thumbnail: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=800&auto=format&fit=crop&q=80',
    moduleTitles: [
      {
        title: 'Module 1: GCP Compute & Containers',
        lessons: ['Compute Engine & VPC Networks', 'Serverless Containers with Cloud Run', 'Google Kubernetes Engine (GKE) Basics'],
      },
      {
        title: 'Module 2: Storage & Analytics',
        lessons: ['Cloud Storage Buckets & IAM Bindings', 'BigQuery Analytics & Partitioning', 'Cloud Monitoring & Logging'],
      },
    ],
  },
  // 22. DevOps
  {
    id: 'course-022',
    title: 'DevOps Engineering & Continuous Delivery',
    category: 'DevOps',
    level: 'Intermediate',
    description: 'Automate build pipelines, infrastructure provisioning, test automation, telemetry, and zero-downtime deployments.',
    playlistId: 'PLWKjhJtqVAblnSe1qUNMG7AbPmjIG54304',
    playlistStatus: 'pending-verification',
    youtubeChannel: 'DevOps Community',
    tags: ['DevOps', 'CI/CD', 'Automation', 'Infrastructure'],
    thumbnail: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&auto=format&fit=crop&q=80',
    moduleTitles: [
      {
        title: 'Module 1: CI/CD Pipeline Engineering',
        lessons: ['Continuous Integration Principles', 'Automated Test Execution & Quality Gates', 'Artifact Versioning & Packaging'],
      },
      {
        title: 'Module 2: Observability & Release Strategies',
        lessons: ['Blue-Green & Canary Deployments', 'Metrics, Logs & Distributed Tracing', 'Site Reliability Engineering (SRE) SLIs/SLOs'],
      },
    ],
  },
  // 23. Docker
  {
    id: 'course-023',
    title: 'Docker Containerization & Image Optimization',
    category: 'Docker',
    level: 'Beginner',
    description: 'Learn Dockerfiles, multi-stage builds, volume mounting, container networking, and multi-service Docker Compose.',
    playlistId: 'PLWKjhJtqVAblnSe1qUNMG7AbPmjIG54305',
    playlistStatus: 'pending-verification',
    youtubeChannel: 'Container Mastery',
    tags: ['Docker', 'Containers', 'DevOps', 'Microservices'],
    thumbnail: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800&auto=format&fit=crop&q=80',
    moduleTitles: [
      {
        title: 'Module 1: Docker Basics & Containers',
        lessons: ['Images vs Containers & Docker Daemon', 'Writing Efficient Dockerfiles', 'Multi-Stage Build Image Optimization'],
      },
      {
        title: 'Module 2: Volumes, Networks & Compose',
        lessons: ['Persistent Storage & Named Volumes', 'Bridge Networks & Container DNS', 'Multi-Service Orchestration with Docker Compose'],
      },
    ],
  },
  // 24. Kubernetes
  {
    id: 'course-024',
    title: 'Kubernetes Cluster Architecture & Orchestration',
    category: 'Kubernetes',
    level: 'Advanced',
    description: 'Master Pods, Deployments, Services, Ingress, ConfigMaps, Secrets, Horizontal Pod Autoscalers, and Helm charts.',
    playlistId: 'PLWKjhJtqVAblnSe1qUNMG7AbPmjIG54306',
    playlistStatus: 'pending-verification',
    youtubeChannel: 'Kubernetes Official Guild',
    tags: ['Kubernetes', 'K8s', 'Containers', 'Cloud Native'],
    thumbnail: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&auto=format&fit=crop&q=80',
    moduleTitles: [
      {
        title: 'Module 1: Control Plane & Workloads',
        lessons: ['Kubernetes Control Plane Architecture', 'Pods, ReplicaSets & Declarative Deployments', 'Rolling Updates & Rollbacks'],
      },
      {
        title: 'Module 2: Networking & Configuration',
        lessons: ['ClusterIP, NodePort & LoadBalancer Services', 'Ingress Controllers & Path Routing', 'ConfigMaps, Secrets & RBAC Controls'],
      },
    ],
  },
  // 25. Git & GitHub
  {
    id: 'course-025',
    title: 'Git Version Control & GitHub Collaborative Flow',
    category: 'Git & GitHub',
    level: 'Beginner',
    description: 'Master branch strategies, rebasing, merge conflicts, interactive git reset, pull requests, and GitHub Actions.',
    playlistId: 'PLWKjhJtqVAblf2430w_7E4mKz_1lXv_eU',
    playlistStatus: 'verified',
    youtubeChannel: 'freeCodeCamp.org',
    tags: ['Git', 'GitHub', 'Version Control', 'Workflow'],
    thumbnail: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&auto=format&fit=crop&q=80',
    moduleTitles: [
      {
        title: 'Module 1: Git Internals & Commits',
        lessons: ['Objects: Blobs, Trees & Commits', 'Staging, Diffs & Commit Messages', 'Branching, Fast-Forward & Merge Conflicts'],
      },
      {
        title: 'Module 2: Advanced Git & GitHub Workflows',
        lessons: ['Rebase vs Merge & Interactive Rebasing', 'Git Stash, Cherry-Pick & Reset Modes', 'Pull Request Etiquette & GitHub Actions'],
      },
    ],
  },
  // 26. System Design
  {
    id: 'course-026',
    title: 'System Design: Large-Scale Distributed Architecture',
    category: 'System Design',
    level: 'Advanced',
    description: 'Design highly available systems supporting millions of users: caching, message queues, rate limiting, and sharding.',
    playlistId: 'PLWKjhJtqVAblnSe1qUNMG7AbPmjIG54308',
    playlistStatus: 'pending-verification',
    youtubeChannel: 'System Design Campus',
    tags: ['System Design', 'Scalability', 'Distributed Systems', 'Caching'],
    thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80',
    moduleTitles: [
      {
        title: 'Module 1: Scaling Strategies & Caching',
        lessons: ['Vertical vs Horizontal Scaling', 'Caching Layers (Redis, Memcached) & Eviction Policies', 'Load Balancing Algorithms & Health Checks'],
      },
      {
        title: 'Module 2: Asynchrony & Database Sharding',
        lessons: ['Message Queues (Kafka, RabbitMQ) & Pub/Sub', 'Database Partitioning & Consistent Hashing', 'Designing a Scalable URL Shortener or Feed'],
      },
    ],
  },
  // 27. Software Testing
  {
    id: 'course-027',
    title: 'Software Testing, TDD & Quality Assurance',
    category: 'Software Testing',
    level: 'Beginner',
    description: 'Learn unit testing, integration tests, end-to-end testing, Test-Driven Development (TDD), and mocking strategies.',
    playlistId: 'PLWKjhJtqVAblnSe1qUNMG7AbPmjIG54309',
    playlistStatus: 'pending-verification',
    youtubeChannel: 'QA Engineering Hub',
    tags: ['Testing', 'TDD', 'QA', 'Automation'],
    thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=80',
    moduleTitles: [
      {
        title: 'Module 1: The Testing Pyramid & Unit Tests',
        lessons: ['Testing Pyramid: Unit, Integration & E2E', 'Writing Effective Unit Tests & Assertions', 'Test Doubles: Mocks, Stubs & Spies'],
      },
      {
        title: 'Module 2: TDD & End-to-End Automation',
        lessons: ['Red-Green-Refactor TDD Lifecycle', 'Integration Testing Web APIs', 'Browser Automation & End-to-End Testing'],
      },
    ],
  },
  // 28. React & Modern Frontend
  {
    id: 'course-028',
    title: 'React 18: Hooks, Concurrent Mode & Performance',
    category: 'Front-End Development',
    level: 'Intermediate',
    description: 'Master modern functional React, custom hooks, context, memoization, code splitting, and concurrent rendering.',
    playlistId: 'PLWKjhJtqVAblnSe1qUNMG7AbPmjIG54310',
    playlistStatus: 'pending-verification',
    youtubeChannel: 'React Creators',
    tags: ['React', 'Hooks', 'JavaScript', 'Frontend'],
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=80',
    moduleTitles: [
      {
        title: 'Module 1: State & Component Lifecycles',
        lessons: ['useState & useEffect Under the Hood', 'Custom Hooks for Reusable Logic', 'React Context vs Global Stores'],
      },
      {
        title: 'Module 2: Performance & Optimization',
        lessons: ['useMemo, useCallback & Pure Components', 'Code Splitting with React.lazy & Suspense', 'Optimizing Re-Renders & Profiling'],
      },
    ],
  },
  // 29. TypeScript
  {
    id: 'course-029',
    title: 'TypeScript in Depth: Advanced Types & Generics',
    category: 'Software Engineering',
    level: 'Intermediate',
    description: 'Take your JavaScript to production grade with type narrowing, utility types, mapped types, conditional types, and generics.',
    playlistId: 'PLWKjhJtqVAblnSe1qUNMG7AbPmjIG54311',
    playlistStatus: 'pending-verification',
    youtubeChannel: 'TypeScript Guild',
    tags: ['TypeScript', 'JavaScript', 'Static Typing', 'Web'],
    thumbnail: 'https://images.unsplash.com/photo-1516116211227-bbc132924f4e?w=800&auto=format&fit=crop&q=80',
    moduleTitles: [
      {
        title: 'Module 1: Strong Typing & Type Narrowing',
        lessons: ['Type Annotations & Structural Typing', 'Discriminated Unions & Type Guards', 'Interfaces vs Type Aliases'],
      },
      {
        title: 'Module 2: Advanced Generics & Utility Types',
        lessons: ['Generic Functions, Constraints & Classes', 'Mapped Types & Keyof Operators', 'Conditional Types & Infer Keyword'],
      },
    ],
  },
  // 30. Node.js
  {
    id: 'course-030',
    title: 'Node.js Backend Architecture & Microservices',
    category: 'Full Stack Development',
    level: 'Intermediate',
    description: 'Learn Node.js libuv event loop, streams, clusters, Express architecture, microservice communication, and scalability.',
    playlistId: 'PLWKjhJtqVAblnSe1qUNMG7AbPmjIG54312',
    playlistStatus: 'pending-verification',
    youtubeChannel: 'Node Academy',
    tags: ['Node.js', 'Backend', 'Express', 'JavaScript'],
    thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=80',
    moduleTitles: [
      {
        title: 'Module 1: Node.js Runtime & Streams',
        lessons: ['V8 Engine & Libuv Event Loop Internals', 'Buffers, Streams & High-Volume I/O', 'Error Handling & Unhandled Rejections'],
      },
      {
        title: 'Module 2: Enterprise Backend Design',
        lessons: ['Express Middleware Architecture', 'Clustering & Child Processes', 'Graceful Shutdowns & Health Checks'],
      },
    ],
  },
  // 31. Data Structures & Algorithms
  {
    id: 'course-031',
    title: 'Data Structures & Algorithms in Practice',
    category: 'Software Engineering',
    level: 'Intermediate',
    description: 'Master Big-O analysis, linked lists, trees, graphs, dynamic programming, sorting, and interview algorithm patterns.',
    playlistId: 'PLWKjhJtqVAblnSe1qUNMG7AbPmjIG54313',
    playlistStatus: 'pending-verification',
    youtubeChannel: 'Algorithms Online',
    tags: ['DSA', 'Algorithms', 'Computer Science', 'Big-O'],
    thumbnail: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&auto=format&fit=crop&q=80',
    moduleTitles: [
      {
        title: 'Module 1: Linear Structures & Trees',
        lessons: ['Asymptotic Notation (Big-O, Omega, Theta)', 'Linked Lists, Stacks & Queues', 'Binary Search Trees & Traversal (DFS/BFS)'],
      },
      {
        title: 'Module 2: Graphs & Dynamic Programming',
        lessons: ['Graph Representations & Shortest Path', 'Divide & Conquer Recursion', 'Dynamic Programming & Memoization'],
      },
    ],
  },
  // 32. API Security & OAuth
  {
    id: 'course-032',
    title: 'API Security, OAuth 2.0 & OpenID Connect',
    category: 'Cyber Security',
    level: 'Advanced',
    description: 'Protect modern web APIs: token validation, refresh token rotation, PKCE, CORS policy, rate limiting, and OWASP API Top 10.',
    playlistId: 'PLWKjhJtqVAblnSe1qUNMG7AbPmjIG54314',
    playlistStatus: 'pending-verification',
    youtubeChannel: 'Identity & Access Lab',
    tags: ['OAuth', 'Security', 'JWT', 'APIs'],
    thumbnail: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80',
    moduleTitles: [
      {
        title: 'Module 1: Modern Auth & OAuth 2.0',
        lessons: ['OAuth 2.0 Grant Types & PKCE Flow', 'OpenID Connect (OIDC) ID Tokens', 'JWT Signing, Expiration & Revocation'],
      },
      {
        title: 'Module 2: OWASP API Security Top 10',
        lessons: ['Broken Object Level Authorization (BOLA)', 'Rate Limiting & Throttling Strategies', 'API Gateway Security Policies'],
      },
    ],
  },
  // 33. Mobile App Development with Flutter
  {
    id: 'course-033',
    title: 'Cross-Platform Mobile Apps with Flutter & Dart',
    category: 'Full Stack Development',
    level: 'Beginner',
    description: 'Build native iOS and Android apps from a single codebase with Flutter widgets, state management, and animations.',
    playlistId: 'PLWKjhJtqVAblnSe1qUNMG7AbPmjIG54315',
    playlistStatus: 'pending-verification',
    youtubeChannel: 'Mobile Creators',
    tags: ['Flutter', 'Dart', 'Mobile', 'iOS', 'Android'],
    thumbnail: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=80',
    moduleTitles: [
      {
        title: 'Module 1: Dart & Flutter Basics',
        lessons: ['Dart Syntax & Null Safety', 'Stateless vs Stateful Widgets', 'Layouts with Row, Column & Stack'],
      },
      {
        title: 'Module 2: State Management & Device APIs',
        lessons: ['State Management Patterns (Bloc / Provider)', 'Async HTTP Requests & JSON Serialization', 'Native Permissions & Camera Access'],
      },
    ],
  },
  // 34. GraphQL
  {
    id: 'course-034',
    title: 'GraphQL API Design & Apollo Client Integration',
    category: 'Full Stack Development',
    level: 'Intermediate',
    description: 'Query schemas, define mutations, write resolvers, optimize with DataLoader, and consume GraphQL in modern React.',
    playlistId: 'PLWKjhJtqVAblnSe1qUNMG7AbPmjIG54316',
    playlistStatus: 'pending-verification',
    youtubeChannel: 'GraphQL Guild',
    tags: ['GraphQL', 'Apollo', 'APIs', 'Web'],
    thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80',
    moduleTitles: [
      {
        title: 'Module 1: GraphQL Schemas & Queries',
        lessons: ['GraphQL Type System & Schema Definition Language', 'Writing Queries, Fragments & Variables', 'Mutations & Subscriptions'],
      },
      {
        title: 'Module 2: Resolvers & Performance',
        lessons: ['Resolver Execution Trees', 'Solving the N+1 Problem with DataLoader', 'Caching & Schema Federation'],
      },
    ],
  },
  // 35. PostgreSQL
  {
    id: 'course-035',
    title: 'PostgreSQL for Production: Tuning & Advanced SQL',
    category: 'Databases',
    level: 'Intermediate',
    description: 'Harness PostgreSQL power: JSONB indexing, vacuuming, connection pooling with PgBouncer, replication, and WAL.',
    playlistId: 'PLWKjhJtqVAblnSe1qUNMG7AbPmjIG54317',
    playlistStatus: 'pending-verification',
    youtubeChannel: 'PostgreSQL Community',
    tags: ['PostgreSQL', 'Databases', 'SQL', 'Performance'],
    thumbnail: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&auto=format&fit=crop&q=80',
    moduleTitles: [
      {
        title: 'Module 1: Advanced PostgreSQL Features',
        lessons: ['JSONB Queries & GIN Indexes', 'Full-Text Search & tsvector', 'Materialized Views & Partitioning'],
      },
      {
        title: 'Module 2: Administration & Performance',
        lessons: ['Autovacuum Tuning & Table Bloat', 'Connection Pooling with PgBouncer', 'Logical Replication & High Availability'],
      },
    ],
  },
  // 36. Redis
  {
    id: 'course-036',
    title: 'Redis in Action: Caching, Pub/Sub & Queues',
    category: 'Databases',
    level: 'Intermediate',
    description: 'In-memory performance engineering: strings, hashes, sorted sets, bitfields, TTL eviction, and Redis Streams.',
    playlistId: 'PLWKjhJtqVAblnSe1qUNMG7AbPmjIG54318',
    playlistStatus: 'pending-verification',
    youtubeChannel: 'In-Memory Labs',
    tags: ['Redis', 'Caching', 'PubSub', 'Performance'],
    thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80',
    moduleTitles: [
      {
        title: 'Module 1: Redis Data Structures',
        lessons: ['Strings, Hashes & Lists in Memory', 'Sorted Sets for Leaderboards', 'TTL Keys & Eviction Policies'],
      },
      {
        title: 'Module 2: Advanced Redis Patterns',
        lessons: ['Pub/Sub Messaging & Redis Streams', 'Distributed Locking with Redlock', 'Persistence (RDB vs AOF) & Clustering'],
      },
    ],
  },
  // 37. CI/CD with GitHub Actions
  {
    id: 'course-037',
    title: 'GitHub Actions: Complete CI/CD Automation',
    category: 'DevOps',
    level: 'Intermediate',
    description: 'Write custom workflow YAML files, matrix builds, composite actions, deployment environments, and automated releases.',
    playlistId: 'PLWKjhJtqVAblnSe1qUNMG7AbPmjIG54319',
    playlistStatus: 'pending-verification',
    youtubeChannel: 'Automation Academy',
    tags: ['GitHub Actions', 'DevOps', 'CI/CD', 'Git'],
    thumbnail: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&auto=format&fit=crop&q=80',
    moduleTitles: [
      {
        title: 'Module 1: Workflow Triggers & Jobs',
        lessons: ['Workflow Triggers & Event Filters', 'Jobs, Steps & Runner Environments', 'Matrix Testing Across OS Versions'],
      },
      {
        title: 'Module 2: Secrets & Production Deployment',
        lessons: ['Encrypted Secrets & OIDC Authentication', 'Creating Reusable Composite Actions', 'Deployment Environments & Rollback Gates'],
      },
    ],
  },
  // 38. Terraform
  {
    id: 'course-038',
    title: 'Terraform: Infrastructure as Code (IaC)',
    category: 'DevOps',
    level: 'Intermediate',
    description: 'Define, plan, and provision cloud infrastructure declaratively using HashiCorp Configuration Language (HCL).',
    playlistId: 'PLWKjhJtqVAblnSe1qUNMG7AbPmjIG54320',
    playlistStatus: 'pending-verification',
    youtubeChannel: 'IaC Practitioners',
    tags: ['Terraform', 'IaC', 'Cloud', 'DevOps'],
    thumbnail: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format&fit=crop&q=80',
    moduleTitles: [
      {
        title: 'Module 1: Terraform Syntax & State',
        lessons: ['HCL Blocks, Providers & Resources', 'State Files & Remote S3/GCS Backends', 'Terraform Plan, Apply & Destroy Flow'],
      },
      {
        title: 'Module 2: Modules & Best Practices',
        lessons: ['Writing Reusable Infrastructure Modules', 'Workspaces for Dev/Staging/Production', 'Security Scanning with tfsec & Checkov'],
      },
    ],
  },
  // 39. Microservices Architecture
  {
    id: 'course-039',
    title: 'Microservices Design Patterns & Domain-Driven Design',
    category: 'System Design',
    level: 'Advanced',
    description: 'Decompose monoliths, design event-driven sagas, implement API Gateways, and handle distributed tracing.',
    playlistId: 'PLWKjhJtqVAblnSe1qUNMG7AbPmjIG54321',
    playlistStatus: 'pending-verification',
    youtubeChannel: 'Architecture Guild',
    tags: ['Microservices', 'System Design', 'Kafka', 'DDD'],
    thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80',
    moduleTitles: [
      {
        title: 'Module 1: Service Boundaries & Communication',
        lessons: ['Bounded Contexts in Domain-Driven Design', 'Synchronous gRPC vs Asynchronous Event Buses', 'API Gateway & Service Discovery'],
      },
      {
        title: 'Module 2: Distributed Consistency & Observability',
        lessons: ['Saga Pattern for Distributed Transactions', 'Circuit Breakers & Fault Tolerance', 'OpenTelemetry & Distributed Tracing'],
      },
    ],
  },
  // 40. Deep Learning with PyTorch
  {
    id: 'course-040',
    title: 'Deep Learning & Neural Networks with PyTorch',
    category: 'Machine Learning',
    level: 'Advanced',
    description: 'Build and train convolutional, recurrent, and transformer models with PyTorch tensors, autograd, and GPU acceleration.',
    playlistId: 'PLWKjhJtqVAblnSe1qUNMG7AbPmjIG54322',
    playlistStatus: 'pending-verification',
    youtubeChannel: 'AI Research Institute',
    tags: ['Deep Learning', 'PyTorch', 'Neural Networks', 'AI'],
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?w=800&auto=format&fit=crop&q=80',
    moduleTitles: [
      {
        title: 'Module 1: PyTorch Foundations',
        lessons: ['Tensors, Operations & CUDA Acceleration', 'Autograd & Custom Forward/Backward Passes', 'Building Models with nn.Module'],
      },
      {
        title: 'Module 2: Training & Architectures',
        lessons: ['DataLoaders & Augmentation Pipelines', 'Convolutional Neural Networks for Vision', 'Model Evaluation & Checkpointing'],
      },
    ],
  },
  // 41. Natural Language Processing
  {
    id: 'course-041',
    title: 'Natural Language Processing & Word Embeddings',
    category: 'Artificial Intelligence',
    level: 'Intermediate',
    description: 'Explore text preprocessing, TF-IDF, Word2Vec, BERT tokenization, sentiment analysis, and sequence-to-sequence models.',
    playlistId: 'PLWKjhJtqVAblnSe1qUNMG7AbPmjIG54323',
    playlistStatus: 'pending-verification',
    youtubeChannel: 'NLP Masterclass',
    tags: ['NLP', 'AI', 'BERT', 'Text Analytics'],
    thumbnail: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=80',
    moduleTitles: [
      {
        title: 'Module 1: Text Representation',
        lessons: ['Tokenization, Stemming & Lemmatization', 'TF-IDF Vector Space Models', 'Word2Vec & Cosine Distance Embeddings'],
      },
      {
        title: 'Module 2: Transformers for Language Tasks',
        lessons: ['Masked Language Modeling with BERT', 'Named Entity Recognition (NER)', 'Fine-Tuning on Custom Text Datasets'],
      },
    ],
  },
  // 42. Prompt Engineering
  {
    id: 'course-042',
    title: 'Prompt Engineering & Autonomous AI Agents',
    category: 'Artificial Intelligence',
    level: 'Beginner',
    description: 'Learn few-shot prompting, chain-of-thought reasoning, ReAct agent loops, structured JSON outputs, and evaluation harnesses.',
    playlistId: 'PLWKjhJtqVAblnSe1qUNMG7AbPmjIG54324',
    playlistStatus: 'pending-verification',
    youtubeChannel: 'Prompt Engineering Institute',
    tags: ['Prompt Engineering', 'AI Agents', 'LLMs', 'ReAct'],
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?w=800&auto=format&fit=crop&q=80',
    moduleTitles: [
      {
        title: 'Module 1: Structured Prompt Design',
        lessons: ['Zero-Shot vs Few-Shot In-Context Learning', 'Chain-of-Thought (CoT) & Decomposition', 'Enforcing Strict JSON Schema Outputs'],
      },
      {
        title: 'Module 2: Tool-Using AI Agents',
        lessons: ['Function Calling & Tool Declarations', 'ReAct Reasoning & Action Loops', 'Evaluating Prompt Reliability & Drift'],
      },
    ],
  },
  // 43. Rust Programming
  {
    id: 'course-043',
    title: 'Rust Systems Programming: Memory Safety & Speed',
    category: 'Software Engineering',
    level: 'Intermediate',
    description: 'Master ownership, borrowing, lifetimes, pattern matching, error handling, traits, and fearless concurrency without garbage collection.',
    playlistId: 'PLWKjhJtqVAblnSe1qUNMG7AbPmjIG54325',
    playlistStatus: 'pending-verification',
    youtubeChannel: 'Rust Systems Guild',
    tags: ['Rust', 'Systems Programming', 'Memory Safety', 'Performance'],
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=80',
    moduleTitles: [
      {
        title: 'Module 1: Ownership & Borrow Checker',
        lessons: ['Ownership Rules & Stack vs Heap', 'Borrowing & Mutable References', 'Lifetime Annotations in Functions'],
      },
      {
        title: 'Module 2: Error Handling & Concurrency',
        lessons: ['Result & Option Enums with Match', 'Traits & Generic Constraints', 'Fearless Concurrency with Channels'],
      },
    ],
  },
  // 44. Go (Golang)
  {
    id: 'course-044',
    title: 'Go (Golang) for High-Performance Cloud Services',
    category: 'Software Engineering',
    level: 'Beginner',
    description: 'Learn Go simplicity: goroutines, channels, interfaces, standard library HTTP servers, and microsecond network services.',
    playlistId: 'PLWKjhJtqVAblnSe1qUNMG7AbPmjIG54326',
    playlistStatus: 'pending-verification',
    youtubeChannel: 'Go Gophers Hub',
    tags: ['Go', 'Golang', 'Cloud', 'Microservices'],
    thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=80',
    moduleTitles: [
      {
        title: 'Module 1: Go Fundamentals & Structs',
        lessons: ['Pointers, Slices & Maps in Go', 'Structs & Implicit Interface Implementation', 'Error Handling Idioms'],
      },
      {
        title: 'Module 2: Goroutines & Web Servers',
        lessons: ['Goroutines & Channel Communication', 'Select Statements & Context Cancellation', 'Building Production net/http APIs'],
      },
    ],
  },
  // 45. Web Accessibility (a11y)
  {
    id: 'course-045',
    title: 'Web Accessibility (WCAG 2.2) & Accessible UX',
    category: 'UI/UX Design',
    level: 'Beginner',
    description: 'Ensure web products serve all people: screen reader testing, semantic landmarks, focus management, and color contrast.',
    playlistId: 'PLWKjhJtqVAblnSe1qUNMG7AbPmjIG54327',
    playlistStatus: 'pending-verification',
    youtubeChannel: 'Accessibility Guild',
    tags: ['Accessibility', 'WCAG', 'a11y', 'Inclusive Design'],
    thumbnail: 'https://images.unsplash.com/photo-1581291518655-9523c932edcf?w=800&auto=format&fit=crop&q=80',
    moduleTitles: [
      {
        title: 'Module 1: WCAG Principles & Semantics',
        lessons: ['Perceivable, Operable, Understandable, Robust', 'Semantic Headings & Document Outlines', 'Color Contrast AA/AAA Ratios'],
      },
      {
        title: 'Module 2: Keyboard Navigation & ARIA',
        lessons: ['Focus Trapping in Modals & Dialogs', 'Proper Usage of ARIA Roles & Labels', 'Screen Reader Auditing (VoiceOver/NVDA)'],
      },
    ],
  },
  // 46. Next.js & Modern SSR
  {
    id: 'course-046',
    title: 'Next.js App Router & Server Components',
    category: 'Front-End Development',
    level: 'Intermediate',
    description: 'Master React Server Components (RSC), streaming with Suspense, server actions, route handlers, and edge caching.',
    playlistId: 'PLWKjhJtqVAblnSe1qUNMG7AbPmjIG54328',
    playlistStatus: 'pending-verification',
    youtubeChannel: 'Full Stack Academy',
    tags: ['Next.js', 'React', 'SSR', 'Web'],
    thumbnail: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=80',
    moduleTitles: [
      {
        title: 'Module 1: App Router & Server Components',
        lessons: ['Server vs Client Component Boundaries', 'File-Based Routing & Nested Layouts', 'Streaming SSR with React Suspense'],
      },
      {
        title: 'Module 2: Data Fetching & Server Actions',
        lessons: ['Server Actions for Form Submissions', 'Incremental Static Regeneration (ISR)', 'Route Handlers & Edge Middleware'],
      },
    ],
  },
  // 47. Cloud Security
  {
    id: 'course-047',
    title: 'Cloud Security Architecture & Zero Trust',
    category: 'Cyber Security',
    level: 'Advanced',
    description: 'Implement Zero Trust principles across public clouds: IAM least privilege, encrypted storage, security posture management, and audit logging.',
    playlistId: 'PLWKjhJtqVAblnSe1qUNMG7AbPmjIG54329',
    playlistStatus: 'pending-verification',
    youtubeChannel: 'Cloud Defense Council',
    tags: ['Cloud Security', 'Zero Trust', 'IAM', 'Compliance'],
    thumbnail: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80',
    moduleTitles: [
      {
        title: 'Module 1: Zero Trust & Identity',
        lessons: ['Principles of Zero Trust Architecture', 'Cloud IAM Scoping & Condition Keys', 'Secrets Management (Vault / Cloud KMS)'],
      },
      {
        title: 'Module 2: Network Isolation & Compliance',
        lessons: ['Security Groups vs Network ACLs', 'Cloud Security Posture Management (CSPM)', 'Audit Trails & CloudTrail Logging'],
      },
    ],
  },
  // 48. Threat Hunting
  {
    id: 'course-048',
    title: 'Threat Hunting, SIEM & Security Operations',
    category: 'Cyber Security',
    level: 'Advanced',
    description: 'Learn proactive cyber defense: MITRE ATT&CK mapping, log ingestion, SIEM correlation rules, and forensic investigations.',
    playlistId: 'PLWKjhJtqVAblnSe1qUNMG7AbPmjIG54330',
    playlistStatus: 'pending-verification',
    youtubeChannel: 'SOC Operations Group',
    tags: ['Threat Hunting', 'SIEM', 'SOC', 'Forensics'],
    thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=80',
    moduleTitles: [
      {
        title: 'Module 1: SOC Frameworks & MITRE ATT&CK',
        lessons: ['The SOC Triad: People, Process & Tech', 'Mapping Tactics with MITRE ATT&CK', 'Endpoint Detection & Response (EDR)'],
      },
      {
        title: 'Module 2: SIEM Analysis & Incident Playbooks',
        lessons: ['Centralized Log Ingestion & Normalization', 'Writing High-Fidelity Alert Detection Rules', 'Digital Forensics & Evidence Preservation'],
      },
    ],
  },
  // 49. Tailwind CSS
  {
    id: 'course-049',
    title: 'Tailwind CSS: Production Utility-First Styling',
    category: 'Front-End Development',
    level: 'Beginner',
    description: 'Build fast, responsive, custom user interfaces with Tailwind CSS utilities, JIT compilation, plugins, and design systems.',
    playlistId: 'PLWKjhJtqVAblnSe1qUNMG7AbPmjIG54331',
    playlistStatus: 'pending-verification',
    youtubeChannel: 'Frontend Studio',
    tags: ['Tailwind CSS', 'CSS', 'Design Systems', 'Frontend'],
    thumbnail: 'https://images.unsplash.com/photo-1581291518655-9523c932edcf?w=800&auto=format&fit=crop&q=80',
    moduleTitles: [
      {
        title: 'Module 1: Utility Foundations & Layout',
        lessons: ['The Utility-First Philosophy', 'Flexbox, Grid & Sizing Utilities', 'Responsive Modifiers (sm, md, lg, xl)'],
      },
      {
        title: 'Module 2: Theming & Production Optimization',
        lessons: ['Custom Colors, Fonts & Spacing Themes', 'Arbitrary Values & Custom Utility Classes', 'CSS Purging & Minified Production Bundles'],
      },
    ],
  },
  // 50. Data Engineering
  {
    id: 'course-050',
    title: 'Data Engineering: ETL Pipelines & Big Data Systems',
    category: 'Data Science',
    level: 'Advanced',
    description: 'Design robust big data pipelines: Apache Kafka streaming, Apache Spark batch processing, data lakes, and orchestration with Airflow.',
    playlistId: 'PLWKjhJtqVAblnSe1qUNMG7AbPmjIG54332',
    playlistStatus: 'pending-verification',
    youtubeChannel: 'Data Engineering Institute',
    tags: ['Data Engineering', 'ETL', 'Spark', 'Airflow'],
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
    moduleTitles: [
      {
        title: 'Module 1: Batch & Stream Ingestion',
        lessons: ['ETL vs ELT Architecture Paradigms', 'Distributed Streaming with Apache Kafka', 'Data Lakehouse Architecture (Parquet, Delta)'],
      },
      {
        title: 'Module 2: Processing & Orchestration',
        lessons: ['Distributed Compute with Apache Spark', 'Pipeline DAG Orchestration with Apache Airflow', 'Data Quality Testing & Schema Evolution'],
      },
    ],
  },
];

export const initialCourses: Course[] = seedSpecs.map(createCourseFromSpec);
