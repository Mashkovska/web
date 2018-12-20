var ObjectID = require('mongodb').ObjectID;
var _dirname = 'D:/web/lab1';
module.exports = function(app, db) {
  app.get('/', (req, res) => {
    res.sendFile(_dirname + '/index.html');
  });
  app.get('/index.html', (req, res) => {
    res.sendFile(_dirname + '/index.html');
  });
  app.get('admin.html', (req, res) => {
    res.sendFile(_dirname + '/admin.html');
  });
  app.get('/contacts.html', (req, res) => {
    res.sendFile(_dirname + '/contacts.html');
  });
  app.get('/fans.html', (req, res) => {
    res.sendFile(_dirname + '/fans.html');
  });

  app.get('/news.html', (req, res) => {
    res.sendFile(_dirname + '/news.html');
  });
};