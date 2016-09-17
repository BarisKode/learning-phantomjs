var page = require('webpage').create();

//actual size of the headless browser
page.viewportSize = {width: 1024, height: 768};

//portion of the page you are taking a screenshot of
page.clipRect = {top: 0, left: 0, width: 1024, height: 768};

//the rest of the code is the same as the previous example
page.open('https://github.com/', function () {
    page.render('images_capture/github-1024x768.png');
    phantom.exit();
});