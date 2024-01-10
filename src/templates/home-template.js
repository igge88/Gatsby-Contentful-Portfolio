import * as React from "react"
import Seo from "../components/seo"

const HomeTemplate = props => {
  return (
    <main>
      <h2>{props.title}</h2>
    </main>
  )
}

export default HomeTemplate

export const Head = () => <Seo title="Home" />
