/* Asynchronous function: Callback Async vs Promise

   DEFINE                 CALL             
   callback              function
   define                call
   async/await           then/catch
   promise               then/catch 
*/

// define
async function division (a, b) {
    return new Promise((resolve, reject) => {
        if (b === 0) {
            reject("Not devided by zero"); 
        } else {
            setInterval(function(){
                resolve(a % b);
            }, 2000);
       }
    })
}

// call
division(10, 3).then(data =>{
    console.log("Result:",data);
    console.log(".......")

    division(10, 4).then(data =>{
        console.log("Result:",data);
        console.log(".......")

        division(20, 7).then(data =>{
            console.log("Result:",data);
            console.log(".......")
        }).catch(err => {
            console.log("Error division:", err);
        });
        
    }).catch(err => {
        console.log("Error division:", err);
    });
    
}).catch(err => {
    console.log("Error division:", err);
});
