var fs = require('fs');

fs.readFile('best_things_ever.txt', 'utf8', bestThingsEverCallback);


function bestThingsEverCallback (err, data){
    if (err)
        throw err;

    console.log('data', data);

    var array = data.split(',');
    for (var i = 0;i < array.length; i++) {
        console.log(array[i].trim());
    }
}