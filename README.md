

# ❤️ Coy – Dating & Match Discovery Platform

A full-stack dating and profile discovery application built as part of the **Coy SDE Intern Assignment**. The application allows users to discover profiles, like or pass on them, and find mutual matches through a swipe-based interface.

## 🚀 Project Overview

Coy is a dating platform where users can explore profiles one at a time, express interest by liking profiles, or skip profiles they are not interested in.

When two users like each other, the application automatically creates a mutual match that appears on the Matches page.

The project demonstrates full-stack development using React, Node.js, Express.js, and MongoDB.

## ✨ Features

### 1. Profile Discovery

- Display one profile at a time.
- Swipe profiles left to pass and right to like.
- Like and Pass buttons for profile interaction.
- View complete profile details through a popup.
- Automatically move to the next profile after an action.
- Hide previously liked or passed profiles from the discovery feed.

### 2. Profile Details

Each profile includes:

- Name and Age
- Location
- Profile Image
- Bio and About Me
- Occupation
- Education
- Height
- Interests
- Relationship Goals

### 3. Like & Pass Functionality

- Like profiles to express interest.
- Pass profiles to skip them.
- Store swipe actions in the database.
- Prevent previously swiped profiles from appearing again.

### 4. Mutual Matching System

- Automatically detect mutual likes.
- Create a match when two users like each other.
- Prevent duplicate matches.
- Display a match notification when a mutual like occurs.
- Only reveal matches when both users have liked each other.

### 5. Matches Page

- Display all mutual matches.
- Show matched users' profile information.
- Retrieve match information from MongoDB.

### 6. Seeded Demo Profiles

- 30+ sample profiles stored in MongoDB.
- Some seeded profiles have already liked the demo user.
- Allows mutual matches to happen during project demonstrations.

## 🛠️ Tech Stack

| Technology   | Purpose                       |
| ------------ | ----------------------------- |
| React.js     | Frontend UI                   |
| Tailwind CSS | Styling and responsive design |
| Node.js      | Backend runtime               |
| Express.js   | REST API development          |
| MongoDB      | Database                      |
| Mongoose     | Database modeling             |
| Axios        | API communication             |
| React Hooks  | State management              |

## 📂 Project Structure

```text
Coy/
│
├── Frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   │   ├── Discover.jsx
│   │   │   └── Matches.jsx
│   │   ├── services/
│   │   └── App.jsx
│   ├── package.json
│   └── .env
│
├── Backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── seed/
│   ├── server.js
│   ├── package.json
│   └── .env
│
└── README.md
```

*Note: Directory names are illustrative. Adjust them to match the actual repository structure.*

## ⚙️ Installation & Setup

Follow these steps to run the project locally.

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```


### 2. Setup Backend


### Backend Setup

Navigate to the backend directory:

```bash
cd Backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
```

Seed sample profile data:

```bash
npm run seed
```

This command inserts the sample profiles provided in the Backend folder into your MongoDB database.

Start the backend server:

```bash
npm run dev
```


### 3. Setup Frontend

Open another terminal and navigate to the frontend directory:

```bash
cd Frontend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
VITE_API_URL=http://localhost:5000
```

Start the frontend:

```bash
npm run dev
```

### 4. Database Setup

- Configure your MongoDB connection string.
- Run the profile seed script to insert sample profiles.
- Ensure that demo users and incoming likes are seeded correctly.
- Start the application and explore the discovery feed.

## 🔌 API Functionality

The backend provides REST APIs for profile discovery, swipe actions, and mutual matching.

| Method | Endpoint          | Description                     |
| ------ | ----------------- | ------------------------------- |
| GET    | `/profiles/feed`  | Retrieve profiles for discovery |
| POST   | `/profiles/swipe` | Like or pass on a profile       |
| GET    | `/matches`        | Retrieve mutual matches         |

**Swipe API Example**

```json
{
  "userId": "demo-user-id",
  "profileId": "profile-id",
  "action": "like"
}
```

Supported actions:

- `like`
- `pass`

**Important:** Only mutual likes result in a match. One-sided likes are never exposed as matches.

## 🧠 Matching Logic

The matching system follows a simple mutual-like mechanism:

1. User A likes User B.
2. The backend checks whether User B has already liked User A.
3. If both users have liked each other, a match is created.
4. The match is stored in MongoDB.
5. The frontend displays a match notification.
6. The match appears on the Matches page.

```text
User A likes User B
        |
        v
Check if User B liked User A
        |
    +---+---+
    |       |
   Yes      No
    |       |
    v       v
 Create   Store Like
 Match    Only
    |
    v
Show Match
Notification
```

## 🎯 Assignment Highlights

This project demonstrates:

- Full-stack MERN development.
- RESTful API design.
- MongoDB database integration.
- React state management using Hooks.
- Swipe-based user interactions.
- Mutual matching algorithms.
- Persistent storage of user interactions.
- Frontend and backend integration.

## 🔮 Future Improvements

- User authentication and authorization.
- Real-time messaging between matched users.
- Profile editing and image uploads.
- Advanced profile filtering.
- Location-based profile discovery.
- Notifications for new matches.

## 👨‍💻 Author

**Varun Maurya**

B.Tech – Computer Science and Engineering

---

