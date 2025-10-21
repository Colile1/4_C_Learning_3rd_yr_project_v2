export const lessons = [
  {
    id: 1,
    title: "Introduction to C++",
    description: "Learn the basics of C++ programming language, its history, and fundamental concepts.",
    difficulty: "Beginner",
    duration: "45 minutes",
    topics: ["History of C++", "Basic syntax", "Hello World program", "Compilation process"],
    videoUrl: "https://youtu.be/MNeX4EGtR5Y?si=kVk7IU0qlhYUDrBg", //"https://www.youtube.com/embed/placeholder1",
    realWorldUse: "C++ is used in system programming, game development, embedded systems, and high-performance applications like web browsers and operating systems.",
    quiz: [
      {
        question: "Who created the C++ programming language?",
        options: ["Dennis Ritchie", "Bjarne Stroustrup", "James Gosling", "Guido van Rossum"],
        correct: 1
      },
      {
        question: "What file extension is commonly used for C++ source files?",
        options: [".c", ".cpp", ".java", ".py"],
        correct: 1
      },
      {
        question: "Which symbol is used to include header files in C++?",
        options: ["@", "#", "$", "&"],
        correct: 1
      }
    ],
    practiceCode: `#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    return 0;
}`,
    codeExplanation: "This is a basic C++ program that outputs 'Hello, World!' to the console. The #include directive includes the iostream library for input/output operations.",
    practiceChallenges: [
      {
        title: "Modify the output",
        description: "Change the program to print 'Hello, C++!' instead of 'Hello, World!'."
      },
      {
        title: "Add another line",
        description: "Add a second `cout` statement to print 'I am learning C++.' on a new line."
      }
    ],
    interactiveDemo: {
      type: 'slider',
      label: 'Number of greetings:',
      min: 1,
      max: 10,
      codeTemplate: (value) => `#include <iostream>
using namespace std;

int main() {
    for(int i = 0; i < ${value}; ++i) {
        cout << "Hello, C++!" << endl;
    }
    return 0;
}`
    },
    codeMatching: [
      { code: "`#include <iostream>`", description: "Includes the input/output stream library." },
      { code: "`int main() { ... }`", description: "The main function where program execution begins." },
      { code: "`cout << ...;`", description: "Outputs text to the console." },
      { code: "`return 0;`", description: "Indicates that the program has executed successfully." }
    ],
    syntaxPuzzle: {
      lines: [
        { id: 'line-1', content: `#include <iostream>` },
        { id: 'line-2', content: `using namespace std;` },
        { id: 'line-3', content: `int main() {` },
        { id: 'line-4', content: `    cout << "Hello, Puzzle!" << endl;` },
        { id: 'line-5', content: `    return 0;` },
        { id: 'line-6', content: `}` }
      ],
      correctOrder: ['line-1', 'line-2', 'line-3', 'line-4', 'line-5', 'line-6']
    },
    codeChallenge: {
      title: "ASCII Art",
      description: "Write a C++ program that uses `cout` statements to print a simple ASCII art of a smiley face `:)` to the console."
    }
  },
  {
    id: 2,
    title: "Variables and Data Types",
    description: "Understand different data types in C++ and how to declare and use variables effectively.",
    difficulty: "Beginner",
    duration: "60 minutes",
    topics: ["Primitive data types", "Variable declaration", "Type casting", "Constants"],
    videoUrl: "https://youtu.be/tGG5KmRWDrg",
    realWorldUse: "Variables and data types are fundamental in all programming applications, from simple calculators to complex database systems and scientific simulations.",
    quiz: [
      {
        question: "Which data type is used to store whole numbers in C++?",
        options: ["float", "char", "int", "string"],
        correct: 2
      },
      {
        question: "What is the size of an int data type on most modern systems?",
        options: ["2 bytes", "4 bytes", "8 bytes", "16 bytes"],
        correct: 1
      },
      {
        question: "Which keyword is used to declare a constant in C++?",
        options: ["final", "const", "static", "readonly"],
        correct: 1
      }
    ],
    practiceCode: `#include <iostream>
using namespace std;

int main() {
    int age = 25;
    float height = 5.9;
    char grade = 'A';
    bool isStudent = true;
    
    cout << "Age: " << age << endl;
    cout << "Height: " << height << endl;
    cout << "Grade: " << grade << endl;
    cout << "Is Student: " << isStudent << endl;
    
    return 0;
}`,
    codeExplanation: "This program demonstrates different data types in C++: int for integers, float for decimal numbers, char for single characters, and bool for true/false values.",
    practiceChallenges: [
      {
        title: "Declare a new variable",
        description: "Declare a `double` variable named `pi` and assign it the value `3.14159`."
      },
      {
        title: "Print the new variable",
        description: "Add a `cout` statement to print the value of the `pi` variable."
      }
    ],
    interactiveDemo: {
      type: 'slider',
      label: 'Your Age:',
      min: 1,
      max: 100,
      codeTemplate: (value) => `#include <iostream>
using namespace std;

int main() {
    int age = ${value};
    cout << "You are " << age << " years old." << endl;
    if (age >= 18) {
        cout << "You are an adult." << endl;
    } else {
        cout << "You are a minor." << endl;
    }
    return 0;
}`
    },
    codeMatching: [
      { code: "`int age = 25;`", description: "Declares an integer variable." },
      { code: "`float height = 5.9;`", description: "Declares a floating-point variable." },
      { code: "`char grade = 'A';`", description: "Declares a character variable." },
      { code: "`bool isStudent = true;`", description: "Declares a boolean variable." }
    ],
    syntaxPuzzle: {
      lines: [
        { id: 'line-1', content: `#include <iostream>` },
        { id: 'line-2', content: `using namespace std;` },
        { id: 'line-3', content: `int main() {` },
        { id: 'line-4', content: `    int number = 10;` },
        { id: 'line-5', content: `    cout << "The number is: " << number << endl;` },
        { id: 'line-6', content: `    return 0;` },
        { id: 'line-7', content: `}` }
      ],
      correctOrder: ['line-1', 'line-2', 'line-3', 'line-4', 'line-5', 'line-6', 'line-7']
    },
    codeChallenge: {
      title: "Simple Calculator",
      description: "Declare two integer variables, `a` and `b`, assign them values, and then print their sum, difference, and product."
    }
  },
  {
    id: 3,
    title: "Control Structures - Conditionals",
    description: "Master if-else statements, switch cases, and logical operators for decision making in programs.",
    difficulty: "Beginner",
    duration: "75 minutes",
    topics: ["if-else statements", "switch-case", "Logical operators", "Nested conditions"],
    videoUrl: "https://www.youtube.com/embed/placeholder3",
    realWorldUse: "Conditional statements are essential in all software applications for decision-making, from user authentication systems to game logic and automated systems.",
    quiz: [
      {
        question: "Which operator is used for logical AND in C++?",
        options: ["&", "&&", "and", "AND"],
        correct: 1
      },
      {
        question: "What happens if no case matches in a switch statement without a default case?",
        options: ["Compilation error", "Runtime error", "Nothing happens", "First case executes"],
        correct: 2
      },
      {
        question: "Which statement is used to exit from a switch case?",
        options: ["exit", "break", "continue", "return"],
        correct: 1
      }
    ],
    practiceCode: `#include <iostream>
using namespace std;

int main() {
    int score = 85;
    char grade;
    
    if (score >= 90) {
        grade = 'A';
    } else if (score >= 80) {
        grade = 'B';
    } else if (score >= 70) {
        grade = 'C';
    } else {
        grade = 'F';
    }
    
    cout << "Score: " << score << ", Grade: " << grade << endl;
    
    return 0;
}`,
    codeExplanation: "This program uses if-else statements to assign letter grades based on numeric scores, demonstrating conditional logic and decision-making in C++.",
    practiceChallenges: [],
    interactiveDemo: null,
    codeMatching: [],
    syntaxPuzzle: null,
    codeChallenge: null
  },
  {
    id: 4,
    title: "Loops and Iteration",
    description: "Learn about for loops, while loops, and do-while loops for repetitive tasks and iterations.",
    difficulty: "Beginner",
    duration: "80 minutes",
    topics: ["for loops", "while loops", "do-while loops", "Loop control statements"],
    videoUrl: "https://www.youtube.com/embed/placeholder4",
    realWorldUse: "Loops are crucial in data processing, user interfaces, game loops, server applications, and any scenario requiring repetitive operations or data iteration.",
    quiz: [
      {
        question: "Which loop executes at least once regardless of the condition?",
        options: ["for loop", "while loop", "do-while loop", "foreach loop"],
        correct: 2
      },
      {
        question: "What statement is used to skip the current iteration of a loop?",
        options: ["break", "continue", "skip", "next"],
        correct: 1
      },
      {
        question: "In a for loop, which part is executed first?",
        options: ["condition", "initialization", "increment", "body"],
        correct: 1
      }
    ],
    practiceCode: `#include <iostream>
using namespace std;

int main() {
    // For loop example
    cout << "Counting from 1 to 5:" << endl;
    for (int i = 1; i <= 5; i++) {
        cout << i << " ";
    }
    cout << endl;
    
    // While loop example
    cout << "Countdown from 5:" << endl;
    int count = 5;
    while (count > 0) {
        cout << count << " ";
        count--;
    }
    cout << endl;
    
    return 0;
}`,
    codeExplanation: "This program demonstrates both for and while loops. The for loop counts up from 1 to 5, while the while loop counts down from 5 to 1.",
    practiceChallenges: [],
    interactiveDemo: null,
    codeMatching: [],
    syntaxPuzzle: null,
    codeChallenge: null
  },
  {
    id: 5,
    title: "Functions and Modular Programming",
    description: "Understand how to create reusable code with functions, parameters, return values, and scope.",
    difficulty: "Intermediate",
    duration: "90 minutes",
    topics: ["Function declaration", "Parameters and arguments", "Return values", "Function overloading", "Scope"],
    videoUrl: "https://www.youtube.com/embed/placeholder5",
    realWorldUse: "Functions are the building blocks of modular programming, essential in software architecture, API development, code reusability, and maintaining large codebases.",
    quiz: [
      {
        question: "What is the return type of a function that doesn't return any value?",
        options: ["int", "void", "null", "empty"],
        correct: 1
      },
      {
        question: "What is function overloading?",
        options: ["Calling too many functions", "Having multiple functions with the same name but different parameters", "A function that calls itself", "A function with too many parameters"],
        correct: 1
      },
      {
        question: "Where are local variables accessible?",
        options: ["Throughout the entire program", "Only within the function they are declared", "In all functions of the same class", "Globally"],
        correct: 1
      }
    ],
    practiceCode: `#include <iostream>
using namespace std;

// Function to calculate area of rectangle
int calculateArea(int length, int width) {
    return length * width;
}

// Function to greet user
void greetUser(string name) {
    cout << "Hello, " << name << "!" << endl;
}

int main() {
    string userName = "Alice";
    int length = 10, width = 5;
    
    greetUser(userName);
    
    int area = calculateArea(length, width);
    cout << "Area of rectangle: " << area << endl;
    
    return 0;
}`,
    codeExplanation: "This program demonstrates function creation and usage. It includes a function that returns a value (calculateArea) and a void function (greetUser) that performs an action without returning a value.",
    practiceChallenges: [],
    interactiveDemo: null,
    codeMatching: [],
    syntaxPuzzle: null,
    codeChallenge: null
  }
];

export const learningPaths = [
  {
    id: "visual",
    name: "Visual Learner",
    description: "Learn through diagrams, flowcharts, and visual representations",
    icon: "👁️",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: "hands-on",
    name: "Hands-On Learner",
    description: "Learn by doing with interactive coding exercises and projects",
    icon: "🛠️",
    color: "from-green-500 to-emerald-500"
  },
  {
    id: "theoretical",
    name: "Theoretical Learner",
    description: "Deep dive into concepts with detailed explanations and theory",
    icon: "📚",
    color: "from-purple-500 to-violet-500"
  },
  {
    id: "interactive",
    name: "Interactive Learner",
    description: "Engage with quizzes, games, and interactive content",
    icon: "🎮",
    color: "from-orange-500 to-red-500"
  }
];