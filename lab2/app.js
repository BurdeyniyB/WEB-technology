const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/login', (req, res) => res.sendFile(path.join(__dirname, 'views/login.html')));
app.get('/register', (req, res) => res.sendFile(path.join(__dirname, 'views/register.html')));
app.get('/feedback', (req, res) => res.sendFile(path.join(__dirname, 'views/feedback.html')));

app.post('/feedback', (req, res) => {
    const feedback = req.body.feedback;
    console.log('Feedback submitted:', feedback);
    res.redirect('/feedback');
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));