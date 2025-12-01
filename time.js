const startTime = Date.now();

function someHeavyTask() {
    //t result = 0;
    for (let i = 0; i < 1e7; i++) {
        Math.sqrt(i);
}
}
const endTime = Date.now();

someHeavyTask();
const duration = endTime - startTime;
console.log(`Execution time: ${duration} milliseconds`);
