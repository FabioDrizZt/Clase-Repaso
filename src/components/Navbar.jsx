import { Link } from 'react-router-dom'
import logo from '../assets/Logo-Pokemon.png'
import style from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={style.navbar}>
      <ul className={style.linkContainer}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/pokemons">Pokemons</Link>
        </li>
        <li>
          <Link to="/tipos">Tipos</Link>
        </li>
      </ul>
      <div className={style.logoContainer}>
        <img src={logo} alt="logo" className={style.logo} />
      </div>
    </nav>
  )
}
