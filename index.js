const app = require('./src/app');

app.use('/', (req, res) => {
  res.send('Hello!');
});
