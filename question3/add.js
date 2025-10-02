// Question 3 - COMP3123 Lab Test 1
// Student ID: 101515982

const fs = require("fs");
const path = require("path");

// Save the original working directory
const originalDirectory = process.cwd();

// Build the path to Logs directory using current working directory
const logsDirectory = path.join(originalDirectory, "Logs");

// Create Logs directory if it doesn't exist
if (!fs.existsSync(logsDirectory)) {
  fs.mkdirSync(logsDirectory);
  console.log("Logs directory created");
}

// Change current working directory to Logs
process.chdir(logsDirectory);

// Create 10 log files with content
for (let fileIndex = 0; fileIndex < 10; fileIndex++) {
  const logFileName = `log${fileIndex}.txt`;
  const fileContent = `This is log file number ${fileIndex}\nGenerated for COMP3123 Lab Test\nTimestamp: ${new Date().toISOString()}`;

  fs.writeFileSync(logFileName, fileContent);
  console.log(logFileName);
}

// Change back to original directory
process.chdir(originalDirectory);
