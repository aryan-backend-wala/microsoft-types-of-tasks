const fs = require('fs');
const filePath = "../lorem-ipsum.txt";

try {
  const data = fs.readFileSync(filePath, "utf-8");
  console.log(data);
  console.log("Done!");
} catch(err){
  console.log("An error occurred...: ", err.message);
}