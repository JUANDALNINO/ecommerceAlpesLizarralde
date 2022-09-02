let itsOk = true;

let promiseChallenge = (task) => {
    return new Promise((resolve, reject) => {
        if(itsOk) {
            setTimeout(() => {
                resolve(task)
            }, 2000);
        } else {
            reject("Error")
        }
    });
}

export default promiseChallenge;