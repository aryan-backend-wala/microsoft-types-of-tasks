import { promises as fs } from 'fs';

const filePath = "../lorem-ipsum.txt";

try {
  const data = await fs.readFile(filePath, 'utf-8');
  console.log(data);
  console.log("Done!");
} catch(err) {
  console.log('An error occurred...: ',err.message);
}

console.log("I'm the last line of the file!");