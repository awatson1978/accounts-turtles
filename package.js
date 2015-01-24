Package.describe({
  summary: "Adds Teenage Mutant Ninja Turtles to the Meteor.users collection.",

  // update this value before you run 'meteor publish'
  version: "1.0.0",

  // if this value isn't set, meteor will default to the directory name
  name: "awatson1978:accounts-turtles",

  // and add this value if you want people to access your code from Atmosphere
  git: "http://github.com/awatson1978/accounts-turtles.git"
});

Package.on_use(function (api) {
  api.use('accounts-base@1.1.3');
  api.use('accounts-password@1.0.5');

  api.add_files('initialize.users.js', 'server');

  api.add_files('turtles/april.oneil.jpg', "client", {isAsset: true});
  api.add_files('turtles/casey.jones.jpg', "client", {isAsset: true});
  api.add_files('turtles/donatello.jpg', "client", {isAsset: true});
  api.add_files('turtles/leonardo.jpg', "client", {isAsset: true});
  api.add_files('turtles/michaelangelo.jpg', "client", {isAsset: true});
  api.add_files('turtles/raphael.jpg', "client", {isAsset: true});
  api.add_files('turtles/shredder.jpg', "client", {isAsset: true});
  api.add_files('turtles/splinter.jpg', "client", {isAsset: true});

});
