// Question 2 - COMP3123 Lab Test 1
// Student ID: 101515982

function resolvedPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ message: "delayed success!" });
    }, 500);
  });
}

function rejectedPromise() {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject({ error: "delayed exception!" });
    }, 500);
  });
}
resolvedPromise()
  .then((success) => {
    console.log(success);
  })
  .catch((err) => {
    console.log(err);
  });

rejectedPromise()
  .then((success) => {
    console.log(success);
  })
  .catch((err) => {
    console.log(err);
  });
