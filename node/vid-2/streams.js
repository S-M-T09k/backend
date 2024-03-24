const fs = require('fs');
const path = require('path');

const readStream = fs.createReadStream(path.join(__dirname, './modules/one-million.txt'), { encoding: 'utf8' });
const writeStream = fs.createWriteStream(path.join(__dirname, './modules/new.txt'), { encoding: 'utf8' });

// readStream.on('data', (chunk) => {
//   console.log('---- NEW CHUNK ----');
//   console.log(chunk);
//   writeStream.write('\n---- NEW CHUNK ----\n');
//   writeStream.write(chunk);
// })

// readStream.on('end', () => {
//   console.log('I need to rest');
//   writeStream.end('\nI need to rest');
// })

//*pipe

readStream.pipe(writeStream);
