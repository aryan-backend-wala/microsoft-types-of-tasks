const fs = require('fs');

const filePath = "../lorem-ipsum.txt";

const callback = (err, data) => {
  if(err){
    console.log('An error occurred...: ', err);
  } else {
    console.log(data);
    console.log('Done!');
  }
}

fs.readFile(filePath, "utf-8", callback);

console.log(`I'm the last line of the file!`);