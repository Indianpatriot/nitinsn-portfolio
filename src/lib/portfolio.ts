import { voyagerScreenGroups, type ScreenGroup } from '@/lib/screenshots';

export const links = {
  github: 'https://github.com/Indianpatriot/',
  linkedin: 'https://www.linkedin.com/in/nitin-s-n/',
  email: 'mailto:snnitin14@gmail.com',
  algolens: 'https://algo-lens-viz.vercel.app',
} as const;

export type CaseSection = { title: string; body: string };
export type Project = {
  slug: string;
  number: string;
  name: string;
  subtitle: string;
  category: string;
  problem: string;
  description: string;
  stack: string[];
  features: string[];
  results: string[];
  github?: string;
  demo?: string;
  visual: 'voyager' | 'playarena' | 'algolens';
  sections: CaseSection[];
  screenGroups?: ScreenGroup[];
};

export const projects: Project[] = [
  {
    slug: 'algolens', number: '01', name: 'AlgoLens', subtitle: 'AI-Assisted Static Code Analysis', category: 'APPLIED ML · DEVELOPER TOOLS',
    problem: 'Problem: Recognizing an algorithm and estimating its complexity from source code is hard to do by inspection. Solution: A pipeline that extracts structural features from the code and classifies the algorithm with machine learning.',
    description: 'An AI-assisted static code analysis system that parses source code, extracts structural features, and uses machine learning to classify algorithm types and predict time and space complexity.',
    stack: ['Python', 'FastAPI', 'React', 'TypeScript', 'AST Parsing', 'Random Forest', 'Machine Learning'],
    features: ['Source-code parsing', 'AST analysis', 'Structural feature extraction', 'Algorithm classification', 'Time and space complexity prediction', 'Feature-level explainability'],
    results: ['96% classification accuracy across 25 algorithm classes', 'AST-based feature extractor feeding a Random Forest classifier', 'Feature-level explanations show which signals drove each result'],
    github: 'https://github.com/Indianpatriot/algolens-ml', demo: links.algolens, visual: 'algolens',
    sections: [
      { title: 'Problem', body: 'Source code contains structural clues about the algorithm it implements, but recognizing those patterns and estimating complexity from code alone can be difficult. AlgoLens explores how static analysis can extract those signals for further analysis.' },
      { title: 'Solution', body: 'AlgoLens combines AST-based structural feature extraction with machine-learning classification and rule-based time and space complexity estimates, then presents the analysis through a React interface.' },
      { title: 'Architecture', body: 'Source Code → AST Parsing → Feature Extraction → Machine Learning Model → Prediction → FastAPI → React Interface. The Python pipeline uses a 36-feature extractor and a Random Forest classifier trained on 285 labeled samples across 16 algorithm categories.' },
      { title: 'Key Engineering Challenges', body: 'Different implementations can express similar algorithms in different ways. Static structural features are useful signals, but cannot represent every runtime behavior or edge case; the training set also defines the scope of the classifier.' },
      { title: 'Technical Decisions', body: 'Parsing into an abstract syntax tree makes it possible to work with code structure rather than surface-level text. Classification and rule-based complexity estimates are separate steps, so an estimate is not presented as a direct guarantee from the model.' },
      { title: 'Implementation', body: 'The analysis pipeline parses source code, extracts structural features, classifies an algorithm with a Random Forest model, and estimates time and space complexity with rules. Feature-level explanations expose signals behind the output.' },
      { title: 'What I Learned', body: 'Useful ML tooling depends on thoughtful feature design, a clear distinction between model predictions and rule-based estimates, and honest communication about uncertainty.' },
    ],
  },
  {
    slug: 'voyager', number: '02', name: 'Voyager', subtitle: 'Bus Ticket Booking Platform', category: 'FULL-STACK · BOOKING SYSTEMS',
    problem: 'Problem: Passengers, conductors, and owners need different workflows, and seat availability can conflict when several people book at once. Solution: A full-stack platform with role-based booking, seat allocation, and operational tools.',
    description: 'A full-stack bus ticket booking and management platform designed around real booking workflows, role-based access, seat allocation, and operational management.',
    stack: ['React', 'Node.js', 'Express.js', 'PostgreSQL', 'JavaScript'],
    features: ['Role-based access', 'Passenger booking and seat allocation', 'Conductor workflows', 'Owner/admin functionality', 'Invoices and analytics'],
    results: ['Passenger, conductor, and owner workflows in one role-based platform', 'Seat allocation with invoice generation and analytics', 'Booking rules kept in the backend, not only in the interface'],
    visual: 'voyager', github: 'https://github.com/Indianpatriot/bus-buddy', screenGroups: voyagerScreenGroups,
    sections: [
      { title: 'Problem', body: 'Passengers need a clear booking path, while conductors and owners need distinct operational workflows. Seat availability also becomes a correctness concern when multiple people attempt to book at once.' },
      { title: 'Solution', body: 'Voyager brings passenger booking, seat allocation, conductor workflows, and owner/admin operations into one full-stack platform. Invoice generation and analytics support operational tasks.' },
      { title: 'Architecture', body: 'The React interface handles role-specific journeys. Node.js and Express.js APIs handle booking and business logic, backed by PostgreSQL for persistent booking, seat, and operational data.' },
      { title: 'Key Engineering Challenges', body: 'Concurrent seat requests create a race-condition risk: two requests can observe the same seat as available. The availability check and reservation write need to be considered together to prevent conflicting bookings. This is a design concern, not a claim of measured production-scale concurrency.' },
      { title: 'Technical Decisions', body: 'Separating the UI from the APIs keeps role-specific presentation distinct from booking rules. Relational storage fits the relationships between routes, seats, bookings, and users; access checks belong in business logic, not only in the interface.' },
      { title: 'Implementation', body: 'The platform brings together passenger booking, seat allocation, conductor workflows, owner/admin functionality, invoice generation, and analytics, with PostgreSQL-backed business data.' },
      { title: 'What I Learned', body: 'Booking products require careful thought about permissions, state transitions, and data integrity. A usable interface is only one part of a reliable booking workflow.' },
    ],
  },
  {
    slug: 'playarena', number: '03', name: 'PlayArena', subtitle: 'Playground Booking Platform', category: 'FULL-STACK · PWA',
    problem: 'Problem: Playground slot availability goes stale when other users book at the same time. Solution: A responsive Progressive Web App where availability is derived from stored booking records.',
    description: 'A Progressive Web App for discovering playgrounds and managing dynamic booking slots.',
    stack: ['React', 'Node.js', 'Supabase', 'PostgreSQL', 'JavaScript', 'PWA'],
    features: ['Dynamic slot scheduling', 'Booking workflows', 'Database-backed availability', 'Authentication', 'Responsive React interface', 'API/backend integration'],
    results: ['Slot availability derived from stored booking records, not a browser view', 'Authentication supporting distinct user journeys', 'Built as a responsive Progressive Web App with a React frontend'],
    github: 'https://github.com/Indianpatriot/PlayArena', visual: 'playarena',
    sections: [
      { title: 'Problem', body: 'Finding an available playground slot and completing a booking requires availability to stay in sync with changes made by other users.' },
      { title: 'Solution', body: 'PlayArena connects playground discovery with dynamic slot scheduling and booking management in a responsive Progressive Web App.' },
      { title: 'Architecture', body: 'A React frontend communicates with a Node.js backend and Supabase-backed PostgreSQL data. Authentication supports distinct user journeys while availability comes from stored booking state.' },
      { title: 'Key Engineering Challenges', body: 'Dynamic schedules and concurrent requests make stale availability a real concern. Booking decisions need to use stored availability rather than rely on a browser view that may be out of date.' },
      { title: 'Technical Decisions', body: 'The data model centers on venues, time slots, bookings, and users. Availability is derived from booking records instead of being treated as a purely visual calendar state.' },
      { title: 'Implementation', body: 'The app combines playground discovery, dynamic slot scheduling, booking workflows, authentication, and database-backed availability across its React frontend and Node.js backend.' },
      { title: 'What I Learned', body: 'A booking experience depends on consistent data and clear state changes as much as a usable discovery interface.' },
    ],
  },
];

export const otherProjects = [
  { name: 'Spoonacular Recipe Finder', type: 'INTERNSHIP PROJECT', description: 'Python desktop application developed during my Rubixe AI internship, integrating the Spoonacular API for recipe search, dietary filtering and nutrition analysis, with Pandas, Matplotlib, multithreading and logging.', stack: ['Python', 'Spoonacular API', 'Pandas', 'Matplotlib'], github: 'https://github.com/Indianpatriot/spoonacular' },
  { name: 'Mutual Fund Tracker', type: 'DESKTOP APPLICATION', description: 'A desktop app that lets you look up mutual fund information and view it clearly, using data from the mfapi.in API.', stack: ['Java', 'Swing', 'Maven', 'REST API'] },
];

export const smallerProjects = [
  { name: 'Neon Backup Optimizer', description: 'Algorithm visualization project.', stack: ['Algorithm visualization'], github: 'https://github.com/Indianpatriot/neon-backup-optimizer' },
  { name: 'Guardiant Identity Forge', description: 'Identity security hackathon project that detects identity sprawl and privileged-access abuse from structured identity data.', stack: ['Hackathon'], github: 'https://github.com/Indianpatriot/guardiant-identity-forge' },
];

export const skills = [
  { title: 'Primary / Hands-on', items: ['Python', 'JavaScript', 'TypeScript', 'React', 'Node.js', 'Express.js', 'FastAPI', 'PostgreSQL', 'SQL', 'Git'] },
  { title: 'Working Knowledge', items: ['Java', 'Supabase', 'scikit-learn', 'Machine Learning', 'AST-based analysis', 'C++', 'Tailwind CSS', 'HTML', 'CSS', 'NumPy', 'Matplotlib', 'Pandas', 'GitHub', 'VS Code', 'Linux', 'Postman'] },
  { title: 'Familiarity / Exploring', items: ['AWS', 'Docker', 'CI/CD', 'RAG', 'Vector Databases', 'LLM APIs'] },
];

export const certifications = [
  { name: 'AWS Fundamentals' },
];

export const engineeringHighlights = [
  { title: 'Concurrency', description: 'Identified the Voyager seat race condition, where two requests can see the same seat as free, and designed the availability check and reservation to be handled together. PlayArena availability is read from stored booking records.', slug: 'voyager', linkLabel: 'Voyager case study' },
  { title: 'API Development', description: 'Designed REST APIs in Express and FastAPI, keeping access checks and booking rules in the backend rather than only in the interface.', slug: 'voyager', linkLabel: 'Voyager case study' },
  { title: 'Database Engineering', description: 'Modeled routes, seats, bookings, and users in PostgreSQL for Voyager, and venues, time slots, and bookings for PlayArena.', slug: 'playarena', linkLabel: 'PlayArena case study' },
  { title: 'Static Analysis & ML', description: 'Extracted AST structural features and trained a Random Forest classifier to identify algorithm types in AlgoLens.', slug: 'algolens', linkLabel: 'AlgoLens case study' },
];
