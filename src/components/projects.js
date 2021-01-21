import React from "react"
import {
  // Box,
  // Card,
  // CardContent,
  // Typography,
  Container,
  List,
  ListItem,
} from "@material-ui/core"
import style from "../styles/skills.module.css"

const Projects = () => {
  return (
    <Container>
      <h1 className={style.title}>Projects</h1>

      {/* Cook'd */}
      <h2>Cook'd</h2>
      <p>
        Cook'd is a recipe sharing app inspired by the cumbersome recipes with
        long stories and other unnecessary content found online. This project
        was my capstone project at Fullstack Academy, created by myself and
        three others.
      </p>
      <p>
        Our team decided to create this mobile app using React Native and Expo.
        This gave us a clean starting point to create all the features we wanted
        within the two week timeline. Some of the user features include: posting
        recipes with photos, ingredients, and directions, a global and
        personalized feed to explore other users recipes, liking and commenting
        on recipes, viewing your own and other users profile with all the
        recipes that user has posted, and editing your profile page and image.
      </p>
      <h4>Front End</h4>
      <List>
        <ListItem>React Native</ListItem>
        <ListItem>Published to Expo</ListItem>
        <ListItem>Redux</ListItem>
      </List>
      <h4>Back End</h4>
      <List>
        <ListItem>Node.js</ListItem>
        <ListItem>Express</ListItem>
        <ListItem>Sequelize</ListItem>
        <ListItem>PostgreSQL</ListItem>
        <ListItem>Deployed to Heroku</ListItem>
      </List>
      <h4>Additional Technologies & Packages</h4>
      <List>
        <ListItem>Cloudinary DB for storing Images</ListItem>
        <ListItem>Babel</ListItem>
        <ListItem>Axios</ListItem>
        <ListItem>Socket.io</ListItem>
        <ListItem>Passport</ListItem>
        <ListItem>OAuth</ListItem>
      </List>

      {/* Quaffle House */}
      <h2>Quaffle House</h2>
      <p>
        Quaffle house is a mock e-commerce website built as our first group
        project as Fullstack Academy. Myself and two others built this site
        using the core languages and technologies taught at Fullstack.
      </p>
      <p>
        This project taught us how to develop in teams and use industry standard
        tools for collaboration and project management. We used GitHub's Project
        feature to manage our issue tracking, required pull requests to be
        reviewed and approved before merging, and we created roles that each
        member of the team follow to ensure all members were working efficiently
        and effectively.
      </p>
      <h4>Front End</h4>
      <List>
        <ListItem>React</ListItem>
        <ListItem>Redux</ListItem>
      </List>
      <h4>Back End</h4>
      <List>
        <ListItem>Node.js</ListItem>
        <ListItem>Express</ListItem>
        <ListItem>Sequelize</ListItem>
        <ListItem>PostgreSQL</ListItem>
        <ListItem>Deployed to Heroku</ListItem>
      </List>
      <h4>Testing</h4>
      <List>
        <ListItem>Mocha</ListItem>
        <ListItem>Chai</ListItem>
        <ListItem>Enzyme</ListItem>
      </List>
      <h4>Additional Technologies & Packages</h4>
      <List>
        <ListItem>Webpack</ListItem>
        <ListItem>Babel</ListItem>
        <ListItem>Axios</ListItem>
        <ListItem>Socket.io</ListItem>
        <ListItem>Passport</ListItem>
        <ListItem>OAuth</ListItem>
      </List>
    </Container>
  )
}

export default Projects
