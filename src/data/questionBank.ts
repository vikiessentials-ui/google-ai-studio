import type { QuizQuestion } from '@/types';

// Category-specific high quality technical questions
export const TOPIC_QUESTIONS: Record<string, QuizQuestion[]> = {
  'Artificial Intelligence': [
    {
      id: 'ai-1',
      question: 'Which of the following best defines Artificial Intelligence?',
      options: [
        'Systems capable of performing tasks that normally require human intelligence',
        'A database query optimization language',
        'Hardware acceleration using GPUs exclusively',
        'A deterministic programming algorithm with static if-else statements'
      ],
      correctAnswer: 0,
    },
    {
      id: 'ai-2',
      question: 'What is the role of the loss function during neural network training?',
      options: [
        'To speed up CPU clock cycles',
        'To quantify the difference between predicted output and actual ground truth',
        'To compress dataset images into binary blobs',
        'To initialize weights to zero'
      ],
      correctAnswer: 1,
    },
    {
      id: 'ai-3',
      question: 'Which optimization algorithm is standard for gradient-based parameter updates?',
      options: [
        'Merge Sort',
        'Stochastic Gradient Descent (SGD) or Adam',
        'Dijkstra Shortest Path',
        'Binary Search Optimization'
      ],
      correctAnswer: 1,
    },
    {
      id: 'ai-4',
      question: 'What phenomenon occurs when a model performs exceptionally on training data but poorly on unseen test data?',
      options: ['Underfitting', 'Overfitting', 'Model Convergence', 'Linear Independence'],
      correctAnswer: 1,
    },
    {
      id: 'ai-5',
      question: 'In deep learning, what is the purpose of an activation function (like ReLU)?',
      options: [
        'To introduce non-linearity enabling networks to learn complex representations',
        'To reset weights between epochs',
        'To convert weights into floating point 16-bit precision',
        'To prevent memory leaks in RAM'
      ],
      correctAnswer: 0,
    },
    {
      id: 'ai-6',
      question: 'What mechanism in modern Transformer architectures allows the model to weigh the importance of different tokens in a sequence?',
      options: ['Self-Attention Mechanism', 'Bubble Sorting', 'Cyclic Redundancy Check', 'FIFO Buffer'],
      correctAnswer: 0,
    },
    {
      id: 'ai-7',
      question: 'What is the primary difference between supervised and unsupervised learning?',
      options: [
        'Supervised learning requires labeled ground truth data; unsupervised discovers inherent patterns',
        'Supervised learning does not use algorithms',
        'Unsupervised learning requires 100x more GPU power',
        'There is no difference in training paradigm'
      ],
      correctAnswer: 0,
    },
    {
      id: 'ai-8',
      question: 'Which technique is used to prevent overfitting by randomly disabling neurons during training?',
      options: ['Dropout', 'Quantization', 'Batch Normalization', 'Zero Padding'],
      correctAnswer: 0,
    },
    {
      id: 'ai-9',
      question: 'What is an epoch in deep learning?',
      options: [
        'One complete forward and backward pass through the entire training dataset',
        'A single batch of 32 images',
        'The time it takes to compile CUDA kernels',
        'A metric measuring GPU temperature'
      ],
      correctAnswer: 0,
    },
    {
      id: 'ai-10',
      question: 'Which metric is best suited for evaluating a classifier on an imbalanced dataset?',
      options: ['Accuracy', 'F1-Score / Precision-Recall AUC', 'Loss Rate alone', 'Epoch Duration'],
      correctAnswer: 1,
    },
    {
      id: 'ai-11',
      question: 'What is the purpose of transfer learning in deep learning?',
      options: [
        'Leveraging features learned on large datasets (e.g. ImageNet) to fine-tune on a specific domain',
        'Transferring code from Python to C++',
        'Copying training data across servers',
        'Exporting weights to a CSV file'
      ],
      correctAnswer: 0,
    },
    {
      id: 'ai-12',
      question: 'What is vector embedding in modern AI language models?',
      options: [
        'A high-dimensional dense numerical representation capturing semantic meaning',
        'An SVG vector graphics file format',
        'A hardware register for vector CPUs',
        'An HTML canvas drawing coordinate'
      ],
      correctAnswer: 0,
    },
    {
      id: 'ai-13',
      question: 'What does RAG stand for in modern Generative AI systems?',
      options: [
        'Retrieval-Augmented Generation',
        'Recursive Algorithm Gateway',
        'Relational Architecture Graph',
        'Randomized Array Generator'
      ],
      correctAnswer: 0,
    },
    {
      id: 'ai-14',
      question: 'What is the vanishing gradient problem most commonly associated with?',
      options: [
        'Deep networks with saturated activation functions like Sigmoid or Tanh',
        'High disk read speed',
        'Over-allocation of video RAM',
        'Missing index keys in databases'
      ],
      correctAnswer: 0,
    },
    {
      id: 'ai-15',
      question: 'Which architecture is primarily designed for image processing and spatial feature extraction?',
      options: [
        'Convolutional Neural Networks (CNNs)',
        'Linked Lists',
        'Recurrent Stacks without gates',
        'Static Hash Tables'
      ],
      correctAnswer: 0,
    },
    {
      id: 'ai-16',
      question: 'What is temperature in the context of LLM inference?',
      options: [
        'A parameter controlling the randomness and diversity of token generation',
        'The physical hardware temperature of the TPU',
        'The number of training iterations per second',
        'The latency of the network socket'
      ],
      correctAnswer: 0,
    },
    {
      id: 'ai-17',
      question: 'In reinforcement learning, what does an agent optimize to maximize?',
      options: ['Cumulative discounted future reward', 'Code readability', 'Disk I/O', 'Memory address alignment'],
      correctAnswer: 0,
    },
    {
      id: 'ai-18',
      question: 'What does the term "Prompt Engineering" refer to in generative AI?',
      options: [
        'Designing and optimizing text inputs to guide foundation models toward accurate, structured outputs',
        'Writing assembly instructions for GPUs',
        'Building user interfaces in React',
        'Automating server deployment pipelines'
      ],
      correctAnswer: 0,
    },
    {
      id: 'ai-19',
      question: 'Which method reduces the memory footprint of an LLM by storing weights in 8-bit or 4-bit precision?',
      options: ['Model Quantization', 'Backpropagation', 'Tokenization', 'Stochastic Sampling'],
      correctAnswer: 0,
    },
    {
      id: 'ai-20',
      question: 'What is cross-entropy loss primarily used for?',
      options: ['Multi-class classification problems', 'Sorting integer arrays', 'TCP packet sequencing', 'Audio compression'],
      correctAnswer: 0,
    },
    {
      id: 'ai-21',
      question: 'What is the key advantage of self-attention over recurrent neural networks (RNNs)?',
      options: [
        'Enables parallelization across sequence positions and better long-range dependency capture',
        'Requires no GPU hardware',
        'Runs in zero time complexity',
        'Uses only binary operations'
      ],
      correctAnswer: 0,
    },
    {
      id: 'ai-22',
      question: 'What does LoRA stand for in fine-tuning modern models?',
      options: [
        'Low-Rank Adaptation',
        'Linear Output Relational Architecture',
        'Logical Reasoning Algorithm',
        'Layered Object Resolution Array'
      ],
      correctAnswer: 0,
    },
    {
      id: 'ai-23',
      question: 'What is hallucination in generative language models?',
      options: [
        'Generating factually incorrect or fabricated information with high apparent confidence',
        'A hardware memory parity error',
        'A screen flicker during training',
        'An infinite loop in a while statement'
      ],
      correctAnswer: 0,
    },
    {
      id: 'ai-24',
      question: 'What role does tokenization play in Natural Language Processing (NLP)?',
      options: [
        'Breaking raw text into discrete subword units for numerical vector lookup',
        'Encrypting passwords using salted hashes',
        'Managing JWT sessions for HTTP requests',
        'Compressing JPEG image files'
      ],
      correctAnswer: 0,
    },
    {
      id: 'ai-25',
      question: 'What is cosine similarity commonly used for in vector search and AI embeddings?',
      options: [
        'Measuring the angle and orientation between two dense semantic vectors',
        'Measuring CPU cache miss frequency',
        'Calculating triangle hypotenuse in CSS rendering',
        'Determining network latency between servers'
      ],
      correctAnswer: 0,
    },
  ],

  'Cyber Security': [
    {
      id: 'cs-1',
      question: 'What are the three pillars of the foundational CIA Triad in information security?',
      options: [
        'Confidentiality, Integrity, and Availability',
        'Control, Inspection, and Authorization',
        'Cryptography, Identification, and Authentication',
        'Compliance, Incident, and Audit'
      ],
      correctAnswer: 0,
    },
    {
      id: 'cs-2',
      question: 'Which authentication factor represents "something you are"?',
      options: ['Biometrics (e.g., fingerprint, facial recognition)', 'Password or PIN', 'Hardware security key', 'SMS OTP code'],
      correctAnswer: 0,
    },
    {
      id: 'cs-3',
      question: 'What type of attack involves tricking victims into revealing sensitive credentials through deceptive emails or web portals?',
      options: ['Phishing', 'Buffer Overflow', 'SQL Injection', 'SYN Flood'],
      correctAnswer: 0,
    },
    {
      id: 'cs-4',
      question: 'What is the primary security benefit of implementing the Principle of Least Privilege (PoLP)?',
      options: [
        'Limiting user and service access rights to strictly the minimum necessary to perform job functions',
        'Eliminating the need for firewalls',
        'Making all network traffic public for transparency',
        'Speeding up database write speeds'
      ],
      correctAnswer: 0,
    },
    {
      id: 'cs-5',
      question: 'Which attack vector allows an attacker to execute arbitrary SQL commands on an unprotected database?',
      options: ['SQL Injection (SQLi)', 'Cross-Site Scripting (XSS)', 'DNS Amplification', 'ARP Spoofing'],
      correctAnswer: 0,
    },
    {
      id: 'cs-6',
      question: 'What does XSS stand for and what is its primary target?',
      options: [
        'Cross-Site Scripting; executes malicious client-side JavaScript in a victim user’s browser',
        'XML Server Security; attacks remote Linux kernels',
        'Cross-System Shield; protects against DDoS attacks',
        'Extended Security Standard; validates SSL certs'
      ],
      correctAnswer: 0,
    },
    {
      id: 'cs-7',
      question: 'What is the purpose of a cryptographic salt added to passwords before hashing?',
      options: [
        'To defend against precomputed rainbow table attacks and ensure identical passwords produce unique hashes',
        'To speed up CPU hashing performance',
        'To allow easy decryption by system administrators',
        'To reduce disk storage requirements'
      ],
      correctAnswer: 0,
    },
    {
      id: 'cs-8',
      question: 'Which modern symmetric encryption standard is widely accepted as secure for data at rest and in transit?',
      options: ['AES-256 (Advanced Encryption Standard)', 'DES (Data Encryption Standard)', 'MD5', 'ROT13'],
      correctAnswer: 0,
    },
    {
      id: 'cs-9',
      question: 'What does a Denial of Service (DoS) attack primarily attempt to compromise in the CIA triad?',
      options: ['Availability', 'Confidentiality', 'Integrity', 'Non-repudiation'],
      correctAnswer: 0,
    },
    {
      id: 'cs-10',
      question: 'What is the function of a Web Application Firewall (WAF)?',
      options: [
        'Filtering, inspecting, and blocking malicious HTTP/HTTPS traffic targeting web applications',
        'Preventing physical theft of server hardware',
        'Translating human language into machine code',
        'Managing local Wi-Fi router passwords'
      ],
      correctAnswer: 0,
    },
    {
      id: 'cs-11',
      question: 'What is a Zero-Day vulnerability?',
      options: [
        'A software security flaw unknown to the vendor with zero days of available patches',
        'A system reboot that occurs at midnight',
        'A trial software version expiring in 24 hours',
        'A scheduled maintenance window'
      ],
      correctAnswer: 0,
    },
    {
      id: 'cs-12',
      question: 'Which protocol securely encapsulates HTTP communications using TLS encryption?',
      options: ['HTTPS', 'FTP', 'Telnet', 'SNMP v1'],
      correctAnswer: 0,
    },
    {
      id: 'cs-13',
      question: 'What is the core philosophy of a Zero Trust architecture?',
      options: [
        'Never trust, always verify every access request regardless of origin or network location',
        'Trust all internal network traffic once inside the firewall',
        'Disable all authentication to prevent lockouts',
        'Allow anonymous root access over SSH'
      ],
      correctAnswer: 0,
    },
    {
      id: 'cs-14',
      question: 'What is Man-in-the-Middle (MitM) attack?',
      options: [
        'An attacker secretly intercepts and relays communications between two parties who believe they are communicating directly',
        'A physical intruder unplugging an Ethernet cable',
        'A compiler error between frontend and backend',
        'A load balancer distributing network requests'
      ],
      correctAnswer: 0,
    },
    {
      id: 'cs-15',
      question: 'Which defense effectively prevents Cross-Site Request Forgery (CSRF)?',
      options: [
        'Cryptographic anti-CSRF tokens and SameSite cookie attributes',
        'Increasing database memory buffer',
        'Using GET requests for state-changing operations',
        'Removing HTTPS encryption'
      ],
      correctAnswer: 0,
    },
    {
      id: 'cs-16',
      question: 'What is Public Key Infrastructure (PKI) based on?',
      options: [
        'Asymmetric cryptography with public and private key pairs',
        'Symmetric shared secrets stored in plain text',
        'Hardware MAC addresses only',
        'DNS round-robin routing'
      ],
      correctAnswer: 0,
    },
    {
      id: 'cs-17',
      question: 'What does SIEM stand for in security operations?',
      options: [
        'Security Information and Event Management',
        'System Integrity and Encryption Module',
        'Secure Internet Email Messenger',
        'Single Identity Endpoint Monitor'
      ],
      correctAnswer: 0,
    },
    {
      id: 'cs-18',
      question: 'Why should sensitive API keys never be committed to public Git repositories?',
      options: [
        'Automated scanners and malicious actors scrape public commits within seconds to compromise cloud infrastructure',
        'Git will corrupt files containing API keys',
        'It violates standard JSON syntax',
        'It increases the file download size by gigabytes'
      ],
      correctAnswer: 0,
    },
    {
      id: 'cs-19',
      question: 'What is the purpose of Penetration Testing?',
      options: [
        'Simulating authorized cyberattacks on computer systems to identify exploitable security weaknesses',
        'Testing physical keyboard durability',
        'Running benchmarks on database speed',
        'Designing marketing landing pages'
      ],
      correctAnswer: 0,
    },
    {
      id: 'cs-20',
      question: 'What is Ransomware?',
      options: [
        'Malicious software that encrypts victim files and demands extortion payment for decryption keys',
        'A legitimate disk backup tool',
        'A web browser extension for grammar checks',
        'An open-source Linux kernel module'
      ],
      correctAnswer: 0,
    },
    {
      id: 'cs-21',
      question: 'Which HTTP response header tells browsers never to load the site via insecure HTTP?',
      options: [
        'Strict-Transport-Security (HSTS)',
        'X-Content-Type-Options',
        'Cache-Control',
        'Access-Control-Allow-Origin'
      ],
      correctAnswer: 0,
    },
    {
      id: 'cs-22',
      question: 'What is the role of a Honeypot in network security?',
      options: [
        'A decoy system intentionally designed to attract and analyze attacker tactics and intelligence',
        'A tool that speeds up internet bandwidth',
        'A primary production database for users',
        'An SSL certificate distributor'
      ],
      correctAnswer: 0,
    },
    {
      id: 'cs-23',
      question: 'What is Port Scanning primarily used for during cybersecurity reconnaissance?',
      options: [
        'Identifying open TCP/UDP ports and active network services running on target hosts',
        'Testing HDMI monitor displays',
        'Measuring internet download speed',
        'Cleaning dust from physical Ethernet ports'
      ],
      correctAnswer: 0,
    },
    {
      id: 'cs-24',
      question: 'What is the OWASP Top 10?',
      options: [
        'A regularly updated standard awareness document representing critical security risks to web applications',
        'A list of top 10 anti-virus software companies',
        'Top 10 programming languages by popularity',
        'Ten best practices for website CSS design'
      ],
      correctAnswer: 0,
    },
    {
      id: 'cs-25',
      question: 'What makes a strong Password Hashing function different from a general hashing function like SHA-256?',
      options: [
        'Intentional computational cost (work factor) and memory hardness (e.g. Argon2, bcrypt, PBKDF2) to resist brute-force',
        'It generates shorter output strings',
        'It can be easily reversed into plain text',
        'It works without CPU instructions'
      ],
      correctAnswer: 0,
    },
  ],

  'Front-End Development': [
    {
      id: 'fe-1',
      question: 'What is the primary role of semantic HTML elements like <main>, <nav>, and <article>?',
      options: [
        'Improving accessibility for screen readers and SEO by providing meaningful structure to document content',
        'Automatically applying CSS animations',
        'Encrypting client-side JavaScript files',
        'Compiling TypeScript into WebAssembly'
      ],
      correctAnswer: 0,
    },
    {
      id: 'fe-2',
      question: 'In CSS, what is the Box Model composed of from inside to outside?',
      options: [
        'Content, Padding, Border, Margin',
        'Margin, Border, Padding, Content',
        'Content, Border, Padding, Outline',
        'Padding, Content, Margin, Shadow'
      ],
      correctAnswer: 0,
    },
    {
      id: 'fe-3',
      question: 'What does the CSS property `box-sizing: border-box` do?',
      options: [
        'Includes padding and border within the specified element width and height',
        'Removes borders on all screen sizes',
        'Forces flexbox layout mode on child items',
        'Prevents elements from overflowing the viewport'
      ],
      correctAnswer: 0,
    },
    {
      id: 'fe-4',
      question: 'Which JavaScript method creates a new array with results of calling a provided function on every element?',
      options: ['Array.prototype.map()', 'Array.prototype.forEach()', 'Array.prototype.filter()', 'Array.prototype.reduce()'],
      correctAnswer: 0,
    },
    {
      id: 'fe-5',
      question: 'In React, what hook is used to perform side effects such as data fetching or subscriptions?',
      options: ['useEffect', 'useState', 'useRef', 'useCallback'],
      correctAnswer: 0,
    },
    {
      id: 'fe-6',
      question: 'What is the purpose of the key prop when rendering lists in React?',
      options: [
        'Helps React identify which items have changed, been added, or been removed during reconciliation',
        'Encrypts the array items in localStorage',
        'Sets the CSS z-index order of elements',
        'Applies unique CSS styles to list rows'
      ],
      correctAnswer: 0,
    },
    {
      id: 'fe-7',
      question: 'What is event delegation in client-side JavaScript?',
      options: [
        'Attaching a single event listener to a parent element to leverage event bubbling for child elements',
        'Delegating network requests to a service worker',
        'Using setTimeout to defer event execution',
        'Canceling mouse events entirely'
      ],
      correctAnswer: 0,
    },
    {
      id: 'fe-8',
      question: 'What does the term "Responsive Web Design" mean?',
      options: [
        'Designing web pages that render gracefully across a variety of screen sizes and viewports',
        'Making websites respond within 50 milliseconds to mouse clicks',
        'Using voice synthesis to respond to user prompts',
        'Auto-reloading pages when servers update'
      ],
      correctAnswer: 0,
    },
    {
      id: 'fe-9',
      question: 'Which CSS layout system is best suited for two-dimensional grid layouts with rows and columns?',
      options: ['CSS Grid Layout', 'CSS Floats', 'CSS Flexbox (1D only)', 'Absolute Positioning'],
      correctAnswer: 0,
    },
    {
      id: 'fe-10',
      question: 'What is the DOM (Document Object Model)?',
      options: [
        'A hierarchical programming interface representing HTML documents as a tree of nodes and objects',
        'A database storage engine inside Google Chrome',
        'A backend framework for Node.js',
        'A CSS preprocessor similar to Sass'
      ],
      correctAnswer: 0,
    },
    {
      id: 'fe-11',
      question: 'In modern JavaScript, what is the key benefit of async/await syntax?',
      options: [
        'Enables writing asynchronous promise-based code that reads sequentially and handles errors via try/catch',
        'Converts JavaScript code into multi-threaded C binaries',
        'Eliminates the JavaScript event loop',
        'Prevents all network timeouts'
      ],
      correctAnswer: 0,
    },
    {
      id: 'fe-12',
      question: 'What is the purpose of a Service Worker in a Progressive Web App (PWA)?',
      options: [
        'Acting as a programmable network proxy capable of caching assets and enabling offline experiences',
        'Compiling JSX into standard JavaScript',
        'Managing CSS transitions in hardware acceleration',
        'Replacing backend SQL databases'
      ],
      correctAnswer: 0,
    },
    {
      id: 'fe-13',
      question: 'What is the Virtual DOM in React?',
      options: [
        'An in-memory lightweight representation of the real DOM used to compute minimal batch updates (diffing)',
        'A 3D VR interface for web pages',
        'A browser extension for Chrome DevTools',
        'A headless browser for automated testing'
      ],
      correctAnswer: 0,
    },
    {
      id: 'fe-14',
      question: 'What does the WCAG standard provide for web development?',
      options: [
        'Web Content Accessibility Guidelines to ensure digital content is accessible to people with disabilities',
        'Guidelines for optimizing CSS bundle sizes',
        'Standards for international domain names',
        'Rules for SSL certificate expiration'
      ],
      correctAnswer: 0,
    },
    {
      id: 'fe-15',
      question: 'What does the `useMemo` hook do in React?',
      options: [
        'Memoizes the result of an expensive calculation between renders unless its dependencies change',
        'Stores data permanently in IndexedDB',
        'Creates a mutable reference that does not trigger re-renders',
        'Memoizes DOM node references'
      ],
      correctAnswer: 0,
    },
    {
      id: 'fe-16',
      question: 'What is the difference between `localStorage` and `sessionStorage` in the Web Storage API?',
      options: [
        'localStorage data persists across browser sessions; sessionStorage data clears when the browser tab closes',
        'localStorage is encrypted with AES-256; sessionStorage is plaintext',
        'sessionStorage has a 10GB limit; localStorage has 5MB',
        'There is no functional difference'
      ],
      correctAnswer: 0,
    },
    {
      id: 'fe-17',
      question: 'What is a CSS media query?',
      options: [
        'A CSS feature allowing conditional styling based on device characteristics like viewport width or orientation',
        'A JavaScript API for playing MP3 audio',
        'A SQL query for fetching media files from databases',
        'A browser DevTools panel for debugging video codecs'
      ],
      correctAnswer: 0,
    },
    {
      id: 'fe-18',
      question: 'In TypeScript, what is the difference between `interface` and `type` alias?',
      options: [
        'Interfaces support declaration merging; types can represent unions, primitives, and mapped tuples',
        'Types can only be used on strings; interfaces can only be used on numbers',
        'Interfaces are compiled to runtime JavaScript objects; types are removed',
        'TypeScript only supports interfaces, not types'
      ],
      correctAnswer: 0,
    },
    {
      id: 'fe-19',
      question: 'What does the `useCallback` hook in React return?',
      options: [
        'A memoized version of the callback function that only changes if dependencies change',
        'A promise that resolves on the next tick',
        'The previous value of a state variable',
        'An asynchronous fetch instance'
      ],
      correctAnswer: 0,
    },
    {
      id: 'fe-20',
      question: 'What does "Tree Shaking" refer to in modern frontend bundlers like Vite and Webpack?',
      options: [
        'Dead code elimination that removes unused exports from the final JavaScript bundle',
        'A folder reorganization tool in VS Code',
        'A visual animation effect in CSS',
        'A method for balancing binary search trees'
      ],
      correctAnswer: 0,
    },
    {
      id: 'fe-21',
      question: 'Which HTTP method should be used for idempotent updates where the entire resource is replaced?',
      options: ['PUT', 'POST', 'PATCH (partial only)', 'DELETE'],
      correctAnswer: 0,
    },
    {
      id: 'fe-22',
      question: 'What is the critical rendering path in browser performance optimization?',
      options: [
        'The sequence of steps the browser takes to convert HTML, CSS, and JS into actual pixels on screen',
        'The route taken by fiber-optic network cables',
        'The URL path leading to the index.html file',
        'The order of files in the project directory'
      ],
      correctAnswer: 0,
    },
    {
      id: 'fe-23',
      question: 'What is the purpose of the `aria-label` attribute?',
      options: [
        'Provides an accessible text label for elements that lack visible text for assistive technologies',
        'Adds tooltips that appear on mouse hover',
        'Sets the font family of button labels',
        'Defines international language translations'
      ],
      correctAnswer: 0,
    },
    {
      id: 'fe-24',
      question: 'What is hydration in modern Server-Side Rendered (SSR) React frameworks?',
      options: [
        'Attaching event listeners and React state to pre-rendered server HTML markup in the browser',
        'Cleaning up memory leaks after page unmount',
        'Compressing JavaScript files with Gzip',
        'Downloading images asynchronously in the background'
      ],
      correctAnswer: 0,
    },
    {
      id: 'fe-25',
      question: 'What is CORS (Cross-Origin Resource Sharing)?',
      options: [
        'A browser security mechanism that uses HTTP headers to determine whether a web app can access resources from another origin',
        'A protocol for peer-to-peer file sharing',
        'A CSS framework for cross-browser styling',
        'A compression algorithm for SVG graphics'
      ],
      correctAnswer: 0,
    },
  ],

  'Cloud & DevOps': [
    {
      id: 'cloud-1',
      question: 'What is the primary difference between a Container (e.g. Docker) and a Virtual Machine (VM)?',
      options: [
        'Containers share the host OS kernel and are lightweight; VMs run a full guest OS on a hypervisor',
        'VMs are faster to start than containers',
        'Containers can only run on Windows; VMs only run on Linux',
        'Containers require physical hardware cards'
      ],
      correctAnswer: 0,
    },
    {
      id: 'cloud-2',
      question: 'What is the role of Kubernetes in cloud infrastructure?',
      options: [
        'Automating deployment, scaling, and operational management of containerized applications',
        'Writing relational SQL queries for databases',
        'Rendering React user interfaces on client browsers',
        'Registering domain names with ICANN'
      ],
      correctAnswer: 0,
    },
    {
      id: 'cloud-3',
      question: 'What does CI/CD stand for in modern software engineering?',
      options: [
        'Continuous Integration and Continuous Delivery / Deployment',
        'Computer Interface and Central Distribution',
        'Container Initialization and Core Debugging',
        'Cloud Infrastructure and Cloud Database'
      ],
      correctAnswer: 0,
    },
    {
      id: 'cloud-4',
      question: 'What is Infrastructure as Code (IaC)?',
      options: [
        'Managing and provisioning computing infrastructure through machine-readable definition files (e.g. Terraform)',
        'Writing CPU microcode in assembly language',
        'Manually configuring servers via web GUI dashboards',
        'Drawing network diagrams in PowerPoint'
      ],
      correctAnswer: 0,
    },
    {
      id: 'cloud-5',
      question: 'What is an Amazon S3 bucket used for?',
      options: [
        'Scalable object storage for files, images, backups, and static assets',
        'Relational database transactions with ACID compliance',
        'Running compiled C++ server binaries',
        'Real-time CPU overclocking'
      ],
      correctAnswer: 0,
    },
    {
      id: 'cloud-6',
      question: 'What is the purpose of a reverse proxy like NGINX?',
      options: [
        'Directing client requests to backend servers, handling SSL termination, load balancing, and caching',
        'Storing user passwords in plaintext files',
        'Executing client-side JavaScript in web browsers',
        'Editing HTML templates in real time'
      ],
      correctAnswer: 0,
    },
    {
      id: 'cloud-7',
      question: 'What is a Pod in Kubernetes?',
      options: [
        'The smallest deployable computing unit consisting of one or more containers sharing storage and network',
        'A physical server rack inside a data center',
        'A single row in a PostgreSQL database',
        'A Git repository containing source code'
      ],
      correctAnswer: 0,
    },
    {
      id: 'cloud-8',
      question: 'What does "Serverless" computing (like AWS Lambda or Google Cloud Functions) mean?',
      options: [
        'Developers write code without provisioning or managing server instances; infrastructure scales and bills on demand',
        'Applications run entirely without any computing hardware',
        'Computers communicate using telepathy',
        'Servers must be purchased and assembled by the client'
      ],
      correctAnswer: 0,
    },
    {
      id: 'cloud-9',
      question: 'What is the role of an Ingress controller in Kubernetes?',
      options: [
        'Managing external access to services in a cluster, typically HTTP/HTTPS routing',
        'Shutting down idle worker nodes',
        'Formatting log files into JSON',
        'Compiling Go source code into binaries'
      ],
      correctAnswer: 0,
    },
    {
      id: 'cloud-10',
      question: 'What is Horizontal Scaling vs. Vertical Scaling?',
      options: [
        'Horizontal scaling adds more machine instances; vertical scaling upgrades CPU/RAM on existing machines',
        'Horizontal scaling increases screen width; vertical scaling increases height',
        'Vertical scaling is always cheaper than horizontal',
        'There is no technical difference between the two'
      ],
      correctAnswer: 0,
    },
    {
      id: 'cloud-11',
      question: 'What is the purpose of a Dockerfile?',
      options: [
        'A text script containing instructions to assemble a reproducible container image',
        'A configuration file for MySQL databases',
        'A list of installed Windows applications',
        'A spreadsheet documenting server costs'
      ],
      correctAnswer: 0,
    },
    {
      id: 'cloud-12',
      question: 'What is blue-green deployment strategy?',
      options: [
        'Running two identical production environments to switch traffic seamlessly with zero downtime and fast rollback',
        'Color-coding server cables in data centers',
        'Testing code on green monitors before blue monitors',
        'A marketing strategy for environmental sustainability'
      ],
      correctAnswer: 0,
    },
    {
      id: 'cloud-13',
      question: 'What does IAM stand for in Cloud Computing?',
      options: [
        'Identity and Access Management',
        'Integrated Application Memory',
        'Internal Architecture Module',
        'Internet Authorization Mechanism'
      ],
      correctAnswer: 0,
    },
    {
      id: 'cloud-14',
      question: 'What is GitOps?',
      options: [
        'An operational framework that uses Git repositories as the single source of truth for declarative infrastructure and code',
        'A video game for software engineers',
        'A command line flag for git push',
        'A company that sells cloud servers'
      ],
      correctAnswer: 0,
    },
    {
      id: 'cloud-15',
      question: 'Which tool is standard for monitoring metrics and alerting in cloud native Kubernetes clusters?',
      options: ['Prometheus and Grafana', 'Microsoft Word', 'Adobe Photoshop', 'Notepad++'],
      correctAnswer: 0,
    },
    {
      id: 'cloud-16',
      question: 'What is the main benefit of a Content Delivery Network (CDN)?',
      options: [
        'Distributing cached static content to edge servers geographically close to users for reduced latency',
        'Executing SQL stored procedures on databases',
        'Encrypting local hard drives on laptops',
        'Rendering 3D video game graphics'
      ],
      correctAnswer: 0,
    },
    {
      id: 'cloud-17',
      question: 'What is a microservices architecture?',
      options: [
        'Structuring an application as a collection of loosely coupled, independently deployable services around business domains',
        'Building software using microscopic CPUs',
        'Combining all code into a single monolithic binary file',
        'Using exclusively Microsoft Azure tools'
      ],
      correctAnswer: 0,
    },
    {
      id: 'cloud-18',
      question: 'What is the purpose of an SLA (Service Level Agreement)?',
      options: [
        'A formal commitment between service provider and client defining expected availability, uptime, and performance',
        'A license key for activating Windows servers',
        'A tax form for software export',
        'A certificate for physical network wiring'
      ],
      correctAnswer: 0,
    },
    {
      id: 'cloud-19',
      question: 'What is chaos engineering (e.g. Chaos Monkey)?',
      options: [
        'Intentionally introducing failures into production systems to test and strengthen system resilience',
        'Writing messy unformatted code without comments',
        'Deleting production databases accidentally',
        'Hacking competitor servers without permission'
      ],
      correctAnswer: 0,
    },
    {
      id: 'cloud-20',
      question: 'What is an API Gateway in cloud systems?',
      options: [
        'A management tool that sits between a client and a collection of backend services, handling routing, rate limiting, and auth',
        'A physical Ethernet wall socket',
        'A database table storing user passwords',
        'A browser extension for Chrome'
      ],
      correctAnswer: 0,
    },
    {
      id: 'cloud-21',
      question: 'What is the role of Terraform state file (.tfstate)?',
      options: [
        'Tracking the bindings between real-world cloud resources and the declarative resource definitions in configuration',
        'Encrypting user passwords in git commits',
        'Logging HTTP web requests from users',
        'Compressing Docker image tarballs'
      ],
      correctAnswer: 0,
    },
    {
      id: 'cloud-22',
      question: 'What is a Dead Letter Queue (DLQ) in message brokers (like SQS or Kafka)?',
      options: [
        'A designated queue for holding messages that failed processing due to errors for debugging and isolation',
        'A deleted folder in an email client',
        'A terminated database connection pool',
        'A dropped network packet count'
      ],
      correctAnswer: 0,
    },
    {
      id: 'cloud-23',
      question: 'What is the CAP theorem in distributed database systems?',
      options: [
        'A distributed system can guarantee at most two out of three: Consistency, Availability, and Partition Tolerance',
        'A rule for capping CPU core usage at 90%',
        'A copyright law protecting software architectures',
        'A formula for calculating memory capacity'
      ],
      correctAnswer: 0,
    },
    {
      id: 'cloud-24',
      question: 'What does SRE stand for in modern technology organizations?',
      options: [
        'Site Reliability Engineering',
        'Software Resource Evaluation',
        'System Redundancy Execution',
        'Secure Routing Engine'
      ],
      correctAnswer: 0,
    },
    {
      id: 'cloud-25',
      question: 'What is mutual TLS (mTLS) commonly used for in microservices service meshes (e.g. Istio)?',
      options: [
        'Ensuring two-way peer authentication and end-to-end encrypted traffic between services',
        'Compressing network payloads into ZIP archives',
        'Caching static CSS stylesheets',
        'Balancing electrical power across data centers'
      ],
      correctAnswer: 0,
    },
  ],
};

// Fallback technical questions library for other domains (Data, Design, Backend, Programming, Networking, etc.)
export const GENERAL_TECH_QUESTIONS: QuizQuestion[] = [
  {
    id: 'gen-1',
    question: 'What does the term "Idempotency" mean in software API design?',
    options: [
      'An operation that produces the same system state when executed multiple times with identical parameters',
      'An operation that executes only once per calendar year',
      'A method that operates without any memory allocation',
      'An encryption function that cannot be decrypted'
    ],
    correctAnswer: 0,
  },
  {
    id: 'gen-2',
    question: 'What is the time complexity of searching for an element in a balanced Binary Search Tree (BST)?',
    options: ['O(log n)', 'O(1)', 'O(n²)', 'O(n!)'],
    correctAnswer: 0,
  },
  {
    id: 'gen-3',
    question: 'In relational databases, what does the ACID acronym stand for?',
    options: [
      'Atomicity, Consistency, Isolation, Durability',
      'Asynchronous, Concurrent, Indexed, Distributed',
      'Authentication, Authorization, Auditing, Access',
      'Array, Class, Interface, DataType'
    ],
    correctAnswer: 0,
  },
  {
    id: 'gen-4',
    question: 'Which data structure operates on a Last-In, First-Out (LIFO) basis?',
    options: ['Stack', 'Queue (FIFO)', 'Linked List', 'Binary Tree'],
    correctAnswer: 0,
  },
  {
    id: 'gen-5',
    question: 'What is the purpose of an index on a database table column?',
    options: [
      'Accelerating query lookup speed at the cost of additional storage and write overhead',
      'Encrypting the data in that column',
      'Preventing NULL values from being saved',
      'Automatically sorting the physical hard drive sectors'
    ],
    correctAnswer: 0,
  },
  {
    id: 'gen-6',
    question: 'What is the primary function of the Domain Name System (DNS)?',
    options: [
      'Translating human-readable domain names (e.g. example.com) into numerical IP addresses',
      'Encrypting passwords using salt algorithms',
      'Hosting static website HTML files',
      'Balancing electrical power between data centers'
    ],
    correctAnswer: 0,
  },
  {
    id: 'gen-7',
    question: 'What is a Foreign Key constraint in SQL databases?',
    options: [
      'A key that references the primary key of another table to maintain referential integrity',
      'An encryption key originating from an external server',
      'A password required by remote users',
      'A column that stores foreign currency values'
    ],
    correctAnswer: 0,
  },
  {
    id: 'gen-8',
    question: 'What is a race condition in concurrent software development?',
    options: [
      'An undesirable situation where the system output depends on the non-deterministic sequence or timing of concurrent threads',
      'A competition between two developers to write code faster',
      'A benchmark test for measuring network upload speed',
      'A CPU clock speed test'
    ],
    correctAnswer: 0,
  },
  {
    id: 'gen-9',
    question: 'What is the difference between TCP and UDP at the transport layer?',
    options: [
      'TCP is connection-oriented and guarantees reliable, ordered delivery; UDP is connectionless and low-latency without delivery guarantees',
      'UDP encrypts all traffic; TCP sends plain text',
      'TCP only runs on mobile devices; UDP only on servers',
      'There is no functional distinction'
    ],
    correctAnswer: 0,
  },
  {
    id: 'gen-10',
    question: 'What does SOLID stand for in object-oriented software engineering?',
    options: [
      'Single responsibility, Open-closed, Liskov substitution, Interface segregation, Dependency inversion',
      'Structured, Object-oriented, Linear, Integrated, Dynamic',
      'Synchronous, Output, Logging, Input, Debugging',
      'Security, Optimization, Latency, Integrity, Durability'
    ],
    correctAnswer: 0,
  },
  {
    id: 'gen-11',
    question: 'In Git, what does `git merge` do compared to `git rebase`?',
    options: [
      'Merge creates a merge commit preserving exact history; rebase rewrites project history by replaying commits atop another branch',
      'Rebase deletes all past commits; merge keeps them',
      'Merge only works on remote GitHub servers',
      'Rebase permanently encrypts the Git repository'
    ],
    correctAnswer: 0,
  },
  {
    id: 'gen-12',
    question: 'What is an in-memory key-value store commonly used for caching database queries and session state?',
    options: ['Redis or Memcached', 'SQLite', 'Git', 'CSS Stylesheet'],
    correctAnswer: 0,
  },
  {
    id: 'gen-13',
    question: 'What is pagination used for when building high-performance web applications?',
    options: [
      'Splitting large datasets into manageable chunks/pages to avoid loading millions of records into memory or DOM',
      'Printing website pages onto physical paper',
      'Formatting code indentation in IDEs',
      'Rotating screen orientation on mobile tablets'
    ],
    correctAnswer: 0,
  },
  {
    id: 'gen-14',
    question: 'What is a JSON Web Token (JWT) commonly composed of?',
    options: [
      'Header, Payload, and Signature separated by dots',
      'Username, Password, and Credit Card number',
      'HTML, CSS, and JavaScript files',
      'SQL schema, Table definition, and Primary key'
    ],
    correctAnswer: 0,
  },
  {
    id: 'gen-15',
    question: 'What does the term "Debouncing" mean in frontend event handling (e.g. search input)?',
    options: [
      'Delaying the execution of a function until a specified idle duration has elapsed since the last time the event was triggered',
      'Preventing physical keyboard keys from sticking',
      'Canceling HTTP requests when users navigate away',
      'Encrypting search terms in browser history'
    ],
    correctAnswer: 0,
  },
  {
    id: 'gen-16',
    question: 'What is an API rate limit and why is it enforced?',
    options: [
      'Restricting the number of requests a client can make in a given window to protect infrastructure against abuse and overload',
      'Charging money for every single HTTP packet sent',
      'Restricting the file size of images uploaded to a server',
      'Limiting the length of user passwords to 8 characters'
    ],
    correctAnswer: 0,
  },
  {
    id: 'gen-17',
    question: 'What is the difference between synchronous and asynchronous code execution?',
    options: [
      'Synchronous blocks subsequent execution until completed; asynchronous allows other operations to continue while waiting for results',
      'Synchronous code only runs at midnight',
      'Asynchronous code cannot return any values',
      'Synchronous code requires a cloud database'
    ],
    correctAnswer: 0,
  },
  {
    id: 'gen-18',
    question: 'In UI/UX design, what is visual hierarchy?',
    options: [
      'Arranging elements to show their order of importance using size, color, contrast, and spacing',
      'The chronological history of graphics cards',
      'The file folder tree on a designer’s desktop',
      'A list of software patents owned by a company'
    ],
    correctAnswer: 0,
  },
  {
    id: 'gen-19',
    question: 'What is a Figma component and why is it used?',
    options: [
      'A reusable UI element (with variants) that can be shared and updated across an entire design system',
      'A physical hardware chip inside a smartphone',
      'A plugin that generates HTML code automatically',
      'A vector font format for print posters'
    ],
    correctAnswer: 0,
  },
  {
    id: 'gen-20',
    question: 'What is the purpose of unit testing in software development?',
    options: [
      'Verifying that individual functions or components work correctly in complete isolation from external systems',
      'Testing software in an apartment unit',
      'Testing the entire company network simultaneously',
      'Running stress tests until the server crashes'
    ],
    correctAnswer: 0,
  },
  {
    id: 'gen-21',
    question: 'What is a pull request (PR) in collaborative software engineering?',
    options: [
      'A mechanism for proposing changes made on a branch for code review and automated testing before merging into the main codebase',
      'A request to pull financial funds from a bank account',
      'A notification that server storage is 100% full',
      'A command to download an entire git repository from scratch'
    ],
    correctAnswer: 0,
  },
  {
    id: 'gen-22',
    question: 'What is semantic versioning (SemVer) format (e.g. 2.4.1)?',
    options: [
      'MAJOR.MINOR.PATCH where MAJOR indicates breaking changes, MINOR new backward-compatible features, and PATCH bug fixes',
      'YEAR.MONTH.DAY representing release dates',
      'HOURS.MINUTES.SECONDS of compilation time',
      'CPU.RAM.STORAGE system requirements'
    ],
    correctAnswer: 0,
  },
  {
    id: 'gen-23',
    question: 'What is the purpose of an ORM (Object-Relational Mapping) like Prisma or Drizzle?',
    options: [
      'Mapping database tables to programming language classes/types so developers can write type-safe queries in code',
      'Converting raster images into vector SVG files',
      'Running optical character recognition on scanned PDFs',
      'Translating spoken speech into written text'
    ],
    correctAnswer: 0,
  },
  {
    id: 'gen-24',
    question: 'What is the Linux command to recursively change file permissions to read, write, and execute for the owner only?',
    options: ['chmod -R 700 <directory>', 'chown -R root <directory>', 'ls -la', 'mkdir -p 700'],
    correctAnswer: 0,
  },
  {
    id: 'gen-25',
    question: 'What is continuous monitoring in modern production environments?',
    options: [
      'Tracking real-time application health, latency, error rates, and resource utilization to detect and resolve incidents proactively',
      'Recording employee screen activity during work hours',
      'Running anti-virus scans once per month',
      'Backing up database tables to tape drives annually'
    ],
    correctAnswer: 0,
  },
];

/**
 * Generates an exact count of high quality, non-repeating, course-relevant questions.
 */
export function getQuestionsForContext(
  courseCategory: string,
  courseTitle: string,
  count: number,
  seedModifier: string
): QuizQuestion[] {
  // Determine relevant bank
  let primaryPool: QuizQuestion[] = [];
  if (courseCategory.includes('Intelligence') || courseCategory.includes('Machine Learning') || courseCategory.includes('AI') || courseTitle.includes('AI')) {
    primaryPool = TOPIC_QUESTIONS['Artificial Intelligence'] || [];
  } else if (courseCategory.includes('Security') || courseCategory.includes('Hacking') || courseTitle.includes('Cyber') || courseTitle.includes('Security')) {
    primaryPool = TOPIC_QUESTIONS['Cyber Security'] || [];
  } else if (courseCategory.includes('Front-End') || courseCategory.includes('Web') || courseCategory.includes('JavaScript') || courseCategory.includes('React') || courseCategory.includes('UI')) {
    primaryPool = TOPIC_QUESTIONS['Front-End Development'] || [];
  } else if (courseCategory.includes('Cloud') || courseCategory.includes('DevOps') || courseCategory.includes('Docker') || courseCategory.includes('Kubernetes') || courseCategory.includes('Linux')) {
    primaryPool = TOPIC_QUESTIONS['Cloud & DevOps'] || [];
  }

  // Combine with general tech pool to ensure we always have enough unique questions
  const combined = [...primaryPool, ...GENERAL_TECH_QUESTIONS];

  // Deterministic shuffle based on seedModifier
  const hash = seedModifier.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const shuffled = [...combined].sort((a, b) => {
    const valA = (a.id.charCodeAt(0) + hash) % 17;
    const valB = (b.id.charCodeAt(0) + hash) % 17;
    return valA - valB;
  });

  // Pick unique questions
  const selected = shuffled.slice(0, count);

  // If pool was somehow smaller than requested count, synthesize course-grounded questions
  while (selected.length < count) {
    const idx = selected.length + 1;
    selected.push({
      id: `${seedModifier}-synth-${idx}`,
      question: `Regarding ${courseTitle} core mastery: which architectural practice best ensures system reliability, testability, and security?`,
      options: [
        `Strict adherence to modular boundaries, comprehensive automated testing, and principle of least privilege`,
        `Disabling error logging to reduce disk write overhead`,
        `Coupling all components directly into a single global state file`,
        `Storing production secrets in client-side HTML tags`
      ],
      correctAnswer: 0,
    });
  }

  return selected;
}
