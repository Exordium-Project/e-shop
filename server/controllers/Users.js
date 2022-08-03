import express, { query } from "express"

import jwt from "jsonwebtoken"
import bcrypt from 'bcrypt'

import UserService from "../services/UserService.js"
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
    await UserService.registerUser(userData)
    res.json(userData)
})
usersController.post('/check-email/:email', async (req, res) => {
    await User.findOne({
        where: {
            email: req.body.email
        }
    }).then(async (email) => {
        if(!email){
           return res.status(401).json({msg: 'Email not found'})
        }
        let isMatch = bcrypt.compareSync(req.body.password, email.password)
        if (!isMatch) {
            res.status(401).json({ msg: 'Invalid password' })
        } else {
            res.status(200).send('Welcome back User :)')
        }
    })
})

usersController.post("/check-username/:username", async (req, res) => {
    await User.findOne({
        where: {
            username: req.body.username
        }
    }).then(async (username) => {
        if(!username) return res.status(401).json({msg: 'Username not found'})
        let isMatch = bcrypt.compareSync(req.body.password, username.password)
        if (!isMatch) {
            res.status(401).json({ msg: 'Invalid password' })
        } else {
            res.status(200).send('Welcome back User :)')
        }
    })
})

usersController.post('/token', async (req, res) => {
    const token = await UserService.generateToken(req.body.email)

    if (token) {
        res.send(token)
    }
})

usersController.get('/', async (req, res) => {
    const users = await UserService.getAllUsers()

    res.send(users)
})


usersController.put('/avatar', async (req, res) => {
    const isSuccessfull = await UserService.changeAvatar(req.body.id, req.body.profile_img)
    res.send(isSuccessfull)
})

usersController.post("/password", async (req, res) => {
    await UserService.changePassword(req.body.email, req.body.password, req.body.new_password)
})

usersController.get('/user-info/{id}', async (req, res) => {
    const user = await UserService.getUser(req.body.id)

    res.send(user)
})



export default usersController 