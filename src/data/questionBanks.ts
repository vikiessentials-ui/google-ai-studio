import type { QuizQuestion } from '@/types';

// Topic-specific question generator to ensure course-relevant questions
// Every question has 4 options and a correct answer
export function generateQuestionSet(
  topic: string,
  count: number,
  prefix: string = 'q'
): QuizQuestion[] {
  const bank = topicQuestionBanks[topic] || defaultQuestionBank;
  const questions: QuizQuestion[] = [];

  for (let i = 0; i < count; i++) {
    const template = bank[i % bank.length];
    questions.push({
      id: `${prefix}-${topic.toLowerCase().replace(/[^a-z0-9]/g, '-')}-${i + 1}`,
      question: template.question,
      options: [...template.options],
      correctAnswer: template.correctAnswer,
      explanation: template.explanation,
    });
  }

  return questions;
}

type QuestionTemplate = {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
};

export const topicQuestionBanks: Record<string, QuestionTemplate[]> = {
  'Artificial Intelligence': [
    {
      question: 'What is the primary objective of Artificial General Intelligence (AGI)?',
      options: [
        'To perform narrow automated arithmetic calculations',
        'To understand, learn, and apply knowledge across any intellectual task comparable to human capability',
        'To replace standard relational database query engines',
        'To generate static computer graphics for game engines'
      ],
      correctAnswer: 1,
      explanation: 'AGI represents hypothetical AI that possesses the ability to understand, learn, and perform any intellectual task that a human can.'
    },
    {
      question: 'Which learning paradigm relies on rewards and penalties rather than labeled examples?',
      options: ['Supervised Learning', 'Unsupervised Learning', 'Reinforcement Learning', 'Semi-supervised Learning'],
      correctAnswer: 2,
      explanation: 'Reinforcement Learning trains an agent using a system of rewards and punishments in an environment.'
    },
    {
      question: 'What mathematical architecture is the core foundation of modern Large Language Models?',
      options: ['Convolutional Neural Networks', 'Transformer architecture with Self-Attention', 'Recurrent Neural Networks with single-state memory', 'Decision Tree Ensembles'],
      correctAnswer: 1,
      explanation: 'The Transformer architecture introduced self-attention mechanisms allowing models to process sequential tokens in parallel.'
    },
    {
      question: 'What is "hallucination" in the context of generative AI models?',
      options: [
        'A hardware crash caused by GPU thermal throttling',
        'Generating confident responses that are factually inaccurate or unsubstantiated',
        'Optimizing weights through gradient descent',
        'Converting vector embeddings to scalar matrices'
      ],
      correctAnswer: 1,
      explanation: 'Hallucination refers to a generative model producing text or answers that sound plausible but are factually incorrect.'
    },
    {
      question: 'What is the role of the loss function during neural network training?',
      options: [
        'Quantifying the error difference between predicted output and ground truth target',
        'Compressing the dataset into binary files',
        'Rendering images to the user interface',
        'Generating cryptographic verification keys'
      ],
      correctAnswer: 0,
      explanation: 'A loss function measures the discrepancy between the network prediction and the actual label to guide weight optimization.'
    },
    {
      question: 'Which technique is primarily used to mitigate catastrophic forgetting during model fine-tuning?',
      options: ['Parameter-Efficient Fine-Tuning (e.g., LoRA)', 'Removing all hidden layers', 'Multiplying input values by zero', 'Disabling backpropagation'],
      correctAnswer: 0,
      explanation: 'Low-Rank Adaptation (LoRA) and PEFT freeze pretrained weights and train small rank matrices, preventing catastrophic forgetting.'
    },
    {
      question: 'What does RAG stand for in modern AI application design?',
      options: ['Rapid Access Gradient', 'Retrieval-Augmented Generation', 'Recursive Attention Graph', 'Randomized Array Generator'],
      correctAnswer: 1,
      explanation: 'Retrieval-Augmented Generation retrieves authoritative domain data from external vector databases to ground model generation.'
    },
    {
      question: 'Which of the following describes an ethical concern regarding training datasets in AI?',
      options: [
        'Encoding historical bias and lack of demographic representation',
        'Using UTF-8 text encoding',
        'Utilizing fast matrix multiplication on GPUs',
        'Staging code in Git repositories'
      ],
      correctAnswer: 0,
      explanation: 'Datasets may reflect historical human biases which can become amplified by AI systems if left unmitigated.'
    },
    {
      question: 'In deep learning, what does backpropagation calculate?',
      options: [
        'The gradient of the loss function with respect to each model parameter via the chain rule',
        'The execution time of CPU cache lines',
        'The network latency between client and server',
        'The optical resolution of input textures'
      ],
      correctAnswer: 0,
      explanation: 'Backpropagation applies the chain rule of calculus to compute loss gradients backwards through network layers.'
    },
    {
      question: 'What is an embedding in vector search and natural language processing?',
      options: [
        'A high-dimensional numeric vector representing the semantic meaning of an entity',
        'An HTML iframe element embedded inside a webpage',
        'A physical microchip soldered to a motherboard',
        'A permanent cookie stored in browser storage'
      ],
      correctAnswer: 0,
      explanation: 'Vector embeddings map words, sentences, or concepts into multi-dimensional geometric spaces where semantic proximity matches mathematical cosine distance.'
    },
    {
      question: 'What does Temperature control in autoregressive generative models?',
      options: [
        'The randomness and entropy of token selection during sampling',
        'The physical temperature of the server CPU',
        'The learning rate multiplier during backprop',
        'The compression ratio of training files'
      ],
      correctAnswer: 0,
      explanation: 'Lower temperature makes sampling more deterministic and focused, while higher temperature increases variety and randomness.'
    },
    {
      question: 'Which activation function is most widely used in modern hidden layers due to mitigating vanishing gradients?',
      options: ['Sigmoid', 'Hyperbolic Tangent (Tanh)', 'Rectified Linear Unit (ReLU) or GELU', 'Step Function'],
      correctAnswer: 2,
      explanation: 'ReLU and variants like GELU maintain positive gradients without saturating in upper ranges, avoiding gradient vanishing.'
    },
    {
      question: 'What is the primary function of the Discriminator in a Generative Adversarial Network (GAN)?',
      options: [
        'To generate synthetic images from noise vectors',
        'To evaluate whether candidate samples are genuine training data or generated fakes',
        'To store the final training checkpoint on disk',
        'To format data into JSON objects'
      ],
      correctAnswer: 1,
      explanation: 'The discriminator acts as an adversarial critic classifying examples as real training samples or synthetic fakes.'
    },
    {
      question: 'What is the purpose of Reinforcement Learning from Human Feedback (RLHF)?',
      options: [
        'Aligning generative model outputs with human helpfulness, honesty, and safety preferences',
        'Increasing the raw parameter count of the foundational model',
        'Scraping additional unlabeled text from the public internet',
        'Automating the physical deployment of server racks'
      ],
      correctAnswer: 0,
      explanation: 'RLHF uses human preference rankings to train a reward model that fine-tunes policy weights for safe, helpful outputs.'
    },
    {
      question: 'Which metric measures the cosine angle between two normalized vectors in embedding space?',
      options: ['Cosine Similarity', 'Euclidean Manhattan distance', 'Jaccard string index', 'Levenshtein distance'],
      correctAnswer: 0,
      explanation: 'Cosine similarity measures directional alignment between vectors independently of their scalar magnitude.'
    },
    {
      question: 'What is the function of Tokenization in NLP?',
      options: [
        'Segmenting raw character text strings into discrete atomic subword tokens for numerical encoding',
        'Encrypting the model weights with RSA keys',
        'Managing OAuth sessions for web users',
        'Calculating database indexing trees'
      ],
      correctAnswer: 0,
      explanation: 'Tokenizers divide input text into numerical indices corresponding to a fixed vocabulary dictionary.'
    },
    {
      question: 'What happens when an AI model experiences "overfitting"?',
      options: [
        'It performs exceptionally on training data but fails to generalize to unseen test data',
        'The server runs out of GPU memory',
        'The training loss refuses to decrease below 100%',
        'The model stops responding to prompt queries'
      ],
      correctAnswer: 0,
      explanation: 'Overfitting occurs when a model memorizes noise in the training set rather than learning generalized conceptual representations.'
    },
    {
      question: 'What role does a Prompt System Directive play in LLM inference?',
      options: [
        'Establishes foundational behavioral guidelines, tone, constraints, and operational context for subsequent user turns',
        'Compiles the model into machine bytecode',
        'Allocates video RAM buffers for OpenGL',
        'Flushes browser cookies'
      ],
      correctAnswer: 0,
      explanation: 'System prompts establish behavioral constraints, persona rules, and structural output formats before user inputs.'
    },
    {
      question: 'Which technique is commonly used to prevent overfitting in neural networks?',
      options: ['Dropout regularization', 'Increasing learning rate to infinity', 'Removing validation sets', 'Disabling activation functions'],
      correctAnswer: 0,
      explanation: 'Dropout randomly deactivates a percentage of neurons during forward passes, preventing co-adaptation of weights.'
    },
    {
      question: 'What is the context window in a language model?',
      options: [
        'The maximum number of input and output tokens the model can attend to in a single generation session',
        'The window size of the operating system desktop GUI',
        'The duration in seconds before an HTTP request times out',
        'The monitor refresh rate during inference'
      ],
      correctAnswer: 0,
      explanation: 'The context window limits the total token span the model attention mechanism can process simultaneously.'
    },
    {
      question: 'What is the purpose of Quantization in model optimization?',
      options: [
        'Reducing numerical precision (e.g., from 16-bit float to 8-bit or 4-bit integer) to save memory and accelerate inference',
        'Translating code from Python to C++',
        'Re-training weights from scratch with larger batch sizes',
        'Adding more convolutional layers'
      ],
      correctAnswer: 0,
      explanation: 'Quantization compresses neural network parameters into smaller bit representations, drastically reducing RAM footprints.'
    },
    {
      question: 'What does the term "Grounding" mean in AI applications?',
      options: [
        'Connecting AI outputs to verifiable external factual sources, documentation, or databases to prevent hallucination',
        'Connecting computer power supplies to electrical earth pins',
        'Shutting down unresponsive background tasks',
        'Limiting daily query volume per IP address'
      ],
      correctAnswer: 0,
      explanation: 'Grounding anchors model reasoning in retrieved documents, search results, or enterprise data records.'
    },
    {
      question: 'Which of the following is a classic non-parametric algorithm used for classification and regression?',
      options: ['k-Nearest Neighbors (k-NN)', 'Feedforward Deep Transformer', 'LSTM Highway Network', 'Convolutional Autoencoder'],
      correctAnswer: 0,
      explanation: 'k-NN classifies sample queries based on the majority label of its k nearest neighbors in feature space without parameter weights.'
    },
    {
      question: 'What is the vanishing gradient problem in deep networks?',
      options: [
        'Gradients shrinking exponentially as they are propagated back through many layers, halting weight updates',
        'Gradients expanding into infinite floating-point values',
        'GPU drivers losing memory handles',
        'Display pixels fading over time'
      ],
      correctAnswer: 0,
      explanation: 'Repeated multiplication of small derivatives through activation functions causes gradients to vanish near input layers.'
    },
    {
      question: 'In AI safety, what does the "alignment problem" refer to?',
      options: [
        'Ensuring AI system decisions, objectives, and behaviors remain aligned with human ethical values and intended goals',
        'Aligning text to the center in CSS stylesheets',
        'Synchronizing system clocks across distributed nodes',
        'Structuring columns neatly in spreadsheet software'
      ],
      correctAnswer: 0,
      explanation: 'The alignment problem addresses the fundamental challenge of guaranteeing highly capable autonomous systems pursue intended human interests safely.'
    }
  ],

  'Cyber Security': [
    {
      question: 'What three principles comprise the foundational CIA Triad of information security?',
      options: [
        'Confidentiality, Integrity, and Availability',
        'Centralization, Inspection, and Authorization',
        'Cryptography, Identification, and Authentication',
        'Control, Isolation, and Auditing'
      ],
      correctAnswer: 0,
      explanation: 'The CIA Triad constitutes the core benchmark: Confidentiality (privacy), Integrity (accuracy/tamper-resistance), and Availability (accessibility).'
    },
    {
      question: 'What distinguishes asymmetric cryptography from symmetric cryptography?',
      options: [
        'Asymmetric uses a key pair (public and private), whereas symmetric uses a single shared secret key',
        'Asymmetric is only used for symmetric AES blocks',
        'Symmetric cannot be used for encryption',
        'Asymmetric requires no keys at all'
      ],
      correctAnswer: 0,
      explanation: 'Asymmetric encryption relies on a mathematically paired public key for encryption and private key for decryption.'
    },
    {
      question: 'Which attack vector involves tricking victims into revealing credentials via deceptive communications?',
      options: ['Phishing', 'Buffer Overflow', 'SYN Flood DDoS', 'SQL Injection'],
      correctAnswer: 0,
      explanation: 'Phishing is a social engineering attack where malicious actors pose as legitimate organizations to steal sensitive data.'
    },
    {
      question: 'What is the primary security benefit of Multi-Factor Authentication (MFA)?',
      options: [
        'Requiring two or more distinct authentication factors (knowledge, possession, inherence) before granting access',
        'Speeding up the login process automatically',
        'Encrypting the local browser history',
        'Allowing users to bypass strong passwords'
      ],
      correctAnswer: 0,
      explanation: 'MFA ensures that compromising a single credential (like a password) is insufficient to breach an account.'
    },
    {
      question: 'How do parameterized queries prevent SQL Injection attacks?',
      options: [
        'They treat user input strictly as literal parameters rather than executable SQL command syntax',
        'They delete all database tables periodically',
        'They convert SQL queries into JavaScript code',
        'They bypass database authentication checks'
      ],
      correctAnswer: 0,
      explanation: 'Parameterized queries separate code from data, ensuring that database parsers never execute user parameters as SQL commands.'
    },
    {
      question: 'What is Cross-Site Scripting (XSS)?',
      options: [
        'An injection vulnerability where malicious JavaScript executes inside another user\'s browser context',
        'A denial-of-service attack targeting router ports',
        'Stealing physical hard drives from server racks',
        'A DNS spoofing attack on name servers'
      ],
      correctAnswer: 0,
      explanation: 'XSS occurs when an application includes untrusted data in a web page without proper escaping, allowing arbitrary script execution.'
    },
    {
      question: 'What does the principle of Least Privilege mandate?',
      options: [
        'Users and processes should be granted only the minimum permissions necessary to perform their required tasks',
        'Every user should have full administrator privileges by default',
        'System logs should be erased weekly to save space',
        'Firewalls should permit all incoming traffic'
      ],
      correctAnswer: 0,
      explanation: 'Least privilege minimizes risk by restricting privileges to the absolute minimum needed for legitimate operations.'
    },
    {
      question: 'What is a Zero-Day vulnerability?',
      options: [
        'A software security flaw that is known to attackers or researchers before the vendor has released a patch',
        'A software bug discovered on the first day of the year',
        'A vulnerability that expires after 24 hours',
        'A computer reboot that occurs at midnight'
      ],
      correctAnswer: 0,
      explanation: 'A Zero-Day vulnerability has no existing vendor patch at the moment of exploitation, leaving zero days for defense preparation.'
    },
    {
      question: 'What does a WAF (Web Application Firewall) monitor and filter?',
      options: [
        'HTTP and HTTPS traffic between web applications and the internet to detect malicious patterns like SQLi and XSS',
        'Internal cooling fan speeds of server chassis',
        'Physical employee badge entry logs at office doors',
        'Printer ink levels across network printers'
      ],
      correctAnswer: 0,
      explanation: 'A WAF inspects layer 7 application traffic to block common web application attacks.'
    },
    {
      question: 'What is the purpose of a cryptographic salt when hashing passwords?',
      options: [
        'Adding a unique random string to each password prior to hashing to defeat precomputed rainbow table attacks',
        'Compressing the password string to 8 characters',
        'Making passwords easier to memorize',
        'Translating passwords into base64 strings'
      ],
      correctAnswer: 0,
      explanation: 'Salting guarantees that identical passwords produce distinct hash digests, neutralizing rainbow table dictionaries.'
    },
    {
      question: 'Which protocol securely transmits web traffic encrypted via TLS over port 443?',
      options: ['HTTPS', 'FTP', 'Telnet', 'HTTP over port 80'],
      correctAnswer: 0,
      explanation: 'HTTPS utilizes Transport Layer Security (TLS) to encrypt all communications between client and server.'
    },
    {
      question: 'What is the key mechanism behind a Man-in-the-Middle (MitM) attack?',
      options: [
        'An attacker intercepting and potentially altering communications between two parties without their knowledge',
        'Flooding a website with synthetic bot traffic',
        'Overheating a server by maxing out CPU usage',
        'Modifying client-side CSS files on disk'
      ],
      correctAnswer: 0,
      explanation: 'MitM attacks intercept communication packets in transit, eavesdropping on or altering exchanged data.'
    },
    {
      question: 'What is the function of an Intrusion Detection System (IDS)?',
      options: [
        'Monitoring network or host traffic for signs of suspicious activity, policy violations, or known attack signatures',
        'Encrypting client hard drives on reboot',
        'Compiling software binaries from source code',
        'Formatting USB storage keys'
      ],
      correctAnswer: 0,
      explanation: 'An IDS analyzes network packets and system logs to identify unauthorized intrusion attempts and trigger alerts.'
    },
    {
      question: 'What is a Distributed Denial of Service (DDoS) attack?',
      options: [
        'Overwhelming a target service with massive volumes of traffic originating from multiple compromised systems (botnets)',
        'Stealing user passwords from a database',
        'Altering DNS records on an internal registrar',
        'Infecting firmware with BIOS rootkits'
      ],
      correctAnswer: 0,
      explanation: 'DDoS employs distributed botnets to flood network bandwidth or compute resources, rendering services unavailable to legitimate users.'
    },
    {
      question: 'Which HTTP header prevents a web page from being rendered inside an iframe, mitigating clickjacking?',
      options: ['X-Frame-Options (or Content-Security-Policy frame-ancestors)', 'X-Powered-By', 'Access-Control-Allow-Origin', 'Accept-Encoding'],
      correctAnswer: 0,
      explanation: 'Setting X-Frame-Options to DENY or SAMEORIGIN prevents clickjacking attacks by blocking unauthorized framing.'
    },
    {
      question: 'What does defense-in-depth represent in modern security architecture?',
      options: [
        'Employing layered security controls across physical, network, host, and application levels so no single point of failure exists',
        'Relying entirely on a single perimeter firewall',
        'Setting passwords to expire every 24 hours',
        'Storing backup data on the same physical drive'
      ],
      correctAnswer: 0,
      explanation: 'Defense-in-depth ensures that if one security barrier is breached, subsequent layers continue to protect assets.'
    },
    {
      question: 'What type of malware encrypts victim files and demands financial payment for decryption keys?',
      options: ['Ransomware', 'Spyware', 'Adware', 'Keylogger'],
      correctAnswer: 0,
      explanation: 'Ransomware holds victim data hostage via strong symmetric/asymmetric encryption until a ransom is paid.'
    },
    {
      question: 'What is the role of an Incident Response (IR) plan?',
      options: [
        'A documented, tested protocol for identifying, containing, eradicating, and recovering from security incidents',
        'A legal document declaring bankruptcy',
        'A marketing plan for new software launches',
        'A manual for installing computer operating systems'
      ],
      correctAnswer: 0,
      explanation: 'An IR plan provides an organized structure to minimize damage, preserve forensic evidence, and restore systems rapidly.'
    },
    {
      question: 'Why should sensitive API keys and secrets never be committed to public Git repositories?',
      options: [
        'Automated scanners continuously index public commits, immediately exposing secrets to unauthorized exploitation',
        'Git cannot store strings containing numbers',
        'API keys break Git merge conflict algorithms',
        'Commits with keys will fail local disk writes'
      ],
      correctAnswer: 0,
      explanation: 'Public commits are instantaneously scraped by automated botnets that exploit leaked API keys within seconds.'
    },
    {
      question: 'What is Cross-Site Request Forgery (CSRF)?',
      options: [
        'An attack tricking an authenticated user into executing unwanted actions on a trusted web application',
        'Stealing server source code via FTP',
        'Corrupting database indexes via power loss',
        'Cracking Wi-Fi WPA2 pre-shared keys'
      ],
      correctAnswer: 0,
      explanation: 'CSRF exploits browser cookie transmission to perform unauthorized transactions on behalf of an authenticated victim.'
    },
    {
      question: 'What does the Same-Origin Policy (SOP) enforce in web browsers?',
      options: [
        'Scripts running on one origin cannot access DOM elements or cookies from another distinct origin (scheme, host, port)',
        'Websites must be written in the same programming language',
        'All servers must reside in the same geographical country',
        'Users can only visit one website per day'
      ],
      correctAnswer: 0,
      explanation: 'SOP isolates scripts loaded from different origins to protect confidential user sessions and local document objects.'
    },
    {
      question: 'What is Penetration Testing (Ethical Hacking)?',
      options: [
        'Authorized simulated cyberattacks against an organization\'s systems to evaluate security posture and identify weaknesses',
        'Illegally selling credit card details on underground forums',
        'Disabling firewalls during production deployments',
        'Overwriting operating system bootloaders'
      ],
      correctAnswer: 0,
      explanation: 'Penetration testing legally probes systems using hacker techniques to uncover and remediate vulnerabilities before adversaries do.'
    },
    {
      question: 'What is the purpose of DNSSEC (Domain Name System Security Extensions)?',
      options: [
        'Digitally signing DNS query responses to ensure authenticity and prevent DNS spoofing or cache poisoning',
        'Encrypting the text of email bodies',
        'Accelerating video streaming buffering times',
        'Formatting IP addresses into IPv6 notation'
      ],
      correctAnswer: 0,
      explanation: 'DNSSEC uses cryptographic signatures to verify that DNS lookup records originated from the authoritative zone owner.'
    },
    {
      question: 'What is a buffer overflow vulnerability?',
      options: [
        'Writing more data to a fixed-length memory buffer than it can hold, overwriting adjacent memory and potentially hijacking execution flow',
        'When a database table runs out of rows',
        'A browser tab closing unexpectedly due to low battery',
        'A network cable becoming disconnected'
      ],
      correctAnswer: 0,
      explanation: 'Buffer overflows corrupt call stacks or heaps, allowing malicious inputs to inject and execute arbitrary machine code.'
    },
    {
      question: 'What is Social Engineering in cyber security?',
      options: [
        'Psychological manipulation of individuals into divulging confidential information or performing insecure actions',
        'Designing social media network recommendation algorithms',
        'Organizing software engineering team meetups',
        'Writing documentation for API developer portals'
      ],
      correctAnswer: 0,
      explanation: 'Social engineering targets the human element through pretexting, baiting, or impersonation to circumvent technical barriers.'
    }
  ],

  'Web Development': [
    {
      question: 'What is the role of the Virtual DOM in modern UI libraries like React?',
      options: [
        'An in-memory representation of real DOM nodes enabling efficient batch reconciliation and minimal direct browser DOM updates',
        'A browser extension that inspects cookies',
        'A server-side database that caches SQL queries',
        'A CSS framework that compiles Tailwind utility classes'
      ],
      correctAnswer: 0,
      explanation: 'The Virtual DOM diffs tree changes in memory and applies only necessary alterations to the actual browser DOM.'
    },
    {
      question: 'What does the CSS Box Model consist of, from innermost to outermost?',
      options: [
        'Content, Padding, Border, Margin',
        'Margin, Border, Padding, Content',
        'Content, Margin, Border, Padding',
        'Border, Padding, Content, Margin'
      ],
      correctAnswer: 0,
      explanation: 'The CSS box model calculates dimensions starting from Content, moving through Padding and Border, to outer Margin.'
    },
    {
      question: 'What does the HTTP status code 401 indicate?',
      options: [
        'Unauthorized: The request lacks valid authentication credentials for the target resource',
        'Forbidden: The server understands but refuses authorization',
        'Not Found: The resource does not exist',
        'Internal Server Error: Unexpected failure occurred'
      ],
      correctAnswer: 0,
      explanation: '401 Unauthorized indicates the client must authenticate itself to receive the requested response.'
    },
    {
      question: 'What is the purpose of debouncing in user input event handlers?',
      options: [
        'Delaying execution until a specified delay has elapsed without new events firing, preventing excessive calls (e.g. search input)',
        'Executing the callback function on every single millisecond continuously',
        'Storing user keystrokes into persistent database logs',
        'Disabling keyboard inputs completely'
      ],
      correctAnswer: 0,
      explanation: 'Debouncing coalesces rapid successive triggers into a single invocation after activity ceases for a duration.'
    },
    {
      question: 'Which semantic HTML tag should be used for the primary top-level navigation container?',
      options: ['<nav>', '<header>', '<aside>', '<section>'],
      correctAnswer: 0,
      explanation: 'The <nav> element designates major navigation links for accessibility screen readers and search engines.'
    },
    {
      question: 'What is the JavaScript Event Loop responsible for?',
      options: [
        'Coordinating the execution of synchronous code, microtasks (promises), and macrotasks (timers, events) on a single thread',
        'Compiling TypeScript directly into machine assembly',
        'Rendering CSS stylesheets onto GPU textures',
        'Encrypting TLS network packets'
      ],
      correctAnswer: 0,
      explanation: 'The event loop continuously checks the call stack and dequeues pending microtasks and macrotasks onto execution.'
    },
    {
      question: 'What does CSS Flexbox `justify-content: space-between` accomplish along the main axis?',
      options: [
        'Distributes child items evenly with the first item on the start edge and the last on the end edge',
        'Centers all items in the dead middle with equal gaps',
        'Aligns all items flush to the right edge',
        'Stacks items vertically regardless of flex-direction'
      ],
      correctAnswer: 0,
      explanation: '`space-between` distributes remaining positive free space equally between adjacent child flex elements.'
    },
    {
      question: 'Which method properly converts a JavaScript object into a JSON string?',
      options: ['JSON.stringify(obj)', 'JSON.parse(obj)', 'obj.toJSONString()', 'String.fromObject(obj)'],
      correctAnswer: 0,
      explanation: '`JSON.stringify()` serializes JavaScript objects and primitives into standardized JSON text representations.'
    },
    {
      question: 'What is the primary benefit of Progressive Web Apps (PWAs)?',
      options: [
        'Providing native app-like capabilities, offline caching via Service Workers, and installability from standard web browsers',
        'Requiring users to download a 500MB executable file',
        'Preventing web pages from running JavaScript',
        'Disabling CSS styles on mobile devices'
      ],
      correctAnswer: 0,
      explanation: 'PWAs combine web reach with service worker caching, push notifications, and home screen installability.'
    },
    {
      question: 'In TypeScript, what is the key difference between an `interface` and a `type` alias?',
      options: [
        'Interfaces support declaration merging and OOP inheritance, while types can represent unions, primitives, and mapped tuples',
        'Interfaces cannot define object properties',
        'Types cannot be imported across modules',
        'Interfaces are executed at runtime in the browser'
      ],
      correctAnswer: 0,
      explanation: 'Interfaces allow declaration merging and shape extension, while type aliases provide flexibility for unions and complex aliases.'
    },
    {
      question: 'What is CORS (Cross-Origin Resource Sharing)?',
      options: [
        'An HTTP-header-based mechanism that lets servers indicate any origins other than its own from which a browser should permit loading resources',
        'A database replication protocol',
        'A CSS animation property for 3D transforms',
        'A browser plugin for blocking ads'
      ],
      correctAnswer: 0,
      explanation: 'CORS allows servers to declare which external origins possess authorization to access their HTTP API endpoints.'
    },
    {
      question: 'What does the HTTP `Cache-Control: max-age=31536000, immutable` header tell browser clients?',
      options: [
        'The static asset can be cached for up to one year without needing revalidation, ideal for hashed bundle files',
        'The file should never be cached by any intermediary',
        'The page expires after 60 seconds',
        'The browser must wipe local storage'
      ],
      correctAnswer: 0,
      explanation: 'Hashed static assets use long immutable max-age directives to maximize client caching performance.'
    },
    {
      question: 'What is the purpose of React\'s `useEffect` dependency array?',
      options: [
        'It dictates when the effect callback should re-run based on whether specified values have changed between renders',
        'It allocates memory for background web workers',
        'It lists the CSS classes applied to child nodes',
        'It defines database schema foreign keys'
      ],
      correctAnswer: 0,
      explanation: 'React compares dependencies via shallow equality (`Object.is`) to determine if an effect should re-fire.'
    },
    {
      question: 'What does accessibility attribute `aria-label` provide?',
      options: [
        'An invisible accessible label string read by assistive technology when visual text is absent (e.g. icon-only buttons)',
        'The tooltip displayed on desktop hover',
        'The database primary key of the record',
        'The URL destination of an anchor link'
      ],
      correctAnswer: 0,
      explanation: '`aria-label` provides a direct programmatic label for screen readers on interactive elements that lack inner text.'
    },
    {
      question: 'What is SSR (Server-Side Rendering)?',
      options: [
        'Generating complete HTML markup on the server per request before transmitting it to the client for immediate rendering and hydration',
        'Executing JavaScript strictly inside GPU compute shaders',
        'Storing HTML files on flash thumb drives',
        'Rendering web pages inside command-line terminals'
      ],
      correctAnswer: 0,
      explanation: 'SSR renders HTML on the server, improving Initial Server Response times, First Contentful Paint, and SEO indexing.'
    },
    {
      question: 'Which method cancels an active asynchronous `fetch` request in modern JavaScript?',
      options: ['AbortController and its associated AbortSignal', 'fetch.cancel()', 'Promise.reject()', 'window.stop()'],
      correctAnswer: 0,
      explanation: 'Passing an `AbortSignal` from an `AbortController` into `fetch` allows aborting in-flight HTTP requests.'
    },
    {
      question: 'What is the purpose of the `alt` attribute on an `<img>` element?',
      options: [
        'Supplying a text alternative for visually impaired screen-reader users and as a fallback if the image fails to load',
        'Specifying the physical image file size in megabytes',
        'Setting the background blur filter in CSS',
        'Defining the compression algorithm of PNGs'
      ],
      correctAnswer: 0,
      explanation: 'The `alt` attribute communicates visual information to assistive technology and displays text fallback upon network failure.'
    },
    {
      question: 'What does CSS `position: sticky` do?',
      options: [
        'Treats element as relative until its containing scroll viewport reaches a specified offset, where it sticks like fixed',
        'Permanently glues the element to the bottom right of the screen',
        'Hides the element until user clicks on it',
        'Removes the element from DOM document flow completely'
      ],
      correctAnswer: 0,
      explanation: 'Sticky positioning toggles between relative and fixed based on viewport scroll boundaries.'
    },
    {
      question: 'Why should keys in React lists be stable and unique identifiers instead of array index numbers?',
      options: [
        'Using array indexes as keys causes rendering glitches and state retention bugs when items are reordered, inserted, or filtered',
        'Array indexes cause memory leaks in JavaScript garbage collection',
        'TypeScript strictly forbids numeric keys in JSX',
        'Array indexes prevent CSS styling from applying'
      ],
      correctAnswer: 0,
      explanation: 'Stable IDs allow React\'s reconciler to correctly map component state to corresponding DOM nodes across item mutations.'
    },
    {
      question: 'What is the benefit of HTTP/2 multiplexing over HTTP/1.1?',
      options: [
        'Multiple simultaneous requests and responses can be interleaved over a single TCP connection, eliminating head-of-line blocking',
        'HTTP/2 requires no TCP handshakes whatsoever',
        'HTTP/2 compresses all HTML into binary ZIP archives',
        'HTTP/2 prevents cross-site scripting automatically'
      ],
      correctAnswer: 0,
      explanation: 'Multiplexing transmits multiple bidirectionally interleaved data streams simultaneously across one TCP socket.'
    },
    {
      question: 'What is a closure in JavaScript?',
      options: [
        'A function bundled together with references to its surrounding lexical environment state',
        'A keyword that terminates a loop early',
        'The closing curly brace of a code block',
        'The final line of a script file'
      ],
      correctAnswer: 0,
      explanation: 'A closure gives an inner function access to an outer function\'s lexical scope variables even after execution finishes.'
    },
    {
      question: 'What does the HTML `<meta name="viewport" content="width=device-width, initial-scale=1.0">` tag do?',
      options: [
        'Configures mobile browsers to set the viewport width to the device screen width, enabling responsive design scaling',
        'Forces the browser to display in full-screen landscape mode',
        'Disables touch gestures on tablets',
        'Increases mobile data connection speeds'
      ],
      correctAnswer: 0,
      explanation: 'The viewport meta tag establishes the initial layout dimensions and zoom scale required for responsive CSS media queries.'
    },
    {
      question: 'Which of the following describes lazy-loading for web assets?',
      options: [
        'Deferring the loading of non-critical images or script chunks until they are about to enter the viewport or are demanded by user action',
        'Downloading the entire application bundle before showing any UI',
        'Running all heavy calculations on the main UI thread',
        'Disabling browser caching for scripts'
      ],
      correctAnswer: 0,
      explanation: 'Lazy loading saves bandwidth and speeds initial render by fetching components and media only when needed.'
    },
    {
      question: 'What is the purpose of WebSockets in modern web applications?',
      options: [
        'Providing a persistent, full-duplex, bidirectional communication channel between client and server over a single TCP connection',
        'Replacing standard relational database indexes',
        'Formatting JSON data into XML strings',
        'Managing local cookie expiration timestamps'
      ],
      correctAnswer: 0,
      explanation: 'WebSockets facilitate real-time bidirectional data exchange with minimal packet overhead compared to HTTP polling.'
    },
    {
      question: 'What is Tree Shaking in modern JavaScript bundlers (Vite, Rollup, Webpack)?',
      options: [
        'Dead-code elimination that removes unused module exports from the final production bundle to reduce file size',
        'Shaking the monitor display to trigger mobile gyroscope events',
        'Formatting indentation across nested code blocks',
        'Compressing SVG files into binary fonts'
      ],
      correctAnswer: 0,
      explanation: 'Tree shaking analyzes ES6 static import/export syntax to prune unreachable functions from production output.'
    }
  ]
};

// Fallback / default bank with 25 diverse technology questions
export const defaultQuestionBank: QuestionTemplate[] = [
  {
    question: 'What is the primary function of an operating system kernel?',
    options: [
      'Managing hardware resources, memory allocation, CPU scheduling, and hardware abstractions',
      'Displaying social media notifications',
      'Editing vector graphics',
      'Compressing video files'
    ],
    correctAnswer: 0,
    explanation: 'The kernel is the core component that manages system resources and arbitrates between software and physical hardware.'
  },
  {
    question: 'What does ACID stand for in database transaction management?',
    options: [
      'Atomicity, Consistency, Isolation, and Durability',
      'Asynchronous, Concurrent, Indexed, and Distributed',
      'Authentication, Cryptography, Integrity, and Delegation',
      'Array, Collection, Iteration, and Declaration'
    ],
    correctAnswer: 0,
    explanation: 'ACID properties guarantee reliable database transactions: Atomicity (all-or-nothing), Consistency, Isolation, and Durability.'
  },
  {
    question: 'Which data structure operates on a First-In, First-Out (FIFO) principle?',
    options: ['Queue', 'Stack', 'Binary Search Tree', 'Max Heap'],
    correctAnswer: 0,
    explanation: 'A Queue processes items in the exact order they arrive (First-In, First-Out).'
  },
  {
    question: 'What is the time complexity of looking up a key in a balanced hash table under average conditions?',
    options: ['O(1)', 'O(log n)', 'O(n)', 'O(n^2)'],
    correctAnswer: 0,
    explanation: 'Hash tables achieve average O(1) constant time lookup via direct hash index calculation.'
  },
  {
    question: 'What is Git version control\'s primary function?',
    options: [
      'Tracking revisions, branching historical snapshots, and coordinating distributed collaboration across source code',
      'Hosting static video streaming files',
      'Running SQL queries on remote servers',
      'Compiling C++ code to WebAssembly'
    ],
    correctAnswer: 0,
    explanation: 'Git is a distributed version control system tracking discrete commit snapshots across branches.'
  },
  {
    question: 'What does Docker containerization provide compared to traditional virtual machines?',
    options: [
      'Lightweight process isolation sharing the host OS kernel without hypervisor OS overhead',
      'Direct physical hardware replacement',
      'Slower boot times with dedicated hypervisors',
      'Automatic generation of backend code'
    ],
    correctAnswer: 0,
    explanation: 'Containers package application dependencies sharing the host kernel, enabling rapid startup and high density.'
  },
  {
    question: 'What is the role of Kubernetes in containerized environments?',
    options: [
      'Automating deployment, scaling, healing, and management of containerized workloads',
      'A programming language for creating mobile apps',
      'A database management engine for unstructured text',
      'A CSS styling preprocessor'
    ],
    correctAnswer: 0,
    explanation: 'Kubernetes provides cluster orchestration, automated rescheduling, load balancing, and rolling updates for containers.'
  },
  {
    question: 'What does a Reverse Proxy (such as NGINX or Envoy) do?',
    options: [
      'Sits in front of backend web servers, forwarding client requests, balancing load, terminating SSL, and caching responses',
      'Connects clients directly to raw disk storage without authorization',
      'Encrypts files stored on USB thumb drives',
      'Compiles frontend TypeScript into HTML'
    ],
    correctAnswer: 0,
    explanation: 'A reverse proxy accepts incoming traffic, directs requests to healthy backend nodes, terminates TLS, and enforces rate limits.'
  },
  {
    question: 'What does Continuous Integration (CI) automate in modern DevOps?',
    options: [
      'Automated code building, testing, linting, and validation whenever engineers commit new changes',
      'Manual code review meetings once per month',
      'Printing software documentation onto paper',
      'Purchasing server hardware components'
    ],
    correctAnswer: 0,
    explanation: 'CI automatically validates code additions through test suites and linters before merging into primary branches.'
  },
  {
    question: 'What is the main principle behind RESTful API design?',
    options: [
      'Stateless client-server architecture utilizing standard HTTP verbs (GET, POST, PUT, DELETE) representing resources via URIs',
      'Maintaining continuous raw binary socket connections indefinitely',
      'Writing all queries inside database stored procedures',
      'Transmitting data exclusively in XML format'
    ],
    correctAnswer: 0,
    explanation: 'REST uses stateless HTTP methods targeting uniform resource identifiers with standardized status codes.'
  },
  {
    question: 'What is the function of an Index in a database table?',
    options: [
      'A data structure (commonly B-Tree) that speeds up data retrieval operations at the cost of additional storage and write time',
      'A list of all users who have access to the database',
      'A backup archive stored in the cloud',
      'The primary CSS stylesheet of the database web portal'
    ],
    correctAnswer: 0,
    explanation: 'Indexes create search trees mapping column values to row pointers, reducing query scans from O(n) to logarithmic O(log n).'
  },
  {
    question: 'What is the primary difference between SQL (relational) and NoSQL (document) databases?',
    options: [
      'SQL enforces structured relational schemas with ACID guarantees; NoSQL offers flexible document schemas and horizontal scaling models',
      'SQL databases do not support indexes',
      'NoSQL databases cannot store numbers',
      'SQL databases are only accessible via desktop terminals'
    ],
    correctAnswer: 0,
    explanation: 'Relational databases use rigid schemas with normalized relational joins; NoSQL accommodates denormalized hierarchical documents.'
  },
  {
    question: 'What is the function of the TCP Three-Way Handshake?',
    options: [
      'SYN, SYN-ACK, ACK sequence establishing reliable, synchronized sequence numbers before data transmission begins',
      'Terminating a server connection immediately',
      'Encrypting data using symmetric keys',
      'Converting domain names into IPv4 addresses'
    ],
    correctAnswer: 0,
    explanation: 'The three-way handshake synchronizes sequence numbers and acknowledges connection readiness between network endpoints.'
  },
  {
    question: 'What does DNS (Domain Name System) perform across the internet?',
    options: [
      'Translates human-readable domain names (e.g. example.com) into numerical IP addresses',
      'Compresses video files for YouTube streaming',
      'Encrypts email passwords across webmail providers',
      'Formats computer hard drives'
    ],
    correctAnswer: 0,
    explanation: 'DNS functions as the internet\'s directory, resolving domain hostnames to routable IP addresses.'
  },
  {
    question: 'What is the primary purpose of a Content Delivery Network (CDN)?',
    options: [
      'Caching static and dynamic content across globally distributed edge servers geographically close to end users to reduce latency',
      'Storing financial records in cold offline archives',
      'Translating spoken audio into subtitles',
      'Running operating system kernels on cell towers'
    ],
    correctAnswer: 0,
    explanation: 'CDNs place cached content at edge Points of Presence near users, cutting round-trip transit times.'
  },
  {
    question: 'What is a Race Condition in concurrent programming?',
    options: [
      'A software bug occurring when the outcome depends on the non-deterministic timing or interleaving of multiple concurrent threads',
      'Running two separate algorithms to see which finishes fastest',
      'An overclocked CPU overheating during benchmarks',
      'A network cable exceeding its maximum length'
    ],
    correctAnswer: 0,
    explanation: 'Race conditions happen when unsynchronized threads read and mutate shared state simultaneously.'
  },
  {
    question: 'What does the CAP Theorem state for distributed data stores?',
    options: [
      'A distributed system can guarantee at most two of Consistency, Availability, and Partition Tolerance simultaneously',
      'Databases can only store three columns per table',
      'Network connections must never exceed 1 Gbps',
      'CPU clock speeds cannot exceed 5 GHz'
    ],
    correctAnswer: 0,
    explanation: 'Under network partitions, a distributed system must choose between consistency or availability.'
  },
  {
    question: 'What is OAuth 2.0 primarily used for?',
    options: [
      'Delegated authorization allowing third-party applications limited access to user resources without exposing user passwords',
      'Formatting CSS layouts into responsive grids',
      'Encrypting hard drives using BitLocker',
      'Parsing JSON tokens in C++'
    ],
    correctAnswer: 0,
    explanation: 'OAuth 2.0 provides token-based delegated authorization without sharing underlying user password credentials.'
  },
  {
    question: 'What is the purpose of unit testing in software engineering?',
    options: [
      'Testing individual isolated units of code (functions, methods) to verify they produce expected outputs for defined inputs',
      'Testing the entire application by paying manual testers',
      'Testing how much power the computer consumes under load',
      'Measuring network latency between continents'
    ],
    correctAnswer: 0,
    explanation: 'Unit tests validate that individual modules and functions behave correctly in isolation.'
  },
  {
    question: 'What does garbage collection perform in managed runtime languages (like JavaScript, Java, Go)?',
    options: [
      'Automatically identifying and reclaiming dynamically allocated memory that is no longer referenced by running program threads',
      'Deleting temporary browser cache files from disk',
      'Clearing out unused git branches',
      'Compressing CSS stylesheets'
    ],
    correctAnswer: 0,
    explanation: 'Garbage collection tracks object references and frees unreachable heap memory to prevent memory leaks.'
  },
  {
    question: 'In software architecture, what is the Single Responsibility Principle (SRP)?',
    options: [
      'A module or class should have only one reason to change, encapsulating a single unified responsibility',
      'Every engineer should only write one line of code per day',
      'A program can only have one database connection',
      'A server must only host one single webpage'
    ],
    correctAnswer: 0,
    explanation: 'SRP dictates that every software unit should focus strictly on performing a single cohesive responsibility.'
  },
  {
    question: 'What does the Linux command `chmod 755 filename` do?',
    options: [
      'Sets read, write, and execute permissions for the owner, and read and execute permissions for group and others',
      'Deletes the file permanently from the filesystem',
      'Encrypts the file with AES-256',
      'Transfers the file to another server via SCP'
    ],
    correctAnswer: 0,
    explanation: 'In octal permissions: 7 = rwx (owner), 5 = r-x (group), 5 = r-x (others).'
  },
  {
    question: 'What is the difference between synchronous and asynchronous code execution?',
    options: [
      'Synchronous blocks execution until the current task finishes; asynchronous initiates tasks and handles completion later without blocking',
      'Synchronous code cannot access the internet',
      'Asynchronous code can only be written in Python',
      'Synchronous code only runs on mobile devices'
    ],
    correctAnswer: 0,
    explanation: 'Asynchronous execution delegates long-running I/O operations and resumes execution when results are ready, keeping runtimes responsive.'
  },
  {
    question: 'What is the purpose of a dead-letter queue (DLQ) in asynchronous message broker systems?',
    options: [
      'A designated queue for storing messages that could not be processed successfully after maximum retry attempts for inspection',
      'A queue that deletes all messages every midnight',
      'A spam filter for marketing emails',
      'A cache for static CSS stylesheets'
    ],
    correctAnswer: 0,
    explanation: 'DLQs isolate failed or malformed messages, allowing engineers to diagnose errors without blocking message pipelines.'
  },
  {
    question: 'What does the term "Infrastructure as Code" (IaC) refer to?',
    options: [
      'Managing and provisioning compute, storage, and networking resources through machine-readable definition files rather than manual UI configuration',
      'Writing operating system code in binary assembly',
      'Soldering computer hardware cables manually',
      'Creating graphical mockups of server rooms'
    ],
    correctAnswer: 0,
    explanation: 'IaC (e.g. Terraform, CloudFormation) treats infrastructure provisioning with version-controlled, repeatable code declarations.'
  }
];
