# SkillBridge MVP Specification

# MVP Overview

The MVP (Minimum Viable Product) version of SkillBridge focuses on delivering the core freelance marketplace experience with essential functionality only.

The goal is to create a working platform where:

- Users can register and log in
- Clients can post jobs
- Freelancers can submit proposals
- Users can communicate
- Users can leave reviews

The MVP should prioritize functionality, stability, and clean architecture over advanced features.

---

# MVP Goals

The MVP should validate the following assumptions:

- Users are able to create and manage accounts
- Clients can successfully publish job posts
- Freelancers can apply to jobs
- Users can communicate inside the platform
- The frontend and backend architecture works correctly
- The application is usable on both desktop and mobile devices

---

# Included Features

## 1. Authentication System

### Features
- User registration
- User login
- JWT authentication
- Protected routes
- Logout functionality

### Requirements
- Passwords must be hashed using bcrypt
- JWT tokens must be securely generated
- Unauthorized users cannot access protected pages

---

## 2. User Profile System

### Features
- Edit profile
- Add bio
- Add skills
- Upload profile image

### Requirements
- Users can only edit their own profile
- Profile data should persist in MongoDB

---

## 3. Job Posting System

### Features
- Create job posts
- View all jobs
- View single job details
- Edit/delete own jobs
- Search jobs
- Filter jobs by category

### Requirements
- Only authenticated users can create jobs
- Job data must be stored in MongoDB

---

## 4. Proposal System

### Features
- Submit proposal to a job
- View submitted proposals
- Freelancer proposal dashboard

### Requirements
- Only authenticated freelancers can submit proposals
- A user cannot submit duplicate proposals to the same job

---

## 5. Messaging System

### Features
- Send private messages
- View conversation history
- Basic chat interface

### Requirements
- Users can only message authenticated users
- Messages should persist in the database

---

## 6. Review & Rating System

### Features
- Leave reviews
- Give star ratings
- Display average user rating

### Requirements
- Ratings must be between 1–5
- Average ratings should update automatically

---

# Excluded Features (Post-MVP)

The following features are intentionally excluded from the MVP version:

- Real-time messaging
- Socket.IO integration
- Online payments
- Notification system
- Admin dashboard
- AI recommendation systems
- Mobile application
- Email verification
- Advanced analytics
- File sharing inside chat

These features may be implemented in future versions.

---

# Technical Requirements

## Frontend
- React
- TailwindCSS
- React Router
- Axios

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication

---

# Database Models

## User
- username
- email
- password
- bio
- skills
- profileImage
- role

---

## Job
- title
- description
- budget
- category
- createdBy

---

## Proposal
- jobId
- freelancerId
- coverLetter
- proposedPrice

---

## Message
- sender
- receiver
- content

---

## Review
- reviewer
- targetUser
- rating
- comment

---

# API Requirements

## Authentication APIs
- POST /api/auth/register
- POST /api/auth/login

---

## User APIs
- GET /api/users/:id
- PUT /api/users/:id

---

## Job APIs
- POST /api/jobs
- GET /api/jobs
- GET /api/jobs/:id
- PUT /api/jobs/:id
- DELETE /api/jobs/:id

---

## Proposal APIs
- POST /api/proposals
- GET /api/proposals/job/:jobId

---

## Message APIs
- POST /api/messages
- GET /api/messages/:userId

---

## Review APIs
- POST /api/reviews
- GET /api/reviews/:userId

---

# UI Requirements

The MVP UI should include:

- Responsive layout
- Navigation bar
- Authentication pages
- Dashboard pages
- Job listing cards
- Proposal forms
- Messaging interface
- Loading states
- Error handling
- Toast notifications

The design should prioritize usability and simplicity.

---

# Security Requirements

- Password hashing with bcrypt
- JWT route protection
- Request validation
- Protected API endpoints
- Secure environment variables

---

# MVP Success Criteria

The MVP is considered successful if:

- Users can authenticate successfully
- Clients can create job posts
- Freelancers can submit proposals
- Users can exchange messages
- Reviews and ratings work correctly
- Frontend communicates successfully with backend APIs
- Data persists correctly in MongoDB
- The application works without major bugs

---

# Suggested Development Timeline

## Week 1
- Project setup
- MongoDB connection
- Authentication system

## Week 2
- User profiles
- Job posting system

## Week 3
- Proposal system
- Messaging system

## Week 4
- Review system
- UI improvements
- Testing and deployment

---

# Deployment Targets

## Frontend
- Vercel or Netlify

## Backend
- Render or Railway

## Database
- MongoDB Atlas

---

# Final Deliverables

The final MVP delivery should include:

- Fully working frontend application
- Fully working backend API
- MongoDB database integration
- Deployment links
- GitHub repositories
- README documentation
- Environment variable example files