import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import style from "../styles/header.module.css"

const Header = ({ siteTitle }) => (
  <header className={style.header}>
    <div className={style.nav}>
      <Link to="/" className={style.link}>{siteTitle}</Link>
      <Link to="/#skills" className={style.link}>Skills</Link>
      <Link to="/#projects" className={style.link}>Projects</Link>
      <Link to="/#contact" className={style.link}>Contact</Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Me`,
}

export default Header
