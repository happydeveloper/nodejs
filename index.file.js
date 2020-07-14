const fs = require('fs');

// fs = require('fs');
// fs.readFile(file, [encoding], [callback]);

fs.readFile('sample.txt','utf8',function(err, data){
    if(err){
        return console.log(err);
    }
    console.log(data);
});