const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

const app = express();

require('./routes/authRoutes')(app);

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
mongoose.connect(keys.mongoURI, options);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
