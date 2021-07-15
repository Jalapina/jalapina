import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const Cook = () => (
  <div>
    <Seo title="The Cook" />
    <h1>Cook</h1>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default Cook
