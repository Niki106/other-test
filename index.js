const express = require('express');
const app = express();
const { auth } = require('express-oauth2-jwt-bearer');

const port = process.env.PORT || 8083;

const jwtCheck = auth({
  audience: 'http://localhost:8083/authorized',
  issuerBaseURL: 'https://dev-87rihrbf4qujbrwj.us.auth0.com/',
  tokenSigningAlg: 'RS256'
});

// enforce on all endpoints
app.use(jwtCheck);

app.get('/authorized2', function (req, res) {
    res.send('Secured Resource');
});

app.listen(port);

console.log('Running on port ', port);