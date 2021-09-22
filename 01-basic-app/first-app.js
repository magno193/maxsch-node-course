const fs = require('fs');

console.log('\x1b[36m%s\x1b[0m',
  'File System:',
  'Escrevendo arquivo com fs.writeFileSync...'
);

fs.writeFileSync('01-hello.txt', 'Hello from Node.js');

console.log('\x1B[32m', 'SUCESSO!')