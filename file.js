const fs = require('fs');


const filePath = 'output.txt';
const content = 'Hello, this is a test file written using Node.js!';


fs.writeFile(filePath, content, (err) => {
    if (err) {
        console.error('Error writing file:', err);
    } else {
        console.log('File written successfully!');
    }
});
