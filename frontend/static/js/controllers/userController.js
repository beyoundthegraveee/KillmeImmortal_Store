const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const User = require('../models/User');

exports.registerUser = (req, res) => {
    const { username, email, password } = req.body;

    const filePath = path.join(__dirname, '../../data/Users.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return res.status(500).send('Internal Server Error');
        }

        let users = [];
        if (data) {
            users = JSON.parse(data);
        }
        const existingUserByUsername = users.find(user => user.username === username);
        if (existingUserByUsername) {
            return res.status(400).send('Username is already taken!');
        }
        const existingUserByEmail = users.find(user => user.email === email);
        if (existingUserByEmail) {
            return res.status(400).send('User with this email already exists!');
        }
        bcrypt.hash(password, 10, (err, hashedPassword) => {
            if (err) {
                console.error('Error hashing password:', err);
                return res.status(500).send('Internal Server Error');
            }

            let newId = users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 1;

            const newUser = new User(newId, username, email, hashedPassword);
            users.push(newUser);
            fs.writeFile(filePath, JSON.stringify(users, null, 2), (err) => {
                if (err) {
                    console.error('Error writing to file:', err);
                    return res.status(500).send('Internal Server Error');
                }

                req.session.isAuthenticated = true;
                req.session.username = username;
                res.redirect('/home?message=registered');
            });
        });
    });
};

exports.loginUser = (req, res) => {
    const { username, email, password } = req.body;
    const filePath = path.join(__dirname, '../../data/Users.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return res.status(500).send('Internal Server Error');
        }

        let users = [];
        if (data) {
            users = JSON.parse(data);
        }

        const user = users.find(u => u.username === username);
        if (!user) {
            return res.status(404).send('User not found!');
        }
        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) {
                console.error('Error comparing password:', err);
                return res.status(500).send('Internal Server Error');
            }

            if (!isMatch) {
                return res.status(401).send('Invalid password!');
            }

            
            req.session.isAuthenticated = true;
            req.session.username = username;
            res.redirect('/home?message=loggedin');
        });
    });
};