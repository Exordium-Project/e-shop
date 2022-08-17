import express, { query } from "express"

import jwt from "jsonwebtoken"
import bcrypt from 'bcrypt'

import UserService from "../services/UserService.js"

const usersController = express.Router()
usersController.post('/registration', async (req, res) => {
    const userData = {
        username: req.body.username.toLowerCase(),
        password: req.body.password,
        email: req.body.email.toLowerCase(),
        full_name: req.body.full_name,
        profile_img: req.body.profile_img,
        date_on_creating: req.body.date_on_creating,
        date_of_last_modified: req.body.date_of_last_modified,
        role: req.body.role,
    }
    await UserService.registerUser(userData)
    res.json(userData)
})
usersController.get('/usernameOrEmail/:usernameOrEmail/', async (req, res) => {
    const response = await UserService.checkUsernameOrEmail(req.params['usernameOrEmail'].toLowerCase(), res);
    res.json(response);
})
usersController.post("/login", async (req, res) => {
    const userData = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    }

    await UserService.login(userData, res)
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