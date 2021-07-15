import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const Photographer = () => (
  <div>
    <Seo title="The Photographer" />
    <h1>Photographer</h1>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default Photographer
