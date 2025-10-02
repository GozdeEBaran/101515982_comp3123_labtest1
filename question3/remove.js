// Question 3 - COMP3123 Lab Test 1
// Student ID: 101515982

const fs = require("fs");
const path = require("path");

const logsPath = path.join(process.cwd(), "Logs");

if (fs.existsSync(logsPath)) {
  // Read all files
  const filesInDirectory = fs.readdirSync(logsPath);

  // delete each file
  filesInDirectory.forEach((fileName) => {
    const fullFilePath = path.join(logsPath, fileName);
    console.log(`delete files...${fileName}`);
    fs.unlinkSync(fullFilePath);
  });

  // Remove logs
  fs.rmdirSync(logsPath);
  console.log("Logs directory removed");
} else {
  console.log("Logs directory does not exist");
}
