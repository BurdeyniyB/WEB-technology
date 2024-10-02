const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/index', (req, res) => res.sendFile(path.join(__dirname, 'views/index.html')))
app.get('/login', (req, res) => res.sendFile(path.join(__dirname, 'views/login.html')));
app.get('/register', (req, res) => res.sendFile(path.join(__dirname, 'views/register.html')));
app.get('/feedback', (req, res) => res.sendFile(path.join(__dirname, 'views/feedback.html')));

app.post('/register', (req, res) =>{
    const username = req.body.username;
    const password = req.body.password;

    if (username && password) {
        console.log('Register:');
        console.log('Username:', username);
        console.log('Password:', password);
        console.log('')
        res.redirect('/login')
    } else {
        res.send('Please provide both username and password.');
    }
});

app.post('/login', (req, res) =>{
    const username = req.body.username;
    const password = req.body.password;

    if (username && password) {
        console.log('Login:');
        console.log('Username:', username);
        console.log('Password:', password);
        res.redirect('/feedback')
    } else {
        res.send('Please provide both username and password.');
    }
});

app.post('/feedback', (req, res) => {
    const feedback = req.body.feedback;
    if (feedback) {
        console.log('Feedback submitted:', feedback);
        res.send('Thank you for your feedback!');
    } else {
        console.log('No feedback received.');
        res.send('No feedback submitted.');
    }
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));