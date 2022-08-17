# Exordium E-shop
This is an all purpose e-shop practice project, maintain by a group of highly motivated young developers.

## Client
The client app is a React 18 JavaScript project, using MUI React components.

## Server 
The server application is a Node JS application.

### Local setup
1. Start the MySQL database containter with Docker locally
  
    1.1 **folder /compose**  ```docker-compose up -d```

    1.2.1 Open Postman
    
    1.2.2 From hamburger menu in the top left corner "File -> import" select **database / mock_data_brands-types-products.postman_collection.json**
    
    1.2.3 In Postman right click on the loaded mock_data collection and click run collection
    
    The mock data should be now loaded to the database


2. Start the server application
    
    2.1 Install depdencenies
    
    **folder /server**  ```npm install```

    2.2 Start server in development mode
    
    **folder /server**  ```npm start``` 



