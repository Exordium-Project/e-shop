import express from "express";
import jwt from "jsonwebtoken"
import bcrypt from 'bcrypt'
import UserService from "../services/UserService.js";
import { checkProvidedData } from './validationData.js';

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
    checkProvidedData(userData);
    await UserService.registerUser(userData)
    res.json(userData)
})

usersController.get("/login", async (req, res) => {
    const userData = {
        username: req.body.username,
        password: req.body.password,
    }

    checkProvidedData(userData)
    const isLoggedIn = await UserService.login(userData)

    if(isLoggedIn) {
        res.status(200).send({
            message: "You logged in",
        })
    } else{
        res.status(404).send({
            message: "Invalid credentials",
        })
    }
})

usersController.post('/token', async (req, res) => {
    const token = await UserService.generateToken(req.body.email,req)

    if(token) {
        res.send(token)
    }
})

usersController.get('/', async (req, res) => {
    const { role, id } = req.body
    const user =  await UserService.getUser(id);

    if(role !== 'admin' && user.role !== 'admin') {
       res.status(401).send({
        message: "You don't have permission to do this",
       })
    }

    const users = await UserService.getAllUsers()

    res.send(users)
})


usersController.put('/avatar', async (req, res) => {
    const isSuccessfull = await UserService.changeAvatar(req.body.id, req.body.profile_img)
    res.send(isSuccessfull)
})

usersController.post("/password", async (req, res) => {
    await UserService.changePassword(req.body.email, req.body.password, req.body.new_password,req)
})

usersController.get('/user-info/{id}', async (req, res) => {
    const user = await UserService.getUser(req.body.id)

    res.send(user)
})


export default usersController 