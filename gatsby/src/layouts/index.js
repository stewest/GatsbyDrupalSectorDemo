import React from "react"
import { Link } from "gatsby"
import Container from "../components/container"

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Container>
        <div>
          {children}
          <Link to="/pages/">See Pages Listing</Link>
        </div>
      </Container>

      <footer>
        <Container>
          <div>Copyright {new Date().getFullYear()} Terms & Conditions</div>
        </Container>
      </footer>
    </div>
  )
}

export default DefaultLayout
