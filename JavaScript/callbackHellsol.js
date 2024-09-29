function step1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("step 1");
      resolve();
    }, 1000);
  });
}
function step2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("step 2");
      resolve("step 2 completed");
    }, 1000);
  });
}
function step3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("step 3");
      resolve(() => console.log("step3 completed"));
    }, 1000);
  });
}
step1()
  .then(() => {
    step2(resolve);
    console.log(resolve);
  })
  .then(() => {
    step3(resolve);
    resolve();
  })
  .then(() => console.log("final step"));
