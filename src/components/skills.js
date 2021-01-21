import React from "react"
import {
  // Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  List,
  ListItem,
} from "@material-ui/core"
import style from "../styles/skills.module.css"

const Skills = () => {
  return (
    <Container>
      <h1 className={style.title}>Skills</h1>
      {/* <Box className={style.box}> */}
      <Grid container spacing={1} alignItems="stretch">
        <Grid item sm>
          <Card className={style.card}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Front End
              </Typography>
              <List className={style.list}>
                {/* <img src={react} alt="React Logo" /> */}
                <ListItem>React</ListItem>
                <ListItem>React Native</ListItem>
                <ListItem>Redux</ListItem>
                <ListItem>Expo</ListItem>
                <ListItem>Bootstrap</ListItem>
                <ListItem>Material UI</ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs>
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
        </Grid>
        <Grid item xs>
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
        </Grid>
      </Grid>
      {/* </Box> */}
    </Container>
  )
}

export default Skills
