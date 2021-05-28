import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import style from "../styles/intro.module.css"

const Intro = () => {
  const data = useStaticQuery(
    graphql`
      query {
        hero: file(relativePath: { eq: "milky-way.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  const imgData = data.hero.childImageSharp.fluid
  return (
    <BackgroundImage Tag="section" className={style.hero} fluid={imgData}>
      <div>
        <div className={style.heroText}>
          <h1>My name is Xander</h1>
          <h3>I'm a full stack developer.</h3>
          {/* <Link to="/#skills">Click</Link> */}
        </div>
      </div>
    </BackgroundImage>
  )
}

export default Intro
