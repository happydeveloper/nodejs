const fs = require('fs');

fs.writeFile( new Date().toJSON()+'_sample.txt', 'Hello ERTI!', function(err){
    if(err) return console.error(err);
    console.log('Hell ERTI > '+ new Date().toJSON()+'_sample.txt');
});


fs.writeFile('/etc/doesntexist', 'abc', function (err,data) {
    if (err) {
      return console.log(err);
    }
    console.log(data);
  });