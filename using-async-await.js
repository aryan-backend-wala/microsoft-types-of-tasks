const fs = require('fs').promises;

const filePath = '../lorem-ipsum.txt';

async function readFileAsync(){
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    console.log(data);
    console.log('Done!');
  } catch (err) {
    console.error("An error occurred...: " + err);
  }
}

readFileAsync()
  .then(() => {
    console.log("Success!")
  })
  .catch((err) => {
    console.log("An error occurred...: ", err);
  })