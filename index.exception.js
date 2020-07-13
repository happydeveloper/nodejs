const fs = require('fs');

try {
    var data = fs.readFileSync('etri.txt', 'utf8');
    console.log(data);
} catch (error) {
    console.log('error 가 발생했습니다\n');
    console.log(error);
}