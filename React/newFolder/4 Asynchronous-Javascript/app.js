// Example of Asynchronous js
// console.log("Start Group");

// let data = "content";

// setTimeout(() => {
//     console.log(data);
// }, 1000);

// console.log("end Group");

////////////////////////////////////////
// Example for Call back

// function printGreeting(msg, alertGreat) {
//     alertGreet(msg);
// }

// function alertGreet(msg) {
//     console.log(msg);
// }

// printGreeting("Hello World!", alertGreat);

///////////////////////////////////////////
// another example... synchronous example..

// function printGreeting(msg, alertGreet) {
//   if (msg == "evening") {
//     evening(alertGreet);
//   } else if (msg == "morning") {
//     morning(alertGreet);
//   } else {
//     night(alertGreet);
//   }
// }

// function morning(alertGreet) {
//   alert("good morning");
//   alertGreet("hello World morning");
// }

// function evening(alertGreet) {
//   alert("good evening");
//   alertGreet("hello World evening");
// }

// function night(alertGreet) {
//   alert("good night");
//   alertGreet("hello World night");
// }

// function alertGreet(msg) {
//   alert(msg);
// }

// printGreeting("evening", alertGreet);


//////////////////////////////////////
// promises understanding /
// function success(params) {
//     console.log("success");
// }

// function failure(params) {
//     console.log("failure");
// }

// function checkPromiseResult(params, success, failure) {
//     params === true ? success() : failure();
// }

// checkPromiseResult(false , success , failure)

// implement promises
// function Bool(params) {
//     return false;
// }


// const resolveFunction = () => console.log("success");
// const rejectFunction = () => console.log("failure");


// const result = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         Bool() ? resolve() : reject()
//     }, 2000);
// })

// result.then(resolveFunction).catch(rejectFunction);
// console.log("Hello World!");



////////////////////////////////////////////////////
// async and await undertanding... 

function fetchData() {
    let promise = new Promise((res, rej)=>{
        setTimeout(() => {
            console.log("promises run!");
            res("data get")
        }, 2000);
    })

    return promise;
}


async function _asyncJS(){
    try{
        let data = await fetchData();
        console.log("Success ", data);
    }
    catch(error){
        console.log(error, "error");
    }
}

 _asyncJS();

