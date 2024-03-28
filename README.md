## RESTaurantAPI
This is a web application designed to help restaurants efficiently manage their table reservations.
Besides that, customers also can reserve tables in specific restaurants.
Restaurants can check the user's details (phone number, email, name) who reserved the table.
Restaurant owners can also update the pieces of information about the restaurant.

As a customer, you can reserve tables at restaurants, by amount of seats you would like to reserve.
You can also check your reservations with restaurant details included (email, number of guests, phone number).
You can cancel your reservation as well.

# Technologies
- Node.js
- Express.js
- React.js
- MongoDB
- Mongoose

# Overview
For the project, we used MERN stack. In the frontend we used React with React-router to navigate easily through different pages.
In the backend, we used Node with Express to handle our requests and responses to the client side.
We used MongoDB with Mongoose to help our connection and CRUD operations with the database for storage.

## Installation

1. Clone the repository
2. Install server dependencies
    - Navigate to the server folder
        - cd .\server\
    - Install dependencies with the `npm install` command
3. Add database connection
    - Navigate to the server folder (like in the previous step)
    - Create a .env file based on the .env.sample file
    - Insert your MongoDB connection URL

4. Start server
    - Navigate to the server folder (like in the previous step)
    - Start the server with the `npm run dev` command
5. Install frontend dependencies
    - Navigate to the client folder
        - cd .\client\
    - Install dependencies with the `npm install` command
6. Start frontend server
    - Navigate to the client folder (like in the previous step)
    - Start the client-server with the `npm run dev` command
7. Visit `http://localhost:5173` in your web browser to access the app.
