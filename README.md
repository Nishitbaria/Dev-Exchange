<article align="center">

![DevExchange](https://github.com/Nishitbaria/Dev-Exchange/assets/85815172/f5333bca-01a9-4545-b75e-32a3f2844602)

</article><hr>

<a name="welcome"></a>

# Welcome to DevExchage 👋

A community-driven platform for asking and answering programming questions 💙. Get help, share knowledge, and collaborate with developers from around the world. Explore topics in web development, mobile app development, algorithms, data structures, and more.

## Table of Contents

- [Welcome to DevExchange👋](#welcome)
  - [Table of Contents](#table-of-contents)
  - [Live demo 💻](#live-demo-)
  - [Tech stack 📚](#tech-stack-)
  - [Installation](#set-up)
  - [Want to Contribute? 👩‍💻](#want-to-contribute-)
  - [Maintainers 🤝](#maintainers-)
  - [Top 50 Contributors ✨](#top-50-contributors-)
  - [License 📝](#license-)
  - [Support ⭐](#support-)

<a name="demo"></a>
## Live demo 💻

Visit https://devexchanges.vercel.app/ to see the live demo!

## Tech stack 📚

<p>
  <a href="https://nextjs.org/">
    <img src="https://img.shields.io/badge/Next.js-7c3aed?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js Official Website"/>
  </a>
  <a href="https://tailwindcss.com/">
    <img src="https://img.shields.io/badge/tailwind_css-7c3aed?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="TailWind CSS Official Website"/>
  </a>
  <a href="https://www.typescriptlang.org/">
    <img src="https://img.shields.io/badge/typescript-7c3aed?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript official Website"/>
  </a>
  <a href="https://www.mongodb.com/">
    <img src="https://img.shields.io/badge/MongoDB-7c3aed?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB official Website"/>
  </a>
  <a href="https://openai.com/">
    <img src="https://img.shields.io/badge/OpenAI-7c3aed?style=for-the-badge&logo=openai&logoColor=white" alt="OpenAI Official Website"/>
  </a>
</p>


<a name="set-up"></a>

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

---

<a name="want-to-contribute"></a>

## Want to Contribute? 👩‍💻

Please follow our [CONTRIBUTING guidelines](https://github.com/Nishitbaria/Dev-Exchange/blob/main/CONTRIBUTING.md) for the following:-

- Setup DevExchange on your local machine
- Create an Issue using the relevant issue Template
- Follow the contributing guidelines
- And more!

---

## Maintainers 🤝

Need help while contributing? Tag any of the maintainers when creating the issue. You can tag us using: `@username`

<table style="border: none;">
<tr>
<td align="center" width="200"><pre><a href="https://github.com/Yash636261"><img src="https://avatars.githubusercontent.com/u/98970491?v=4" width="200" alt="Profile" /><br><sub>@Yash636261</sub></a></pre></td>
<td align="center" width="200"><pre><a href="https://github.com/Nishitbaria"><img src="https://avatars.githubusercontent.com/u/85815172?v=4" width="200" alt="Profile" /><br><sub>@Nishitbaria</sub></a></pre></td>
<td align="center" width="200"><pre><a href="https://github.com/VinayakVispute"><img src="https://avatars.githubusercontent.com/u/93467074?v=4" width="200" alt="Profile" /><br><sub>@VinayakVispute</sub></a>
<td align="center" width="200"><pre><a href="https://github.com/JayeshYadav99"><img src="https://avatars.githubusercontent.com/u/107855172?v=4" width="200" alt="Profile" /><br><sub>@JayeshYadav99</sub></a></pre></td>
</tr>
</table>

<a name="our-contributors"></a>

## Top 50 Contributors ✨

We would like to express our sincere gratitude to all the contributors who have helped make LinksHub an invaluable resource for developers! Without your contributions, this project wouldn't have been possible. Thank you so much for your time, effort, and dedication! 😄

<a href="https://github.com/Nishitbaria/Dev-Exchange/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Nishitbaria/Dev-Exchange" />
</a>

_View the list of all contributors [here](https://github.com/Nishitbaria/Dev-Exchange/graphs/contributors)._


## License 📝


<table>
  <tr>
     <td>
       <p align="center"> <img src="https://github.com/rupali-codes/LinksHub/assets/66154908/65ae0c03-9cad-47a6-80b8-23c91cd2ac4e" width="80%"></img>
    </td>
    <td> 
      <img src="https://img.shields.io/badge/License-MIT-yellow.svg"/> <br> 
LinksHub is licensed under the terms of the MIT License. check out <a href="./LICENSE">LICENSE</a> for details. <img width=2300/>
    </td>
  </tr>
</table>


<a name="support"></a>

## Support ⭐

- 💰 Become our [Sponsor](https://github.com/sponsors/nishitbaria)!
- ⭐ Star our Repo 
- 🥇  Rate us on [Repo Rater](https://repo-rater.eddiehub.io/)
Together, we can continue to improve and expand this resource hub for people worldwide! 💪


