const express = require('express');
const mongoose = require('mongoose');
require('./services/passport');
const keys = require('./config/keys');

const app = express();

require('./routes/authRoutes')(app);
mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
