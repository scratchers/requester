const got = require('got');

got('localhost:8888/server.php')
    .then(response => {
        console.log(response.body);
        //=> '<!doctype html> ...'
    })
    .catch(error => {
        console.log(error.response.body);
        //=> 'Internal server error ...'
    });
