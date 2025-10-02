// Question 2 - COMP3123 Lab Test 1
// Student ID: 101515982

// from lab test1 requirement document

const delayedSuccess = () => {
  setTimeout(() => {
    let success = { message: "delayed success!" };
    console.log(success);
  }, 500);
};

const delayedException = () => {
  setTimeout(() => {
    try {
      throw new Error("error: delayed exception!");
    } catch (e) {
      console.error(e);
    }
  }, 500);
};

delayedSuccess();
delayedException();
