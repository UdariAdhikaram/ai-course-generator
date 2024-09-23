/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
    export const GenerateCourseLayout_AI = model.startChat({
      generationConfig,
   // safetySettings: Adjust safety settings
   // See https://ai.google.dev/gemini-api/docs/safety-settings
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate A Course Tutorial on Following Detail with field as Course Name, Description, Along with Chapter Name, about, Duration: Category: 'Programming', Topic: Python, LevelBasic, Duration: 1 hours, Noof Chapters:5, in Json format"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"courseName\": \"Python Programming for Beginners\",\n  \"description\": \"This course provides a comprehensive introduction to Python programming, covering the fundamental concepts and essential tools needed to start writing your own programs. It's designed for absolute beginners with no prior coding experience.\",\n  \"chapters\": [\n    {\n      \"name\": \"Introduction to Python\",\n      \"about\": \"This chapter will introduce you to Python, its history, and why it's a popular programming language. We will discuss the basic syntax, data types, and operators.\",\n      \"duration\": \"30 minutes\"\n    },\n    {\n      \"name\": \"Variables and Data Types\",\n      \"about\": \"Learn about different data types in Python, including integers, floats, strings, and booleans. We'll cover how to declare variables and assign values to them.\",\n      \"duration\": \"20 minutes\"\n    },\n    {\n      \"name\": \"Operators and Expressions\",\n      \"about\": \"This chapter explores various operators in Python, such as arithmetic, comparison, and logical operators. You'll learn how to construct expressions and evaluate their results.\",\n      \"duration\": \"15 minutes\"\n    },\n    {\n      \"name\": \"Control Flow and Looping\",\n      \"about\": \"Learn about conditional statements (if-else) and loops (for and while) to control the flow of your programs. We'll demonstrate how to write code that makes decisions and repeats actions.\",\n      \"duration\": \"10 minutes\"\n    },\n    {\n      \"name\": \"Functions and Modules\",\n      \"about\": \"This chapter introduces you to functions, which are reusable blocks of code. We will discuss how to define, call, and use functions to organize your programs. Additionally, you'll learn about modules and how to import external libraries for advanced functionalities.\",\n      \"duration\": \"15 minutes\"\n    }\n  ],\n  \"category\": \"Programming\",\n  \"topic\": \"Python\",\n  \"level\": \"Basic\",\n  \"duration\": \"1 hour\",\n  \"noOfChapters\": 5\n}\n```\n"},
          ],
        },
      ],
    });
  
    //const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    //console.log(result.response.text());
 