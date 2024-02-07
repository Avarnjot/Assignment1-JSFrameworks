// /*
// Loading text file content asynchronously using node built-in function, plus
// using the proper JavaScript DOM Commands to target an HTML element to render
// the content "paragraph" inside the text file.
// */

document.addEventListener("DOMContentLoaded", async function () {
    try {
        // Asynchronously fetch the content of the text file
        const response = await fetch('file.txt');

        // Update the paragraph element with the fetched content
        const getText = await response.text();
        document.getElementById("textfile").textContent = getText;

        // If any error occurs, catch will come into action
    } catch (error) {
        console.error('File not Found:', error);
    }
});

// Synchronously reading the text file through node js 
const fs = require('fs');
const txt = fs.readFileSync('./file.txt', 'utf-8');
console.log("\nMy file.txt content:\n", txt);


