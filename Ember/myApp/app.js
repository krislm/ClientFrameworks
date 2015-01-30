window.App = Ember.Application.create();

App.Router.map(function() {
    this.resource('home', { path: '/' });
    this.resource('about', { path: '/about' });
    this.resource('contact', { path: '/contact' });
});

App.HomeController = Ember.ObjectController.extend({
    message: "COMING SOON!",
    home: "",
    text: ""
});
App.AboutController = Ember.ObjectController.extend({
    about: "COMING SOON!",
    text: ""
});
App.ContactController = Ember.ObjectController.extend({
    contact: "Feel free to contact me",
    path: "kris@maini.me",
    reachme: "Or follow me on twitter",
    twitter: "mcabe0131"
});