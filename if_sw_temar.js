if (err_status === 200) {
    console.log("Success")
} else if(err_status === 400 ){
    console.log("Not Found")
} else {
    console.log("Error")
}

switch (err_status) {
    case 200:
        console.log("Success")
        break;
    case 404:
        console.log("Not Found")
        break;
    default:
        console.log("Error")
}
const message = (err_status === 200) ? "Success" : "Error";
console.log(message);