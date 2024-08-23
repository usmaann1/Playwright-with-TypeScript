# Introduction 
This project focuses on automating the Juice Mind web app using Playwright for end-to-end testing.

# Prerequisites
1.	VS Code
2.	Node.js
3.	git
4. Playwright (Extension From VS Code)

# Build and Test
After cloning the project, run the following command to install dependencies:
- npm install
- npx playwright install

# Running the Project

- Running All Tests
To execute all tests, run the following command:
    • npx playwright test

- Running All Tests on SIngle Worker
To execute all tests with 1 worker, run the following command:
    • npx playwright test --workers 1

- Running a Single Test
To execute a specific test, use:
   • npx playwright test --grep "test name"

- Running Tests in a Specific File
To run all tests within a specific file, use:
   • npx playwright test path/to/test/file.spec.ts

- Running a Specific Test File and Test
To run a specific test within a specific file, use:
	•	npx playwright test path/to/test/file.spec.ts --grep "test name"
