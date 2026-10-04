import type { Experience } from '../types'

export const experiences: Experience[] = [
  {
    title: 'IT Developer',
    organization: 'Professional IT Work',
    period: 'Semester 4 (2026) — Present',
    description: [
      'Developing and maintaining real-world software systems including a mobile Sales Force Management system with Flutter and Scriptcase, token-based APIs, GPS-validated visit check-ins, and MySQL-backed reporting.',
      'Building Scriptcase dashboards, PDF reports, nested grids, and financial reporting systems while debugging development-vs-production issues (HTTP/HTTPS, JSON, headers, PHP compatibility, queries).',
    ],
    technologies: ['Flutter', 'Scriptcase', 'PHP 8.x', 'MySQL', 'REST API', 'Linux'],
  },
  {
    title: 'Kadiv Litbang',
    organization: 'HMSE',
    period: '2025 — Present',
    description: [
      'Lead the Research & Development division: technical training, curriculum planning, workshops, project development, technical events, recruitment/interviews, and academic/technology activities.',
      'Designed weekly programming training for HMSE members, including "HMSE 101: Your First Step into Programming" (Python basics) and JavaScript fundamentals covering variables, operators, strings, and the DOM.',
    ],
    technologies: ['Teaching', 'Curriculum planning', 'Python', 'JavaScript'],
  },
]
