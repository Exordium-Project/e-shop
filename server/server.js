let express = require('express');
let cors = require('cors');
let bodyParser = require('body-parser');
let app = express();
let port = process.env.PORT || 3004;
let server = require('http').Server(app);

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

let Controllers = require('./controllers/routes/index.routes');

app.use('/api/users', Controllers.Users);
app.use('/api/products', Controllers.Products);
app.use('/api/types', Controllers.Types);
app.use('/api/brands', Controllers.Brands);

server.listen(port, async () => {
    console.log('\x1b[36m', 'Exordium server is running on port: ' + port);
})