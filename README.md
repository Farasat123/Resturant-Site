
# 🍽️ Restaurant Site – Project Description

## 📌 Overview

**KHAO** is a modern full-stack restaurant website designed to showcase a restaurant’s brand, services, and allow customers to make online reservations. It features a responsive frontend and a robust backend API for handling reservation data.

---

## 🌐 Website Features

### 🔹 Frontend Features

* **Hero Section** – Engaging landing section with branding
* **Navbar** – Smooth scrolling navigation
* **About Section** – Restaurant information
* **Qualities Section** – Highlights:

  * Quality Food
  * Super Taste
  * Fast Delivery
* **Reservation System** – Table booking with user details (name, email, phone, date, time)
* **Services Section** – Available offerings
* **Team Section** – Chef and staff details
* **Footer** – Contact & additional info
* **Success Page** – Reservation confirmation
* **404 Page** – Handles invalid routes

---

## 🛠️ Technical Stack

### 🎨 Frontend Technologies

* **Framework:** React (v19.1.1)
* **Build Tool:** Vite (v7.1.7)
* **Routing:** React Router DOM (v7.9.5)
* **HTTP Client:** Axios (v1.13.1)
* **Notifications:** React Hot Toast (v2.6.0)
* **Icons:** React Icons (v5.5.0)
* **Smooth Scroll:** React Scroll (v1.9.3)
* **Styling:** CSS (App.css, index.css)
* **Language:** JavaScript (ES6 Modules)

---

### ⚙️ Backend Technologies

* **Runtime:** Node.js
* **Framework:** Express.js (v5.1.0)
* **Database:** MongoDB with Mongoose (v8.19.2)
* **CORS:** CORS (v2.8.5)
* **Environment Config:** Dotenv (v17.2.3)
* **Validation:** Validator (v13.15.20)
* **Development Tool:** Nodemon (v3.1.10)

---

## 🏗️ Architecture

### 🔹 Backend Structure

* Server runs on **port 4000**
* API Endpoint:

  ```
  POST /api/v1/reservation/send
  ```
* Stores reservation data in MongoDB
* Custom error-handling middleware
* CORS configured for frontend access only

---

### 🔹 Frontend Structure

* **Components:** Navbar, Hero, About, etc.
* **Pages:** Home, Success, NotFound
* **State Management:** React Hooks (`useState`, `useNavigate`)
* **Routing:**

  * `/` → Home
  * `/success` → Confirmation
  * `*` → 404 Page

---

## 🚀 Key Features

* ✅ Responsive Design (mobile, tablet, desktop)
* ✅ Real-time Form Validation
* ✅ Error Handling with Toast Notifications
* ✅ MongoDB Integration for Data Storage
* ✅ Smooth Scrolling Navigation
* ✅ Production-ready build with Vite
* ✅ Secure Cross-Origin Communication

Landing Page:
<img width="1904" height="869" alt="image" src="https://github.com/user-attachments/assets/4b031d4e-8343-4711-b3bb-6fc2f77afa52" />
About Us:
<img width="1915" height="866" alt="image" src="https://github.com/user-attachments/assets/418be70c-2a6e-46dd-903e-ed67b1892205" />
Page 04:
<img width="1881" height="641" alt="image" src="https://github.com/user-attachments/assets/ddf0ed63-8af1-4ff9-b5a2-983fd4b61622" />

Make Reservation Form:
<img width="1895" height="806" alt="image" src="https://github.com/user-attachments/assets/bd9ff0dd-8717-4f57-89bd-15b2ebc857b0" />
Some More detail:
<img width="1843" height="859" alt="image" src="https://github.com/user-attachments/assets/f653cc4b-eb5f-4ea0-8c49-3118e9a332fb" />
Our Team:
<img width="1857" height="749" alt="image" src="https://github.com/user-attachments/assets/702db447-92ab-450c-a775-5572f93b61b0" />





