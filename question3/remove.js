// Question 3 - COMP3123 Lab Test 1
// Student ID: 101515982
// Script to remove Logs directory and all log files

const fs = require("fs");
const path = require("path");

// Build path to Logs directory
const logsPath = path.join(process.cwd(), "Logs");

// Check if Logs directory exists
if (fs.existsSync(logsPath)) {
  // Read all files in the Logs directory
  const filesInDirectory = fs.readdirSync(logsPath);

  // Output and delete each file
  filesInDirectory.forEach((fileName) => {
    const fullFilePath = path.join(logsPath, fileName);
    console.log(`delete files...${fileName}`);
    fs.unlinkSync(fullFilePath);
  });

  // Remove the empty Logs directory
  fs.rmdirSync(logsPath);
  console.log("Logs directory removed");
} else {
  console.log("Logs directory does not exist");
}
