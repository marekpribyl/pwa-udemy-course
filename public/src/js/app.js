if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('/sw.js' /* we're able to limit SW scope here if needed:, {scope: '/help/'} */)
        //this is non-blocking call (promise)
        .then(function () {
            console.log('service worker registered');
        })
        .catch(function (err) {
            console.log(err);
        });
}

var defferedPrompt;

window.addEventListener('beforeinstallprompt', function (event) {
    console.log('Preventing installation prompt');
    event.preventDefault();
    defferedPrompt = event;
    return false;
});

var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        //resolve('Timer done');
        reject({code: 500, message: "Rejected"});
    }, 3000);
});

fetch('http://httpbin.org/ip')
    .then(function (response) {
        console.log(response);
        return response.json(); //provided by fetch API
    })
    .then(function(data) {
        console.log(data);
    })
    .catch(function (err) {
        console.log(err);
    });

fetch('http://httpbin.org/post', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify({ message: 'Does it work?'})
 })
    .then(function (response) {
        console.log(response);
        return response.json(); //provided by fetch API
    })
    .then(function(data) {
        console.log("DATA:");
        console.log(data);
    })
    .catch(function (err) {
        console.log(err);
    });


promise
    .then(function (text) {
        console.log(text);
    })
    .catch(function (err) {
        console.log(err.code, err.message)
    });