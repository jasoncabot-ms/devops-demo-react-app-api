const express = require('express');
const appInsights = require('applicationinsights');

appInsights.setup('f0c70f53-d039-44ee-8771-55fe7207e80d').start();

const app = express();

app.use(express.static('dist'));
app.get('/api/message', (req, res) => {
  res.send({ message: 'Hello from the API' });
});

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
