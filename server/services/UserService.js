import jwt from "jsonwebtoken"
import bcrypt from 'bcrypt'
import User from "../models/User.js"

export default class UserService {
    static async registerUser (userData) {
        const user = await User.findOne({
            where: {
                email: userData.email
            }
        })
        .then(user => {
            if (!user) {
                const isPasswordValid = userData.password.match(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/)
                if(isPasswordValid === null) {
                    return false
                }
                bcrypt.hash(userData.password, 10, (err, hash) => {
                    userData.password = hash
                    User.create(userData)
                    .then(user => {
                        return true
                    })
                    .catch(err => {
                        res.send('error: ' + err)
                    })
                })
            } else {
                res.json({ error: "User exists" })
            }
        })
        .catch(err => {
            res.send('error: ' + err)
        })
    }

    static async login (userData) {
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
    
        return isLoggedIn
    }

    static async generateToken (userEmail) {
        User.findOne({
            where: {
                email: userEmail
            }
        })
        .then(user => {
            if (user) {
                if (bcrypt.compareSync(req.body.password, user.password)) {
                    let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
                        expiresIn: 1440
                    })
                    return token
                }
                else {
                    res.send("Invalid data")
                }
            } else {
                res.send("Invalid data")
            }
        })
        .catch(err => {
            res.status(400).send({ error: err })
        })
    }

    static async getAllUsers() {
        User.findAll({
            attributes: ['id', 'username', 'email', 'full_name', 'profile_img', 'date_on_creating', 'date_of_last_modified', 'role'],
        })
        .then(users => {
            return users
        })
        .catch(err => {
            res.status(400).send({ error: err })
        })
    }

    static async changeAvatar(userId, img_url) {
        User.update(
            {
                profile_img: img_url
            },
            {
                where: {
                    id: userId
                }
            })
            .then(user => {
                return true
            })
            .catch(err => {
                res.json(err)
            })
    }

    static async changePassword(userEmail, oldPassword, newPassword) {
        User.findOne({
            where: {
                email: userEmail
            }
        })
        .then(user => {
            if (user) {
                if (bcrypt.compareSync(oldPassword, newPassword)) {
                    bcrypt.hash(req.body.new_password, 10, (err, hash) => {
                        req.body.new_password = hash
                        User.update(
                        {
                            password: newPassword
                        },
                        {
                            where: {
                                email: userEmail
                            }
                        })
                        .then(updatedRecord => {
                            if (updatedRecord) {
                                res.send("Password changed successfully")
                                res.json(updatedRecord)
                            }
                        })
                        .catch(err => {
                            res.json(err)
                        })
                    })
                }
                else {
                    res.send("Invalid credentials")
                    res.end()
                }
            } else {
                res.send("Invalid credentials")
                res.end()
            }
        })
        .catch(err => {
            res.status(400).send({ error: err })
        })
    }

    static async getUser(userId) {
        User.findAll({
            attributes: ['id', 'username', 'email', 'full_name', 'profile_img', 'date_on_creating', 'date_of_last_modified', 'role'],
            where: {
                id: userId
            }
        })
        .then(user => {
            if (user) {
                res.json(user)
            } else {
                res.send("Wrong data")
            }
        })
        .catch(err => {
            res.send('error:' + err)
        })
    }
}