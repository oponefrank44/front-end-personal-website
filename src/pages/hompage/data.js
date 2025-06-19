import TimeImg from "../../assets/Time.jpg";
import Efficiency from "../../assets/efficency.png";
import Security from "../../assets/security.png";

export const Datas = [
  {
    id:1,
    img: Security,
    title: "Security",
    description: `Authentication & Authorization:

Implemented bcrypt/password hashing to securely store user credentials, preventing plaintext exposure.

Enforced multi-factor authentication (MFA) and role-based access control (RBAC) for sensitive systems.

Data Protection:

Encrypted sensitive data (PII) in transit (TLS/SSL) and at rest (AES-256).

Sanitized inputs and parameterized queries to prevent SQL injection (e.g., using Prepared Statements).

Threat Mitigation:

Mitigated XSS attacks via CSP headers and output encoding (e.g., React’s JSX escaping).

Prevented CSRF with anti-forgery tokens (e.g., csurf middleware in Node.js).

Rate-limited API endpoints to deter brute-force attacks.`,
  },
  {
    id:2,
    img: TimeImg,
    title: "Trust",
    description: `I prioritize secure coding practices, transparent data handling, and robust infrastructure to build trustworthy applications. Impact:
Built applications with zero major security breaches, 99.9% uptime, and high user confidence through proactive threat mitigation and ethical data practices.

Why It Matters:
Trust directly impacts user retention, legal compliance, and brand reputation. By embedding security-first principles into development, 
I ensure applications are resilient, ethical, and user-approved.`,
  },
  {
    id:3,
    img: Efficiency,
    title: "Efficiency",
    description: `I build high-performance web applications that prioritize speed, scalability, and maintainability, ensuring fast load times, smooth UX, and cost-effective development. 

⚡ Performance Optimization
Reduced page load times by 30%+ via code splitting, lazy loading, and optimized assets
Enforced modular, reusable components (React, TypeScript) for faster feature development
Impact:
Delivered projects 20% faster than industry averages while maintaining 99.9% uptime—proving that efficiency doesn’t compromise quality.
Why It Matters:
Efficient development means lower costs, happier users, and scalable systems. `}
];
