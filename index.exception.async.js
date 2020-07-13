const fs = require('fs');

fs.readFile('o2.txt', 'utf8', function(e, data){
    if(e){
        console.log(e)
    } else {
        console.log(data)
    }
});