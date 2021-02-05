import React from "react"
import Container from "@material-ui/core/Container"
import GitHubIcon from "@material-ui/icons/GitHub"
import YouTubeIcon from "@material-ui/icons/YouTube"
import LinkIcon from "@material-ui/icons/LinkRounded"

import Cooked1 from "../images/cooked1.png"
import Cooked2 from "../images/cooked2.png"
import Cooked3 from "../images/cooked3.png"
import Quaffle1 from "../images/quaffle1.png"
import Quaffle2 from "../images/quaffle2.png"

import style from "../styles/projects.module.css"

const Projects = () => {
  const iconColor = "#9A7AA0"
  return (
    <div className={style.section}>
      <Container maxWidth="md">
        <h1 className={style.title}>Projects</h1>

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
          we wanted within the two week timeline. Some of the user features
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
          project as Fullstack Academy. Myself and two others built this site
          using the core languages and technologies taught at Fullstack.
        </p>
        <p>
          This project taught us how to develop in teams and use industry
          standard tools for collaboration and project management. We used
          GitHub's Project feature to manage our issue tracking, required pull
          requests to be reviewed and approved before merging, and we created
          roles that each member of the team follow to ensure all members were
          working efficiently and effectively.
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
