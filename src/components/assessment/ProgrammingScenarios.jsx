import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Clock } from 'lucide-react';

const ProgrammingScenarios = ({ onNext, onBack, data }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState(data || {});

  const questions = [
    {
      id: 1,
      scenario: "You're learning about memory management in C++. You need to understand how pointers work and how to avoid memory leaks. What would help you most?",
      options: [
        { text: "Visual diagrams showing memory layout and pointer relationships", style: "Visual" },
        { text: "A step-by-step audio explanation of pointer concepts", style: "Auditory" },
        { text: "Detailed written explanations with code examples", style: "Reading" },
        { text: "Hands-on practice writing and debugging pointer code", style: "Kinesthetic" }
      ]
    },
    {
      id: 2,
      scenario: "You're trying to understand recursion. The concept of a function calling itself seems confusing. How do you want to learn it?",
      options: [
        { text: "Animated visualizations showing the call stack and how recursion unfolds", style: "Visual" },
        { text: "Someone explaining recursion with real-world analogies", style: "Auditory" },
        { text: "Reading recursive function examples with detailed comments", style: "Reading" },
        { text: "Implementing recursive functions and tracing through them manually", style: "Kinesthetic" }
      ]
    },
    {
      id: 3,
      scenario: "You need to learn about database design and SQL queries. The relationships between tables are complex. What's your preferred approach?",
      options: [
        { text: "Entity-relationship diagrams and visual schema representations", style: "Visual" },
        { text: "Lectures explaining database concepts and query logic", style: "Auditory" },
        { text: "SQL documentation and written query examples", style: "Reading" },
        { text: "Creating your own database and experimenting with queries", style: "Kinesthetic" }
      ]
    },
    {
      id: 4,
      scenario: "You're learning about algorithms and data structures. Big O notation and complexity analysis seem abstract. How do you want to approach this?",
      options: [
        { text: "Graphs and charts showing how different algorithms perform", style: "Visual" },
        { text: "Explanations of why complexity matters in real applications", style: "Auditory" },
        { text: "Mathematical definitions and formal proofs", style: "Reading" },
        { text: "Implementing algorithms and measuring their actual performance", style: "Kinesthetic" }
      ]
    },
    {
      id: 5,
      scenario: "You want to learn about version control with Git. Branching, merging, and conflict resolution seem complicated. What's your learning preference?",
      options: [
        { text: "Visual Git clients showing branch structures and commit history", style: "Visual" },
        { text: "Tutorials explaining Git workflows and best practices", style: "Auditory" },
        { text: "Git documentation and command references", style: "Reading" },
        { text: "Setting up a repository and practicing Git commands", style: "Kinesthetic" }
      ]
    },
    {
      id: 6,
      scenario: "You're studying object-oriented programming concepts like inheritance, polymorphism, and encapsulation. These abstract concepts are challenging. How do you learn best?",
      options: [
        { text: "Class diagrams and visual representations of relationships", style: "Visual" },
        { text: "Discussions about real-world applications of OOP concepts", style: "Auditory" },
        { text: "Detailed explanations in textbooks and articles", style: "Reading" },
        { text: "Building class hierarchies and implementing OOP patterns", style: "Kinesthetic" }
      ]
    },
    {
      id: 7,
      scenario: "You need to understand network programming and how HTTP requests work. The client-server model and protocols seem complex. What's your approach?",
      options: [
        { text: "Network diagrams and protocol flow visualizations", style: "Visual" },
        { text: "Explanations of how network communication works", style: "Auditory" },
        { text: "RFC documents and protocol specifications", style: "Reading" },
        { text: "Writing client-server programs and testing network calls", style: "Kinesthetic" }
      ]
    },
    {
      id: 8,
      scenario: "You're learning about concurrent programming and threads. Race conditions and synchronization are difficult concepts. How do you want to tackle this?",
      options: [
        { text: "Timeline diagrams showing thread execution and synchronization", style: "Visual" },
        { text: "Lectures on concurrency problems and solutions", style: "Auditory" },
        { text: "Academic papers and detailed technical explanations", style: "Reading" },
        { text: "Writing multithreaded programs and debugging concurrency issues", style: "Kinesthetic" }
      ]
    },
    {
      id: 9,
      scenario: "You want to learn about testing and debugging techniques. Writing unit tests and using debuggers effectively is new to you. What's your preferred method?",
      options: [
        { text: "Screenshots and videos showing debugging workflows", style: "Visual" },
        { text: "Tutorials on testing strategies and debugging techniques", style: "Auditory" },
        { text: "Testing frameworks documentation and best practices", style: "Reading" },
        { text: "Writing tests and using debuggers on real code", style: "Kinesthetic" }
      ]
    },
    {
      id: 10,
      scenario: "You're studying software architecture patterns like MVC, MVVM, and microservices. These high-level concepts are abstract. How do you learn them?",
      options: [
        { text: "Architecture diagrams and system design visualizations", style: "Visual" },
        { text: "Discussions about architectural decisions and trade-offs", style: "Auditory" },
        { text: "Architecture books and design pattern catalogs", style: "Reading" },
        { text: "Building applications using different architectural patterns", style: "Kinesthetic" }
      ]
    },
    {
      id: 11,
      scenario: "You need to understand cryptography and security concepts. Hashing, encryption, and digital signatures seem complex. What's your learning approach?",
      options: [
        { text: "Visual representations of encryption algorithms and security flows", style: "Visual" },
        { text: "Explanations of security concepts and real-world applications", style: "Auditory" },
        { text: "Cryptography papers and security standards documentation", style: "Reading" },
        { text: "Implementing basic encryption algorithms and security tools", style: "Kinesthetic" }
      ]
    },
    {
      id: 12,
      scenario: "You're learning about performance optimization and profiling. Finding bottlenecks and improving code efficiency is challenging. How do you approach this?",
      options: [
        { text: "Performance graphs and profiling tool visualizations", style: "Visual" },
        { text: "Lectures on optimization techniques and performance analysis", style: "Auditory" },
        { text: "Performance optimization guides and technical articles", style: "Reading" },
        { text: "Profiling real applications and optimizing performance bottlenecks", style: "Kinesthetic" }
      ]
    },
    {
      id: 13,
      scenario: "You want to learn about cloud computing and deployment. Docker, Kubernetes, and cloud platforms seem overwhelming. What's your preferred way to learn?",
      options: [
        { text: "Architecture diagrams of cloud systems and container orchestration", style: "Visual" },
        { text: "Tutorials on cloud concepts and deployment strategies", style: "Auditory" },
        { text: "Cloud documentation and platform-specific guides", style: "Reading" },
        { text: "Setting up cloud environments and deploying applications", style: "Kinesthetic" }
      ]
    },
    {
      id: 14,
      scenario: "You're studying machine learning concepts. Neural networks, training algorithms, and model evaluation are complex topics. How do you want to learn them?",
      options: [
        { text: "Neural network diagrams and algorithm flowcharts", style: "Visual" },
        { text: "Explanations of ML concepts and algorithm intuition", style: "Auditory" },
        { text: "ML research papers and mathematical derivations", style: "Reading" },
        { text: "Implementing ML algorithms and training models", style: "Kinesthetic" }
      ]
    },
    {
      id: 15,
      scenario: "You need to understand API design and RESTful services. HTTP methods, status codes, and API documentation seem confusing. What's your approach?",
      options: [
        { text: "API flow diagrams and request/response visualizations", style: "Visual" },
        { text: "Tutorials on API design principles and best practices", style: "Auditory" },
        { text: "API specification documents and design guidelines", style: "Reading" },
        { text: "Designing and implementing your own REST APIs", style: "Kinesthetic" }
      ]
    },
    {
      id: 16,
      scenario: "You're learning about cybersecurity and ethical hacking. Penetration testing and vulnerability assessment are new concepts. How do you learn best?",
      options: [
        { text: "Network diagrams and attack flow visualizations", style: "Visual" },
        { text: "Lectures on security principles and attack methodologies", style: "Auditory" },
        { text: "Security research papers and vulnerability databases", style: "Reading" },
        { text: "Setting up vulnerable systems and practicing security testing", style: "Kinesthetic" }
      ]
    },
    {
      id: 17,
      scenario: "You want to learn about mobile app development. UI/UX design, platform-specific APIs, and app store deployment seem complex. What's your preferred method?",
      options: [
        { text: "App wireframes, UI mockups, and design system visualizations", style: "Visual" },
        { text: "Tutorials on mobile development workflows and best practices", style: "Auditory" },
        { text: "Platform documentation and development guides", style: "Reading" },
        { text: "Building mobile apps and iterating on designs", style: "Kinesthetic" }
      ]
    },
    {
      id: 18,
      scenario: "You're studying game development concepts. Physics engines, rendering pipelines, and game loops are challenging topics. How do you approach learning them?",
      options: [
        { text: "Game engine architecture diagrams and rendering flowcharts", style: "Visual" },
        { text: "Lectures on game development techniques and engine design", style: "Auditory" },
        { text: "Game development books and technical documentation", style: "Reading" },
        { text: "Building simple games and experimenting with game mechanics", style: "Kinesthetic" }
      ]
    },
    {
      id: 19,
      scenario: "You need to understand DevOps practices. CI/CD pipelines, infrastructure as code, and monitoring seem overwhelming. What's your learning preference?",
      options: [
        { text: "Pipeline diagrams and infrastructure architecture visualizations", style: "Visual" },
        { text: "Tutorials on DevOps workflows and automation strategies", style: "Auditory" },
        { text: "DevOps documentation and tool references", style: "Reading" },
        { text: "Setting up CI/CD pipelines and automating deployments", style: "Kinesthetic" }
      ]
    },
    {
      id: 20,
      scenario: "You're learning about blockchain and cryptocurrency development. Smart contracts, consensus algorithms, and decentralized systems are complex. How do you want to learn?",
      options: [
        { text: "Blockchain network diagrams and transaction flow visualizations", style: "Visual" },
        { text: "Explanations of blockchain concepts and cryptocurrency systems", style: "Auditory" },
        { text: "Blockchain whitepapers and technical specifications", style: "Reading" },
        { text: "Building smart contracts and interacting with blockchain networks", style: "Kinesthetic" }
      ]
    }
  ];

  const handleOptionSelect = (optionIndex) => {
    const selectedOption = questions[currentQuestion].options[optionIndex];
    setResponses({
      ...responses,
      [currentQuestion + 1]: optionIndex + 1 // Store 1-4 for Visual, Auditory, Reading, Kinesthetic
    });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      onNext(responses);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    } else {
      onBack();
    }
  };

  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const selectedOption = responses[currentQuestion + 1];

  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2 gradient-text">Programming Scenarios</h2>
        <p className="text-gray-300 mb-4">
          Part 2 of 5: Programming-specific learning preferences
        </p>
        <div className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-4">
          <Clock className="w-4 h-4" />
          <span>~10-12 minutes</span>
        </div>
        <div className="w-full bg-slate-700 rounded-full h-2">
          <motion.div
            className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <p className="text-sm text-gray-400 mt-2">
          Scenario {currentQuestion + 1} of {questions.length}
        </p>
      </div>

      <motion.div
        key={currentQuestion}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
        className="mb-8"
      >
        <div className="bg-slate-700/30 rounded-lg p-6 mb-6">
          <p className="text-lg text-white mb-6">{currentQ.scenario}</p>
          <div className="space-y-3">
            {currentQ.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionSelect(index)}
                className={`w-full text-left p-4 rounded-lg border transition-all ${
                  selectedOption === index + 1
                    ? 'border-purple-500 bg-purple-500/20 text-purple-300'
                    : 'border-slate-600 hover:border-slate-500 text-gray-300 hover:bg-slate-700/30'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-4 h-4 rounded-full border-2 mt-0.5 flex-shrink-0 ${
                    selectedOption === index + 1
                      ? 'border-purple-500 bg-purple-500'
                      : 'border-slate-500'
                  }`}>
                    {selectedOption === index + 1 && (
                      <div className="w-2 h-2 bg-white rounded-full m-0.5" />
                    )}
                  </div>
                  <span className="text-sm">{option.text}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="flex justify-between">
        <Button
          onClick={handlePrevious}
          variant="outline"
          className="flex items-center gap-2"
        >
          <ChevronLeft className="w-4 h-4" />
          Previous
        </Button>

        <Button
          onClick={handleNext}
          disabled={!selectedOption}
          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 flex items-center gap-2"
        >
          {currentQuestion === questions.length - 1 ? 'Complete Scenarios' : 'Next'}
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default ProgrammingScenarios;
