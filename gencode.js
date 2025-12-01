function generateTemplateID() {
    const randomPart = Math.random().toString(36).substring(2,8);
    return randomPart.toUpperCase();
}

const orderID = generateTemplateID();
console.log("Generated Template ID: " + orderID);