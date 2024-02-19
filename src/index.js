const express = require('express');
const groceriesRoute = require('./routes/groceries');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const authRoute = require('./routes/auth');
const cors = require('cors');

const app = express();
const PORT = 8080;

require('./database');
app.use(cookieParser());
app.use(
  session({
    secret: 'ADKJASJKDSAKJDSAKJDS',
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 60 * 60 * 1000,
      secure: false,
      httpOnly: true,
    },
  })
);

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());

app.use('/api/v1/auth', authRoute);

app.use((req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.status(401).json({ error: 'Unauthorized' });
  }
});

app.use('/api/v1/groceries', groceriesRoute);

app.listen(PORT, () => console.log(`Running Express On Port ${PORT}!`));
