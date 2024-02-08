const fs = require('fs');
const filePath = "../lorem-ipsum.txt";

fs.readFile(filePath, "utf-8", (err, data) => {
  if(err){
    console.log('An error occurred...: ',err.message);
  } else {
    console.log(data);
    console.log("Done!");
  }
});

console.log(`I'm the last line of the file!`);