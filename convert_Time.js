const registraionData = new Date('2023-08-15T10:30:00');

const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'Asia/Bangkok'
};

const formattedDate = registraionData.toLocaleDateString('th-TH', options);
console.log(`Registration Date: ${formattedDate}`);        