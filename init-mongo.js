// eslint-disable-next-line no-undef
db.createUser({
  user: 'username',
  pwd: 'password',
  roles: [{ role: 'readWrite', db: 'SKN_db' }]
});
