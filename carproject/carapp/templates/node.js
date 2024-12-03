const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const app = express();

app.use(bodyParser.json());

mongoose.connect('your-mongodb-atlas-connection-string', { useNewUrlParser: true, useUnifiedTopology: true });

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

app.post('/signup', async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        await User.create({ username, password: hashedPassword });
        res.json({ message: 'User created' });
    } catch (error) {
        res.status(400).json({ message: 'Error creating user' });
    }
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (user && await bcrypt.compare(password, user.password)) {
        res.json({ message: 'Login successful' });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
