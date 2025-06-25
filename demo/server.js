const axios = require('axios');

axios.post('https://jsonplaceholder.typicode.com/posts', {
    title: 'Hello World',
    body: 'This is a test post.',
    userId: 1
})
    .then(response => {
        console.log('Post created:', response.data);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });
