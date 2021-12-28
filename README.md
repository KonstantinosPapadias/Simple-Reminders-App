# Description
Really simple and basic reminders/todos full stack web application made with the **MERN** stack.

## Technologies used: 
* **MongoDB**
* **Express.js**
* **React.js**
* **Node.js**

## Authentication
Server side authentication with **Passport.js** and express-session.

## Architecture
The application consists of an express web server (server folder) and a react app (client folder).

* The express web server follows the MVC architecture and exposes a REST api for CRUD operations on reminders/todos.

* The react app/client makes calls to the api and displays the appropriate data.

## Todo
* Create the update reminder api business logic and call it with some type of form when clicking a reminder component from the frontend.