import { Link } from 'react-router-dom'

export default function Navbar() {
  return <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">about</Link></li>
      <li><Link to="/contact">contact</Link></li>
    </ul>
  </nav>;
}