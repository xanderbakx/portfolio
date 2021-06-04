import React from "react"
import Container from "@material-ui/core/Container"
import style from "../styles/skills.module.css"

const Skills = () => {
  return (
    <div className={style.section} id="skills">
      <Container className={style.skillsContainer} maxWidth="md">
        <h1 className={style.title}>Skills</h1>
        <div className={style.skillWrapper}>
          <div className={style.card}>
            <h2>Front End</h2>
            <ul className={style.list}>
              <li>React</li>
              <li>React Native</li>
              <li>Redux</li>
              <li>Expo</li>
              <li>Bootstrap</li>
              <li>Material UI</li>
              <li>Styled Components</li>
            </ul>
          </div>
          <div className={style.card}>
            <h2>Back End</h2>
            <ul className={style.list}>
              <li>Node.js</li>
              <li>Express</li>
              <li>PostgreSQL</li>
              <li>Sequelize</li>
              <li>MongoDB</li>
              <li>Socket.io</li>
              <li>Passport.js</li>
            </ul>
          </div>

          <div className={style.card}>
            <h2>Other</h2>
            <ul className={style.list}>
              <li>Git/GitHub</li>
              <li>Webpack</li>
              <li>Babel</li>
              <li>Heroku</li>
              <li>Travis CI</li>
              <li>OAuth</li>
              <li>Auth0</li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Skills
