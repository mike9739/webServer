const fs = require('fs')
let data = ''
for (let i = 0; i < 1000000; i++) {
    data += 'u'

}
fs.writeFile('fuga.txt', data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
})