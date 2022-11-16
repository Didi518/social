require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/connexion');
const { logger, logEvents } = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const cookieParser = require('cookie-parser');
const path = require('path');

console.log(process.env.NODE_ENV);

connectDB();

const app = express();

app.use(logger);

app.use(cors(corsOptions));

app.use(express.json());

app.use(cookieParser());

app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/', require('./routes/root'));
app.use('/api/user', require('./routes/userRoutes'));
app.use('/api/post', require('./routes/postRoutes'));

app.all('*', (req, res) => {
  res.status(404);
  if (req.accepts('html')) {
    res.sendFile(path.join(__dirname, 'views', '404.html'));
  } else if (req.accepts('json')) {
    res.json({ message: '404 Introuvable' });
  } else {
    res.type('txt').send('404 Introuvable');
  }
});

app.use(errorHandler);

mongoose.connection.once('open', () => {
  console.log('MongoDB connecté');
  app.listen(process.env.PORT, () =>
    console.log(`Serveur connecté sur le port : ${process.env.PORT}`)
  );
});

mongoose.connection.on('error', (e) => {
  console.log(e);
  logEvents(
    `${e.no}: ${e.code}\t${e.syscall}\t${e.hostname}`,
    'mongoErrLog.log'
  );
});
