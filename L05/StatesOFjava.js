const Promise = new Promise((resolve, reject) => {
    const res = true;
    if (res) {
        resolve("resolved");
    } else {
        reject(error("rejected"));
    }
});
Promise.then(
    (res) => console.log(res),
    (err) => console.log(err)
);
