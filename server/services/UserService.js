import jwt from "jsonwebtoken"
import bcrypt from 'bcrypt'
import User from "../models/User.js"
import Error from "../error/Error.js"
import dotenv from 'dotenv'
dotenv.config();
export default class UserService {
    static async registerUser(userData) {
        const user = await User.findOne({
            where: {
                email: userData.email
            }
        }).catch(error => {
            console.log(error)
            return new Error(500, error.message)
        })

        if (user) {
            return new Error(409, "User exists")
        }

        const isPasswordValid = userData.password.match(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/)
        if (isPasswordValid === null) {
            return new Error(400, "Weak password")
        }

        const hash = await bcrypt.hash(userData.password, 10);
        userData.password = hash;
        const newUser = User.create(userData)
        return newUser;
    }
    static async checkUsername(req, res) {
        await User.findOne({
            where: {
                username: req.params["username"],   
            }
        }).then(async (user) => {
            if(!user) return res.status(404).json({msg: "Username was not found in our database."})
        })
    }
    static async login(userData, res) {
        const user = await User.findOne({
            where: {
                username: userData.username
            }
        })

        if (!user) {
            return res.status(404).send('User not found')
        }

        const isLoggedIn = await bcrypt.compare(userData.password, user.password)
        if(isLoggedIn) {
            res.status(200).send({
                message: 'Welcome back'
            })
        } else{
            res.status(404).send({
                message: "Invalid credentials"
            })
        }

        return isLoggedIn
    }

    static async checkEmail(req, res) {
        await User.findOne({
            where: {
                email: req.params["email"]
            }
        }).then(async (user) => {
            if(!user) return res.status(404).json({msg: `Email was not found in our database.`});
            else res.status(200).send(`Welcome back, ${user.email}`);
        })
    }
    static async generateToken(userEmail) {
        const user = User.findOne({
            where: {
                email: userEmail
            }
        }).catch(error => {
            return new Error(500, error.message)
        })

        if (!user) {
            return new Error(404, "User not found")
        }
        if (bcrypt.compareSync(req.body.password, user.password)) {
            let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
                expiresIn: 1440
            })

            return token
        } else {
            return new Error(400, "Invaid data")
        }
    }

    static async getAllUsers() {
        const users = User.findAll({
            attributes: ['id', 'username', 'email', 'full_name', 'profile_img', 'date_on_creating', 'date_of_last_modified', 'role'],
        }).catch(error => {
            return new Error(500, error.message)
        })

        return users;
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
                return new Error(500, error.message)
            })
    }

    static async changePassword(userEmail, oldPassword, newPassword) {
        const user = User.findOne({
            where: {
                email: userEmail
            }
        })

        if (!user) {
            return new Error(404, "User not found")
        }

        if (bcrypt.compareSync(oldPassword, newPassword)) {
            bcrypt.hash(req.body.new_password, SALT_ROUNDS, (err, hash) => {
                req.body.new_password = hash
                const updatedRecord = User.update(
                    {
                        password: newPassword
                    },
                    {
                        where: {
                            email: userEmail
                        }
                    }
                ).catch(error => {
                    return new Error(500, error.message)
                })

                if (updatedRecord)
                    return true;
            })
        }
    }

    static async getUser(userId) {
        const user = User.findAll({
            attributes: ['id', 'username', 'email', 'full_name', 'profile_img', 'date_on_creating', 'date_of_last_modified', 'role'],
            where: {
                id: userId
            }
        }).catch(error => {
            return new Error(404, "User not found")
        })

        return user;
    }
    static async checkUsername(username) {
        const userEmail = User.findAll({
            attributes: ['email'],
            where: {
                id: username
            }
        }).catch(error => { })
        if (!userEmail) {
            const userUsername = User.findAll({
                attributes: ['username'],
                where: {
                    id: username
                }
            }).catch(error => { })
            if (userUsername) {
                return true;
            }
        } else {
            return true;
        }

        return false;
    }
}