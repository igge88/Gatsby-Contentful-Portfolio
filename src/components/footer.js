import React from "react"

const Footer = () => (
  <footer
    style={{
      backgroundColor: "black",
      color: "white",
      textAlign: "center",
      padding: "var(--space-5) 0",
      fontSize: "var(--font-sm)",
    }}
  >
    © {new Date().getFullYear()} &middot; Built with {` `}
    <a href="https://www.gatsbyjs.com">Gatsby</a>
  </footer>
)

export default Footer
