# SWE Backend Project(backendadmin)

## Overview
This project implements backend for admin's services.

## Technologies
- TypeScript
- Express.js
- Node.js
- MongoDB
- JWT Authentication

## Admin Backend : User Backend Features
- User registration and authentication
- CRUD operations for user notes
- Secure data sharing with Admin Backend

### Key Endpoints
- `POST /auth/register`: User registration
- `POST /auth/login`: User login
- `GET /notes`: Fetch user notes
- `POST /notes`: Create new note
- `PATCH /notes/:id`: Update note
- `DELETE /notes/:id`: Delete note

## backendadmin: Admin Backend Features
- Admin authentication
- User profile management
- Cross-backend data retrieval
- Audit logging

## Setup Instructions
1. Clone the repository
2. Install dependencies in each backend directory
```bash
npm install
```
3. Configure environment variables
   Create a .env.local file in project directory and add the enviroment variable
   ```bash
     - `PORT = 4000 # Replace with your desired port number
     - `MONGO_URL = mongodb+srv://kumarsateesh838:Newkapass1!@cluster0.c4djp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0 # Replace with your own connection string
     - `SECRET_KEY = ufdyw87r84riu34y98r # Replace with your own secret key
     - `BACKENDUSER_URL = http://localhost:9000 #Replace with your backenduser url
   ```
4. Start  backenduser service
```bash
npm run dev
```

### Key Endpoints
- `POST /auth/login`: Admin login
- `GET /users`: Fetch all user profiles
- `GET /users/:id`: Get specific user details
- `DELETE /users/:id`: Delete user profile
- `GET /audit/notes`: Retrieve notes from User Backend

### 1. `POST (http://localhost:4000)/auth/register` - Admin Login

#### Request:
```
{
    "email":"admin@gmail.com",
    "password":"Medocadmin@123"
}
```
#### Response:
```
{
    "message": "Admin sign successfully",
    "username": "admin",
    "email": "admin@gmail.com"
}
```


### 2. `GET (http://localhost:4000)/users` - Get users details

#### Request:
```
hit the url
```
#### Response:
```
[
    {
        "_id": "6793abb97f2e3156561af516",
        "name": "admin",
        "email": "admin@gmail.com",
        "password": "$2a$08$17nLjXMPRG4hu1j4GsU7herfeeR7N0FgyjNxjvRwEx.RXg.0Em5Wa",
        "role": "admin",
        "createdAt": "2025-01-24T15:03:21.453Z",
        "updatedAt": "2025-01-24T15:03:21.453Z",
        "__v": 0
    },
    {
        "_id": "6793dc6bde55a3ac887ee0b1",
        "name": "vivek",
        "email": "vivek838@gmail.com",
        "password": "$2a$08$gNmTTV5WuF5.XV3WZvWA9ux3jg0c.J9WsITDpfo/MDR9zPZhqJb9.",
        "role": "user",
        "createdAt": "2025-01-24T18:31:07.157Z",
        "updatedAt": "2025-01-24T18:31:07.157Z",
        "__v": 0
    },
    {
        "_id": "6793dcbf4d3629ff5e0f9eb4",
        "name": "vivekk",
        "email": "vivekk838@gmail.com",
        "password": "$2a$08$Yk3QrzyQhpmw..mq8ehy3.0ERBfkBnFohNOq9sCCfXFJfXoRQ8Fh2",
        "role": "user",
        "createdAt": "2025-01-24T18:32:31.530Z",
        "updatedAt": "2025-01-24T18:32:31.530Z",
        "__v": 0
    },
    {
        "_id": "6793e1c5c4e8efd6af79d092",
        "name": "sahil",
        "email": "kumarsahil838@gmail.com",
        "password": "$2a$08$rabZ2UdPmj8ZZviXLK6HSeLSgRDTe5KyZAo5QRSYKnvF34Vwp1Wnm",
        "role": "user",
        "createdAt": "2025-01-24T18:53:57.994Z",
        "updatedAt": "2025-01-24T18:53:57.994Z",
        "__v": 0
    },
    {
        "_id": "6793f38616879e6b9935710b",
        "name": "harsh",
        "email": "harsh838@gmail.com",
        "password": "$2a$08$R1i8DSj.iBOO7x9vZcF87uf6O4rykb2Wj.AbEQKWlVFIFujNEO04e",
        "role": "user",
        "createdAt": "2025-01-24T20:09:42.607Z",
        "updatedAt": "2025-01-24T20:09:42.607Z",
        "__v": 0
    }
]
```


### 3. `GET (http://localhost:4000)/users/idoftheuser(6793f38616879e6b9935710b)` - Get specific User's Details

#### Request:
```
hit the url
```
#### Response:
```
{
    "_id": "6793f38616879e6b9935710b",
    "name": "harsh",
    "email": "harsh838@gmail.com",
    "password": "$2a$08$R1i8DSj.iBOO7x9vZcF87uf6O4rykb2Wj.AbEQKWlVFIFujNEO04e",
    "role": "user",
    "createdAt": "2025-01-24T20:09:42.607Z",
    "updatedAt": "2025-01-24T20:09:42.607Z",
    "__v": 0
}
```


### 4. `DELETE (http://localhost:4000)/users/idoftheuser(6793f38616879e6b9935710b)` - Delete specific user

#### Request:
```
hit the url
```
#### Response:
```
no message as delete operation returns no content.
```


### 5. `GET (http://localhost:4000)/audit/notes` - Fetch notes details

#### Request:
```
hit the url
```
#### Response:
```
[
    {
        "_id": "679361df127adf8b990c1887",
        "title": "newupdate",
        "description": "new update just npw",
        "userId": "679355945b705bfbaec3ee24",
        "__v": 0
    },
    {
        "_id": "67936322e545bafd95abb35f",
        "title": "dfvh",
        "description": "dfhgeroihgoergherrhg",
        "userId": "679355945b705bfbaec3ee24",
        "__v": 0
    },
    {
        "_id": "6793dd214d3629ff5e0f9eb6",
        "title": "my city",
        "description": "punjab city",
        "userId": "6793d791622485bd00d0a25e",
        "__v": 0
    },
    {
        "_id": "6793dd39f4c7a6baba531e68",
        "title": "my city",
        "description": "punjab city",
        "userId": "6793d791622485bd00d0a25e",
        "__v": 0
    },
    {
        "_id": "6793e42bc4e8efd6af79d096",
        "title": "Updated Hotel",
        "description": "This is my updated hotel",
        "userId": "6793e1c5c4e8efd6af79d092",
        "__v": 0
    },
    {
        "_id": "6793e440c4e8efd6af79d098",
        "title": "Hotel",
        "description": "This is my hotel",
        "userId": "6793e1c5c4e8efd6af79d092",
        "__v": 0
    },
    {
        "_id": "6793f58f16879e6b99357114",
        "title": "My college life2",
        "description": "It was awesome 2",
        "userId": "6793f38616879e6b9935710b",
        "__v": 0
    },
    {
        "_id": "6793f5a716879e6b99357117",
        "title": "My college life",
        "description": "It was awesome",
        "userId": "6793f38616879e6b9935710b",
        "__v": 0
    }
]
```



## Security Features
- JWT-based authentication
- Role-based access control
- Secure cross-backend communication
- Input validation
- Error handling


