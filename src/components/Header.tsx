import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header id="header">
      <h1 className="logo">
        <Link to="/">Rany Portfolio</Link>
      </h1>
    </header>
  )
}

export default Header
