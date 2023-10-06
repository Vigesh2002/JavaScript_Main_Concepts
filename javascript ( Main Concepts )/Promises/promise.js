let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("success");
    }, 1000);
});

p1.then(console.log);


let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("failure");
    }, 2000);
});

p2.then(console.log).catch(console.log);

// -------------> Callback  VS  Promise <-------------

// Callback

const f1 = (val, callback) => {
    return callback(val + 10);
}

const callback = (val) => {
    return val + 20;
}

console.log(f1(10, callback));

// Promise

const p3 = val => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(val + 10)
    }, 3000);
});

p3(10).then(x => x + 20).then(console.log);

// -----------> Promise methods

Promise.all([p1,p2,p3]).then(console.log).catch(console.log);

Promise.allSettled([p1,p2,p3]).then(console.log).catch(console.log);

Promise.race([p1,p2,p3]).then(console.log).catch(console.log);


// ----------------------------------------------------------------------------------------

// The Promise.all() method is actually a method of the Promise object (which is also an object under JavaScript used to handle all the asynchronous operations), that takes an array of promises(an iterable) as input. It returns a single Promise that resolves when all of the promises passed as an iterable, which have resolved, or when the iterable contains no promises. In a simple way, if any of the passed-in promises reject, the Promise.all() method asynchronously rejects the value of the promise that has already been rejected, whether or not the other promises have been resolved. 

// ----------------------------------------------------------------------------------------

// The Promise is a JavaScript object which can be in three states pending, fulfilled or rejected. The Promise.allSettled() method in JavaScript is used to get a promise when all inputs are settled that is either fulfilled or rejected. It basically returns a promise that gets resolved when all other promises which are passed are either fulfilled or rejected and in output it displays the array of objects which particularly displays the status and the value of each promise individually.

// ----------------------------------------------------------------------------------------

// The Promise.race() method returns a promise that fulfills or rejects as soon as one of the promises in an iterable fulfills or rejects, with the value or reason from that promise. We may think of this particular method as in the form of a real-life example where several people are running in a race whosoever wins comes first wins the race, the same scenario is here, which ever promise is successfully fulfills or rejects at early will be executed at first and rest one’s results will not be displayed as an output.