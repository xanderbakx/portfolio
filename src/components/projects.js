import React from "react"
import Container from "@material-ui/core/Container"
import GitHubIcon from "@material-ui/icons/GitHub"
import YouTubeIcon from "@material-ui/icons/YouTube"
import LinkIcon from "@material-ui/icons/LinkRounded"

import Wmc1 from "../images/wmc1.png"
import Wmc2 from "../images/wmc2.png"
import Cooked1 from "../images/cooked1.png"
import Cooked2 from "../images/cooked2.png"
import Cooked3 from "../images/cooked3.png"
import Quaffle1 from "../images/quaffle1.png"
import Quaffle2 from "../images/quaffle2.png"
import Collabio1 from "../images/collabio1.png"
import Collabio2 from "../images/collabio2.png"

import style from "../styles/projects.module.css"

const Projects = () => {
  const iconColor = "#9A7AA0"
  return (
    <div className={style.section} id="projects">
      <Container maxWidth="md">
        <h1 className={style.title}>Projects</h1>

        {/* West Marin Compost */}
        <h2>West Marin Compost</h2>
        <div className={style.mockupImages}>
          <img
            src={Wmc1}
            className={style.quaffleMacImg}
            alt="WMC Screenshot 1"
          />
          <img
            src={Wmc2}
            className={style.quaffleMacImg}
            alt="WMC Screenshot 2"
          />
        </div>
        <div className={style.linkIcons}>
          <a
            className={style.icon}
            href="https://github.com/xanderbakx/wmc"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon htmlColor={iconColor}>Github</GitHubIcon>
          </a>
          <a
            className={style.icon}
            href="https://www.westmarincompost.com/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkIcon fontSize="large" htmlColor={iconColor}>
              Link
            </LinkIcon>
          </a>
        </div>

        <p>
          West Marin Compost is a static website built with Gatsby. This website
          was built for a client to replace their old site. I continually update
          content and components as requested by the client. Code, design,
          hosting all done myself.
        </p>

        <div className={style.techWrapper}>
          <div className={style.techItem}>
            <b>Technologies:</b> Gatsby, React, Bootstrap, Styled Components,
            Netlify
          </div>
        </div>

        <hr />

        {/* Collabio */}
        <h2>Collabio</h2>
        <div className={style.mockupImages}>
          <img
            src={Collabio1}
            className={style.quaffleMacImg}
            alt="Collabio Screenshot 1"
          />
          <img
            src={Collabio2}
            className={style.quaffleMacImg}
            alt="Collabio Screenshot 2"
          />
        </div>
        <div className={style.linkIcons}>
          <a
            className={style.icon}
            href="https://github.com/xanderbakx/collabiodocs"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon htmlColor={iconColor}>Github</GitHubIcon>
          </a>
          <a
            className={style.icon}
            href="https://collabiodocs.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkIcon fontSize="large" htmlColor={iconColor}>
              Link
            </LinkIcon>
          </a>
        </div>

        <p>
          Collabio is a rich-text document editor similar to Google Docs. Users
          can signup/login using Auth0 authentication and immediately start
          creating new documents, edit and view existing documents, and
          collaboratively work on documents together. Users can save those
          documents and see them in the documents grid anytime they login.
        </p>
        <p>
          This is a project I built to test my knowledge of building every
          element of a full-stack application by myself. I had worked on
          projects in the past working in teams and wanted to explore what it
          would be like to build something from the ground up that I claim as my
          own. This process allowed me to deepen my understanding of the
          technologies I had worked with before and introduce myself to new ones
          as well. This was my first time using Auth0, MongoDB, Mongoose, and
          Slate. It was also my first time creating and closing issues
          independently, and doing my own research debugging and creating new
          features.
        </p>

        <div className={style.techWrapper}>
          <div className={style.techItem}>
            <b>Front End:</b> React, Redux, Slate, Styled Components
          </div>
          <div className={style.techItem}>
            <b>Back End:</b> Node.js, Express, MongoDB, Mongoose
          </div>
          <div className={style.techItem}>
            <b>Additional Technologies & Packages:</b> Heroku, Babel, Axios,
            Socket.io, Passport, Auth0
          </div>
        </div>

        <hr />

        {/* Cook'd */}
        <h2>Cook'd</h2>
        <div className={style.mockupImages}>
          <img
            src={Cooked1}
            className={style.cookedPhoneImg}
            alt="Cooked Screenshot 1"
          />
          <img
            src={Cooked2}
            className={style.cookedPhoneImg}
            alt="Cooked Screenshot 2"
          />
          <img
            src={Cooked3}
            className={style.cookedPhoneImg}
            alt="Cooked Screenshot 3"
          />
        </div>
        <div className={style.linkIcons}>
          <a
            className={style.icon}
            href="https://github.com/Do-Jest-While-True"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon htmlColor={iconColor}>GitHub</GitHubIcon>
          </a>

          <a
            className={style.icon}
            href="https://youtu.be/2qv1BzJ4XH4"
            target="_blank"
            rel="noreferrer"
          >
            <YouTubeIcon htmlColor={iconColor} fontSize="large">
              YouTube
            </YouTubeIcon>
          </a>
        </div>

        <p>
          Cook'd is a recipe sharing app inspired by the cumbersome recipes with
          long stories and other unnecessary content found online. This project
          was my capstone project at Fullstack Academy, created by myself and
          three others.
        </p>
        <p>
          Our team decided to create this mobile app using React Native and
          Expo. This gave us a clean starting point to create all the features
          we wanted within the two week sprint. Some of the user features
          include: posting recipes with photos, ingredients, and directions, a
          global and personalized feed to explore other users recipes, liking
          and commenting on recipes, viewing your own and other users profile
          with all the recipes that user has posted, and editing your profile
          page and image.
        </p>
        <div className={style.techWrapper}>
          <div className={style.techItem}>
            <b>Front End:</b> React Native, Redux, Published to Expo
          </div>
          <div className={style.techItem}>
            <b>Back End:</b> Node.js, Express, Sequelize, PostgreSQL, Deployed
            to Heroku
          </div>
          <div className={style.techItem}>
            <b>Additional Technologies & Packages:</b> Cloudinary database to
            store uploaded images, Babel, Axios, Socket.io, Passport, OAuth
          </div>
        </div>

        <hr />

        {/* Quaffle House */}
        <h2>Quaffle House</h2>
        <div className={style.mockupImages}>
          <img
            src={Quaffle1}
            className={style.quaffleMacImg}
            alt="Cooked Screenshot 1"
          />
          <img
            src={Quaffle2}
            className={style.quaffleMacImg}
            alt="Cooked Screenshot 2"
          />
        </div>
        <div className={style.linkIcons}>
          <a
            className={style.icon}
            href="https://github.com/Bubble-sort-Tape/GraceShopper"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon htmlColor={iconColor}>Github</GitHubIcon>
          </a>
          <a
            className={style.icon}
            href="https://quaffle-house.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkIcon fontSize="large" htmlColor={iconColor}>
              Link
            </LinkIcon>
          </a>
        </div>

        <p>
          Quaffle house is a mock e-commerce website built as our first group
          project at Fullstack Academy. Myself and two others built this site
          using the core languages and technologies taught at Fullstack.
        </p>
        <p>
          This project taught us how to develop in teams and use industry
          standard tools for collaboration and project management. We used
          GitHub's Project feature to manage our issue tracking, pull requests
          to be reviewed and approved before merging, and we created roles that
          each member of the team follow to ensure all members were working
          efficiently and effectively.
        </p>
        <div className={style.techWrapper}>
          <div className={style.techItem}>
            <b>Front End:</b> React, Redux
          </div>
          <div className={style.techItem}>
            <b>Back End:</b> Node.js, Express, Sequelize, PostgreSQL, Deployed
            to Heroku
          </div>
          <div className={style.techItem}>
            <b>Testing:</b> Mocha, Chai, Enzyme
          </div>
          <div className={style.techItem}>
            <b>Additional Technologies & Packages:</b> Webpack, Babel, Axios,
            Socket.io, Passport, OAuth
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Projects
