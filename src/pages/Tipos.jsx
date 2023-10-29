import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Tipos() {
  const [tiposList, setTiposList] = useState([])

  useEffect(() => {
    axios('https://pokeapi.co/api/v2/type/').then((res) => setTiposList(res.data.results))
  }, [])

  return (
    <div className="container">
      <aside>
        <h1>Tipos de pokemones</h1>
        <ol>
          {tiposList.map((tipo, index) => (
            <li key={index}>
              <Link to={tipo.name}>{tipo.name}</Link>
            </li>
          ))}
        </ol>
      </aside>
      <Outlet className="outlet" />
    </div>
  )
}