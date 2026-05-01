Restaurant Site - Project Description
Overview
KHAO is a modern, full-stack restaurant website designed to showcase a restaurant's brand, services, and enable customers to make online reservations. It features a responsive frontend with a professional backend API for managing reservations.

What's Inside the Website
Frontend Features:
Hero Section - Eye-catching landing section with restaurant branding
Navbar - Navigation menu with smooth scrolling to different sections
About Section - Information about the restaurant
Qualities Section - Highlights restaurant's key qualities:
Quality Food
Super Taste
Fast Delivery
Reservation System - Book a table with personal details (name, email, phone, date, time)
Services Section - Available services and offerings
Team Section - Chef and staff information
Footer - Contact and additional information
Success Page - Confirmation after successful reservation
404 Page - Not found page for invalid routes
Technical Stack
Frontend Technologies:
Framework: React 19.1.1
Build Tool: Vite 7.1.7 (fast bundler and dev server)
Routing: React Router DOM 7.9.5 (for multi-page navigation)
HTTP Client: Axios 1.13.1 (for API calls)
UI Notifications: React Hot Toast 2.6.0 (toast notifications)
Icons: React Icons 5.5.0 (icon library)
Smooth Scrolling: React Scroll 1.9.3 (for smooth page navigation)
Styling: CSS (custom styles with App.css, index.css)
Language: JavaScript (ES6 modules)
Backend Technologies:
Runtime: Node.js (ES6 module syntax)
Framework: Express.js 5.1.0 (web server)
Database: MongoDB with Mongoose 8.19.2 (ODM)
CORS: CORS 2.8.5 (cross-origin requests handling)
Environment: Dotenv 17.2.3 (configuration management)
Validation: Validator 13.15.20 (data validation)
Development: Nodemon 3.1.10 (auto-reload on changes)


Architecture
Backend Structure:
Server: Node.js Express server running on port 4000
API Endpoint: POST /api/v1/reservation/send - accepts reservation data
Database: MongoDB connection for storing reservations
Error Handling: Custom error middleware for consistent error responses
CORS: Allows requests from frontend URL only
Frontend Structure:
Components: Modular React components (Navbar, Hero, About, etc.)
Pages: Home, Success, NotFound pages
State Management: React Hooks (useState, useNavigate)
Routing: React Router with 3 main routes (/, /success, *)
Key Features
✅ Responsive Design - Works on desktop, tablet, and mobile
✅ Real-time Validation - Form validation using validator library
✅ Error Handling - Toast notifications for success/error messages
✅ Database Integration - Reservations stored in MongoDB
✅ Smooth Navigation - Scroll-based section navigation
✅ Production Ready - Built with Vite for optimized performance
✅ Cross-origin Support - CORS configured for frontend-backend communication

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





