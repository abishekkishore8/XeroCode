const express = require('express');
const mongoose = require('mongoose');
const redis = require('redis');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();
const client = redis.createClient();

// MongoDB Setup
mongoose.connect('mongodb+srv://abishekkishore:abishek@api.c0xp9xq.mongodb.net/XeroCode?retryWrites=true&w=majority', {
useNewUrlParser: true,
useUnifiedTopology: true,
useCreateIndex: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
console.log('Connected to MongoDB');
});
// Redis Setup
client.on('connect', () => {
console.log('Connected to Redis');
});
client.on('error', (err) => {
console.error('Redis error:', err);
});
// Hash the password before saving to the database
userSchema.pre('save', async function (next) {
const user = this;
if (!user.isModified('password')) return next();

try {
  const hash = await bcrypt.hash(user.password, 10);
  user.password = hash;
  next();
} catch (error) {
  return next(error);
}
});

// Check if the provided password matches the stored hashed password
userSchema.methods.comparePassword = async function (candidatePassword) {
try {
  return await bcrypt.compare(candidatePassword, this.password);
} catch (error) {
  throw error;
}
};

// GitHub OAuth
passport.use(
new GitHubStrategy(
  {
    clientID: 'c9f6e4235fe6e55e4fd4',
    clientSecret: 'd861f564de4fabd285feb48e17318e2175ab1270',
    callbackURL: 'https://xero-code-mu.vercel.app/',
  },
  (accessToken, refreshToken, profile, done) => {
    return done(null, profile);
  }
)
);

// Google OAuth
passport.use(
new GoogleStrategy(
  {
    clientID: '710348206492-9gdc36svki4qf7cdmj9aae20k5kgh7io.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: 'https://xero-code-mu.vercel.app/',
  },
  (accessToken, refreshToken, profile, done) => {
    return done(null, profile);
  }
)
);

// JWT Authentication Middleware
const generateToken = (user) => {
return jwt.sign({ userId: user._id }, 'asdfghjkl', { expiresIn: '1h' });
};

const authenticateToken = (req, res, next) => {
const token = req.headers['authorization'];

if (!token) {
  return res.sendStatus(401);
}

jwt.verify(token, 'asdfghjkl', (err, user) => {
  if (err) {
    return res.sendStatus(403);
  }

  req.user = user;
  next();
});
};

// Express Middleware
app.use(express.json());
app.use(passport.initialize());

// GitHub Auth Routes
app.get('/auth/github', passport.authenticate('github'));
app.get('/auth/github/callback', passport.authenticate('github', { failureRedirect: '/' }), (req, res) => {
// Successful authentication, redirect or respond as needed
const token = generateToken(req.user);
client.set(token, req.user.id.toString());
res.redirect('/');
});

// Google Auth Routes
app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
// Successful authentication, redirect or respond as needed
const token = generateToken(req.user);
client.set(token, req.user.id.toString());
res.redirect('/');
});
// Update the sign-up route to use hashed passwords
app.post('/signup', async (req, res) => {
const { username, email, password } = req.body;
try {
  const user = new User({ username, email, password });
  await user.save();

  const token = generateToken(user);
  client.set(token, user._id.toString());

  res.json({ token });
} catch (error) {
  console.error(error);
  res.status(500).json({ error: 'Internal Server Error' });
}
});

// Update the sign-in route to verify hashed passwords
app.post('/signin', async (req, res) => {
const { email, password } = req.body;
try {
  const user = await User.findOne({ email });

  if (!user) {
    return res.sendStatus(401);
  }

  const isPasswordValid = await user.comparePassword(password);

  if (!isPasswordValid) {
    return res.sendStatus(401);
  }

  const token = generateToken(user);
  client.set(token, user._id.toString());

  res.json({ token });
} catch (error) {
  console.error(error);
  res.status(500).json({ error: 'Internal Server Error' });
}
});
// Start the Server
const PORT = 3000;
app.listen(PORT, () => {
console.log(`Server is running on http://localhost:${PORT}`);
});