export const portfolioData = {
    name: "Nithish Kumar G",
    roles: ["Full Stack Developer", "MERN Stack Specialist", "Python & FastAPI Developer"],
    summary: "I am a dedicated Full Stack Developer currently pursuing MCA, specializing in the MERN stack (MongoDB, Express.js, React, Node.js), Python, and FastAPI. Passionate about engineering high-performance web applications, architecting scalable RESTful APIs, and building responsive, user-friendly digital experiences. I bring hands-on experience in database modeling, secure authentication systems, and modern frontend design.",
    email: "nithishkumar652004@gmail.com",
    phone: "8825627811",
    location: "Tamil Nadu, India",
    resume: "/resume.pdf",
    github: "https://github.com/nk1411projects",
    linkedin: "https://www.linkedin.com/in/nithishkumar1411/",
    
    experience: {
        title: "Freelancer",
        period: "2024 - Present",
        description: "Designing, building, and deploying real-world web applications and scalable backend systems. Specialized in developing full-stack solutions with the MERN stack, Python, FastAPI, and robust REST APIs to deliver secure, performant, and responsive products.",
        points: [
            "Developing custom full-stack web portals with secure JWT cookie authentication, role-based access control, and robust database routing.",
            "Architecting and implementing high-speed RESTful APIs using FastAPI and Express.js for seamless data synchronization.",
            "Creating responsive frontend templates and interactive admin dashboards powered by React and Tailwind CSS.",
            "Engineering optimized database schemas and performant queries utilizing MongoDB and MySQL."
        ]
    },

    skills: {
        backend: [
            { name: "Node.js" },
            { name: "Express" },
            { name: "Python" },
            { name: "FastAPI" },
            { name: "REST APIs" },
            { name: "JWT" },
            { name: "Authentication" }
        ],
        frontend: [
            { name: "React" },
            { name: "JavaScript" },
            { name: "HTML" },
            { name: "CSS" },
            { name: "TailwindCSS" },
            { name: "Vite" }
        ],
        databases: [
            { name: "MongoDB" },
            { name: "MySQL" },
            { name: "Mongoose" }
        ],
        tools: [
            { name: "Git" },
            { name: "GitHub" },
            { name: "Docker" },
            { name: "Postman" },
            { name: "VS Code" }
        ]
    },

    education: [
        {
            degree: "Master of Computer Applications (MCA)",
            institution: "Rathnavel Subramaniam College of Arts and Science",
            duration: "2025 - 2027",
            status: "Current",
            details: "Specializing in advanced software design, full-stack web architecture, distributed systems, and database optimization algorithms."
        },
        {
            degree: "Bachelor of Computer Applications (BCA)",
            institution: "Karuppannan Mariappan College of Arts and Science",
            duration: "2021 - 2024",
            grade: "73%",
            details: "Built solid foundations in object-oriented programming, data structures, relational databases, and enterprise networking."
        }
    ],

    certifications: [
        {
            title: "Cisco Certified Network Associate (CCNA)",
            issuer: "Cisco",
            description: "Covers network fundamentals, IP connectivity, IP services, security fundamentals, and automation."
        },
        {
            title: "Cisco Certified Network Professional (CCNP)",
            issuer: "Cisco",
            description: "Advanced validation of enterprise networking architectures, routing protocols, switches, and infrastructure security."
        }
    ],

    projects: [
        {
            title: "Complaint Management System",
            tech: "React.js, Node.js, Express.js, MongoDB, Tailwind CSS, JWT",
            tag: "Full Stack (MERN)",
            description: "A centralized platform where users submit complaints and administrators assign relevant personnel to track, update, and resolve issues effectively.",
            github: "https://github.com/nk1411projects/Complaint-Management-System",
            demo: "https://complaint-management-system-amber.vercel.app",
            caseStudy: {
                overview: "A comprehensive MERN stack enterprise portal engineered for issue and grievance tracking. It allows verified users to lodge service requests, while supervisors assign tickets, transition status workflows, and review resolution SLAs in real time.",
                problem: "Organizations lose productivity and accountability when complaints are filed via fragmented channels like emails or informal messages, causing missed deadlines and untracked accountability.",
                solution: "Designed and built a centralized web application featuring secure JWT authentication and strict Role-Based Access Control (Admin, Staff, User). Backed by an Express REST API and MongoDB schema with status validation and timestamped audit logs.",
                techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Mongoose", "Tailwind CSS", "JWT"],
                keyFeatures: [
                    "User authentication with encrypted passwords and JWT sessions",
                    "Role-Based Access Control for administrators, staff, and regular users",
                    "Dynamic ticket tracking dashboard with real-time status transitions",
                    "Interactive complaint filtering by department, priority, and date",
                    "Responsive user interface optimized across desktop and mobile screens"
                ],
                challenges: "Preventing unauthorized access across user roles was crucial. I solved this by engineering modular Express authentication and authorization middleware that validates user claims and prevents privilege escalation.",
                improvements: "Add automated email notifications upon status changes and integrate WebSockets for live status updates."
            }
        },
        {
            title: "eCart - Multi Vendor E-Commerce Platform",
            tech: "React, Node.js, Express, MongoDB, Tailwind",
            tag: "Full Stack (MERN)",
            description: "A responsive online store featuring product filtering, cart management, checkout flows, and a functional administrator management console.",
            github: "https://github.com/nk1411projects/eCart",
            demo: "https://nk-ecart.vercel.app/",
            caseStudy: {
                overview: "ECart is a responsive full-stack e-commerce store. It features full catalog browsing, product searches, cart manipulation, and a protected dashboard for store managers to add or update stock.",
                problem: "Small businesses need custom, low-cost e-commerce storefronts that load rapidly, support simple admin uploads, and scale cleanly without vendor lock-in.",
                solution: "Designed a clean storefront in React using Tailwind CSS for UI controls. Integrated Express backend endpoints to handle product models and search parameters, saving state into MongoDB clusters.",
                techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Mongoose", "Tailwind CSS", "Lucide Icons"],
                keyFeatures: [
                    "Flexible product filtering by category and price range",
                    "Dynamic, client-persisted shopping cart counters",
                    "Responsive checkout flow simulations",
                    "Admin product panel for updating items and inventory",
                    "Modern, fluid grid UI design"
                ],
                challenges: "Synchronizing cart items and total prices during fast clicks was causing layout jumps. I solved this by wrapping state logic inside a dedicated React Context and utilizing local storage synchronization triggers.",
                improvements: "Integrate a real Stripe Payment gateway sandbox and incorporate webhooks to process order receipt emails."
            }
        },
        {
            title: "GroceryApp - Online Essentials Store",
            tech: "React, Node.js, Express, MongoDB, Tailwind",
            tag: "Full Stack (MERN)",
            description: "A digital grocery ordering application featuring categorized catalog exploration, real-time item counter adjustments, and seamless shopping cart calculations.",
            github: "https://github.com/nk1411projects/GroceryApp",
            demo: null,
            caseStudy: {
                overview: "GroceryApp is a modern e-commerce storefront built for everyday grocery and household shopping. It provides shoppers with intuitive product category navigation, price calculations, and responsive cart handling.",
                problem: "Traditional grocery ordering interfaces often feel sluggish on mobile devices with clunky item quantity management and slow catalog searches.",
                solution: "Architected a lightning-fast React frontend paired with an Express and Node.js REST API. Built responsive item cards with immediate quantity adjustments, subtotal recalculations, and clean MongoDB data storage.",
                techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JavaScript"],
                keyFeatures: [
                    "Categorized grocery catalog (Produce, Dairy, Essentials, Beverages)",
                    "Instant search and category-based filtering",
                    "Reactive shopping cart with dynamic price and tax calculations",
                    "Mobile-first responsive design for quick on-the-go browsing",
                    "Structured REST endpoints for product inventory management"
                ],
                challenges: "Maintaining accurate stock quantities and responsive shopping cart updates during continuous state modifications. Resolved by streamlining client-side state hooks with debounced synchronization to backend routes.",
                improvements: "Implement real-time delivery slot booking and SMS notifications for order delivery updates."
            }
        },
        {
            title: "FastAPI High-Performance REST Service",
            tech: "Python, FastAPI, Pydantic, SQLAlchemy, JWT, MySQL",
            tag: "Backend (Python & FastAPI)",
            description: "An asynchronous Python REST API service implementing strict Pydantic data schemas, OAuth2 JWT authentication, and high-throughput database endpoints.",
            github: "https://github.com/nk1411projects",
            demo: null,
            caseStudy: {
                overview: "A modular, scalable backend service developed with Python and FastAPI. Built to serve asynchronous REST endpoints with high concurrency, automated OpenAPI documentation, and robust database operations.",
                problem: "Modern web applications require low-latency backends that strictly validate incoming payloads, protect sensitive endpoints, and handle concurrent API requests without blocking server threads.",
                solution: "Engineered an asynchronous FastAPI backend utilizing Pydantic models for request validation and type safety. Configured OAuth2 password flow with JWT tokens for secure authentication and SQLAlchemy for database ORM operations.",
                techStack: ["Python", "FastAPI", "Pydantic", "SQLAlchemy", "Uvicorn", "MySQL", "JWT"],
                keyFeatures: [
                    "Asynchronous route handlers for non-blocking I/O and rapid response times",
                    "Strict request and response validation utilizing Pydantic data models",
                    "OAuth2 with Password hashing (Bcrypt) and JWT access token verification",
                    "Automated interactive Swagger UI and ReDoc documentation generation",
                    "Relational database integration with SQLAlchemy ORM and transactional safety"
                ],
                challenges: "Handling database session lifecycles across asynchronous request threads without leaking connections. Solved by implementing FastAPI's dependency injection system to manage session scopes cleanly.",
                improvements: "Introduce Redis caching layer to cache frequently accessed read queries and reduce database load."
            }
        }
    ],

    learningJourney: [
        {
            id: "mern",
            name: "MERN Stack",
            description: "Foundational Full Stack Web Development architecture.",
            details: "Mastered full-stack web applications with React, Node.js, Express, and MongoDB. Handled server routes, JWT cookie authentication, database schema design, and layouts.",
            skills: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
            status: "completed"
        },
        {
            id: "fastapi",
            name: "FastAPI",
            description: "High-performance Python backend API framework.",
            details: "Developed rapid endpoints, request validation using Pydantic schemas, asynchronous routing, dependency injection models, and REST API standards.",
            skills: ["Async Routes", "Pydantic Schemas", "Dependency Injection", "OAuth2"],
            status: "completed"
        },
        {
            id: "python",
            name: "Python",
            description: "Core programming language for backend engineering and scripting.",
            details: "Mastered fundamental concepts: data structures (lists, dicts, tuples), object-oriented programming (OOP), file operations, scripting, and modular architecture.",
            skills: ["OOP", "Data Structures", "File Handling", "Scripts"],
            status: "completed"
        },
        {
            id: "mysql",
            name: "MySQL",
            description: "Relational Database Management System.",
            details: "Formed depth in SQL query scripting, database normalization, relational mapping, indexing, and executing secure transactional statements.",
            skills: ["SQL Scripts", "Normalizations", "Joins", "Transactions"],
            status: "completed"
        },
        {
            id: "restapis",
            name: "RESTful APIs",
            description: "API architecture and client-server integration.",
            details: "Designed and implemented robust RESTful APIs following HTTP standards, status codes, route grouping, and payload serialization.",
            skills: ["Endpoint Design", "HTTP Protocols", "Error Handling", "CRUD Operations"],
            status: "completed"
        },
        {
            id: "frontend",
            name: "Modern Frontend",
            description: "Interactive and responsive UI engineering.",
            details: "Crafted dynamic user interfaces with React, Tailwind CSS, custom hooks, Framer Motion animations, and responsive flex/grid layouts.",
            skills: ["React Hooks", "Tailwind CSS", "Responsive Design", "State Management"],
            status: "completed"
        }
    ],

    timelineRoadmap: [
        { title: "BCA Graduation", desc: "Graduated with 73%, building core computer science and database foundations." },
        { title: "MERN Stack Mastery", desc: "Developed full-stack web applications integrating React, Node, Express, and MongoDB." },
        { title: "MySQL Relational Logic", desc: "Designed normalized relational schemas and optimized complex SQL execution queries." },
        { title: "Python Specialization", desc: "Focused on core OOP patterns, data structures, and backend scripts." },
        { title: "FastAPI Backend Engineering", desc: "Built performant, asynchronous Python endpoints with Pydantic schema validation." },
        { title: "RESTful API Architecture", desc: "Engineered secure client-server data flows with JWT authentication and middleware guards." },
        { title: "Full Stack Production Deployments", desc: "Deployed scalable web apps and backend services to modern cloud hosting platforms." }
    ]
};
