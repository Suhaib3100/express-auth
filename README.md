
# 🚀 Express.js JWT Authentication API (Serverless on Vercel)

This is a **JWT-based authentication API** built with Express.js. It runs in a **serverless environment** on Vercel and does **not** use a database (stores users in memory).

---

## 📂 **Project Structure**
```
/express-vercel-app
│── /api
│   ├── /controllers
│   │   ├── authController.js  # Handles user authentication (register/login)
│   ├── /routes
│   │   ├── authRoutes.js       # Defines API routes
│   ├── /utils
│   │   ├── generateToken.js    # JWT token generation
│   ├── index.js                # Main Express app file
│── package.json
│── vercel.json                 # Vercel deployment config
│── README.md                   # Documentation
```

---

## 📦 **Installation & Setup**
### 1️⃣ Clone the Repository  
```sh
git clone https://github.com/Suhaib3100/express-auth.git
cd express-auth
```

### 2️⃣ Install Dependencies  
```sh
npm install
```

### 3️⃣ Start the Server Locally  
```sh
npm run dev
```
By default, the server runs on **http://localhost:3000**.

---

## 🎯 **API Endpoints**
### 🔹 **Register a User**
**Endpoint:** `POST /api/auth/register`  
**Body (JSON):**
```json
{
  "username": "testuser",
  "password": "123456"
}
```
**Response (Success 200):**
```json
{
  "message": "User registered successfully",
  "token": "your_jwt_token_here"
}
```

### 🔹 **Login User**
**Endpoint:** `POST /api/auth/login`  
**Body (JSON):**
```json
{
  "username": "testuser",
  "password": "123456"
}
```
**Response (Success 200):**
```json
{
  "message": "Login successful",
  "token": "your_jwt_token_here"
}
```
**Error (401 - Invalid Credentials):**
```json
{
  "message": "Invalid credentials"
}
```

### 🔹 **Protected Route (Example)**
**Endpoint:** `GET /api/protected`  
🔐 **Requires JWT Token in `Authorization` header**  
**Headers:**
```
Authorization: Bearer your_jwt_token_here
```
**Response:**
```json
{
  "message": "Access granted",
  "user": "testuser"
}
```
---

## 🚀 **Deploying to Vercel**
1. Install Vercel CLI:  
   ```sh
   npm install -g vercel
   ```
2. Login to Vercel:  
   ```sh
   vercel login
   ```
3. Deploy your project:  
   ```sh
   vercel
   ```
4. Done! Your API is now live on Vercel. 🎉

---

## 🔑 **Environment Variables**
Create a `.env` file and add:
```
JWT_SECRET=your_secret_key
```
Make sure to **update `generateToken.js`** to use `process.env.JWT_SECRET` instead of a hardcoded value.

---

## 💡 **Future Improvements**
✅ Add middleware for protected routes  
✅ Implement refresh tokens  
✅ Integrate a database (MongoDB, PostgreSQL, etc.)  

---

## 📜 **License**
This project is **open-source** and available under the [MIT License](LICENSE).

---

### 🔗 **Connect with Me**
🔹 GitHub: [Your Profile](https://github.com/Suhaib3100)  
🔹 Website: [yourwebsite.com](https://suhaib.protool.co.in)

---

🎉 **Happy Coding!** 🚀
