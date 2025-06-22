//Fetch API requires a discussion of......
//Callbacks,Promises,Thenables, and Async/Await


//1.callbacks: callbacks are just functions that are passed to other functions as parameters and then called after some work is done;
//So they will call that function after they finish doing their other stuff.


// function firstFunction(parameters,callback){
//     //do stuff
//     callback();
// }


function greet(name, callback) {
    console.log("Hi " + name);
    callback(); // Call the function passed in
}//Here, greet is reusable — it can greet and do anything else you want after that, depending on what function you pass.

function sayBye() {
    console.log("Bye!");
}

function sayThanks() {
    console.log("Thanks!");
}

greet("Komal", sayBye);     // Output: Hi Komal \n Bye!
greet("Komal", sayThanks);  // Output: Hi Komal \n Thanks!



//problem in callback: is callback hell
// firstFunction(para,function(){
//     //other stuff
//     secondFunction(para,function(){
//         thirdFunction(para,function(){

//         })
//     })
// })


//Promises are the solution to callback hell
// promises will deliver async code. because javascript is usually synchronous, meaning doing one thing at a time.
//but promises is kind of like: Hey man! I promise I'll pay you back tomorrow, If you loan me the money today.

//So basically promises could be pending while some other javascript code goes ahead and executes.

//Promises has 3 states: Pending, Fulfilled, Rejected!!

const myPromise= new Promise((resolve,reject)=>{
    const error=false;
    if(!error){
        resolve("Yes! resolves the promise!");
    }else{
        reject("No! rejected the promise!!");
    }
});




//1. Basic Promise- Success and Failure

const examResult= new Promise((pass,fail)=>{
    const passed=true;

    if(passed){
        pass("🎉 You Passed the Exam!!");
    }
    else{
        fail("😢 You failed the Exam!!");
    }
})

examResult
    .then((msg)=> console.log("Success:",msg))//thenables
    .catch((err)=> console.log("Error:",err));



//2.Simulating Delay using setTimeout

const loadingData= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Data Loaded After 1 seconds!");
    },1000);
});
console.log("Loading!!!!!!!");
loadingData.then((msg)=>console.log(msg));


//ASYNC/AWAIT

//async/await is a syntatic sugar over promises- it makes your asynchronous code look and behave more like 
//synchronous code, which is easier to read and debug.

/*                   ******BASIC RULES*********
1. async:     A keyword used before a function to say: "this function will return a Promise";

2. await:     Used inside a async function to wait for a promise to resolve before moving to the next line.;
 */

//Example:
function fetchData(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Data received after 2 sec");
        },2000);
    });
}
async function loadData(){
    console.log("Loading....");
    const data=await fetchData();//waits here
    console.log("Result:",data);
}
loadData();


//Example:
function task1() {
    return new Promise(resolve => setTimeout(() => resolve("Task 1 done"), 1000));
}
function task2() {
    return new Promise(resolve => setTimeout(() => resolve("Task 2 done"), 1000));
}

async function doTasks() {
    const t1 = await task1();
    console.log(t1);

    const t2 = await task2();
    console.log(t2);
}

doTasks();




//--------------------------------------------------------------------------------------------------------------------------


/* FETCH API
What is fetch()?
fetch() is a built-in JavaScript function used to get data from a server or API. It returns a Promise — so it's perfect to use with await.
We’ll use a free fake API: https://jsonplaceholder.typicode.com/posts
*/

async function getPost(){
    try{
        const response=await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const data = await response.json();//converts response body to json
        console.log("Post data:",data);
    }
    catch(error){
        console.log("Error fetching posts:",error);
    }
}   
getPost();


/*Summary: fetch() with async/await
------------------------------------------------------------------------------
Step	              -       What happens
-------------------------------------------------------------------------------
fetch(url)	          -      Makes a request to the server (returns a Promise)
await fetch()	      -      Waits until the response comes back
.json()	              -      Converts raw response to usable JSON
try...catch	          -      Handles any network or parsing errors
*/
