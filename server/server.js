import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import passport from 'passport'
import session from 'express-session'
import cookieParser from 'cookie-parser'
import LocalStrategy from 'passport-local'
import UsersController from './controllers/Users.js'
import ProductsController from './controllers/Products.js'
import TypesController from './controllers/Types.js'
import BrandsController from './controllers/Brands.js'
import User from './models/User.js'

let app = express();
let port = process.env.PORT || 3004;

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser())

const sessionConfig = {
    secret: 'thisshouldbeabettersecret!',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}

app.use(session(sessionConfig));
app.use(passport.initialize());
app.use(passport.session());
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use('/api/users', UsersController);
app.use('/api/products', ProductsController);
app.use('/api/types', TypesController);
app.use('/api/brands', BrandsController);

app.listen(port, async () => {
    console.log('\x1b[36m', 'Exordium server is running on port: ' + port);
})