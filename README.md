# Exordium E-shop
This is an all purpose e-shop practice project, maintain by a group of highly motivated young developers.

## Tech stack
The client app is a React 18 JavaScript project, using MUI React components. 

The server application is a Node JS application. ExpressJS framework.  
MySQL / Sequelize (Sequelize is a modern TypeScript and Node.js ORM for Oracle, Postgres, MySQL, MariaDB, SQLite and SQL Server, and more.) 

Database is loaded by Docker container locally.

<img src="./img/mui.png?w=200" alt="react mui" width="200"><img src="./img/Expressjs.svg?w=200" alt="express js" width="200"><img src="./img/sequalize.jpeg" alt="sequalize" width="200"><img src="./img/docker.png" alt="docker" width="200">

## Local setup
```
1. Start the MySQL database containter with Docker locally    
1.1 folder /compose  docker-compose up -d
1.2 Run SQL script from /database folder
2. Create mock data
2.1 Open Postman
2.2 From hamburger menu in the top left corner
 "File -> import" select collection 
 folder database/mock_data_brands-types-products.postman_collection.json
2.3 In Postman right click on the loaded mock_data collection and click run collection
>The mock data should be now loaded to the database
3. Start the server application
3.1 Install dependencies folder /server -> npm install
3.2 Start server in development mode folder /server -> npm start
4. Start the client application
4.1 Install dependencies folder /client -> npm install
4.2 Start client in development mode folder /client -> npm start
```

## Demo screenshots of the e-shop project

#### Main page
<img src="./img/mainpage.png" alt="main" width="1000"> 

#### Footer
<img src="./img/mainpage2.png" alt="mainpage2" width="1000">

#### Product Detail
<img src="./img/productpage.png" alt="productpage" width="1000">

#### Tech catalog
<img src="./img/tech_catalog.png" alt="tech_catalog" width="1000">

#### Clothing catalog
<img src="./img/clothing_catalog.png" alt="clothing_catalog" width="1000">

#### Add to cart action
<img src="./img/addcart_mainpage.png" alt="addcart_mainpage" width="1000">

#### Cart page
<img src="./img/cart_page.png" alt="cart_page" width="1000">

#### Sign up page
<img src="./img/signup.png" alt="signup" width="1000">

#### Sign in page
<img src="./img/signin.png" alt="signin" width="1000">

#### Team page
<img src="./img/team.png" alt="team" width="1000">
