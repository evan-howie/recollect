import { spawn } from "child_process";

export default function (command_line) {
  return new Promise((resolve, reject) => {
    const pythonProcess = spawn("poetry", ["run", "python", ...command_line]);
    let outputData = "";
    let errorData = "";

    pythonProcess.stdout.on("data", (data) => {
      outputData += data.toString();
    });

    pythonProcess.stderr.on("data", (data) => {
      errorData += data.toString();
    });

    pythonProcess.on("close", (code) => {
      if (code !== 0) {
        // Handle non-zero exit code
        reject(`Python script exited with code ${code}: ${errorData}`);
        return;
      }

      try {
        // Convert the accumulated string data to JSON
        const jsonData = JSON.parse(outputData);
        resolve(jsonData);
      } catch (error) {
        // Handle JSON parsing error
        reject(`Error parsing JSON from Python script: ${error.message}`);
      }
    });

    pythonProcess.on("error", (error) => {
      // Handle errors in spawning the process
      reject(`Error spawning Python process: ${error.message}`);
    });
  });
}
