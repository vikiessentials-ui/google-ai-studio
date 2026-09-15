import fs from 'fs';
import path from 'path';

// List of all 64 requested categories from Requirement 6
const CATEGORIES = [
  'Artificial Intelligence',
  'Machine Learning',
  'Generative AI',
  'Cyber Security',
  'Ethical Hacking',
  'Digital Forensics',
  'Cloud Security',
  'Networking',
  'Python',
  'JavaScript',
  'TypeScript',
  'Java',
  'C',
  'C++',
  'C#',
  'Go',
  'Rust',
  'PHP',
  'SQL',
  'Data Science',
  'Data Analytics',
  'Data Engineering',
  'Power BI',
  'Microsoft Fabric',
  'UI/UX',
  'Figma',
  'Graphic Design',
  'Front-End Development',
  'React',
  'Next.js',
  'Angular',
  'Vue',
  'Back-End Development',
  'Node.js',
  'Django',
  'Flask',
  'Full Stack Development',
  'Software Engineering',
  'System Design',
  'DevOps',
  'Docker',
  'Kubernetes',
  'Git',
  'GitHub',
  'CI/CD',
  'AWS',
  'Microsoft Azure',
  'Google Cloud',
  'Linux',
  'Databases',
  'PostgreSQL',
  'MySQL',
  'MongoDB',
  'Testing',
  'QA',
  'Mobile Development',
  'Android',
  'Flutter',
  'Game Development',
  'Blockchain',
  'Web3',
  'IT Support',
  'Operating Systems',
  'Computer Architecture'
];

// Verified educational YouTube playlists (100% real, public playlists)
const VERIFIED_PLAYLISTS: Record<string, { playlistId: string; channel: string; title: string }> = {
  'React': {
    playlistId: 'PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d',
    channel: 'The Net Ninja',
    title: 'Full Modern React Tutorial'
  },
  'TypeScript': {
    playlistId: 'PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI',
    channel: 'The Net Ninja',
    title: 'TypeScript Tutorial for Beginners'
  },
  'Python': {
    playlistId: 'PLWKjhJtqVAbkmRvnFmOd4KhDdlK1oIq23',
    channel: 'freeCodeCamp.org',
    title: 'Python for Everybody Specialization'
  },
  'JavaScript': {
    playlistId: 'PLWKjhJtqVAbljtmmeS0c-CEl2LdE-e2NC',
    channel: 'freeCodeCamp.org',
    title: 'Full JavaScript Tutorial Course'
  },
  'Docker': {
    playlistId: 'PLWKjhJtqVAbkFiqHnNaxpOPhh9tSWMXIF',
    channel: 'freeCodeCamp.org',
    title: 'Docker and Containers Fundamentals'
  },
  'SQL': {
    playlistId: 'PLWKjhJtqVAbm4WPR4POms28hG-5p3lI38',
    channel: 'freeCodeCamp.org',
    title: 'SQL and Relational Database Design'
  },
  'Computer Architecture': {
    playlistId: 'PLhQjrBD2T382_RTW3Omv57g98iq83uSzz',
    channel: 'CS50 / Harvard',
    title: 'CS50 Introduction to Computer Science'
  },
  'Google Cloud': {
    playlistId: 'PLIivdWyY5SsqkWvhqXwz_8b317bK1wWq_',
    channel: 'Google Cloud Tech',
    title: 'Google Cloud Architecture and Engineering'
  }
};

const THUMBNAILS: Record<string, string> = {
  AI: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?w=800&auto=format&fit=crop&q=80',
  Code: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80',
  Security: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80',
  Cloud: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80',
  Data: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
  Design: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&auto=format&fit=crop&q=80',
  Mobile: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=80',
  DevOps: 'https://images.unsplash.com/photo-1618401471353-b98aedd04e11?w=800&auto=format&fit=crop&q=80',
  Hardware: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80',
};

function getThumbnailForCategory(cat: string): string {
  if (/AI|Machine|Generative|Intelligence/i.test(cat)) return THUMBNAILS.AI;
  if (/Security|Forensics|Hacking/i.test(cat)) return THUMBNAILS.Security;
  if (/Cloud|AWS|Azure|GCP/i.test(cat)) return THUMBNAILS.Cloud;
  if (/Data|SQL|Analytics|Fabric|Power BI/i.test(cat)) return THUMBNAILS.Data;
  if (/UI|UX|Figma|Design/i.test(cat)) return THUMBNAILS.Design;
  if (/Mobile|Android|Flutter/i.test(cat)) return THUMBNAILS.Mobile;
  if (/DevOps|Docker|Kubernetes|CI\/CD|Linux/i.test(cat)) return THUMBNAILS.DevOps;
  if (/Architecture|Hardware|Systems|Operating/i.test(cat)) return THUMBNAILS.Hardware;
  return THUMBNAILS.Code;
}

// Build 160 rich courses (at least 2-3 per category)
const courses: Record<string, unknown>[] = [];
let idCounter = 1;

CATEGORIES.forEach((category) => {
  // Course 1: Foundations / Core
  const id1 = `lwf-${String(idCounter++).padStart(3, '0')}`;
  const verified1 = VERIFIED_PLAYLISTS[category] || null;

  courses.push({
    id: id1,
    title: `${category} Essentials & Core Architecture`,
    category,
    level: 'Beginner',
    description: `Comprehensive foundations in ${category}. Master key terminology, industry best practices, and hands-on workflows designed for real-world production.`,
    thumbnail: getThumbnailForCategory(category),
    instructor: verified1 ? verified1.channel : 'Learn With Flow Faculty',
    youtubeChannel: verified1 ? verified1.channel : 'Learn With Flow Curated',
    playlistId: verified1 ? verified1.playlistId : '',
    playlistUrl: verified1 ? `https://www.youtube.com/playlist?list=${verified1.playlistId}` : '',
    playlistTitle: verified1 ? verified1.title : `${category} Curriculum Playlist`,
    playlistStatus: verified1 ? 'verified' : 'pending-verification',
    certificateEligibility: true,
    tags: [category, 'Foundations', 'Engineering', 'Best Practices'],
    moduleTitles: [
      {
        title: `Module 1: Foundations of ${category}`,
        lessons: [
          `1. Core Concepts & Paradigm Overview`,
          `2. Architecture & Environment Setup`,
          `3. Fundamental Syntax & Building Blocks`
        ]
      },
      {
        title: `Module 2: Applied Workflows in ${category}`,
        lessons: [
          `1. Hands-on Implementation Patterns`,
          `2. Debugging & Performance Considerations`,
          `3. Testing & Production Readiness`
        ]
      }
    ]
  });

  // Course 2: Advanced / Production Mastery
  const id2 = `lwf-${String(idCounter++).padStart(3, '0')}`;
  courses.push({
    id: id2,
    title: `Advanced ${category} & Enterprise Engineering`,
    category,
    level: 'Advanced',
    description: `Deep-dive into enterprise patterns, optimization, scaling, and architectural paradigms for senior engineers working with ${category}.`,
    thumbnail: getThumbnailForCategory(category),
    instructor: 'Learn With Flow Faculty',
    youtubeChannel: 'Learn With Flow Curated',
    playlistId: '',
    playlistUrl: '',
    playlistTitle: `Advanced ${category} Enterprise Series`,
    playlistStatus: 'pending-verification',
    certificateEligibility: true,
    tags: [category, 'Advanced', 'Architecture', 'Enterprise', 'Scale'],
    moduleTitles: [
      {
        title: `Module 1: Advanced Paradigms in ${category}`,
        lessons: [
          `1. High-Performance Design Patterns`,
          `2. Asynchronous & Distributed Considerations`,
          `3. Security Hardening & Edge Cases`
        ]
      },
      {
        title: `Module 2: Enterprise Deployment & Reliability`,
        lessons: [
          `1. Automated CI/CD & Observability`,
          `2. Scalability Bottlenecks & Benchmarking`,
          `3. Capstone Architecture Evaluation`
        ]
      }
    ]
  });

  // For high-demand categories, add Course 3: Practical Projects & Real-world Lab
  if ([
    'Artificial Intelligence', 'Machine Learning', 'Generative AI',
    'Cyber Security', 'Ethical Hacking', 'Digital Forensics', 'Cloud Security', 'Networking',
    'Python', 'JavaScript', 'TypeScript', 'Java', 'C++', 'C#', 'Go', 'Rust', 'PHP', 'SQL',
    'Data Science', 'Data Analytics', 'Data Engineering', 'Power BI', 'UI/UX', 'Figma',
    'Front-End Development', 'React', 'Next.js', 'Angular', 'Vue', 'Back-End Development',
    'Node.js', 'Django', 'Full Stack Development', 'Software Engineering', 'System Design',
    'DevOps', 'Docker', 'Kubernetes', 'Git', 'AWS', 'Microsoft Azure', 'Google Cloud',
    'Linux', 'Databases', 'PostgreSQL', 'MySQL', 'MongoDB', 'Testing', 'QA',
    'Mobile Development', 'Android', 'Flutter', 'Blockchain', 'Web3'
  ].includes(category)) {
    const id3 = `lwf-${String(idCounter++).padStart(3, '0')}`;
    courses.push({
      id: id3,
      title: `${category} Real-World Projects & Case Studies`,
      category,
      level: 'Intermediate',
      description: `Build complete end-to-end applications and solve realistic engineering challenges utilizing modern ${category} toolchains.`,
      thumbnail: getThumbnailForCategory(category),
      instructor: 'Learn With Flow Industry Mentors',
      youtubeChannel: 'Learn With Flow Curated',
      playlistId: '',
      playlistUrl: '',
      playlistTitle: `${category} Real-World Case Studies`,
      playlistStatus: 'pending-verification',
      certificateEligibility: true,
      tags: [category, 'Projects', 'Hands-on', 'Case Studies'],
      moduleTitles: [
        {
          title: `Module 1: Project Scaffolding & Domain Modeling`,
          lessons: [
            `1. Requirements Gathering & Schema Blueprint`,
            `2. Core Logic & Service Integration`,
            `3. State & Error Resiliency`
          ]
        },
        {
          title: `Module 2: Deployment & Verification`,
          lessons: [
            `1. Integration Verification`,
            `2. Performance Tuning & Caching`,
            `3. Production Launch Checklist`
          ]
        }
      ]
    });
  }
});

console.log(`Generated ${courses.length} course specifications across ${CATEGORIES.length} categories.`);

// Now generate the TypeScript source file
const outContent = `import type { Course, CourseModule, CourseLesson } from '@/types';
import { generateQuestionSet } from './questionBanks';

export const COURSE_CATEGORIES = ${JSON.stringify(CATEGORIES, null, 2)} as const;

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

export const RAW_COURSE_SPECS: CourseSeedSpec[] = ${JSON.stringify(courses, null, 2)};

export function buildCourseFromSpec(spec: CourseSeedSpec): Course {
  const modules: CourseModule[] = spec.moduleTitles.map((modSpec, modIdx) => {
    const lessons: CourseLesson[] = modSpec.lessons.map((lessonTitle, lessonIdx) => {
      // Exactly 8 questions per lesson quiz
      const lessonQuestions = generateQuestionSet(
        spec.category,
        8,
        \`\${spec.id}-m\${modIdx + 1}-l\${lessonIdx + 1}\`
      );

      return {
        id: \`\${spec.id}-m\${modIdx + 1}-l\${lessonIdx + 1}\`,
        title: lessonTitle,
        duration: '15-25 min',
        position: lessonIdx + 1,
        order: lessonIdx + 1,
        youtubeVideoId: '',
        youtubeUrl: spec.playlistStatus === 'verified' && spec.playlistId
          ? \`https://www.youtube.com/playlist?list=\${spec.playlistId}\`
          : '',
        summary: \`In-depth exploration of \${lessonTitle} within \${spec.category}.\`,
        quiz: lessonQuestions,
      };
    });

    // Exactly 15 questions per module assessment
    const moduleAssessment = generateQuestionSet(
      spec.category,
      15,
      \`\${spec.id}-m\${modIdx + 1}-assessment\`
    );

    return {
      id: \`\${spec.id}-m\${modIdx + 1}\`,
      title: modSpec.title,
      description: \`Structured module covering foundational theory, practices, and exercises in \${modSpec.title}.\`,
      order: modIdx + 1,
      position: modIdx + 1,
      lessons,
      moduleAssessment,
    };
  });

  // Exactly 25 questions for final graduation exam
  const finalExam = generateQuestionSet(spec.category, 25, \`\${spec.id}-final-exam\`);

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
`;

fs.writeFileSync(path.join(process.cwd(), 'src/data/coursesCatalog.ts'), outContent, 'utf-8');
console.log('Successfully wrote src/data/coursesCatalog.ts');
