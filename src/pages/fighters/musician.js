import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const Musician = () => (
  <div>
    <Seo title="The Musician" />
    <h1>Musician</h1>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default Musician
