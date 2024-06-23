## Installation

Follow these steps to set up the Dev Exchange project locally:

### Using Docker (Recommended)

1. Pull the [Docker](https://hub.docker.com/r/nishitbaria/devexchange) image from the Docker Hub:

```
docker pull nishitbaria/devexchange
```

### Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/): Make sure to install Node.js, which includes npm (Node Package Manager).
- [MongoDB](https://www.mongodb.com/): Set up a MongoDB database and obtain the connection URL.

### Clone the Repository

You can clone the repository using either the command line or GitHub Desktop.

#### Option 1: Using Command Line

```
git clone https://github.com/Nishitbaria/Dev-Exchange.git
cd Dev-Exchange
```

#### Option 2: Using GitHub Desktop

1. Install [GitHub Desktop](https://desktop.github.com/) if you haven't already.
2. Open GitHub Desktop and click on "File" > "Clone Repository".
3. In the "Clone a Repository" window, switch to the "URL" tab.
4. Enter the repository URL: `https://github.com/Nishitbaria/Dev-Exchange.git`
5. Choose the local path where you want to clone the repository.
6. Click on "Clone".
7. Once cloned, click on "Open in Visual Studio Code" (or your preferred editor).

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
