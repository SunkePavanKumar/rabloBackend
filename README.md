# Products API

This is a simple RESTful API for managing products, built using Node.js, Express.js, MongoDB, and Mongoose.

## Table of Contents

- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Configuration](#configuration)
- [Endpoints](#endpoints)
- [Authentication](#authentication)
- [Usage](#usage)

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/SunkePavanKumar/rabloBackend.git
   ```

2. Navigate to the project directory
   ```
   cd product-management-rablo
   ```
3. Install dependencies:
   ```
   npm i
   ```

## Configuration

1. create .env fil in the root directory
   ```
       MONGO_URI = "Your connection string"
       PORT = 3000
       JWT_SECRET = "Your secret"
   ```

## Endpoints

1. POST : SignUp :
   ```
   localhost:3000/api/v1/user/signup
   ```
2. POST : SignIn
   ```
   localhost:3000/api/v1/user/signin
   ```
3. POST : Add Products

   ```
   localhost:3000/api/v1/products/addProducts
   ```

4. GET : Get Products

   ```
   localhost:3000/api/v1/products/getProducts
   ```

5. PATCH : Update Products
   ```
   localhost:3000/api/v1/products/updateProduct/b8d8bea4-d0f9-4c30-8616-6215649cd867
   ```
6. DELETE : Delete Product
   ```
   localhost:3000/api/v1/products/deleteProduct/b8d8bea4-d0f9-4c30-8616-6215649cd867
   ```
7. GET : Featured Products
   ```
   localhost:3000/api/v1/products/featured
   ```
8. GET : Price In Range
   ```
   localhost:3000/api/v1/products/price/1000
   ```
9. GET : Rating in Range
   ```
   localhost:3000/api/v1/products/rating/3.5
   ```

## Authentication

1. Authentication is requird for accesing the products. To authenticate, include a valid token in the request headers:
   ```
   Authorization: Bearer your_access_token
   ```

## Usage

1. Start the server
   ```
   npm start
   ```
2. The API will be available at http://localhost:3000 (or the port you specified in the .env file).
