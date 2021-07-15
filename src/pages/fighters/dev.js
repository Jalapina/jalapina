import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const Dev = () => (
  <div>
    <Seo title="The Dev" />
    <h1>Dev</h1>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default Dev
