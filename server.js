const express = require('express');
const cors = require('cors');
const { OAuth2Client } = require('google-auth-library');

const app = express();
const PORT = 5000;

const CLIENT_ID = '422022540424-ivcl6lir170kq3sodtcbifnasbqnein6.apps.googleusercontent.com'; 
const client = new OAuth2Client(CLIENT_ID);

app.use(cors());
app.use(express.json());

app.post('/api/auth/google', async (req, res) => {
  const { token } = req.body;

  try {
    // Verify the ID token
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: CLIENT_ID, // Ensure the token is intended for your app
    });

    // Get user info from the token payload
    const payload = ticket.getPayload();
    const { sub, name, email, picture } = payload;

    // Handle user creation or session setup (optional)
    return res.status(200).json({
      message: 'Authentication successful',
      user: { id: sub, name, email, picture },
    });
  } catch (err) {
    console.error('Token verification failed:', err.message);
    return res.status(401).json({ message: 'Invalid token' });
  }
});

app.listen(PORT, () => {
  console.log(`Auth server running on http://localhost:5000`);
});
