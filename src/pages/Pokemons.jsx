import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Pokemons() {
  const [pokeList, setPokeList] = useState([])
  const url = 'https://pokeapi.co/api/v2/pokemon/?limit=151'

  useEffect(() => {
    axios(url).then((res) => setPokeList(res.data.results))
  }, [])

  return (
    <div className="container">
      <aside>
        <h1>Mi pagina de pokemones</h1>
        <ol>
          {pokeList.map((poke, index) => (
            <li key={index}>
              <Link to={poke.name}>{poke.name}</Link>
            </li>
          ))}
        </ol>
      </aside>
      <Outlet className="outlet" />
    </div>
  )
}
