import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser';
import UsersController from './controllers/Users.js'
import ProductsController from './controllers/Products.js'
import TypesController from './controllers/Types.js'
import BrandsController from './controllers/Brands.js'
import OrdersController from './controllers/Orders.js'

let app = express();
let port = process.env.PORT || 3004;

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: false
}));


app.use('/api/users', UsersController);
app.use('/api/products', ProductsController);
app.use('/api/types', TypesController);
app.use('/api/brands', BrandsController);
app.use('/api/orders',OrdersController)

app.listen(port, async () => {
    console.log('\x1b[36m', 'Exordium server is running on port: ' + port);
})