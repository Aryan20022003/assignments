/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/
const resolveAfterNseconds = (n) => {
  return new Promise((resolve) => {
    setTimeout(() => {
        resolve();
    }, n * 1000);
  });
};

function wait(n) 
{
    return resolveAfterNseconds(n);
}

module.exports = wait;
