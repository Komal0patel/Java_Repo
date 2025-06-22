
//A higher order function is a function that does at least one of the following:
//1. Takes one or more functions as an argument(parameter);
//2. Returns a function as the result


import {posts}from "./posts.js"
//forEach()


posts.forEach((post)=>{
    console.log(post);
})

console.clear()

const filteredPosts= posts.filter(post=>{
    return post.userId===1;
});
console.log(filteredPosts);


const mappedPosts=filteredPosts.map(post=>{
    return post.id*10;
});

console.log(mappedPosts);


const reducedpostsvalue=mappedPosts.reduce((sum,post)=>{
    return sum+post;
})
console.log(reducedpostsvalue);
