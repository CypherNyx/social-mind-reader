# Social Mind Reader 🧠
> Module 18 - NoSQL Challenge: Social Network API

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A social network API built with Node.js, Express, MongoDB and Mongoose.Users can share their thoughts, react to friends’ thoughts, and create a friend list.. 

[![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Mongoose ODM](https://img.shields.io/badge/-Mongoose_ODM-47A248?style=for-the-badge)](https://mongoosejs.com/)
[![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)](https://www.javascript.com/)
[![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge)](https://expressjs.com/)


## Table of Contents
  * [Demo](#demo)
  * [Description](#description-📖)
  * [Features](#features-✨)
  * [Installation](#installation-💾)
  * [Routes](#routes-🛣)
  * [Technologies](#technologies-🛠️)
  * [Contributing](#contributing)
  * [License](#license)
  * [Questions](#questions)
<br><br>

## Demo
To see how the API works using Insomnia, see the walk-through demonstration video here: 
[Link to video Demo ➡️](#)


## Description 📖
This API allows users to share thoughts, react to friends' thoughts, and create a friend list. It uses a non-relational MongoDB database and Mongoose ODM to model the data.

## Features ✨
- 👥 Sign up and login to your user account (username, email, and password)
- 🤝 Add and remove friend relationships between users
- 💭 Create, update, get, and delete thoughts
- 👍 Create and delete reactions to thoughts
- 🛣 Uses Mongoose models and controllers for RESTful API structure


## Installation 💾

To use this API first, you'll need to have Node.js installed on your computer. Once you have Node.js set up, you can follow these steps to install and use the application:

1. Clone this GitHub repository to your local machine. <br> 
```sh
git clone https://github.com/CypherNyx/social-mind-reader.git
```
2. Open a terminal or command prompt and navigate to the cloned repository's directory.
3. Run the install command in your terminal
```
npm install
``` 
4. After installing all necessary dependencies, Start your server by running this command on your terminal: 
```
npm start
```
5. The server will start on port 3001. Routes can be tested in a Insomnia, Postman or the REST client of your choice.

## Routes 🛣
The following API CRUD routes have been created to **find, create, update, or delete** users, friends, thoughts, and reactions in the user's database.

### 📁 User Routes
> /api/users

- 👥 Find all users:        ```GET /api/users```
- 🆕 Create new user:        ```POST /api/users```
- 🔎 Find user by Id:       ```GET /api/users/:userId```
- ✏️ Update user by Id:        ```PUT /api/users/:userId```
- 🗑 Delete user by Id:       ```DELETE /api/users/:userId```
- 🤝 Add a friend:         ```POST /api/users/:userId/friends/:friendId```
- 👋 Delete a friend:      ```DELETE /api/users/:userId/friends/:friendId```

### 📁 Thought Routes
> /api/thoughts

- 💬 Find all thoughts:     ```GET /api/thoughts```
- 🆕 Create new thought:     ```POST /api/thoughts```
- 🔎 Find thought by Id:    ```GET /api/thoughts/:thoughtId```
- ✏️ Update thought by Id:     ```PUT /api/thoughts/:thoughtId```
- 🗑 Delete a thought by Id:     ```DELETE /api/thoughts/:thoughtId```

### 📁 Reaction Routes
> /api/reactions

- 👍 Add a reaction:       ```POST /api/thoughts/:id/reactions```
- 🗑 Delete a reaction:    ```DELETE /api/thoughts/:id/reactions```


## Technologies 🛠️: 
 - JavaScript
 - Node.js
 - Express.js
 - MongoDB
 - Mongoose ODM
<br>
<br>

## Contributing
Pull requests are welcome. Please open an issue first to discuss any proposed changes or additions.
<br>

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  
  https://opensource.org/licenses/MIT <br> 
  This project is open source and available under the MIT License.

<br>

  ## Questions
  GitHub [CypherNyx](https://github.com/CypherNyx)<br>
  Email: dguido.dev@gmail.com