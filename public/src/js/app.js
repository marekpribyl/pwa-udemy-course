if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('/sw.js' /* we're able to limit SW scope here if needed:, {scope: '/help/'} */)
        //this is non-blocking call (promise)
        .then(function () {
            console.log('service worker registered');
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
        resolve('Timer done');
    }, 3000);
});

promise.then(function (text) {
    console.log(text);
});