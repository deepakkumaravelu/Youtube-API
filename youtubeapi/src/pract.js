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
// const express = require('express')
// const app = express()
// const port = 5000
// const msg= "hello world"
// app.get('/', (req, res) => {
//   res.send(${msg})
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

// const fs = require("fs");
// fs.readFile('/message.txt', "utf8",(err, data) => {
//   if (err) throw err;
//   console.log(data);
// }); 
import generateName from "sillyname"
import superheroes from 'superheroes';
var randname=generateName();
console.log(`My name is ${superheroes.random()}`);
