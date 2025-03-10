const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a string: ', (inputString) => {
   
    const cleanedString = inputString.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedString = cleanedString.split('').reverse().join('');

    if (cleanedString === reversedString) {
        console.log(`"${inputString}" is a Palindrome!`);
    } else {
        console.log(`"${inputString}" is NOT a Palindrome.`);
    }

    rl.close();
});
