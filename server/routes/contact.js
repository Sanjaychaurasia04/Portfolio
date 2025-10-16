const express = require('express');
const router = express.Router();
const Message = require('../models/Message');


// POST /api/contact
router.post('/', async (req, res) => {
try {
const { name, email, message } = req.body;
if (!name || !email || !message) return res.status(400).json({ error: 'Missing fields' });


const m = new Message({ name, email, message });
await m.save();


// OPTIONAL: send email to ADMIN_EMAIL using a mailer here (nodemailer)


res.status(201).json({ message: 'Message received' });
} catch (err) {
res.status(500).json({ error: 'Server error' });
}
});


module.exports = router;