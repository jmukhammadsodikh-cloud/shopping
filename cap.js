/* Asynchronous function: Callback Async vs Promise

   DEFINE                 CALL             
   callback              function
   define                call
   async/await           then/catch | async/await
   promise               then/catch | async/await
*/

// define
async function division (a, b) {
        if (b === 0) {
            throw new Error("Not devided by zero"); 
        } else {
                return(a % b);
       }
}

// call
async function run() {
    let result = await division(10, 3);
    console.log("result one:", result);

    result = await division(10, 4);
    console.log("result two:", result);

    result = await division(20, 7);
    console.log("result three:", result);
    
}
run();