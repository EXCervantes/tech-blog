# Tech Blog

## Table of Contents

- [Tech Blog](#tech-blog)
  - [Table of Contents](#table-of-contents)
  - [Description](#description)
  - [Technologies and Packages Used](#technologies-and-packages-used)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Screenshots of the Application](#screenshots-of-the-application)
    - [Link to Deployed Application](#link-to-deployed-application)
  - [Credits](#credits)
  - [License](#license)

## Description

This is a CMS-style tech blog in the fashion of a Wordpress site. This is a full stack application utilizing Sequelize as the ORM, follows the MVC paradigm, uses Handlebars.js for the Views structure, and the express-session package for authentication and session managing. It was deployed using Render Dashboard.

This application allows users to post what's on their mind and other's to comment on their post. Users can login or create an account to post on the blog or comment on another post.

## Technologies and Packages Used

- [Node.js](https://nodejs.org/en)
- [Express.js](https://expressjs.com/)
- [Sequelize](https://sequelize.org/)
- [PostgreSQL Node client](https://www.npmjs.com/package/pg)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [express-handlebars](https://www.npmjs.com/package/express-handlebars)
- [express-session](https://www.npmjs.com/package/express-session)
- [express-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize)
- [Insomnia](https://insomnia.rest/)
- [Render Dashboard](https://dashboard.render.com/)
  
## Installation

The most direct way to use this application is go to [this link](https://tech-blog-6dqv.onrender.com/) for the deployed web version.

Alternatively, if a user wants to use this application locally head to [Tech Blog](https://github.com/EXCervantes/tech-blog) and clone the repository. To learn how to clone a repository checkout this guide [Cloning a repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository).

You must have `node` installed on your system. Go [here](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs) for instructions on how to do so. To properly run this application you must have [PostgreSQL](https://www.postgresql.org/) installed on your system. Run `npm i` to install the necessary dependencies onto your system.

This application utilizes a package that requires a file named `.env` to be created on the user's native system in the root directory of the cloned repo. The following lines must exist in this file:

```md
DB_NAME='techblog_db'
DB_USER='postgres'
DB_PASSWORD='user's password created during PostgreSQL install'
```

## Usage

Once a user has clicked the [webpage link](https://tech-blog-6dqv.onrender.com/) of the application and opened up the page in front of them head down to the last three paragraphs of this section for instructions on how to navigate the site.

The following is for users who wish to run this application locally. Once Node, PostgreSQL, and the necessary dependencies have been installed as well as the `.env` file created a user can then run PostgreSQL to create a database in the terminal with the following commands.

First navigate to the database directory

```md
cd db
```

Then login to Postgres

```md
psql -U postgres
```

Then run the command to create the database

```md
\i schema.sql
```

Finally use the following commands in sequential order to quit Postgres then navigate to the home directory

```md
\q
```

```md
cd ..
```

The next step is to seed the database with the following command in the terminal

```md
npm run seed
```

To run the application open the Terminal or GitBash in VSCode and run `node server.js` or `npm start`. Now the server is active and a user can go to [localhost:3001](http://localhost:3001/) to open the page.

---

Visit the homepage to "Login" or "Sign Up" if needed. If a user already has an account or they signed up then they can freely browse the current submitted posts. A user can add their own post or comment on another post.

To add a new post click on "Create New Blog Post" and add a title for the post and the text body. Then click "Create Post" to submit it. To see the submitted posts click on "Home" in the navbar.

A user can add a comment to existing posts by clicking "Add a comment". Previous comments can be seen here as well. Users can edit or delete their blog posts by clicking the respective button on their post. Finally, clicking the "Logout" button will log the user out. Also note the website will automatically log out after a set period of time.

### Screenshots of the Application

![homepage](public/images/techblogscreen1.jpg)
![login](public/images/techblogscreen2.jpg)
![post](public/images/techblogscreen3.jpg)
![comment](public/images/techblogscreen4.jpg)

### Link to Deployed Application

[Application Webpage Link](https://tech-blog-6dqv.onrender.com/)

## Credits

Referenced for using Tailwind CSS with Handlebars.

"_node.js - How to use tailwindCSS in .hbs file - Stack Overflow_". (2023, November 14). Stack Overflow. Retrieved July 6, 2024, from https://stackoverflow.com/questions/75639878/how-to-use-tailwindcss-in-hbs-file
  
## License

This project is licensed under [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Please see the [License](https://opensource.org/licenses/MIT) page for more info.
