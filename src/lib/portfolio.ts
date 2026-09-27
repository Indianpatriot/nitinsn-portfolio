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
  description: string;
  stack: string[];
  features: string[];
  github?: string;
  demo?: string;
  visual: 'voyager' | 'playarena' | 'algolens';
  sections: CaseSection[];
};

export const projects: Project[] = [
  {
    slug: 'voyager', number: '01', name: 'Voyager', subtitle: 'Bus Ticket Booking Platform', category: 'FULL-STACK · BOOKING SYSTEMS',
    description: 'A full-stack bus ticket booking and management platform designed around real-world booking workflows, role-based access, seat allocation, and operational management.',
    stack: ['React', 'Node.js', 'Express.js', 'PostgreSQL', 'JavaScript'],
    features: ['Role-based authentication', 'Passenger booking and seat allocation', 'Conductor workflows', 'Owner/admin functionality', 'Invoices and analytics'],
    visual: 'voyager',
    sections: [
      { title: 'Problem', body: 'Bus booking is more than selecting a seat. Passengers need a clear booking path, while conductors and owners need distinct operational workflows. Seat availability also becomes a correctness problem when multiple people attempt to book at once.' },
      { title: 'Solution', body: 'Voyager brings passenger booking, seat allocation, conductor workflows, and owner/admin operations into one full-stack platform. Invoice generation and analytics support the operational side of the system.' },
      { title: 'Architecture', body: 'The React interface handles role-specific journeys. A Node.js and Express.js API owns booking and business logic, backed by PostgreSQL for persistent booking, seat, and operational data.' },
      { title: 'Key Engineering Challenges', body: 'Concurrent seat requests introduce a race-condition risk: two requests can observe the same seat as available. The important engineering question is where the availability check and reservation write become atomic. This is a design challenge to discuss, not a claim of measured production-scale concurrency.' },
      { title: 'Technical Decisions', body: 'Separating the UI from the API keeps role-specific presentation distinct from booking rules. Relational storage fits the relationships between routes, seats, bookings, and users; authorization belongs in the backend rather than only in the interface.' },
      { title: 'What I Learned', body: 'Booking products force careful thinking about permissions, state transitions, and data integrity. A working interface is only one part of a reliable booking flow.' },
    ],
  },
  {
    slug: 'playarena', number: '02', name: 'PlayArena', subtitle: 'Playground Booking Platform', category: 'FULL-STACK · PWA',
    description: 'A Progressive Web App for discovering playgrounds and managing dynamic booking slots.',
    stack: ['React', 'Node.js', 'Supabase', 'PostgreSQL', 'JavaScript', 'PWA'],
    features: ['Dynamic slot scheduling', 'Booking workflows', 'Database-backed availability', 'Authentication', 'Responsive interface', 'API/backend integration'],
    github: 'https://github.com/Indianpatriot/PlayArena', visual: 'playarena',
    sections: [
      { title: 'Problem', body: 'Finding an available playground slot and completing a booking requires availability to stay in sync with changes made by other users.' },
      { title: 'Solution', body: 'PlayArena connects playground discovery with dynamic slot scheduling and booking management in a responsive app.' },
      { title: 'Architecture', body: 'A React frontend communicates with the backend and Supabase-backed PostgreSQL data. Authentication supports distinct user journeys while availability comes from stored booking state.' },
      { title: 'Database Design', body: 'The data model centers on venues, time slots, bookings, and the people interacting with them. Availability is derived from the booking records instead of being treated as a purely visual calendar state.' },
      { title: 'Booking Logic', body: 'The booking flow checks a slot against stored availability before confirming it. The resume documents transaction-based handling of simultaneous slot requests to avoid conflicting bookings.' },
      { title: 'Challenges', body: 'Dynamic schedules and concurrent requests make stale availability a practical concern. The booking decision needs to be enforced at the data layer, not trusted to the browser alone.' },
      { title: 'Lessons Learned', body: 'A booking experience is as much about consistent data and clear state changes as it is about a usable discovery interface.' },
    ],
  },
  {
    slug: 'algolens', number: '03', name: 'AlgoLens', subtitle: 'AI-Assisted Static Code Analysis', category: 'APPLIED ML · DEVELOPER TOOLS',
    description: 'A static code analysis system that parses source code, extracts structural features, and uses machine learning to classify algorithm types and predict time/space complexity.',
    stack: ['Python', 'FastAPI', 'React', 'TypeScript', 'AST parsing', 'Random Forest'],
    features: ['Source-code and AST analysis', 'Structural feature extraction', 'Algorithm classification', 'Time/space complexity estimation', 'Feature-level explainability'],
    github: 'https://github.com/Indianpatriot/algolens-ml', demo: links.algolens, visual: 'algolens',
    sections: [
      { title: 'Problem', body: 'Understanding unfamiliar code often begins with recognizing its algorithmic structure. AlgoLens explores how static analysis and machine learning can make that first pass more informative.' },
      { title: 'Architecture', body: 'A React and TypeScript interface connects to a Python analysis pipeline using FastAPI. The pipeline transforms source code into structural signals before classification and complexity estimation.' },
      { title: 'AST Processing', body: 'The source is parsed into an abstract syntax tree, making it possible to reason about structure rather than matching only surface-level text.' },
      { title: 'Feature Engineering', body: 'A 36-feature AST-based extractor represents structural patterns in code as inputs to the classifier, as documented in the attached resume.' },
      { title: 'ML Model', body: 'A Random Forest classifier was trained on 285 labeled samples across 16 algorithm categories. The finite dataset is part of the project’s scope, not evidence of universal accuracy.' },
      { title: 'Prediction Pipeline', body: 'Parsing and feature extraction precede the algorithm classification step. Time and space complexity are estimated with rules alongside the model, rather than presented as direct guarantees from the classifier.' },
      { title: 'Explainability', body: 'Feature-level explanations expose the structural signals behind an output, helping users inspect the result rather than accept a label without context.' },
      { title: 'Challenges', body: 'Different implementations can express similar algorithms in very different ways. Static features are useful signals, but they cannot capture every runtime behavior or edge case.' },
      { title: 'Lessons Learned', body: 'Practical ML tooling needs careful feature design, a clear separation between learned predictions and rule-based estimates, and honest communication about uncertainty.' },
    ],
  },
];

export const otherProjects = [
  { name: 'Spoonacular Recipe Finder', type: 'INTERNSHIP PROJECT', description: 'Python desktop application for ingredient-based recipe search with dietary filtering, nutrition analysis, visualization, multithreading and logging. Built during my Rubixe AI internship.', stack: ['Python', 'Spoonacular API', 'Pandas', 'Matplotlib'], github: 'https://github.com/Indianpatriot/spoonacular' },
  { name: 'Mutual Fund Tracker', type: 'DESKTOP APPLICATION', description: 'Java desktop application for retrieving and displaying mutual fund information through an external API.', stack: ['Java', 'Swing', 'Maven', 'REST API'] },
  { name: 'Neon Backup Optimizer', type: 'ALGORITHM VISUALIZER', description: 'An algorithm visualization project.', stack: ['Algorithm visualization'], github: 'https://github.com/Indianpatriot/neon-backup-optimizer' },
  { name: 'Guardiant Identity Forge', type: 'HACKATHON', description: 'Identity Sprawl & Privileged Access Abuse Detection.', stack: ['Hackathon'], github: 'https://github.com/Indianpatriot/guardiant-identity-forge' },
];

export const skills = [
  { title: 'Programming', items: ['Python', 'Java', 'JavaScript', 'C++', 'SQL'] },
  { title: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS', 'HTML', 'CSS'] },
  { title: 'Backend', items: ['Node.js', 'Express.js', 'FastAPI', 'REST APIs'] },
  { title: 'Databases', items: ['PostgreSQL', 'SQL', 'Supabase'] },
  { title: 'AI / ML', items: ['Machine Learning', 'Pandas', 'NumPy', 'Matplotlib', 'scikit-learn', 'AST-based analysis', 'LLM/API applications', 'RAG/vector DB concepts'] },
  { title: 'Tools', items: ['Git', 'GitHub', 'VS Code', 'Linux', 'Postman'] },
  { title: 'Cloud / DevOps foundations', items: ['AWS fundamentals', 'Docker fundamentals', 'CI/CD fundamentals'] },
];
