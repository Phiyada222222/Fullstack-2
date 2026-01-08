function criticalCode() {
    throw "throwing an exception";
}

function logError(theException) {
    console.log(theException);
}

console.log("\n********Try...Catch********");
try {
    criticalCode();
} catch (ex) {
    console.log("Got an error");
    logError(ex);
}
console.log("\n********Throwing in Try...Finally********");
try {
    criticalCode();
} catch (ex) {
    console.log("Got an error");
    logError(ex);
}
console.log("Got an error");
try {
    criticalCode();
} catch (ex) {
    console.log("Code that always will run");
    logError(ex);
} finally {
    console.log("This is the finally block");
}
function hello() {
    console.log("Hello World");
}