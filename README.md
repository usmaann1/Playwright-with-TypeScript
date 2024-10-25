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

- Running All Tests on Single Worker
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

# Localhost run
Files to edit:

1. `test-environment/test-assets/global-setup.js`

-`await page.goto("https://play.juicemind.com/login")`

+`await page.goto("http://localhost:5173/login")`

2. `playwright.config.js`

-`baseURL: "https://play.juicemind.com/",`

+`baseURL: "http://localhost:5173/"`

# RUN failed TESTS on Local machine

1. Download the "failed-test-titles" file from the workflow.
2. Open the downloaded folder and Open Failed test text file.
3. Copy all data from the file.
4. Open project in Visual code.
5. Expand "failed-test-cases" folder.
6. Paste copied data from "failed-test-titles" into string.txt file.
7. Run this command in terminal "node failed-test-cases/conversion.js".
8. Open output.json file and copy the array from this file.
9. Now open "failed-test-cases.js" and paste the array you copied earlier into this file by selecting "[]" these brackets.
10. Run "npx playwright test" command in the terminal.
11. Once all test cases gets executed, open the playwright report.
