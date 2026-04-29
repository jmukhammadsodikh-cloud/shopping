const moment = require('moment'); // require
const time = moment().format("DD MM YYYY HH:mm:ss"); 



/* callback function: 
   define     call
   calback    function
*/

const list = [
    "be a good student", // 0-20
    "choose fight boss", // 21-30
    "start your own business", // 31-40
    "do what you are good at", // 41-50
    "invest in young generation", // 51-60
    "now do a rest and enjoy your life" // 61
]

//define
function giveAdvice (age, callback){
if (typeof age !== "number") calback ("Insert only number", null);
else if (age >= 61) callback (null, list [5]);
else if (age >= 51) callback (null, list [4]);
else if (age >= 41) callback (null, list [3]);
else if (age >= 31) callback (null, list [2]);
else if (age >= 21) callback (null, list [1]);
else callback (null, list[0]);
}
//call
giveAdvice(90, (err, data) => {
     if(err) console.log("ERROR", err);
     else {
        console.log("data:", data);
     }
})
