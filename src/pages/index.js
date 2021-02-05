import React from "react"
// import { graphql } from "gatsby"
// import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Intro from "../components/intro"
import Skills from "../components/skills"
import Projects from "../components/projects"
import Footer from "../components/footer"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Xander Bakx" />
      <Intro />
      {/* <Img fluid={data.cooked.childImageSharp.fluid} alt="Cooked1" /> */}
      <Skills />
      <Projects />
      <Footer />
    </Layout>
  )
}

export default IndexPage

// export const query = graphql`
//   query {
//     cooked: file(relativePath: { eq: "cooked1.png" }) {
//       childImageSharp {
//         fluid {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `
