import reactlogo from "../assets/react-logo.png"


export default function Navbar() {
  return (
      <header>
          <nav>
              <img src={reactlogo} alt="React logo" />
              <span>ReactFacts</span>
          </nav>
      </header>
  )
}