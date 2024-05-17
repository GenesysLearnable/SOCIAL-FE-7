require('dotenv').config();
const express = require('express');
const { jwt: { AccessToken }, VideoGrant } = require('twilio');

const app = express();
const PORT = process.env.PORT || 5500;

const cors = require("cors")

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(cors(""))
app.use(express.json());

const twilioAccountSid = process.env.TWILIO_ACCOUNT_SID;
const twilioApiKey = process.env.TWILIO_API_KEY;
const twilioApiSecret = process.env.TWILIO_API_SECRET;

app.post('/video-token', (req, res) => {
  const { identity } = req.body;

  const videoGrant = new VideoGrant();
  const token = new AccessToken(twilioAccountSid, twilioApiKey, twilioApiSecret, {
    identity,
  });
  token.addGrant(videoGrant);

  res.send({
    token: token.toJwt(),
  });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
