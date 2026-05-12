
---

# `PRD.md`

```md
# Product Requirements Document (PRD)

# SkillBridge

---

# Product Overview

SkillBridge is a freelance marketplace web application that connects clients and freelancers in a simple and user-friendly environment.

Clients can create job posts and freelancers can submit proposals for those jobs. Users can also communicate through a messaging system and leave reviews after completing projects.

---

# Problem Statement

Many freelance platforms are complex and overloaded with features for beginner users. SkillBridge aims to provide a lightweight and easy-to-use marketplace experience for freelancers and clients.

---

# Target Users

## Clients
Users who want to hire freelancers for specific tasks or projects.

## Freelancers
Users who want to find freelance jobs and communicate with potential clients.

---

# Goals

- Build a functional freelance marketplace MVP
- Allow users to create and manage accounts
- Enable job posting and proposal submission
- Create a communication system between users
- Implement review and rating functionality

---

# Core Features

## Authentication
- Register
- Login
- Logout
- JWT-based authentication

## User Profiles
- Profile photo
- Bio
- Skills
- Portfolio links

## Job Posting
- Create job posts
- Edit/Delete job posts
- View all job listings

## Proposal System
- Submit proposals
- View submitted proposals

## Messaging System
- Send messages
- View conversation history

## Review System
- Leave reviews
- Give ratings
- Display average ratings

---

# User Flow

## Client Flow
1. Register/Login
2. Create profile
3. Post a job
4. Review proposals
5. Contact freelancer
6. Leave a review

## Freelancer Flow
1. Register/Login
2. Create profile
3. Browse jobs
4. Submit proposal
5. Message client
6. Receive review

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

## Database
- MongoDB

## Authentication
- JWT
- bcrypt

---

# MVP Scope

The MVP will include:

- Authentication system
- User profile management
- Job posting functionality
- Proposal system
- Messaging functionality
- Review & rating system

---

# Non-Goals

The following features are not included in the MVP:

- Online payments
- Real-time chat
- Video calls
- Mobile application
- AI recommendation system

---

# Future Improvements

- Socket.IO real-time messaging
- Payment integration
- Push notifications
- Admin dashboard
- AI-based freelancer recommendations
- Mobile app support

---

# Success Metrics

The project will be considered successful if:

- Users can successfully register/login
- Clients can create job posts
- Freelancers can submit proposals
- Messaging system works correctly
- Reviews can be submitted successfully
- Frontend and backend communicate without issues