# 📘 Orchestrator 

This repository is an orchestrator coordinating two **microservices:** one for **user authentication (Auth)** and another for **task management with CRUD functionalities**. It is built using **TypeScript** for maintainability, **Axios** for HTTP requests, and employs a **CI/CD pipeline** with **GitHub Actions**. The Docker images are published to the **GitHub Container Registry**

## 🚀 Features

- 📦 **RESTful API**: Clean and reusable API endpoints.
- 🧩 **Modular Code Structure**: Clean and scalable architecture.
- 📄 **Environment Variables**: Configurable via `.env` file.

---

## 📂 Project Structure
```
├── src 
│ ├── controllers # API controllers 
│ ├── environment # environments dev and prod 
│ ├── helpers # Helper functions 
│ │ ├── mappers # mappers
│ │ └── utilities # utilities
│ ├── interfaces # interfaces and types
│ ├── middleware # middlewares
│ ├── routes # Express routes 
│ ├── server # Server entry point 
│ ├── services # API services 
│ │ ├── app.ts # Express app setup 
│ └── index.ts # App configuration
├── .env # Environment variables 
├── tsconfig.json # TypeScript configuration 
├── package.json # Dependencies and scripts 
└── README.md # Project documentation
```
---
## 🛠️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Aanttrax/orchestrator.git
   cd orchestrator
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables: Create a .env file in the root directory and add the following:  
   ```javascript
   PORT=3200
   HOST=0.0.0.0
   SERVICE_AUTH=http://localhost:3100/
   SERVICE_TASK=http://localhost:3200/
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
---
## 🔗 API Endpoints

1. Alive
    - GET `/alive`
    - Response:
        ```json
        {
         "success": true,
         "response": "Server online"
        }
        ```
2. User Registration

    - POST `/signup`
    - Request Body:
        ```json
        {
          "userName": "john_doe",
          "password": "prueba",
          "name": "john",
          "lastName": "Doe",
          "email": "john@example.com"
         }
        ```
    - Response:
        ```json
        {
          "success": true,
          "response": "user created"
        }
        ```
    - Headers:
        ```json
        "auth-token": "*laksjflieuaksjdhfknclkasjhfeiuhakjfaeh;f;s"
        ```
3. User Login
    - POST `/signin`
    - Request Body:
        ```json
        {
         "email": "Halie.Collins@yahoo.com",
         "password": "prueba"
        }
        ```
    - Response:
        ```json
        {
         "success": true,
         "response": "logged-in user"
        }
        ```
    - Headers:
        ```json
        "auth-token": "*laksjflieuaksjdhfknclkasjhfeiuhakjfaeh;f;s"
        ```
4. Create Task
    - POST `/task`
    - Headers:
        ```json
        "auth-token": "*laksjflieuaksjdhfknclkasjhfeiuhakjfaeh;f;s"
        ```
    - Request Body:
        ```json
        {
          "title": "new Task",
          "description": "description of the task"
         }
        ```
    - Response:
        ```json
        {
          "success": true,
          "response": "Task Created"
        }
        ```
5. Get Tasks
    - GET `/task`
    - Headers:
        ```json
        "auth-token": "*laksjflieuaksjdhfknclkasjhfeiuhakjfaeh;f;s"
        ```
    - Response:
        ```json
        {
         "success": true,
         "response": [
            {
              "_id": "674a1d6735166960a3dac662",
              "title": ".......",
              "description": "....",
              "done": false,
            }
         ]
        }
        ```
6. Get Task by Id
    - GET `/task/:taskId`
    - Headers:
        ```json
        "auth-token": "*laksjflieuaksjdhfknclkasjhfeiuhakjfaeh;f;s"
        ```
    - Response:
        ```json
        {
         "success": true,
         "response": 
            {
              "_id": "674a1d6735166960a3dac662",
              "title": ".......",
              "description": "....",
              "done": false,
            }
        }
        ```
7. Update Task by Id
    - PUT `/task/:taskId`
    - Headers:
        ```json
        "auth-token": "*laksjflieuaksjdhfknclkasjhfeiuhakjfaeh;f;s"
        ```
    - Request Body:
        ```json
        {
          "title": "new Task",
          "description": "description of the task",
          "done": true
         }
        ```
    - Response:
        ```json
        {
          "success": true,
          "response": "Task Updated"
        }
        ```
8. Delete Task by Id
    - DELETE `/task/:taskId`
    - Headers:
        ```json
        "auth-token": "*laksjflieuaksjdhfknclkasjhfeiuhakjfaeh;f;s"
        ```
    - Response:
        ```json
        {
         "success": true,
         "response": "Task Deleted"
        }
        ```
---
## 🤝 Contributing

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Create a pull request.

## 🌟 Acknowledgements

- Express.js - Web framework for Node.js.
- TypeScript - Typed JavaScript at any scale.
- Axios - HTTP requests for modern applications.

## 📜 License
This project is licensed under the MIT License. See the LICENSE file for details.

