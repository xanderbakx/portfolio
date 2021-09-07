import React from "react"
import Container from "@material-ui/core/Container"

import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GitHubIcon from "@material-ui/icons/GitHub"

import style from "../styles/intro.module.css"
import resume from "../documents/XanderBakxResume.pdf"

const Intro = () => {
  return (
    <div className={style.section}>
      <Container maxWidth="md">
        <div className={style.heroText}>
          <h1>My name is Xander</h1>
          <h3>
            I'm a full stack developer open to new opportunities. I love
            collaborative work environments, problem solving, and learning new
            technologies.
          </h3>
          <h4>
            In my free time I enjoy rock climbing, cooking, running, biking, and
            video games.
          </h4>
          <div className={style.icons}>
            <a
              href="https://www.linkedin.com/in/xander-bakx/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon className={style.icon} style={{ fontSize: 45 }} />
            </a>
            <a
              href="https://github.com/xanderbakx/"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon className={style.icon} style={{ fontSize: 36 }} />
            </a>
          </div>
          <div className={style.buttonWrap}>
            <a href={resume} target="_blank" rel="noreferrer">
              <button className={style.button}>Resumé</button>
            </a>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Intro
