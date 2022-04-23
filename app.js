const express = require('express');
const app = express();

//routes 

const suggestionsRoutes = require('./api/routes/suggestions');
 
app.use((req, res, next) => {
  console.log('Time: ',Date(Date.now()));
  next();
});
app.get('/', (req, res) => {
	console.log(req.query)
  res.send('Successful response.');
});

app.use('/suggestions', suggestionsRoutes);


module.exports = app;