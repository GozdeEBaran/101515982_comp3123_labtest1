// Question 3 - COMP3123 Lab Test 1
// Student ID: 101515982

const fs = require("fs");
const path = require("path");

const originalDirectory = process.cwd();

const logsDirectory = path.join(originalDirectory, "Logs");

if (!fs.existsSync(logsDirectory)) {
  fs.mkdirSync(logsDirectory);
  console.log("Logs directory created");
}

process.chdir(logsDirectory);

for (let fileIndex = 0; fileIndex < 10; fileIndex++) {
  const logFileName = `log${fileIndex}.txt`;
  const fileContent = `This is log file number ${fileIndex}\nGenerated for COMP3123 Lab Test\nTimestamp: ${new Date().toISOString()}`;

  fs.writeFileSync(logFileName, fileContent);
  console.log(logFileName);
}

process.chdir(originalDirectory);
