import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Intro from "../components/intro"
import Skills from "../components/skills"

const IndexPage = () => (
  <Layout>
    <SEO title="Xander Bakx" />
    <Intro />
    <Skills />
  </Layout>
)

export default IndexPage
