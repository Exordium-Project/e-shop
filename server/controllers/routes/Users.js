const express = require("express")
const users = express.Router()
const cors = require('cors')
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt')

const User = require("../../models/User")
users.use(cors())

users.post('/register', (req, res) => {
    const userData = {
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        full_name: req.body.full_name,
        profile_img: req.body.profile_img,
        date_on_creating: req.body.date_on_creating,
        date_of_last_modified: req.body.date_of_last_modified,
        role: req.body.role,
    }

    User.findOne({
        where: {
            email: req.body.email
        }
    })
    .then(user => {
        if (!user) {
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                userData.password = hash
                User.create(userData)
                .then(user => {
                    res.send(true)
                })
                .catch(err => {
                    res.send('error: ' + err)
                })
            })
        } else {
            res.json({ error: "Такъв потребител вече съществува!" })
        }
    })
    .catch(err => {
        res.send('error: ' + err)
    })
})

users.post('/checkEmail', (req, res) => {
    User.findOne({
        where: {
            email: req.body.email,
        }
    })
    .then(user => {
        if(user) {
            res.send(true)
        } else {
            res.send(false)
        }
    })
})

users.post('/checkForgottenEmail', (req, res) => {
    User.findOne({
        attributes: ['id'],
        where: {
            email: req.body.email,
        }
    })
    .then(user => {
        if(user) {
            let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
                // 60 minutes
                expiresIn: 3600
            })
            res.send({refreshToken: token, UIDU: user.id})
        } else {
            res.send(false)
        }
    })
})

users.post('/resetLogin', (req, res) => {
    User.findOne({
        attributes: ['id'],
        where: {
            id: req.body.uid,
        }
    })
    .then(user => {
        if(user) {
            jwt.verify(req.body.refreshToken, process.env.SECRET_KEY, (value) => {
                res.send(value)
            })
        } else {
            res.send(false)
        }
    })
})

users.post('/checkUsername', (req, res) => {
    User.findOne({
        where: {
            username: req.body.username,
        }
    })
    .then(user => {
        if(user) {
            res.send(true)
        } else {
            res.send(false)
        }
    })
})

users.post('/login', (req, res) => {
    User.findOne({
        where: {
            email: req.body.email,
        }
    })
    .then(user => {
        if (user) {
            if (bcrypt.compareSync(req.body.password, user.password)) {
                let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
                    expiresIn: 1440
                })
                res.send(token)
            }
            else {
                res.send("Въведените данни са грешни!")
            }
        } else {
            res.send("Въведените данни са грешни!")
        }
    })
    .catch(err => {
        res.status(400).send({ error: err })
    })
})

users.get('/getAllUsers', (req, res) => {
    User.findAll({
        attributes: ['id', 'username', 'email', 'full_name', 'profile_img', 'date_on_creating', 'date_of_last_modified', 'role'],
    })
    .then(users => {
        res.send(users)
    })
    .catch(err => {
        res.status(400).send({ error: err })
    })
})


users.put('/updateAvatar', (req, res) => {
    User.update(
    {
        profile_img: req.body.profile_img
    },
    {
        where: {
            id: req.body.id
        }
    })
    .then(user => {
        res.json(user)
    })
    .catch(err => {
        res.json(err)
    })
})

users.post("/updateUserPass", (req, res) => {
    User.findOne({
        where: {
            email: req.body.email,
        }
    })
    .then(user => {
        if (user) {
            if (bcrypt.compareSync(req.body.password, user.password)) {
                bcrypt.hash(req.body.new_password, 10, (err, hash) => {
                    req.body.new_password = hash
                    User.update(
                    {
                        password: req.body.new_password
                    },
                    {
                        where: {
                            id: req.body.id
                        }
                    })
                    .then(updatedRecord => {
                        if (updatedRecord) {
                            res.send("Успешна промяна на парола")
                            res.json(updatedRecord)
                        }
                    })
                    .catch(err => {
                        res.json(err)
                    })
                })
            }
            else {
                res.send("Грешна парола")
                res.end()
            }
        } else {
            res.send("Въведените от вас данни са грешни!")
            res.end()
        }
    })
    .catch(err => {
        res.status(400).send({ error: err })
    })
})

users.get('/getuserinfo', (req, res) => {
    User.findAll({
        attributes: ['id', 'username', 'email', 'full_name', 'profile_img', 'date_on_creating', 'date_of_last_modified', 'role'],
        where: {
            id: req.body.id
        }
    })
    .then(user => {
        if (user) {
            res.json(user)
        } else {
            res.send("Грешни данни!")
        }
    })
    .catch(err => {
        res.send('error:' + err)
    })
})

users.post('/deleteUser', (req, res) => {
    User.destroy({
        attributes: ['id', 'username', 'password', 'email', 'full_name', 'profile_img', 'date_on_creating', 'date_of_last_modified', 'role'],
        where: {
            id: req.body.id
        }
    })
    .then(user => {
        if(user) {
            res.json(user)
        } else {
            res.send("Не съществува такъв запис!")
        }
    })
    .catch(err => {
        res.send('error:' + err)
    })
})

module.exports = users