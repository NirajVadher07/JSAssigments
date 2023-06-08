// TODO: Example 1
// const  fetchData = async () => {
//     return new Promise((resolve, _reject) => {
//       setTimeout(() => {
//         const data = { name: "John", age: 25 };
//         resolve(data);
//       }, 2000);
//     });
//   };

//   const getData = async () => {
//     try {
//       const data = await fetchData();
//       console.log("Data received:", data);
//     } catch (error) {
//       console.log("Error:", error);
//     }
//   };
  
//   getData();
  
//TODO: Example 2
// async function f() {

//     let promise = new Promise((resolve, reject) => {
//       setTimeout(() => reject("done!"), 1000)
//     });
  
//     try {
//         let result = await promise; // wait until the promise resolves (*)
//         console.log(result); // "done!"
        
//     } catch (error) {
//         console.log("Error",error);
//     }
  
//   }
  
//   f();