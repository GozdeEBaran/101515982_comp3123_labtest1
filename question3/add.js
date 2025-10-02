// Question 3 - COMP3123 Lab Test 1
// Student ID: 101515982

const fs = require("fs");
const path = require("path");

// Save original directory
const originalDirectory = process.cwd();

// path to Logs directory
const logsDirectory = path.join(originalDirectory, "Logs");

// if it doesn't exist
if (!fs.existsSync(logsDirectory)) {
  fs.mkdirSync(logsDirectory);
  console.log("Logs directory created");
}

process.chdir(logsDirectory);

// 10 log files with content
for (let fileIndex = 0; fileIndex < 10; fileIndex++) {
  const logFileName = `log${fileIndex}.txt`;
  const fileContent = `This is log file number ${fileIndex}\nGenerated for COMP3123 Lab Test\nTimestamp: ${new Date().toISOString()}`;

  fs.writeFileSync(logFileName, fileContent);
  console.log(logFileName);
}

// Change back to original directory
process.chdir(originalDirectory);
