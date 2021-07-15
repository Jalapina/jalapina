import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const ShitPoster = () => (
  <div>
    <Seo title="The Shitposter" />
    <h1>Shit Post</h1>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default ShitPoster
