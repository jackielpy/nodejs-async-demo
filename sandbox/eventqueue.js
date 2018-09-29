console.log("Begin");

setTimeout(() => {
    console.log("setTimeout 5000 callback");
}, 5000);

setTimeout(() => {
    console.log("setTimeout 0 callback")
}, 0);

console.log("End")