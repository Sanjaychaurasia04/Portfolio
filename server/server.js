require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const projectsRoute = require('./routes/projects');
const contactRoute = require('./routes/contact');


const app = express();
app.use(cors());
app.use(express.json());


app.use('/api/projects', projectsRoute);
app.use('/api/contact', contactRoute);


const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/portfolio';


mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
console.log('MongoDB connected');
app.listen(PORT, () => console.log('Server listening on', PORT));
})
.catch(err => console.error(err));


// simple root
app.get('/', (req, res) => res.send('MERN Portfolio API running'));