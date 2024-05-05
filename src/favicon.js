fetch('../favicon.html')
    .then(response => response.text())
    .then(html => {
        document.querySelector('head').insertAdjacentHTML('beforeend', html);
    })
    .catch(error => console.log('favicon error: ' + error));