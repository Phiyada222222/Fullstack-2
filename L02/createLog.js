function createLog(message) {
    constnow = new Date();
    const timestamp = now.toLocaleTimeString('th-TH');

    const eventId = Math.random().toString(36).substring(2,10).toUpperCase();

    return `[${timestamp}] [ID: ${eventId}] ${message}`;
}
const log = creatLogEntry("User login successful.");
console.log(log);
