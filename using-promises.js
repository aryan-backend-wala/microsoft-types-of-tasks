const fs = require('fs').promises;
const filePath = "../lorem-ipsum.txt";

fs.readFile(filePath, 'utf-8')
  .then((data) => {
    console.log(data);
    console.log("Done!");
  })
  .catch((err) => {
    console.log('An error occurred...: ', err);
  })

  console.log(`I'm the last line of the file!`);