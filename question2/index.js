// Question 2 - COMP3123 Lab Test 1
// Student ID: 101515982

//  async task with a delay
function simulateSuccessAsync() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const result = {
        status: "success",
        detail: "message: delayed success!",
      };
      resolve(result);
    }, 500);
  });
}

// failed async task with a delay
function simulateFailureAsync() {
  return new Promise((_, reject) => {
    setTimeout(() => {
      try {
        throw new Error("error: delayed exception!");
      } catch (err) {
        reject({ status: "failure", message: err.message });
      }
    }, 500);
  });
}

simulateSuccessAsync()
  .then((data) => {
    console.log("Success:", data);
  })
  .catch((error) => {
    console.error("Error during success simulation:", error);
  });

simulateFailureAsync()
  .then((data) => {
    console.log("Unexpected success:", data);
  })
  .catch((error) => {
    console.error("Caught simulated error:", error);
  });
