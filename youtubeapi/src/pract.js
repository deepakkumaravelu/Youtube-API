// const fs = require("fs");
// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('What is your name? ', (name) => {
//   fs.writeFile("message.txt", name, (err) => {
//     if (err) throw err;
//     console.log('The file has been saved!');
//     rl.close();
//   });
// });
const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})