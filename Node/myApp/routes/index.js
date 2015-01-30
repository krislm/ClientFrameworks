var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {
        title: 'Express routing example',
        home: 'Home',
        about: 'About',
        contact: 'Contact',
        ok: 'Express is cool!',

        message: 'Express',
        text: "Mixtape art party organic, synth YOLO Pitchfork banh mi occupy. Retro occupy photo booth XOXO. " +
        "Messenger bag XOXO pickled raw denim gastropub. Paleo polaroid gluten-free yr, whatever artisan shabby chic " +
        "fingerstache quinoa. Fingerstache retro kogi Kickstarter dreamcatcher. Yr meggings lo-fi, Intelligentsia beard " +
        "craft beer Kickstarter umami butcher Etsy. Chia occupy aesthetic, distillery cardigan beard photo booth."
  });
});
router.get('/about', function(req, res) {
    res.render('about', {
        title: 'Express routing example',
        home: 'Home',
        about: 'About',
        contact: 'Contact',
        ok: 'Express is cool!',

        message: "This is the about page.",
        text: "Incididunt quinoa magna sed chillwave, Helvetica odio " +
        "literally skateboard Portland. Twee craft beer cred, excepteur 3 " +
        "wolf moon disrupt laboris enim Carles cillum ad. Typewriter ut " +
        "sapiente put a bird on it. Wolf Helvetica butcher Echo Park velit magna. " +
        "Brooklyn laborum non keytar, cornhole vero aute. Crucifix assumenda officia " +
        "church-key Godard normcore. You probably haven't heard of them messenger bag veniam viral Tonx eiusmod."
    });
});
router.get('/contact', function(req, res) {
    res.render('contact', {
        title: 'Express routing example',
        home: 'Home',
        about: 'About',
        contact: 'Contact',
        ok: 'Express is cool!',

        message: "Feel free to contact me!",
        path: "mcabe@me.com",
        reachme: "Or follow me on twitter",
        twitter: "mcabe0131"
    });
});

module.exports = router;
