const fullName = 'Phiyadaa Changnoi   ';
const cleanedName = fullName.trim();
console.log('Cleaned Name:', cleanedName);

const nammeParts = cleanedName.split(' ');
console.log('Name Parts:', nammeParts);

const joinedName = nammeParts.join(' - ');
console.log('final Name:', joinedName);

const fistname = nammeParts[0];
console.log('First Name:', fistname);