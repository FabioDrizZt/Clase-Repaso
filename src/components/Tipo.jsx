import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'

export default function Tipo() {
  const [pokeList, setPokeList] = useState([])
  const params = useParams()
  useEffect(() => {
    axios(`https://pokeapi.co/api/v2/type/${params.tipo}/`).then((res) =>
      setPokeList(res.data.pokemon)
    )
  }, [params])

  return (
    <div className="container">
      <aside>
        <h2>Pokemones de tipo {params.tipo}</h2>
        <ol>
          {pokeList.map((poke, index) => (
            <li key={index}>
              <Link to={poke.pokemon.name}>{poke.pokemon.name}</Link>
            </li>
          ))}
        </ol>
      </aside>
      <Outlet className="outlet" />
    </div>
  )
}
