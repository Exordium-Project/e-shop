import express from "express"

import jwt from "jsonwebtoken"
import bcrypt from 'bcrypt'

import User from '../models/User.js'

const usersController = express.Router()

usersController.post('/registration', async (req, res) => {
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

    const user = await User.findOne({
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

usersController.get("/login", async (req, res) => {
    const userData = {
        username: req.body.username,
        password: req.body.password
    }

    const user = await User.findOne({
        where: {
            email: userData.username
        }
    })

    if(!user){
        res.status(404).send({
            message: "Invalid credentials"
        })
    }

    const isLoggedIn = await bcrypt.compare(userData.password, user.password)

    if(isLoggedIn) {
        res.status(200).send({
            message: "You logged in"
        })
    } else{
        res.status(404).send({
            message: "Invalid credentials"
        })
    }
})

usersController.post('/token', (req, res) => {
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

usersController.get('/', (req, res) => {
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


usersController.put('/avatar', (req, res) => {
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

usersController.post("/password", (req, res) => {
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

usersController.get('/user-info/{id}', (req, res) => {
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


export default usersController 