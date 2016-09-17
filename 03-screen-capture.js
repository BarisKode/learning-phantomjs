var webpage = require('webpage').create();

webpage.open('https://github.com/', function () {
    webpage.render('images_capture/github.png');
    phantom.exit();
});
