require('dotenv').config();
const mongoose = require('mongoose');
const Project = require('./models/Project');


const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/portfolio';


const data = [
{
title: 'Personal Portfolio Website',
description: 'A responsive portfolio built with MERN stack.',
technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
demoUrl: '',
repoUrl: '',
image: ''
},
{
title: 'Chat App',
description: 'Realtime chat using Socket.io',
technologies: ['Node.js', 'Socket.io', 'React']
}
];


mongoose.connect(MONGO_URI)
.then(async () => {
await Project.deleteMany({});
await Project.insertMany(data);
console.log('Seeded projects');
process.exit(0);
})
.catch(err => console.error(err));