import React from "react"
import {
  Box,
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
} from "@material-ui/core"
import style from "../styles/skills.module.css"

const Skills = () => {
  return (
    <>
      <h1 className={style.title}>Skills</h1>
      <Box className={style.box}>
        <Card className={style.card}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Front End
            </Typography>
            <List className={style.list}>
              <img src={`../babelOriginal.svg`} />
              <ListItem>React</ListItem>
              <ListItem>React Native</ListItem>
              <ListItem>Redux</ListItem>
              <ListItem>Expo</ListItem>
              <ListItem>Bootstrap</ListItem>
              <ListItem>Material UI</ListItem>
            </List>
          </CardContent>
        </Card>
        <Card className={style.card}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Back End
            </Typography>
            <List className={style.list}>
              <ListItem>Node.js</ListItem>
              <ListItem>Express</ListItem>
              <ListItem>Sequelize</ListItem>
              <ListItem>PostgreSQL</ListItem>
              <ListItem>Socket.io</ListItem>
              <ListItem>OAuth</ListItem>
              <ListItem>Passport.js</ListItem>
            </List>
          </CardContent>
        </Card>
        <Card className={style.card}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Dev Ops
            </Typography>
            <List className={style.list}>
              <ListItem>Git</ListItem>
              <ListItem>GitHub</ListItem>
              <ListItem>Webpack</ListItem>
              <ListItem>Babel</ListItem>
              <ListItem>Heroku</ListItem>
              <ListItem>Travis CI</ListItem>
            </List>
          </CardContent>
        </Card>
        <Card className={style.card}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Languages
            </Typography>
            <List className={style.list}>
              <ListItem>JavaScript</ListItem>
              <ListItem>HTML</ListItem>
              <ListItem>CSS</ListItem>
            </List>
          </CardContent>
        </Card>
        <Card className={style.card}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Testing
            </Typography>
            <List className={style.list}>
              <ListItem>Mocha</ListItem>
              <ListItem>Chai</ListItem>
              <ListItem>Jasmine</ListItem>
            </List>
          </CardContent>
        </Card>
      </Box>
    </>
  )
}

export default Skills
