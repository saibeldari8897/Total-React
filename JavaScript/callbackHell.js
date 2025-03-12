// function step1(){
//   return new Promise(resolve =>{
//     setTimeout(()=>{
//       console.log("step 1");
//       resolve();
//     },1000);
//   });
// }
// function step2(){
//   return new Promise(resolve =>{
//     setTimeout(()=>{
//       console.log("step 2");
//       resolve();
//     },1000);
//   })
// }
// function step3(){
//   return new Promise(resolve =>{
//     setTimeout(()=>{
//       console.log("step 3");
//       resolve();
//     },1000);
//   })
// }
// step1()
// .then(()=> step2());
function step1(resolve){
    setTimeout(()=>{
      console.log("step 1");
      resolve("step 1 completed") ;
    },1000);
}
function step3(resolve){
  setTimeout(()=>{
    console.log("step 3");
    resolve(()=> console.log("step 3 completed"));
  },1000);
}
function step2(resolve){
  setTimeout(()=>{
    console.log("step 2");
    resolve();
  },1000);
}
try {
  step1((resolve)=>{
    console.log(resolve);
    step2(()=>{
      step3((resolve)=>{
        console.log(typeof(resolve()));
        setTimeout(()=> console.log("all steps completed"),1000);
      });
    });
  });
} catch (error) {
  console.error(error);
}
let a =10;
console.log(a);