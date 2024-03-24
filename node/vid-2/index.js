globalThis.setTimeout(() => {
  console.log("timeout");
}, 5000);

const m = require('./modules/things'); //*requires every export in one variable
const { times } = require('./modules/things'); //*requires the specific export using object destructuring

const os = require('os'); //*the operating system module
const fs = require('fs'); //*the file system module
const { dirname } = require('path');

console.log(__dirname);
console.log(__filename);

console.log(m.names); //* 'm' is a obj with all exports
console.log(times); //* 'times' is an array from 'things'

console.log(os.platform());

//!don't use readFileSync
// console.log(fs.readFileSync(__filename).toString());

//*readFile
// fs.readFile(__dirname + '/modules/readThis.txt', (err, data) => {
//   if (err) throw err;
//   console.log(data.toString());
// });

//*writeFile
// fs.writeFile(__dirname + '/modules/readThis.txt', 'what', (err) => {
//   if (err) throw err;
//   console.log('overwrited a file');
// })
// //this creates a new file
// fs.writeFile(__dirname + '/modules/new.txt', 'some text', (err) => {
//   if (err) throw err;
//   console.log('created a new file');
// })

// 
//*delete files

if (!fs.existsSync(__dirname + '/modules/newDir')) {
  fs.mkdir(__dirname + '/modules/newDir', (err) => {
    if (err) throw err;
    console.log('created a new directory');
  })
}
else {
  fs.rmdir(__dirname + '/modules/newDir', (err) => {
    if (err) throw err;
    console.log('deleted a directory');
  })
}

if (fs.existsSync(__dirname + '/modules/new.txt')) {
  fs.unlink(__dirname + '/modules/new.txt', (err) => {
    if (err) throw err;
    console.log('deleted a file');
  })
}
