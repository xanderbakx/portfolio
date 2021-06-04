import React from "react"
import Container from "@material-ui/core/Container"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GitHubIcon from "@material-ui/icons/GitHub"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import {
  withStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles"

import style from "../styles/footer.module.css"

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const styles = theme => ({
  cssLabel: {
    color: "#696969 !important",
  },
  cssOutlinedInput: {
    "&$cssFocused $notchedOutline": {
      color: "white !important",
    },
  },
  cssFocused: {
    color: "white !important",
  },
  notchedOutline: {
    // borderWidth: "1px",
    borderColor: "#696969 !important",
  },
})

const theme = createMuiTheme({
  overrides: {
    MuiInput: {
      cssLabel: {
        color: "#696969 !important",
      },
      cssOutlinedInput: {
        "&$cssFocused $notchedOutline": {
          color: "white !important",
        },
      },
      cssFocused: {
        color: "white !important",
      },
      notchedOutline: {
        borderColor: "#696969 !important",
      },
    },
  },
})

const Footer = props => {
  const { classes } = props
  const iconColor = "#e3e3e3"

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
    <div className={style.section} id="contact">
      <Container maxWidth="md">
        <h1 className={style.title}>Contact</h1>

        {/* FORM */}
        <div className={style.formWrapper}>
          <ThemeProvider theme={theme}>
            <form
              className={style.contactForm}
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
              {/* <p> */}
              <TextField
                className={style.formField}
                id="name"
                label="Full Name"
                type="text"
                name="name"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                onChange={handleChange}
                InputLabelProps={{
                  classes: {
                    root: classes.cssLabel,
                    focused: classes.cssFocused,
                  },
                }}
                InputProps={{
                  classes: {
                    root: classes.cssOutlinedInput,
                    focused: classes.cssFocused,
                    notchedOutline: classes.notchedOutline,
                  },
                }}
              />
              {/* </p>
              <p> */}
              <TextField
                className={style.formField}
                id="email"
                label="Email address"
                type="email"
                name="email"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                onChange={handleChange}
                InputLabelProps={{
                  classes: {
                    root: classes.cssLabel,
                    focused: classes.cssFocused,
                  },
                }}
                InputProps={{
                  classes: {
                    root: classes.cssOutlinedInput,
                    focused: classes.cssFocused,
                    notchedOutline: classes.notchedOutline,
                  },
                }}
              />
              {/* </p> */}
              {/* <p> */}
              <TextField
                className={style.formField}
                id="message"
                label="Message"
                name="message"
                multiline
                rows={6}
                defaultValue="Hi Xander, please work for us!"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                onChange={handleChange}
                InputLabelProps={{
                  classes: {
                    root: classes.cssLabel,
                    focused: classes.cssFocused,
                  },
                }}
                InputProps={{
                  classes: {
                    root: classes.cssOutlinedInput,
                    focused: classes.cssFocused,
                    notchedOutline: classes.notchedOutline,
                  },
                }}
              />
              {/* </p> */}

              <Button
                className={style.formButton}
                variant="contained"
                type="submit"
              >
                Send
              </Button>
            </form>
          </ThemeProvider>
        </div>

        <div className={style.linkIcons}>
          <a
            className={style.icon}
            href="https://github.com/xanderbakx"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon style={{ fontSize: 32 }} htmlColor={iconColor}>
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
              LinkedIn
            </LinkedInIcon>
          </a>
        </div>
      </Container>
    </div>
  )
}

export default withStyles(styles)(Footer)
// export default Footer
