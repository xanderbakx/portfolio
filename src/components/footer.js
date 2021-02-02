import React from "react"
import { Container } from "@material-ui/core"
import EmailIcon from "@material-ui/icons/Email"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GitHubIcon from "@material-ui/icons/GitHub"

import style from "../styles/footer.module.css"

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const Footer = () => {
  const iconColor = "#fff"

  const [state, setState] = React.useState({})

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
  }
  return (
    <div className={style.section}>
      <Container maxWidth="md">
        <div className={style.linkIcons}>
          <a
            className={style.icon}
            href="https://github.com/xanderbakx"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon fontSize="large" htmlColor={iconColor}>
              Github
            </GitHubIcon>
          </a>
          <a
            className={style.icon}
            href="https://www.linkedin.com/in/xander-bakx/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon fontSize="large" htmlColor={iconColor}>
              Github
            </LinkedInIcon>
          </a>
          <a
            className={style.icon}
            href="mailto:xanderbakx@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <EmailIcon fontSize="large" htmlColor={iconColor}>
              Github
            </EmailIcon>
          </a>
        </div>
        {/* FORM */}
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out:{" "}
              <input name="bot-field" onChange={handleChange} />
            </label>
          </p>
          <p>
            <label>
              Your Name:{" "}
              <input type="text" name="name" onChange={handleChange} />
            </label>
          </p>
          <p>
            <label>
              Your Email:{" "}
              <input type="email" name="email" onChange={handleChange} />
            </label>
          </p>
          <p>
            <label>
              Message: <textarea name="message" onChange={handleChange} />
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </Container>
    </div>
  )
}

export default Footer
