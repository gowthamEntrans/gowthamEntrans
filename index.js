const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
  res.send('im Jenkin');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
