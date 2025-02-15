require('dotenv').config()
const bodyParser = require('body-parser')
const express = require('express')
const mongoose = require('mongoose')
const publicRoutes = require('./routes/public')
const protectedRoutes = require('./routes/protected')
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const uploadDir = path.join(__dirname, 'uploads');

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const app = express();

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(( req, res, next ) => {
    console.log(req.path, req.method)
    next();
})

const allowedOrigins = ['http://localhost:3000', 'http://localhost:3001', 'http://localhost:5173'];
app.use(cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    }
  }));

app.use('/api', publicRoutes);
app.use('/api/protected', protectedRoutes);

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('connected to db & listening on port', process.env.PORT)
        })
    })
    .catch(err => {
        console.log(err)
    })

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: err.message });
});