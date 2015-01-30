/**
 * Created by krismaini on 13/08/14.
 */
var myapp = angular.module('myapp', [ 'ngRoute' ]);

myapp.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl : 'pages/home.html',
            controller  : 'mainController'
        })
        .when('/about', {
            templateUrl : 'pages/about.html',
            controller  : 'aboutController'
        })
        .when('/contact', {
            templateUrl : 'pages/contact.html',
            controller  : 'contactController'
        })
});

myapp.controller('mainController', function($scope){
    $scope.message = "Angular is awesome!";
    $scope.home = "This the home page.";
    $scope.text = "Mixtape art party organic, synth YOLO Pitchfork banh mi occupy. Retro occupy photo booth XOXO. " +
        "Messenger bag XOXO pickled raw denim gastropub. Paleo polaroid gluten-free yr, whatever artisan shabby chic " +
        "fingerstache quinoa. Fingerstache retro kogi Kickstarter dreamcatcher. Yr meggings lo-fi, Intelligentsia beard " +
        "craft beer Kickstarter umami butcher Etsy. Chia occupy aesthetic, distillery cardigan beard photo booth."
});

myapp.controller('aboutController', function($scope){
    $scope.message = "This is the about page.";
    $scope.text = "Incididunt quinoa magna sed chillwave, Helvetica odio " +
        "literally skateboard Portland. Twee craft beer cred, excepteur 3 " +
        "wolf moon disrupt laboris enim Carles cillum ad. Typewriter ut " +
        "sapiente put a bird on it. Wolf Helvetica butcher Echo Park velit magna. " +
        "Brooklyn laborum non keytar, cornhole vero aute. Crucifix assumenda officia " +
        "church-key Godard normcore. You probably haven't heard of them messenger bag veniam viral Tonx eiusmod.";
});

myapp.controller('contactController', function($scope){
    $scope.message = "Feel free to contact me!";
    $scope.path = "mcabe@me.com";
    $scope.reachme = "Or follow me on twitter";
    $scope.twitter = "mcabe0131";
});
