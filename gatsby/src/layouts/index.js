import React from "react"
import Container from "../components/container"

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Container>
        <div>{children}</div>
      </Container>

      <footer className="border-t border-t-gray-300 bg-gray-700 text-white">
        <Container className="mx-auto max-w-2xl py-10">
          <div>Copyright {new Date().getFullYear()} Terms & Conditions</div>
        </Container>
      </footer>
    </div>
  )
}

export default DefaultLayout
