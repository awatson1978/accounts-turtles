Package.describe({
  summary: "Adds Teenage Mutant Ninja Turtles to the Meteor.users collection."
});

Package.on_use(function (api) {
  api.add_files('bootstrap.users.js', 'server');

  api.add_files('turtles/april.oneil.jpg', "client", {isAsset: true});
  api.add_files('turtles/casey.jones.jpg', "client", {isAsset: true});
  api.add_files('turtles/donatello.jpg', "client", {isAsset: true});
  api.add_files('turtles/leonardo.jpg', "client", {isAsset: true});
  api.add_files('turtles/michaelangelo.jpg', "client", {isAsset: true});
  api.add_files('turtles/raphael.jpg', "client", {isAsset: true});
  api.add_files('turtles/shredder.jpg', "client", {isAsset: true});
  api.add_files('turtles/splinter.jpg', "client", {isAsset: true});

});


