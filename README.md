# ⭐ Dev Exchange⭐


![image](https://github.com/Nishitbaria/Dev-Exchange/assets/85815172/154b1c51-8799-497c-96ab-5c7bad6c9e74)



A community-driven platform for asking and answering programming questions 💙. Get help, share knowledge, and collaborate with developers from around the world. Explore topics in web development, mobile app development, algorithms, data structures, and more.

## Features

1. **Ask and Answer Questions:**
   - Users can post programming questions and receive answers from the community.
   - Collaborative environment to share knowledge and solutions.

2. **AI-Powered Answers:**
   - Integrated AI to assist in finding solutions to posted questions.

3. **Collections:**
   - Users can create collections of questions for easy reference.
   - Save and organize questions that you find helpful.

4. **Badge System:**
   - Recognize active contributors with a badge system.
   - Display badges on user profiles to showcase their contributions.

5. **Reputation System:**
   - Implement a reputation system to highlight active and respected members.
   - Users earn reputation points based on their contributions.

6. **Dark Mode:**
   - Enjoy a comfortable browsing experience with a dark mode option.

7. **Clerk Authentication:**
   - Secure user authentication using Clerk for a seamless login experience.

8. **MongoDB Aggregation for Filtering:**
   - Utilize MongoDB aggregation for efficient and powerful question filtering.

9. **Global Search:**
   - Search anything on the platform, including questions, users, and tags.

10. **User Tagging:**
    - Tag users to bring attention to specific questions or discussions.

11. **Recommended Algorithm:**
    - Algorithm recommends similar questions based on users' frequent visits.

## Tech Stack

- Next.js 14
- Database: MongoDB
- Authentication: Clerk
- Styling: CSS



## Installation

Follow these steps to set up the Dev Exchange project locally:


### Using Docker (Recommended)

1. Pull the [Docker](https://hub.docker.com/r/nishitbaria/devexchange) image from the Docker Hub:


```   docker pull nishitbaria/devexchange ```


### Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/): Make sure to install Node.js, which includes npm (Node Package Manager).
- [MongoDB](https://www.mongodb.com/): Set up a MongoDB database and obtain the connection URL.

### Clone the Repository


git clone https://github.com/Nishitbaria/Dev-Exchange.git
cd Dev-Exchange


### Install Dependencies

```
npm install
```

### Configuration

1. Create a `.env.local` file in the root of the project.
2. Add the following environment variables and replace the values with your own:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
NEXT_PUBLIC_TINY_EDITOR_API_KEY=
NEXT_CLERK_WEBHOOK_SECRET=whsec_erJXNtiEmSyU6XyobojZnp7fA2otaDtD
MONGODB_URL=
NEXT_PUBLIC_SERVER_URL=http://localhost:3000/
OPENAI_API_KEY=
NEXT_PUBLIC_GOOGLE_GIMINI_API_KEY=
```

### Start the Development Server

```bash
npm run dev
```

The application should now be running locally. Visit [http://localhost:3000](http://localhost:3000) in your web browser to access Dev Exchange.

### Build for Production

To build the project for production, use the following command:

```bash
npm run build
```

### Start the Production Server

```bash
npm start
```

Visit [http://localhost:3000](http://localhost:3000) to access the production build locally.
