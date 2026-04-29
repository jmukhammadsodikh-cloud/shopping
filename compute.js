/* Callback function 
   define     call
   calback    function



// Define synchronous function
function bolish (a, b) {
    if (b === 0) {
        return "nolga bolish mumkin emas";
    } else {
        return (a - b);
    }
}

// Call
const result = bolish (10, 8);
console.log(result);
*/

// Synchronous function with callback
// Define
function bolish (a, b, callback) {
    if (b === 0) {
        callback ("nolga bolish mumkin emas"); 
    } else {
        callback(null, a - b);
   }
}

// Call
bolish (10, 4, function (err, data) {
    if (err) {
        console.log("Error:", err)
    } else {
        console.log("Result:", data)
    }
});

