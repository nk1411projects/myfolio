export const portfolioData = {
    name: "Nithish Kumar G",
    roles: ["Full Stack Developer", "AI Enthusiast", "MCA Student"],
    summary: "I am a Full Stack Developer and AI Enthusiast currently pursuing MCA, passionate about building real-world Web applications, intelligent applications powered by Machine Learning, Generative AI, Retrieval-Augmented Generation (RAG), and Large Language Models. My journey started with full-stack web development using the MERN stack and gradually evolved toward Artificial Intelligence, where I now focus on developing AI-powered solutions, agentic workflows, and enterprise-ready applications.",
    email: "nithishkumar652004@gmail.com",
    phone: "8825627811",
    location: "Tamil Nadu, India",
    resume: "/resume.pdf",
    github: "https://github.com/nk1411projects",
    linkedin: "https://www.linkedin.com/in/nithishkumar1411/",
    
    experience: {
        title: "Freelancer",
        period: "2024 - Present",
        description: "Designing, building, and deploying real-world web applications and intelligent data systems. Specialized in integrating the MERN stack with modern AI frameworks and REST APIs to deliver customized, responsive solutions for clients.",
        points: [
            "Developing custom full-stack web portals with secure JWT cookie authentication and robust database routing.",
            "Integrating machine learning predictive modules and NLP engines into client facing web applications.",
            "Creating responsive frontend templates and admin dashboards powered by React and Tailwind CSS.",
            "Building high-performance backend pipelines using FastAPI, Express.js, Node.js, and MongoDB/MySQL."
        ]
    },

    skills: {
        ai: [
            { name: "Python" },
            { name: "ML & DL" },
            { name: "TensorFlow" },
            { name: "Scikit-Learn" },
            { name: "NLP" },
            { name: "Transformers" },
            { name: "LLMs" },
            { name: "Prompt Engineering" },
            { name: "LangChain" },
            { name: "RAG" },
            { name: "AI Agents" }
        ],
        backend: [
            { name: "Node.js" },
            { name: "Express" },
            { name: "FastAPI" },
            { name: "REST APIs" },
            { name: "JWT" },
            { name: "MongoDB" },
            { name: "MySQL" }
        ],
        frontend: [
            { name: "React" },
            { name: "HTML" },
            { name: "CSS" },
            { name: "JavaScript" },
            { name: "TailwindCSS" }
        ],
        tools: [
            { name: "Git" },
            { name: "GitHub" },
            { name: "Docker" },
            { name: "VS Code" },
            { name: "Google Colab" }
        ]
    },

    education: [
        {
            degree: "Master of Computer Applications (MCA)",
            institution: "Rathnavel Subramaniam College of Arts and Science",
            duration: "2025 - 2027",
            status: "Current",
            details: "Specializing in advanced software design, machine learning pipelines, and database optimization algorithms."
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
            title: "AI Resume Screening & Job Matching System",
            tech: "Python, Streamlit, Scikit-learn, NLP",
            tag: "AI & NLP",
            description: "An automated intelligent tool designed to parse PDF resumes, extract technical skills using Natural Language Processing (NLP), and perform semantic matching against job descriptions.",
            github: "https://github.com/nk1411projects",
            demo: null,
            caseStudy: {
                overview: "The AI Resume Screening & Job Matching System automates the process of screening applications. It extracts text and metadata from PDF resumes, tokenizes and processes them using advanced NLP techniques, and computes semantic similarity against target job descriptions.",
                problem: "HR departments are overwhelmed with thousands of resumes. Manual screening is extremely time-consuming, highly subjective, and prone to human cognitive bias, often leading to missing out on top-tier candidates.",
                solution: "Developed a Python application powered by a Streamlit user interface. The system leverages Spacy for Named Entity Recognition (NER) to pull technical skills, TF-IDF and Sentence-Transformers to compute an AI match score, and generates a structured downloadable PDF report outlining missing skills and keyword matches.",
                techStack: ["Python", "Streamlit", "Scikit-learn", "Spacy", "NLTK", "PyPDF2", "ReportLab"],
                keyFeatures: [
                    "Automated multi-format PDF parsing and preprocessing",
                    "NLP-based custom skill and entity extraction",
                    "Semantic job description matching using cosine similarity",
                    "Real-time AI Match Score (0 - 100%)",
                    "Automated downloadable PDF Match Report generation for HR reviews"
                ],
                challenges: "Variations in resume formatting (multi-column tables, text-as-image files, complex PDF outlines) frequently broke text extractors. I overcame this by applying normalized regex pattern filters and implementing a backup layout-aware text parser.",
                improvements: "Incorporate localized open-source LLMs (e.g., Llama 3) via Ollama to perform contextual semantic reasoning, analyzing not just keyword matching but actual project relevancy."
            }
        },
        {
            title: "AI Employee Attrition Prediction System",
            tech: "Python, Streamlit, Scikit-learn, SHAP",
            tag: "Machine Learning",
            description: "A machine learning prediction engine analyzing corporate HR metrics to forecast employee turnover risk and provide explainable AI insights using SHAP.",
            github: "https://github.com/nk1411projects/AI-Employee-Attrition-Prediction",
            demo: "https://ai-attrition-prediction.streamlit.app/",
            caseStudy: {
                overview: "This system provides organizations with proactive insights into talent retention. By feeding employee data (tenure, satisfaction, work-life balance, promotions) into a trained ML model, it predicts attrition likelihood and explains which variables contributed to that result.",
                problem: "Unexpected employee turnover is expensive, costing organizations up to 2x an employee's annual salary in recruitment and training. Businesses struggle to identify flight risks before they hand in their resignation.",
                solution: "Built an interactive Streamlit dashboard driven by a Scikit-learn Machine Learning pipeline. Used Random Forest and Logistic Regression models to predict turnover, and integrated SHAP (SHapley Additive exPlanations) to display feature importance at both global and individual levels.",
                techStack: ["Python", "Streamlit", "Scikit-learn", "SHAP", "Pandas", "Matplotlib", "Seaborn"],
                keyFeatures: [
                    "End-to-end ML training and preprocessing pipeline",
                    "Feature engineering (satisfaction indices, overtime flags)",
                    "Interactive Streamlit dashboard with filterable widgets",
                    "Explainable AI (SHAP graphs) justifying model predictions",
                    "Actionable business insights recommendation cards"
                ],
                challenges: "Employee attrition datasets are highly imbalanced, with far fewer 'left' records than 'retained' ones. This caused the model to over-predict retention. I addressed this by applying SMOTE (Synthetic Minority Over-sampling Technique) to balance the target classes during training.",
                improvements: "Integrate time-series analysis to predict *when* an employee is most likely to exit based on seasonal performance cycles."
            }
        },
        {
            title: "Phishing Detection using Machine Learning",
            tech: "Python, Scikit-learn, Streamlit",
            tag: "Cybersecurity ML",
            description: "A machine learning classifier that parses URL strings to detect phishing attempts, securing users from malicious redirection and spoofing sites.",
            github: "https://github.com/nk1411projects/PhishingDetectionTool",
            demo: null,
            caseStudy: {
                overview: "This project uses Machine Learning to analyze URL patterns and identify phishing websites. It extracts structural, lexical, and domain-based features from raw URL inputs to classify them as safe or unsafe in real time.",
                problem: "Phishing attacks are a primary vector for credential theft and malware. Attackers change subdomains rapidly, meaning traditional static blacklist databases fail to block newly registered threat vectors.",
                solution: "Designed and trained a Random Forest model on lexical characteristics (presence of '@', double slashes, length, sub-domain counts, HTTPS check). The Streamlit frontend allows users to paste any URL and instantly get a safety rating with probability distribution graphs.",
                techStack: ["Python", "Scikit-learn", "Streamlit", "Pandas", "URLLib"],
                keyFeatures: [
                    "Real-time URL lexical feature extractor",
                    "Random Forest Classifier achieving high precision",
                    "Interactive URL checking interface",
                    "Risk distribution gauge visuals"
                ],
                challenges: "Minimizing false positives (classifying clean websites as phishing) was crucial, as blocking safe sites ruins user experience. I resolved this by fine-tuning decision thresholds and adding a whitelist heuristic layer.",
                improvements: "Develop a Chrome Extension that uses this backend API to check links in real-time as the user browses the web."
            }
        },
        {
            title: "Ticket Management System",
            tech: "MongoDB, Express, React, Node.js",
            tag: "Full Stack (MERN)",
            description: "A robust support ticket system featuring JWT authentication, role-based access control (RBAC), and ticket lifecycle workflow tracking.",
            github: "https://github.com/nk1411projects",
            demo: null,
            caseStudy: {
                overview: "A MERN stack application designed for IT support desks. It enables users to submit, view, and track support requests, while administrators can assign tickets, update resolution status, and view analytic charts.",
                problem: "Internal support issues are frequently lost in email chains or instant messages, leading to slow response times, missing SLA metrics, and duplicate efforts from support staff.",
                solution: "Created an enterprise-style ticket tracking portal. Built a React frontend using Tailwind for layout, backed by a Node/Express REST API. Implemented JWT authentication and custom Middlewares to enforce strict Role-Based Access Control (Admin, Agent, User) on Mongo documents.",
                techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Mongoose", "Tailwind CSS", "JWT"],
                keyFeatures: [
                    "Secure JWT-in-cookie authentication",
                    "Granular Role-Based Access Control (RBAC)",
                    "Ticket assignment, status transitions, and audit logs",
                    "Responsive dashboard showcasing ticket status widgets",
                    "Secure MongoDB aggregation queries for reporting metrics"
                ],
                challenges: "Ensuring routes and data endpoints were completely locked down. I solved this by designing hierarchical authorization guards on the Node backend, preventing horizontal privilege escalation (e.g. users modifying other users' tickets).",
                improvements: "Integrate email notifications (using Nodemailer) to alert users when their ticket status is updated, and implement a live chat socket layer."
            }
        },
        {
            title: "eCart - Multi Vendor E-Commerce Platform",
            tech: "React, Node.js, Express, MongoDB, Tailwind",
            tag: "Full Stack (MERN)",
            description: "A responsive online store featuring product filtering, cart management, checkout flows, and a functional administrator management console.",
            github: "https://github.com/nk1411projects",
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
            id: "mysql",
            name: "MySQL",
            description: "Relational Database Management System.",
            details: "Formed depth in SQL query scripting, database normalization, relational mapping, indexing, and executing secure transactional statements.",
            skills: ["SQL Scripts", "Normalizations", "Joins", "Transactions"],
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
            description: "The core programming language of AI and Data Science.",
            details: "Mastered fundamental concepts: data structures (lists, dicts, tuples), object-oriented programming (OOP), file operations, scripting, and modular architecture.",
            skills: ["OOP", "Data Structures", "File Handling", "Scripts"],
            status: "completed"
        },
        {
            id: "libraries",
            name: "Core Libraries",
            description: "Data manipulation, visualization and preprocessing tools.",
            details: "Utilized NumPy for numerical vector matrices, Pandas for analytical DataFrame queries, and Matplotlib / Seaborn for graphing statistical insight charts.",
            skills: ["NumPy Matrix Math", "Pandas DataFrames", "Matplotlib", "Seaborn Charts"],
            status: "completed"
        },
        {
            id: "ml",
            name: "Machine Learning",
            description: "Core algorithms and mathematical structures.",
            details: "Understood foundational ML math: cost functions, gradient descent, overfitting/underfitting, and metrics like precision, recall, and ROC-AUC.",
            skills: ["Gradient Descent", "Supervised Learning", "Unsupervised", "Metrics"],
            status: "completed"
        },
        {
            id: "scikit",
            name: "Scikit Learn",
            description: "Developing and evaluating classic ML pipelines.",
            details: "Built end-to-end ML pipelines: cross-validation, grid search hyperparameter tuning, and ensemble modeling (Random Forests, Gradient Boosting).",
            skills: ["Pipelines", "Cross-Validation", "Ensembles", "GridSearch"],
            status: "completed"
        },
        {
            id: "dl",
            name: "Deep Learning",
            description: "Multi-layered artificial neural networks.",
            details: "Studied feedforward networks, backpropagation, activation functions (ReLU, Sigmoid, Softmax), loss functions, and optimization techniques (Adam, SGD).",
            skills: ["Neural Networks", "Backpropagation", "Activations", "Optimizers"],
            status: "completed"
        },
        {
            id: "tensorflow",
            name: "TensorFlow",
            description: "Framework for building large-scale deep learning models.",
            details: "Explored model creation using Keras Sequential and Functional APIs, tensor manipulation, and saving/loading model weights.",
            skills: ["Keras API", "Tensor Manipulation", "Model Saving", "Callbacks"],
            status: "completed"
        },
        {
            id: "nlp",
            name: "NLP",
            description: "Natural Language Processing algorithms.",
            details: "Practiced parsing and converting language: tokenization, stop-word removal, POS tagging, Lemmatization, and bag-of-words/TF-IDF vectorizations using Spacy and NLTK.",
            skills: ["Tokenization", "TF-IDF", "POS Tagging", "Spacy / NLTK"],
            status: "completed"
        },
        {
            id: "transformers",
            name: "Transformers",
            description: "Attention-based architectures for language processing.",
            details: "Studied the encoder-decoder self-attention model, BERT/GPT architectures, and model fine-tuning with Hugging Face's transformers library.",
            skills: ["Self-Attention", "BERT", "Hugging Face", "Fine-Tuning"],
            status: "completed"
        },
        {
            id: "genai",
            name: "Generative AI",
            description: "Neural generation models and prompt parameters.",
            details: "Explored diffusion models, text generation tokenization, temperature controls, and programmatic content creation workflows.",
            skills: ["Diffusion Models", "Text Generation", "Context Windows", "API Wrappers"],
            status: "completed"
        },
        {
            id: "llms",
            name: "LLMs",
            description: "Large Language Models at scale.",
            details: "Learned deployment, inference parameters (temperature, top-p, penalties), quantization techniques, and working with major API models (GPT, Claude, Llama).",
            skills: ["Inference", "Quantization", "APIs", "Model Parameters"],
            status: "completed"
        },
        {
            id: "prompt",
            name: "Prompt Engineering",
            description: "Systematic context construction for LLM outputs.",
            details: "Mastered practical prompting frameworks: Zero-shot, Few-shot, Chain-of-Thought (CoT), System prompt structuring, and JSON schemas enforcement.",
            skills: ["Few-Shot", "CoT", "JSON Enforcements", "System Prompts"],
            status: "completed"
        },
        {
            id: "langchain",
            name: "LangChain",
            description: "Orchestration library for LLM applications.",
            details: "Built complex workflows using LangChain components: Prompts templates, Chains (LCEL), Memory models, Document loaders, and Output parsers.",
            skills: ["LCEL Chaining", "Memory Hooks", "Document Loaders", "Parsers"],
            status: "completed"
        },
        {
            id: "rag",
            name: "RAG",
            description: "Retrieval-Augmented Generation architectures.",
            details: "Developed semantic document retrieval: chunking strategies, embeddings models, vector stores (Pinecone, ChromaDB, FAISS), and hybrid search reranking.",
            skills: ["Vector DBs", "Embeddings", "Chunking", "Hybrid Search"],
            status: "completed"
        },
        {
            id: "finetuning",
            name: "Fine Tuning",
            description: "Optimizing model weights on custom target tasks.",
            details: "Researching parameter-efficient tuning methods (LoRA, QLoRA), formatting instructions datasets, using Hugging Face AutoTrain, and reviewing evaluation metrics.",
            skills: ["LoRA", "QLoRA", "AutoTrain", "Instruction Datasets"],
            status: "current"
        }
    ],

    timelineRoadmap: [
        { title: "BCA Graduation", desc: "Graduated with 73%, forming software foundations and relational database logic." },
        { title: "MERN Stack Mastery", desc: "Developed full-stack web applications integrating React, Node, Express, and MongoDB." },
        { title: "MySQL", desc: "Designed normalized relational databases and optimized execution queries." },
        { title: "FastAPI Development", desc: "Built highly performant, asynchronous Python endpoints with automatic request validation." },
        { title: "Python Specialization", desc: "Focused on core scripts, data structures, and object-oriented scripting." },
        { title: "Scientific Libraries", desc: "Leveraged NumPy, Pandas, Matplotlib, and Seaborn to preprocess datasets and plot insights." },
        { title: "Machine Learning Models", desc: "Trained supervised and unsupervised models (regression, forests) using Scikit-Learn." },
        { title: "Deep Learning Foundations", desc: "Programmed neural architectures, backpropagation nodes, and Adam optimization loops." },
        { title: "NLP Vectorization", desc: "Constructed text processing pipelines via Spacy/NLTK tokenization and TF-IDF mappings." },
        { title: "Generative AI Systems", desc: "Learned text-generation prompts, context parameters, and content workflows." },
        { title: "LLM Operations", desc: "Deployed large language models utilizing quantization models and server inference API endpoints." },
        { title: "LangChain Orchestration", desc: "Constructed custom execution chains (LCEL) and document search loaders." },
        { title: "RAG Deployments", desc: "Programmed retrieval-augmented generation systems mapping custom database vector embeddings." },
        { title: "Model Fine Tuning", desc: "Applying parameter-efficient adaptations (LoRA, QLoRA) on custom instructions datasets." }
    ]
};
