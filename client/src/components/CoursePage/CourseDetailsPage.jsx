import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Roadmap from "./Roadmap";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const roadmapData = [
  {
    step: "01",
    title: "Why C++ Programming?",
    points: [
      " 1. High-performance language",
      " 2. Object-oriented programming support",
      " 3. Used in system & application development",
    ],
    bg: "/card01.jpg",
  },
  {
    step: "02",
    title: "Basic C++ Concepts",
    points: [
      " 1. Data types, variables & constants",
      " 2. Operators and expressions",
      " 3. Input/output using cin & cout",
    ],
    bg: "/c++basic.png",
  },
  {
    step: "03",
    title: "Control Flow Statements",
    points: [
      " 1. Conditional statements (if, switch)",
      " 2. Loops (for, while, do-while)",
      " 3. Break and continue",
    ],
    bg: "/roadmap/bg3.jpg",
  },
  {
    step: "04",
    title: "Functions in C++",
    points: [
      " 1. Function declaration & definition",
      " 2. Call by value vs call by reference",
      " 3. Inline and recursive functions",
    ],
    bg: "/roadmap/bg4.jpg",
  },
  {
    step: "05",
    title: "Arrays & Strings",
    points: [
      " 1. One-dimensional & multi-dimensional arrays",
      " 2. Character arrays and strings",
      " 3. String manipulation functions",
    ],
    bg: "/roadmap/bg5.jpg",
  },
  {
    step: "06",
    title: "Pointers & Memory Basics",
    points: [
      " 1. Pointer basics and syntax",
      " 2. Pointer arithmetic",
      " 3. Pointers with arrays and functions",
    ],
    bg: "/roadmap/bg6.jpg",
  },
  {
    step: "07",
    title: "Structures & Unions",
    points: [
      " 1. Defining and using structures",
      " 2. Nested structures",
      " 3. Difference between structure and union",
    ],
    bg: "/roadmap/bg7.jpg",
  },
  {
    step: "08",
    title: "Classes & Objects",
    points: [
      " 1. Class & object fundamentals",
      " 2. Access specifiers",
      " 3. Array of objects",
    ],
    bg: "/c++class.png",
  },
  {
    step: "09",
    title: "Constructor & Destructor",
    points: [
      " 1. Default, parameterized & copy constructors",
      " 2. Constructor overloading",
      " 3. Destructor lifecycle",
    ],
    bg: "/roadmap/bg9.jpg",
  },
  {
    step: "10",
    title: "Properties of OOP",
    points: [
      " 1. Encapsulation & abstraction",
      " 2. Static data members & functions",
      " 3. Object-oriented design principles",
    ],
    bg: "/roadmap/bg10.jpg",
  },
  {
    step: "11",
    title: "Inheritance in C++",
    points: [
      " 1. Single, multiple & multilevel inheritance",
      " 2. Diamond problem & virtual inheritance",
      " 3. Function overriding",
    ],
    bg: "/roadmap/bg11.jpg",
  },
  {
    step: "12",
    title: "Polymorphism",
    points: [
      " 1. Compile-time polymorphism",
      " 2. Runtime polymorphism",
      " 3. Virtual functions",
    ],
    bg: "/roadmap/bg12.jpg",
  },
  {
    step: "13",
    title: "Operator Overloading",
    points: [
      " 1. Overloading unary & binary operators",
      " 2. Rules of operator overloading",
      " 3. Practical use cases",
    ],
    bg: "/roadmap/bg13.jpg",
  },
  {
    step: "14",
    title: "Templates",
    points: [
      " 1. Function templates",
      " 2. Class templates",
      " 3. Template specialization",
    ],
    bg: "/roadmap/bg14.jpg",
  },
  {
    step: "15",
    title: "Exception Handling",
    points: [
      " 1. try, catch & throw",
      " 2. Multiple catch blocks",
      " 3. User-defined exceptions",
    ],
    bg: "/roadmap/bg15.jpg",
  },
  {
    step: "16",
    title: "File Handling in C++",
    points: [
      " 1. File streams (ifstream, ofstream)",
      " 2. Reading and writing files",
      " 3. Binary file handling",
    ],
    bg: "/roadmap/bg16.jpg",
  },
  {
    step: "17",
    title: "STL (Standard Template Library)",
    points: [
      " 1. Containers (vector, list, map)",
      " 2. Iterators & algorithms",
      " 3. STL use cases",
    ],
    bg: "/roadmap/bg17.jpg",
  },
  {
    step: "18",
    title: "Dynamic Memory Management",
    points: [
      " 1. new and delete operators",
      " 2. Memory leaks",
      " 3. Smart pointers basics",
    ],
    bg: "/roadmap/bg18.jpg",
  },
  {
    step: "19",
    title: "Modern C++ (C++11 and Above)",
    points: [
      " 1. Auto keyword & range-based loops",
      " 2. Lambda expressions",
      " 3. Move semantics",
    ],
    bg: "/roadmap/bg19.jpg",
  },
  {
    step: "20",
    title: "Advanced C++ Concepts",
    points: [
      " 1. Multithreading basics",
      " 2. Concurrency and mutex",
      " 3. Performance optimization",
    ],
    bg: "/roadmap/bg20.jpg",
  },
  {
    step: "21",
    title: "C++ for Competitive Programming",
    points: [
      " 1. Fast I/O techniques",
      " 2. Time & space complexity",
      " 3. Problem-solving patterns",
    ],
    bg: "/roadmap/bg21.jpg",
  },
  {
    step: "22",
    title: "C++ in Real-World Applications",
    points: [
      " 1. Game development basics",
      " 2. System & embedded programming",
      " 3. C++ in finance & AI",
    ],
    bg: "/roadmap/bg22.jpg",
  },
];

const coreJavaRoadmapData = [
  {
    step: "01",
    title: "Why Java Programming?",
    points: [
      " 1. Platform-independent (Write Once, Run Anywhere)",
      " 2. Strong object-oriented principles",
      " 3. Widely used in enterprise & backend systems",
    ],
    bg: "/java/bg1.jpg",
  },
  {
    step: "02",
    title: "Java Basics & Syntax",
    points: [
      " 1. JVM, JRE & JDK overview",
      " 2. Data types, variables & keywords",
      " 3. Input/output using Scanner & BufferedReader",
    ],
    bg: "/java/bg2.jpg",
  },
  {
    step: "03",
    title: "Control Flow Statements",
    points: [
      " 1. if-else & switch statements",
      " 2. for, while & do-while loops",
      " 3. break, continue & return",
    ],
    bg: "/java/bg3.jpg",
  },
  {
    step: "04",
    title: "Methods & Method Overloading",
    points: [
      " 1. Method declaration & invocation",
      " 2. Method overloading",
      " 3. Pass by value concept",
    ],
    bg: "/java/bg4.jpg",
  },
  {
    step: "05",
    title: "Arrays & Strings",
    points: [
      " 1. Single & multi-dimensional arrays",
      " 2. String, StringBuilder & StringBuffer",
      " 3. String manipulation methods",
    ],
    bg: "/java/bg5.jpg",
  },
  {
    step: "06",
    title: "Object-Oriented Fundamentals",
    points: [" 1. Classes & objects", " 2. Constructors", " 3. this keyword"],
    bg: "/java/bg6.jpg",
  },
  {
    step: "07",
    title: "Inheritance in Java",
    points: [
      " 1. extends keyword",
      " 2. Method overriding",
      " 3. super keyword",
    ],
    bg: "/java/bg7.jpg",
  },
  {
    step: "08",
    title: "Polymorphism",
    points: [
      " 1. Compile-time polymorphism",
      " 2. Runtime polymorphism",
      " 3. Dynamic method dispatch",
    ],
    bg: "/java/bg8.jpg",
  },
  {
    step: "09",
    title: "Abstraction",
    points: [
      " 1. Abstract classes",
      " 2. Abstract methods",
      " 3. Real-world abstraction examples",
    ],
    bg: "/java/bg9.jpg",
  },
  {
    step: "10",
    title: "Encapsulation",
    points: [
      " 1. Access modifiers",
      " 2. Getters & setters",
      " 3. Data hiding",
    ],
    bg: "/java/bg10.jpg",
  },
  {
    step: "11",
    title: "Interfaces",
    points: [
      " 1. Interface basics",
      " 2. Multiple inheritance using interfaces",
      " 3. Default & static methods",
    ],
    bg: "/java/bg11.jpg",
  },
  {
    step: "12",
    title: "Packages & Access Control",
    points: [
      " 1. Built-in packages",
      " 2. User-defined packages",
      " 3. Package visibility rules",
    ],
    bg: "/java/bg12.jpg",
  },
  {
    step: "13",
    title: "Exception Handling",
    points: [
      " 1. try, catch & finally",
      " 2. Checked vs unchecked exceptions",
      " 3. Custom exceptions",
    ],
    bg: "/java/bg13.jpg",
  },
  {
    step: "14",
    title: "Multithreading Basics",
    points: [
      " 1. Thread lifecycle",
      " 2. Creating threads (Thread & Runnable)",
      " 3. Thread synchronization basics",
    ],
    bg: "/java/bg14.jpg",
  },
  {
    step: "15",
    title: "Java Collections Framework",
    points: [
      " 1. List, Set & Map interfaces",
      " 2. ArrayList, HashSet & HashMap",
      " 3. Iterators & for-each loop",
    ],
    bg: "/java/bg15.jpg",
  },
  {
    step: "16",
    title: "File Handling & I/O",
    points: [
      " 1. File & FileReader/FileWriter",
      " 2. Buffered streams",
      " 3. Serialization basics",
    ],
    bg: "/java/bg16.jpg",
  },
  {
    step: "17",
    title: "Java 8 Features",
    points: [
      " 1. Lambda expressions",
      " 2. Functional interfaces",
      " 3. Stream API",
    ],
    bg: "/java/bg17.jpg",
  },
  {
    step: "18",
    title: "Annotations & Reflection",
    points: [
      " 1. Built-in annotations",
      " 2. Custom annotations",
      " 3. Reflection API",
    ],
    bg: "/java/bg18.jpg",
  },
  {
    step: "19",
    title: "JVM Internals & Memory Model",
    points: [
      " 1. Heap, stack & method area",
      " 2. Garbage collection",
      " 3. Performance tuning basics",
    ],
    bg: "/java/bg19.jpg",
  },
  {
    step: "20",
    title: "Java Best Practices",
    points: [
      " 1. Clean code principles",
      " 2. Design patterns basics",
      " 3. Secure coding practices",
    ],
    bg: "/java/bg20.jpg",
  },
  {
    step: "21",
    title: "Java for Competitive Programming",
    points: [
      " 1. Fast I/O techniques",
      " 2. Time & space complexity",
      " 3. Problem-solving strategies",
    ],
    bg: "/java/bg21.jpg",
  },
  {
    step: "22",
    title: "Java in Real-World Applications",
    points: [
      " 1. Backend development overview",
      " 2. Android development basics",
      " 3. Enterprise applications",
    ],
    bg: "/java/bg22.jpg",
  },
];

const pythonRoadmapData = [
  {
    step: "01",
    title: "Why Python Programming?",
    points: [
      " 1. Easy to learn & beginner-friendly",
      " 2. High-level & interpreted language",
      " 3. Widely used in AI, ML, Web & Automation",
    ],
    bg: "/python/bg1.jpg",
  },
  {
    step: "02",
    title: "Python Basics & Syntax",
    points: [
      " 1. Python interpreter & execution flow",
      " 2. Variables, keywords & indentation",
      " 3. Comments & basic syntax rules",
    ],
    bg: "/python/bg2.jpg",
  },
  {
    step: "03",
    title: "Data Types & Variables",
    points: [
      " 1. int, float, string & boolean",
      " 2. Type casting",
      " 3. Dynamic typing in Python",
    ],
    bg: "/python/bg3.jpg",
  },
  {
    step: "04",
    title: "Operators in Python",
    points: [
      " 1. Arithmetic operators",
      " 2. Logical & comparison operators",
      " 3. Assignment & bitwise operators",
    ],
    bg: "/python/bg4.jpg",
  },
  {
    step: "05",
    title: "Control Flow Statements",
    points: [
      " 1. if, elif & else",
      " 2. Nested conditions",
      " 3. Match-case (Python 3.10+)",
    ],
    bg: "/python/bg5.jpg",
  },
  {
    step: "06",
    title: "Loops in Python",
    points: [" 1. for loop", " 2. while loop", " 3. break, continue & pass"],
    bg: "/python/bg6.jpg",
  },
  {
    step: "07",
    title: "Functions in Python",
    points: [
      " 1. Defining & calling functions",
      " 2. Arguments & return values",
      " 3. Lambda functions",
    ],
    bg: "/python/bg7.jpg",
  },
  {
    step: "08",
    title: "Python Data Structures",
    points: [
      " 1. Lists & list operations",
      " 2. Tuples & sets",
      " 3. Dictionaries",
    ],
    bg: "/python/bg8.jpg",
  },
  {
    step: "09",
    title: "Strings in Python",
    points: [
      " 1. String creation & indexing",
      " 2. String methods",
      " 3. String formatting",
    ],
    bg: "/python/bg9.jpg",
  },
  {
    step: "10",
    title: "File Handling",
    points: [
      " 1. Reading & writing files",
      " 2. File modes",
      " 3. Working with CSV & JSON",
    ],
    bg: "/python/bg10.jpg",
  },
  {
    step: "11",
    title: "Exception Handling",
    points: [
      " 1. try, except & finally",
      " 2. Multiple exceptions",
      " 3. Custom exceptions",
    ],
    bg: "/python/bg11.jpg",
  },
  {
    step: "12",
    title: "Object-Oriented Programming",
    points: [
      " 1. Classes & objects",
      " 2. Constructors & methods",
      " 3. self keyword",
    ],
    bg: "/python/bg12.jpg",
  },
  {
    step: "13",
    title: "Inheritance & Polymorphism",
    points: [
      " 1. Single & multiple inheritance",
      " 2. Method overriding",
      " 3. Polymorphism concepts",
    ],
    bg: "/python/bg13.jpg",
  },
  {
    step: "14",
    title: "Abstraction & Encapsulation",
    points: [
      " 1. Abstract base classes",
      " 2. Data hiding",
      " 3. Property decorators",
    ],
    bg: "/python/bg14.jpg",
  },
  {
    step: "15",
    title: "Modules & Packages",
    points: [
      " 1. Importing modules",
      " 2. Built-in modules",
      " 3. Creating custom packages",
    ],
    bg: "/python/bg15.jpg",
  },
  {
    step: "16",
    title: "Virtual Environments & pip",
    points: [
      " 1. venv & virtualenv",
      " 2. pip install & requirements.txt",
      " 3. Dependency management",
    ],
    bg: "/python/bg16.jpg",
  },
  {
    step: "17",
    title: "Advanced Python Concepts",
    points: [
      " 1. Decorators",
      " 2. Generators & iterators",
      " 3. Context managers",
    ],
    bg: "/python/bg17.jpg",
  },
  {
    step: "18",
    title: "Multithreading & Multiprocessing",
    points: [
      " 1. threading module",
      " 2. multiprocessing module",
      " 3. GIL concept",
    ],
    bg: "/python/bg18.jpg",
  },
  {
    step: "19",
    title: "Python Performance & Best Practices",
    points: [
      " 1. Code optimization techniques",
      " 2. Time & space complexity",
      " 3. Writing clean & readable code",
    ],
    bg: "/python/bg19.jpg",
  },
  {
    step: "20",
    title: "Python in Real-World Applications",
    points: [
      " 1. Web development (Django, Flask)",
      " 2. Data science & machine learning",
      " 3. Automation & scripting",
    ],
    bg: "/python/bg20.jpg",
  },
];

const advanceJavaRoadmapData = [
  {
    step: "01",
    title: "Java EE Overview",
    points: [
      " 1. Introduction to Java EE",
      " 2. Java EE architecture",
      " 3. Key components & APIs",
    ],
    bg: "/advancejava/bg1.jpg",
  },
  {
    step: "02",
    title: "Servlets & JSP",
    points: [
      " 1. Servlet lifecycle",
      " 2. JSP basics & directives",
      " 3. Session management",
    ],
    bg: "/advancejava/bg2.jpg",
  },
  {
    step: "03",
    title: "Java Database Connectivity (JDBC)",
    points: [
      " 1. JDBC architecture",
      " 2. CRUD operations",
      " 3. Connection pooling",
    ],
    bg: "/advancejava/bg3.jpg",
  },
  {
    step: "04",
    title: "Java Persistence API (JPA)",
    points: [" 1. ORM concepts", " 2. Entity mapping", " 3. JPQL basics"],
    bg: "/advancejava/bg4.jpg",
  },
  {
    step: "05",
    title: "Enterprise JavaBeans (EJB)",
    points: [
      " 1. EJB types (Session, Message-driven)",
      " 2. EJB lifecycle",
      " 3. Dependency injection",
    ],
    bg: "/advancejava/bg5.jpg",
  },
  {
    step: "06",
    title: "Java Security",
    points: [
      " 1. Security basics",
      " 2. Authentication & authorization",
      " 3. Secure coding practices",
    ],
    bg: "/advancejava/bg6.jpg",
  },
  {
    step: "07",
    title: "Java Web Services",
    points: [
      " 1. RESTful services",
      " 2. SOAP services",
      " 3. API documentation (Swagger)",
    ],
    bg: "/advancejava/bg7.jpg",
  },
  {
    step: "08",
    title: "Java Microservices",
    points: [
      " 1. Microservices architecture",
      " 2. Spring Boot basics",
      " 3. API Gateway & Service Discovery",
    ],
    bg: "/advancejava/bg8.jpg",
  },
  {
    step: "09",
    title: "Java Testing",
    points: [
      " 1. Unit testing (JUnit)",
      " 2. Integration testing",
      " 3. Test-driven development (TDD)",
    ],
    bg: "/advancejava/bg9.jpg",
  },
  {
    step: "10",
    title: "Java DevOps",
    points: [
      " 1. CI/CD concepts",
      " 2. Docker basics",
      " 3. Kubernetes basics",
    ],
    bg: "/advancejava/bg10.jpg",
  },
  {
    step: "11",
    title: "Java Performance",
    points: [
      " 1. Performance tuning techniques",
      " 2. Profiling tools",
      " 3. Garbage collection optimization",
    ],
    bg: "/advancejava/bg11.jpg",
  },
  {
    step: "12",
    title: "Java Security Best Practices",
    points: [
      " 1. Secure coding guidelines",
      " 2. Input validation techniques",
      " 3. Error handling best practices",
    ],
    bg: "/advancejava/bg12.jpg",
  },
  {
    step: "13",
    title: "Java in Real-World Applications",
    points: [
      " 1. Web development (Spring, JavaServer Faces)",
      " 2. Enterprise applications (JEE)",
      " 3. Microservices (Spring Boot, Docker)",
    ],
    bg: "/advancejava/bg13.jpg",
  },
  {
    step: "14",
    title: "Java for Competitive Programming",
    points: [
      " 1. Fast I/O techniques",
      " 2. Time & space complexity",
      " 3. Problem-solving strategies",
    ],
    bg: "/advancejava/bg14.jpg",
  },
  {
    step: "15",
    title: "Java Best Practices",
    points: [
      " 1. Code conventions (naming, formatting)",
      " 2. Effective use of design patterns",
      " 3. Writing clean & maintainable code",
    ],
    bg: "/advancejava/bg15.jpg",
  },
];

const basicCRoadmapData = [
  {
    step: "01",
    title: "Why Learn C Programming?",
    points: [
      " 1. Foundation of modern programming languages",
      " 2. Fast & efficient language",
      " 3. Widely used in system programming",
    ],
    bg: "/c/bg1.jpg",
  },
  {
    step: "02",
    title: "History & Structure of C",
    points: [
      " 1. History of C language",
      " 2. Structure of a C program",
      " 3. Compilation process",
    ],
    bg: "/c/bg2.jpg",
  },
  {
    step: "03",
    title: "Basic Syntax & Keywords",
    points: [
      " 1. Tokens & keywords",
      " 2. Identifiers & constants",
      " 3. Comments & coding standards",
    ],
    bg: "/c/bg3.jpg",
  },
  {
    step: "04",
    title: "Data Types & Variables",
    points: [
      " 1. Basic & derived data types",
      " 2. Variable declaration",
      " 3. Type modifiers",
    ],
    bg: "/c/bg4.jpg",
  },
  {
    step: "05",
    title: "Input & Output Functions",
    points: [
      " 1. printf() & scanf()",
      " 2. Format specifiers",
      " 3. getchar() & putchar()",
    ],
    bg: "/c/bg5.jpg",
  },
  {
    step: "06",
    title: "Operators in C",
    points: [
      " 1. Arithmetic operators",
      " 2. Relational & logical operators",
      " 3. Bitwise operators",
    ],
    bg: "/c/bg6.jpg",
  },
  {
    step: "07",
    title: "Control Statements",
    points: [
      " 1. if, if-else & nested if",
      " 2. switch-case",
      " 3. goto statement",
    ],
    bg: "/c/bg7.jpg",
  },
  {
    step: "08",
    title: "Loops in C",
    points: [" 1. for loop", " 2. while loop", " 3. do-while loop"],
    bg: "/c/bg8.jpg",
  },
  {
    step: "09",
    title: "Functions in C",
    points: [
      " 1. Function declaration & definition",
      " 2. Call by value",
      " 3. Recursive functions",
    ],
    bg: "/c/bg9.jpg",
  },
  {
    step: "10",
    title: "Arrays",
    points: [
      " 1. One-dimensional arrays",
      " 2. Multi-dimensional arrays",
      " 3. Array initialization",
    ],
    bg: "/c/bg10.jpg",
  },
  {
    step: "11",
    title: "Strings in C",
    points: [
      " 1. String handling functions",
      " 2. strlen(), strcpy(), strcmp()",
      " 3. String input/output",
    ],
    bg: "/c/bg11.jpg",
  },
  {
    step: "12",
    title: "Pointers Basics",
    points: [
      " 1. Pointer declaration",
      " 2. Address & dereference operators",
      " 3. Pointer arithmetic",
    ],
    bg: "/c/bg12.jpg",
  },
  {
    step: "13",
    title: "Pointers with Arrays & Functions",
    points: [
      " 1. Array of pointers",
      " 2. Pointers as function arguments",
      " 3. Pointer to pointer",
    ],
    bg: "/c/bg13.jpg",
  },
  {
    step: "14",
    title: "Structures",
    points: [
      " 1. Defining structures",
      " 2. Accessing structure members",
      " 3. Structures & functions",
    ],
    bg: "/c/bg14.jpg",
  },
  {
    step: "15",
    title: "Unions & Enums",
    points: [
      " 1. Union concept",
      " 2. Difference between structure & union",
      " 3. Enumeration data type",
    ],
    bg: "/c/bg15.jpg",
  },
  {
    step: "16",
    title: "Dynamic Memory Allocation",
    points: [
      " 1. malloc(), calloc()",
      " 2. realloc() & free()",
      " 3. Memory management best practices",
    ],
    bg: "/c/bg16.jpg",
  },
  {
    step: "17",
    title: "File Handling in C",
    points: [
      " 1. File pointers",
      " 2. File modes",
      " 3. Reading & writing files",
    ],
    bg: "/c/bg17.jpg",
  },
  {
    step: "18",
    title: "Preprocessor Directives",
    points: [
      " 1. #include & #define",
      " 2. Macros",
      " 3. Conditional compilation",
    ],
    bg: "/c/bg18.jpg",
  },
  {
    step: "19",
    title: "Command Line Arguments",
    points: [" 1. argc & argv", " 2. Passing arguments", " 3. Use cases"],
    bg: "/c/bg19.jpg",
  },
  {
    step: "20",
    title: "Debugging & Best Practices",
    points: [
      " 1. Common errors in C",
      " 2. Debugging techniques",
      " 3. Writing efficient C programs",
    ],
    bg: "/c/bg20.jpg",
  },
];

const basicJavaScriptRoadmapData = [
  {
    step: "01",
    title: "Why Learn JavaScript?",
    points: [
      " 1. Language of the web",
      " 2. Runs in all modern browsers",
      " 3. Used for frontend, backend & mobile apps",
    ],
    bg: "/javascript/bg1.jpg",
  },
  {
    step: "02",
    title: "JavaScript History & Basics",
    points: [
      " 1. History of JavaScript",
      " 2. How JavaScript works in the browser",
      " 3. JavaScript engines overview",
    ],
    bg: "/javascript/bg2.jpg",
  },
  {
    step: "03",
    title: "Variables & Data Types",
    points: [
      " 1. var, let & const",
      " 2. Primitive & non-primitive data types",
      " 3. typeof operator",
    ],
    bg: "/javascript/bg3.jpg",
  },
  {
    step: "04",
    title: "Operators & Expressions",
    points: [
      " 1. Arithmetic & assignment operators",
      " 2. Comparison & logical operators",
      " 3. Ternary operator",
    ],
    bg: "/javascript/bg4.jpg",
  },
  {
    step: "05",
    title: "Control Flow Statements",
    points: [
      " 1. if, else if & switch",
      " 2. for, while & do-while loops",
      " 3. break & continue",
    ],
    bg: "/javascript/bg5.jpg",
  },
  {
    step: "06",
    title: "Functions in JavaScript",
    points: [
      " 1. Function declaration & expression",
      " 2. Arrow functions",
      " 3. Parameters & return values",
    ],
    bg: "/javascript/bg6.jpg",
  },
  {
    step: "07",
    title: "Arrays",
    points: [
      " 1. Creating & accessing arrays",
      " 2. Array methods (push, pop, map)",
      " 3. Iteration techniques",
    ],
    bg: "/javascript/bg7.jpg",
  },
  {
    step: "08",
    title: "Objects",
    points: [
      " 1. Object literals",
      " 2. Accessing object properties",
      " 3. Methods & this keyword",
    ],
    bg: "/javascript/bg8.jpg",
  },
  {
    step: "09",
    title: "Strings & Template Literals",
    points: [
      " 1. String methods",
      " 2. Template literals",
      " 3. String interpolation",
    ],
    bg: "/javascript/bg9.jpg",
  },
  {
    step: "10",
    title: "DOM Manipulation",
    points: [
      " 1. Selecting DOM elements",
      " 2. Modifying HTML & CSS",
      " 3. Event handling",
    ],
    bg: "/javascript/bg10.jpg",
  },
  {
    step: "11",
    title: "Events",
    points: [
      " 1. Mouse & keyboard events",
      " 2. Event listeners",
      " 3. Event bubbling & capturing",
    ],
    bg: "/javascript/bg11.jpg",
  },
  {
    step: "12",
    title: "Scope & Hoisting",
    points: [
      " 1. Global & local scope",
      " 2. Hoisting behavior",
      " 3. Block scope with let & const",
    ],
    bg: "/javascript/bg12.jpg",
  },
  {
    step: "13",
    title: "Closures",
    points: [
      " 1. Understanding closures",
      " 2. Practical use cases",
      " 3. Memory implications",
    ],
    bg: "/javascript/bg13.jpg",
  },
  {
    step: "14",
    title: "Asynchronous JavaScript",
    points: [" 1. Callbacks", " 2. Promises", " 3. async & await"],
    bg: "/javascript/bg14.jpg",
  },
  {
    step: "15",
    title: "Error Handling",
    points: [
      " 1. try, catch & finally",
      " 2. Custom errors",
      " 3. Debugging basics",
    ],
    bg: "/javascript/bg15.jpg",
  },
  {
    step: "16",
    title: "ES6+ Features",
    points: [
      " 1. Destructuring",
      " 2. Spread & rest operators",
      " 3. Modules (import/export)",
    ],
    bg: "/javascript/bg16.jpg",
  },
  {
    step: "17",
    title: "Working with JSON",
    points: [
      " 1. JSON format",
      " 2. JSON.parse() & JSON.stringify()",
      " 3. Data exchange basics",
    ],
    bg: "/javascript/bg17.jpg",
  },
  {
    step: "18",
    title: "Browser Storage",
    points: [" 1. localStorage", " 2. sessionStorage", " 3. Cookies overview"],
    bg: "/javascript/bg18.jpg",
  },
  {
    step: "19",
    title: "Basic Security Concepts",
    points: [
      " 1. XSS basics",
      " 2. Secure coding practices",
      " 3. Avoiding common vulnerabilities",
    ],
    bg: "/javascript/bg19.jpg",
  },
  {
    step: "20",
    title: "JavaScript Best Practices",
    points: [
      " 1. Clean & readable code",
      " 2. Performance tips",
      " 3. Real-world coding standards",
    ],
    bg: "/javascript/bg20.jpg",
  },
];

const htmlCssJsRoadmapData = [
  {
    step: "01",
    title: "Introduction to Web Fundamentals",
    points: [
      " 1. How the web works",
      " 2. What is HTML, CSS & JavaScript",
      " 3. Frontend developer role",
    ],
    bg: "/frontend/bg1.jpg",
  },
  {
    step: "02",
    title: "HTML Basics",
    points: [
      " 1. HTML document structure",
      " 2. Common tags & attributes",
      " 3. Headings, paragraphs & links",
    ],
    bg: "/frontend/bg2.jpg",
  },
  {
    step: "03",
    title: "HTML Forms & Media",
    points: [
      " 1. Forms & input elements",
      " 2. Images, audio & video",
      " 3. Tables & lists",
    ],
    bg: "/frontend/bg3.jpg",
  },
  {
    step: "04",
    title: "Semantic HTML",
    points: [
      " 1. Semantic elements",
      " 2. Accessibility basics",
      " 3. SEO-friendly structure",
    ],
    bg: "/frontend/bg4.jpg",
  },
  {
    step: "05",
    title: "CSS Basics",
    points: [
      " 1. CSS syntax & selectors",
      " 2. Colors, fonts & units",
      " 3. Styling text & elements",
    ],
    bg: "/frontend/bg5.jpg",
  },
  {
    step: "06",
    title: "CSS Box Model",
    points: [
      " 1. Margin, border & padding",
      " 2. Width & height",
      " 3. Box sizing",
    ],
    bg: "/frontend/bg6.jpg",
  },
  {
    step: "07",
    title: "CSS Layouts",
    points: [
      " 1. Display & position",
      " 2. Flexbox fundamentals",
      " 3. CSS Grid basics",
    ],
    bg: "/frontend/bg7.jpg",
  },
  {
    step: "08",
    title: "Responsive Design",
    points: [
      " 1. Media queries",
      " 2. Mobile-first design",
      " 3. Responsive units",
    ],
    bg: "/frontend/bg8.jpg",
  },
  {
    step: "09",
    title: "CSS Transitions & Animations",
    points: [
      " 1. Transitions",
      " 2. Keyframe animations",
      " 3. Transform properties",
    ],
    bg: "/frontend/bg9.jpg",
  },
  {
    step: "10",
    title: "JavaScript Basics",
    points: [
      " 1. Variables & data types",
      " 2. Operators & conditions",
      " 3. Loops",
    ],
    bg: "/frontend/bg10.jpg",
  },
  {
    step: "11",
    title: "JavaScript Functions",
    points: [
      " 1. Function declaration & expression",
      " 2. Arrow functions",
      " 3. Scope & hoisting",
    ],
    bg: "/frontend/bg11.jpg",
  },
  {
    step: "12",
    title: "Arrays & Objects",
    points: [
      " 1. Array methods",
      " 2. Objects & properties",
      " 3. Iteration techniques",
    ],
    bg: "/frontend/bg12.jpg",
  },
  {
    step: "13",
    title: "DOM Manipulation",
    points: [
      " 1. Selecting elements",
      " 2. Changing content & styles",
      " 3. Creating elements dynamically",
    ],
    bg: "/frontend/bg13.jpg",
  },
  {
    step: "14",
    title: "Events Handling",
    points: [
      " 1. Event listeners",
      " 2. Mouse & keyboard events",
      " 3. Event bubbling",
    ],
    bg: "/frontend/bg14.jpg",
  },
  {
    step: "15",
    title: "JavaScript ES6+ Features",
    points: [
      " 1. let & const",
      " 2. Destructuring",
      " 3. Spread & rest operators",
    ],
    bg: "/frontend/bg15.jpg",
  },
  {
    step: "16",
    title: "Asynchronous JavaScript",
    points: [" 1. Callbacks", " 2. Promises", " 3. async & await"],
    bg: "/frontend/bg16.jpg",
  },
  {
    step: "17",
    title: "Working with APIs",
    points: [" 1. Fetch API", " 2. JSON data handling", " 3. Error handling"],
    bg: "/frontend/bg17.jpg",
  },
  {
    step: "18",
    title: "Browser Storage",
    points: [
      " 1. LocalStorage",
      " 2. SessionStorage",
      " 3. Practical use cases",
    ],
    bg: "/frontend/bg18.jpg",
  },
  {
    step: "19",
    title: "Frontend Best Practices",
    points: [
      " 1. Clean code",
      " 2. Folder structure",
      " 3. Reusable components",
    ],
    bg: "/frontend/bg19.jpg",
  },
  {
    step: "20",
    title: "Mini Projects",
    points: [
      " 1. Responsive landing page",
      " 2. Interactive form",
      " 3. DOM-based app",
    ],
    bg: "/frontend/bg20.jpg",
  },
  {
    step: "21",
    title: "Real-World Projects",
    points: [
      " 1. Portfolio website",
      " 2. Weather app",
      " 3. To-do application",
    ],
    bg: "/frontend/bg21.jpg",
  },
  {
    step: "22",
    title: "Next Steps in Frontend",
    points: [
      " 1. Learn a frontend framework",
      " 2. Version control basics",
      " 3. Career roadmap",
    ],
    bg: "/frontend/bg22.jpg",
  },
];

const mernStackRoadmapData = [
  {
    step: "01",
    title: "Introduction to MERN Stack",
    points: [
      " 1. What is MERN stack",
      " 2. Full-stack web development overview",
      " 3. Role of MongoDB, Express, React & Node",
    ],
    bg: "/mern/bg1.jpg",
  },
  {
    step: "02",
    title: "Web Fundamentals Refresher",
    points: [
      " 1. HTML & CSS basics",
      " 2. JavaScript fundamentals",
      " 3. Client-server model",
    ],
    bg: "/mern/bg2.jpg",
  },
  {
    step: "03",
    title: "Advanced JavaScript",
    points: [
      " 1. ES6+ features",
      " 2. Closures & scope",
      " 3. Asynchronous JavaScript",
    ],
    bg: "/mern/bg3.jpg",
  },
  {
    step: "04",
    title: "Git & GitHub",
    points: [
      " 1. Version control basics",
      " 2. GitHub workflow",
      " 3. Collaboration best practices",
    ],
    bg: "/mern/bg4.jpg",
  },
  {
    step: "05",
    title: "React Fundamentals",
    points: [
      " 1. JSX & components",
      " 2. Props & state",
      " 3. React project structure",
    ],
    bg: "/mern/bg5.jpg",
  },
  {
    step: "06",
    title: "React Hooks & State Management",
    points: [
      " 1. useState & useEffect",
      " 2. Controlled components",
      " 3. Component lifecycle",
    ],
    bg: "/mern/bg6.jpg",
  },
  {
    step: "07",
    title: "Routing & Navigation",
    points: [" 1. React Router", " 2. Dynamic routes", " 3. Protected routes"],
    bg: "/mern/bg7.jpg",
  },
  {
    step: "08",
    title: "UI Styling & Responsiveness",
    points: [
      " 1. CSS frameworks",
      " 2. Responsive design",
      " 3. UI best practices",
    ],
    bg: "/mern/bg8.jpg",
  },
  {
    step: "09",
    title: "Node.js Basics",
    points: [" 1. Node.js runtime", " 2. Event loop", " 3. Modules & npm"],
    bg: "/mern/bg9.jpg",
  },
  {
    step: "10",
    title: "Express.js Fundamentals",
    points: [
      " 1. Express setup",
      " 2. Routing & middleware",
      " 3. Request & response lifecycle",
    ],
    bg: "/mern/bg10.jpg",
  },
  {
    step: "11",
    title: "REST API Development",
    points: [" 1. REST principles", " 2. CRUD operations", " 3. API testing"],
    bg: "/mern/bg11.jpg",
  },
  {
    step: "12",
    title: "MongoDB Basics",
    points: [
      " 1. NoSQL concepts",
      " 2. Collections & documents",
      " 3. MongoDB Compass",
    ],
    bg: "/mern/bg12.jpg",
  },
  {
    step: "13",
    title: "Mongoose & Data Modeling",
    points: [
      " 1. Schemas & models",
      " 2. Data validation",
      " 3. Relationships",
    ],
    bg: "/mern/bg13.jpg",
  },
  {
    step: "14",
    title: "Authentication & Authorization",
    points: [
      " 1. User authentication",
      " 2. JWT & cookies",
      " 3. Role-based access control",
    ],
    bg: "/mern/bg14.jpg",
  },
  {
    step: "15",
    title: "Connecting Frontend & Backend",
    points: [" 1. API integration", " 2. Axios & fetch", " 3. Error handling"],
    bg: "/mern/bg15.jpg",
  },
  {
    step: "16",
    title: "File Uploads & Media Handling",
    points: [
      " 1. Multer basics",
      " 2. Image uploads",
      " 3. Cloud storage overview",
    ],
    bg: "/mern/bg16.jpg",
  },
  {
    step: "17",
    title: "Application Security",
    points: [
      " 1. Input validation",
      " 2. Preventing common attacks",
      " 3. Secure API practices",
    ],
    bg: "/mern/bg17.jpg",
  },
  {
    step: "18",
    title: "Performance Optimization",
    points: [
      " 1. Backend optimization",
      " 2. Frontend performance",
      " 3. Caching strategies",
    ],
    bg: "/mern/bg18.jpg",
  },
  {
    step: "19",
    title: "Testing MERN Applications",
    points: [
      " 1. Unit testing basics",
      " 2. API testing",
      " 3. Debugging techniques",
    ],
    bg: "/mern/bg19.jpg",
  },
  {
    step: "20",
    title: "Deployment & DevOps Basics",
    points: [
      " 1. Environment variables",
      " 2. Hosting platforms",
      " 3. CI/CD overview",
    ],
    bg: "/mern/bg20.jpg",
  },
  {
    step: "21",
    title: "Real-World MERN Projects",
    points: [
      " 1. Full-stack CRUD app",
      " 2. Authentication-based app",
      " 3. Dashboard application",
    ],
    bg: "/mern/bg21.jpg",
  },
  {
    step: "22",
    title: "Career Preparation",
    points: [
      " 1. Portfolio building",
      " 2. Interview preparation",
      " 3. Freelancing & job roadmap",
    ],
    bg: "/mern/bg22.jpg",
  },
];

const dbmsRoadmapData = [
  {
    step: "01",
    title: "Introduction to DBMS",
    points: [
      " 1. What is a Database",
      " 2. DBMS vs File System",
      " 3. Advantages of DBMS",
    ],
    bg: "/dbms/bg1.jpg",
  },
  {
    step: "02",
    title: "Database Models",
    points: [
      " 1. Hierarchical, Network & Relational models",
      " 2. ER Model overview",
      " 3. Concepts of tables, rows, and columns",
    ],
    bg: "/dbms/bg2.jpg",
  },
  {
    step: "03",
    title: "Relational Database Concepts",
    points: [
      " 1. Keys: Primary, Foreign, Candidate",
      " 2. Integrity constraints",
      " 3. Normalization basics",
    ],
    bg: "/dbms/bg3.jpg",
  },
  {
    step: "04",
    title: "SQL Basics",
    points: [
      " 1. DDL, DML, DCL commands",
      " 2. Creating and managing tables",
      " 3. Basic SELECT queries",
    ],
    bg: "/dbms/bg4.jpg",
  },
  {
    step: "05",
    title: "Advanced SQL Queries",
    points: [
      " 1. Joins: INNER, LEFT, RIGHT, FULL",
      " 2. Aggregate functions",
      " 3. Subqueries & nested queries",
    ],
    bg: "/dbms/bg5.jpg",
  },
  {
    step: "06",
    title: "Indexing & Views",
    points: [
      " 1. Concept of indexing",
      " 2. Types of indexes",
      " 3. Views and virtual tables",
    ],
    bg: "/dbms/bg6.jpg",
  },
  {
    step: "07",
    title: "Normalization & Denormalization",
    points: [
      " 1. 1NF, 2NF, 3NF, BCNF",
      " 2. Advantages of normalization",
      " 3. Denormalization for performance",
    ],
    bg: "/dbms/bg7.jpg",
  },
  {
    step: "08",
    title: "Transactions & Concurrency",
    points: [
      " 1. ACID properties",
      " 2. Transaction states",
      " 3. Concurrency control & locking",
    ],
    bg: "/dbms/bg8.jpg",
  },
  {
    step: "09",
    title: "Database Security",
    points: [
      " 1. User roles & privileges",
      " 2. Authentication & authorization",
      " 3. SQL injection prevention",
    ],
    bg: "/dbms/bg9.jpg",
  },
  {
    step: "10",
    title: "Backup & Recovery",
    points: [
      " 1. Types of backups",
      " 2. Recovery techniques",
      " 3. Disaster recovery planning",
    ],
    bg: "/dbms/bg10.jpg",
  },
  {
    step: "11",
    title: "Stored Procedures & Triggers",
    points: [
      " 1. Writing stored procedures",
      " 2. Using triggers",
      " 3. Advantages and use cases",
    ],
    bg: "/dbms/bg11.jpg",
  },
  {
    step: "12",
    title: "NoSQL Databases Overview",
    points: [
      " 1. Differences from relational DBs",
      " 2. Types: Document, Key-Value, Columnar, Graph",
      " 3. Use cases for NoSQL",
    ],
    bg: "/dbms/bg12.jpg",
  },
  {
    step: "13",
    title: "DBMS Project & Practice",
    points: [
      " 1. Design ER diagrams",
      " 2. Implement a relational database",
      " 3. Run advanced queries & transactions",
    ],
    bg: "/dbms/bg13.jpg",
  },
];

const dsaRoadmapData = [
  {
    step: "01",
    title: "Introduction to DSA",
    points: [
      " 1. What is DSA",
      " 2. Importance in programming & interviews",
      " 3. Time and space complexity basics",
    ],
    bg: "/dsa/bg1.jpg",
  },
  {
    step: "02",
    title: "Mathematical Foundations",
    points: [
      " 1. Big O, Big Theta, Big Omega notations",
      " 2. Logarithms, summations, and series",
      " 3. Recurrence relations",
    ],
    bg: "/dsa/bg2.jpg",
  },
  {
    step: "03",
    title: "Arrays",
    points: [
      " 1. Basics & memory layout",
      " 2. Operations: insert, delete, search",
      " 3. Two pointers & sliding window technique",
    ],
    bg: "/dsa/bg3.jpg",
  },
  {
    step: "04",
    title: "Strings",
    points: [
      " 1. String operations",
      " 2. Pattern matching algorithms",
      " 3. Palindromes & substrings",
    ],
    bg: "/dsa/bg4.jpg",
  },
  {
    step: "05",
    title: "Linked Lists",
    points: [
      " 1. Singly & doubly linked lists",
      " 2. Circular linked lists",
      " 3. Operations & use cases",
    ],
    bg: "/dsa/bg5.jpg",
  },
  {
    step: "06",
    title: "Stacks & Queues",
    points: [
      " 1. Stack operations & applications",
      " 2. Queue types: normal, circular, priority",
      " 3. Deque & double-ended operations",
    ],
    bg: "/dsa/bg6.jpg",
  },
  {
    step: "07",
    title: "Recursion & Backtracking",
    points: [
      " 1. Recursive thinking",
      " 2. Base case & recursive case",
      " 3. Backtracking problems",
    ],
    bg: "/dsa/bg7.jpg",
  },
  {
    step: "08",
    title: "Hashing",
    points: [
      " 1. Hash tables & hash functions",
      " 2. Collision resolution techniques",
      " 3. Applications in problem solving",
    ],
    bg: "/dsa/bg8.jpg",
  },
  {
    step: "09",
    title: "Trees",
    points: [
      " 1. Binary trees & binary search trees",
      " 2. Tree traversals",
      " 3. Height, depth & balanced trees",
    ],
    bg: "/dsa/bg9.jpg",
  },
  {
    step: "10",
    title: "Heaps & Priority Queues",
    points: [
      " 1. Min heap & max heap",
      " 2. Heap operations",
      " 3. Applications in algorithms",
    ],
    bg: "/dsa/bg10.jpg",
  },
  {
    step: "11",
    title: "Graphs",
    points: [
      " 1. Graph representations (adjacency list/matrix)",
      " 2. BFS & DFS traversals",
      " 3. Weighted & unweighted graphs",
    ],
    bg: "/dsa/bg11.jpg",
  },
  {
    step: "12",
    title: "Graph Algorithms",
    points: [
      " 1. Dijkstra & Bellman-Ford",
      " 2. Minimum Spanning Tree (Kruskal & Prim)",
      " 3. Topological sorting",
    ],
    bg: "/dsa/bg12.jpg",
  },
  {
    step: "13",
    title: "Sorting Algorithms",
    points: [
      " 1. Bubble, Selection, Insertion",
      " 2. Merge Sort & Quick Sort",
      " 3. Heap Sort & Counting Sort",
    ],
    bg: "/dsa/bg13.jpg",
  },
  {
    step: "14",
    title: "Searching Algorithms",
    points: [
      " 1. Linear search",
      " 2. Binary search & variants",
      " 3. Search in rotated & sorted arrays",
    ],
    bg: "/dsa/bg14.jpg",
  },
  {
    step: "15",
    title: "Dynamic Programming",
    points: [
      " 1. DP basics & memoization",
      " 2. Classic problems (knapsack, LIS, etc.)",
      " 3. State optimization techniques",
    ],
    bg: "/dsa/bg15.jpg",
  },
  {
    step: "16",
    title: "Greedy Algorithms",
    points: [
      " 1. Greedy approach basics",
      " 2. Activity selection & coin change",
      " 3. Fractional vs 0/1 knapsack",
    ],
    bg: "/dsa/bg16.jpg",
  },
  {
    step: "17",
    title: "Advanced Data Structures",
    points: [
      " 1. Trie, Segment Tree, Fenwick Tree",
      " 2. Disjoint Set Union (DSU)",
      " 3. Applications in problem solving",
    ],
    bg: "/dsa/bg17.jpg",
  },
  {
    step: "18",
    title: "Problem Solving Techniques",
    points: [
      " 1. Two pointers & sliding window",
      " 2. Divide & conquer",
      " 3. Bit manipulation tricks",
    ],
    bg: "/dsa/bg18.jpg",
  },
  {
    step: "19",
    title: "Competitive Programming Practice",
    points: [
      " 1. Standard problem sets",
      " 2. Online judges & platforms",
      " 3. Optimizing for time & space",
    ],
    bg: "/dsa/bg19.jpg",
  },
  {
    step: "20",
    title: "DSA Project & Interview Prep",
    points: [
      " 1. Build algorithmic projects",
      " 2. Mock interviews & coding rounds",
      " 3. Tips for efficient problem solving",
    ],
    bg: "/dsa/bg20.jpg",
  },
];

const CourseRoadmapData = {
  cpp: roadmapData,
  corejava: coreJavaRoadmapData,
  pythonbasics: pythonRoadmapData,
  advancedjava: advanceJavaRoadmapData,
  basicc: basicCRoadmapData,
  basicjavascript: basicJavaScriptRoadmapData,
  htmlcssjs: htmlCssJsRoadmapData,
  mernstack: mernStackRoadmapData,
  dbms: dbmsRoadmapData,
  dsafoundations: dsaRoadmapData,
};

export default function MacBookAirShowcase() {
  const { course } = useParams();
  console.log("your course is :", course);
  let courseTitle = course || "cpp";

  const activeRoadmapData =
    CourseRoadmapData[courseTitle] || CourseRoadmapData.cpp;

  courseTitle =
    course === "cpp"
      ? "C++"
      : course === "corejava"
      ? "Core Java"
      : course === "pythonbasics"
      ? "Python Basics"
      : course === "advancedjava"
      ? "Advance Java"
      : course === "basicc"
      ? "C Programming"
      : course === "basicjavascript"
      ? "Basic JavaScript"
      : course === "htmlcssjs"
      ? "HTML, CSS & JavaScript"
      : course === "mernstack"
      ? "MERN Stack"
      : course === "dbms"
      ? "DBMS"
      : course === "dsafoundations"
      ? "DSA Foundation"
      : "C++";

  return (
    <div className="bg-white text-gray-900 overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center bg-black">
        {/* BACKGROUND VIDEO */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="/large_2x.mp4"
          autoPlay
          muted
          playsInline
          preload="metadata"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#fa4b37]/[0.9] to-[#df2771]/[0.9] z-5" />

        {/* CONTENT */}
        <div className="relative z-10 px-6 lg:text-center lg:px-14">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7 }}
          >
            Learn {courseTitle}: Introduction
          </motion.h1>

          <motion.p
            className="mt-4 text-base lg:px-[20%] sm:text-lg md:text-xl text-gray-100 font-medium"
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            {courseTitle} is a general purpose programming language and widely
            used now a days for competitive programming. It has imperative,
            object-oriented and generic programming features.
          </motion.p>
        </div>
      </section>

      {/* NEW COURSE ROADMAP SECTION (Roadmap.sh Style) */}
      <section className="py-24 px-4 sm:px-6 bg-[#f8f9fa] relative">
        <div className="max-w-7xl mx-auto mb-16 text-center">
          <span className="text-purple-600 font-bold tracking-wider text-sm uppercase">
            Curriculum
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">
            {courseTitle} Developer Path
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Step by step guide to becoming a {courseTitle} developer in 2025.
            Follow the yellow brick road to mastery.
          </p>

          {/* Legend similar to image */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-gradient-to-br bg-gradient-to-r from-[#fa4b37] to-[#df2771] border border-black"></div>
              <span>Core Topic</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-purple-100 border border-gray-400"></div>
              <span>Sub-concept</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full border border-dashed border-blue-400"></div>
              <span>Learning Flow</span>
            </div>
          </div>
        </div>

        <Roadmap data={activeRoadmapData} />
      </section>

      {/* FEATURES
      <section className="py-24 px-6 bg-white">
        <motion.h2
          className="text-4xl font-bold text-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Engineered for Performance & Control
        </motion.h2>

        <motion.div
          className="mt-12 max-w-5xl mx-auto grid gap-10 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
        >
          {[
            {
              title: "Object-Oriented Power",
              desc: "Build scalable systems using classes, inheritance, polymorphism, and abstraction.",
            },
            {
              title: "Low-Level Memory Control",
              desc: "Fine-grained control using pointers, stack/heap allocation, and custom memory management.",
            },
            {
              title: "STL & Modern C++",
              desc: "Rich Standard Template Library with containers, algorithms, lambdas, and smart pointers.",
            },
          ].map((feat, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="text-center p-6 rounded-2xl hover:bg-gray-50 transition duration-300"
            >
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                {feat.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{feat.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section> */}
    </div>
  );
}
