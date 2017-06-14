const got = require('got');

got('localhost:8888/server.php', {
    headers: {
        'User-Agent': 'Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Mobile Safari/537.36'
    }
})
    .then(response => {
        console.log(response.body);
        //=> '<!doctype html> ...'
    })
    .catch(error => {
        console.log(error.response.body);
        //=> 'Internal server error ...'
    });
