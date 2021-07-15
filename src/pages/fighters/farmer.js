import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const Farmer = () => (
  <div>
    <Seo title="The Farmer" />
    <h1>Farmer</h1>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default Farmer
