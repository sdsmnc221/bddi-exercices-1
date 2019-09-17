function getUsers() {
  return new Promise((resolve, reject) => {
    // We simulate an async xhr call with setTimeout
    setTimeout(() => {
      resolve(['Pierre', 'Paul', 'Jaques']);
    }, Math.round(Math.random() * 2000));
  });
}

function createUser(name) {
  return new Promise((resolve, reject) => {
    // We simulate an async xhr call with setTimeout
    setTimeout(() => {
      console.log(`${name} is created.`);
      resolve(name);
    }, Math.round(Math.random() * 2000));
  });
}

function createUsers(users) {
  return users.map(user => {
    return createUser(user);
  });
}

// Votre code ici (8 lignes)
getUsers()
  .then(users => Promise.all(createUsers(users)))
  .then(() => console.log('All users are created.'));
