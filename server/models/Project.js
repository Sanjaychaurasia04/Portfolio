const mongoose = require('mongoose');


const ProjectSchema = new mongoose.Schema({
title: { type: String, required: true },
description: String,
technologies: [String],
demoUrl: String,
repoUrl: String,
image: String,
createdAt: { type: Date, default: Date.now }
});


module.exports = mongoose.model('Project', ProjectSchema);