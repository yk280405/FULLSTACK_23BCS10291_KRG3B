
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = true; 
        if (success) {
            resolve("Data Fetched Successfully!");
        } else {
            reject("Something went wrong!");
        }
    }, 2000);
});


myPromise
    .then((message) => {
        console.log( message);
    })
    .catch((error) => {
        console.log("Error:", error);
    });
