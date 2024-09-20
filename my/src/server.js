const express = require('express');
const request = require('request');
const cors = require('cors');
const bodyParser = require('body-parser');

const clientId = '12103010db054e7d9913f4c640ca973b';
const clientSecret = '4ce150dcfb55493b8bf85c195d5e6d45';
const redirectUri = 'http://localhost:3000/callback';

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post('/auth/token', (req, res) => {
  const authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    form: {
      grant_type: 'authorization_code',
      code: req.body.code,
      redirect_uri: redirectUri,
    },
    headers: {
      Authorization:
        'Basic ' + Buffer.from(clientId + ':' + clientSecret).toString('base64'),
    },
    json: true,
  };

  request.post(authOptions, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      res.json({
        access_token: body.access_token,
        refresh_token: body.refresh_token,
      });
    } else {
      res.status(response.statusCode).json(body);
    }
  });
});

app.listen(8888, () => {
  console.log('Server running on port 8888');
});
