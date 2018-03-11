var geo = require('geocoder');
var address = process.argv[2];
geo.geocode(address, function ( err, data ) {
    // do something with data
    console.log('data', JSON.stringify(data, null, 4));
    console.log('Found: ' + data.results.length + ' result(s)');
    console.log('Address', data.results[0].formatted_address)
});

