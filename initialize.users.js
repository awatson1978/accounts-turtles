// if the database is empty on server start, create some sample data.
// we create a separate bootstrap.users.js file
// because we'll be wanting to set up a number of patient-scenario test users

Meteor.startup(function () {
  if (Meteor.users.find().count() === 0) {
    console.info('no users in database!  adding some default users');

    var userId = null;

    // crate our administrator
    userId = Accounts.createUser({
      username: 'april',
      password: 'april',
      email: 'april@test.org',
      profile: {
        name: 'April ONeil',
        role: 'News Reporter',
        avatar: '/packages/awatson1978_accounts-turtles/turtles/april.oneil.jpg'
      }
    });
    console.info('Account created: ' + userId);

    // crate our administrator
    userId = Accounts.createUser({
      username: 'casey',
      password: 'casey',
      email: 'casey@test.org',
      profile: {
        name: 'Casey Jones',
        role: 'Hockey Player',
        avatar: '/packages/awatson1978_accounts-turtles/turtles/casey.jones.jpg'
      }
    });
    console.info('Account created: ' + userId);


    // crate our administrator
    userId = Accounts.createUser({
      username: 'donatello',
      password: 'donatello',
      email: 'donatello@test.org',
      profile: {
        name: 'Donatello',
        role: 'Ninja',
        avatar: '/packages/awatson1978_accounts-turtles/turtles/donatello.jpg'
      }
    });
    console.info('Account created: ' + userId);

    // crate our administrator
    userId = Accounts.createUser({
      username: 'leonardo',
      password: 'leonardo',
      email: 'leonardo@test.org',
      profile: {
        name: 'Leonardo',
        role: 'Ninja',
        avatar: '/packages/awatson1978_accounts-turtles/turtles/leonardo.jpg'
      }
    });
    console.info('Account created: ' + userId);

    // crate our administrator
    userId = Accounts.createUser({
      username: 'michaelangelo',
      password: 'michaelangelo',
      email: 'michaelangelo@test.org',
      profile: {
        name: 'Michaelangelo',
        role: 'Ninja',
        avatar: '/packages/awatson1978_accounts-turtles/turtles/donatello.jpg'
      }
    });
    console.info('Account created: ' + userId);

    // crate our administrator
    userId = Accounts.createUser({
      username: 'raphael',
      password: 'raphael',
      email: 'raphael@test.org',
      profile: {
        name: 'Raphael',
        role: 'Ninja',
        avatar: '/packages/awatson1978_accounts-turtles/turtles/raphael.jpg'
      }
    });
    console.info('Account created: ' + userId);

    // crate our administrator
    userId = Accounts.createUser({
      username: 'shredder',
      password: 'shredder',
      email: 'shredder@test.org',
      profile: {
        name: 'Shredder',
        role: 'Evil Villian',
        avatar: '/packages/awatson1978_accounts-turtles/turtles/shredder.jpg'
      }
    });
    console.info('Account created: ' + userId);

    // crate our administrator
    userId = Accounts.createUser({
      username: 'splinter',
      password: 'splinter',
      email: 'splinter@test.org',
      profile: {
        name: 'Splinter',
        role: 'Guru Master',
        avatar: '/packages/awatson1978_accounts-turtles/turtles/splinter.jpg'
      }
    });
    console.info('Account created: ' + userId);


  }
});
