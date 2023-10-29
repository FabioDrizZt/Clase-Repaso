import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Pokemon() {
  const [poke, setPoke] = useState('')
  const params = useParams()

  function ucwords(str) {
    return str.toLowerCase().replace(/\b\w/g, function (char) {
      return char.toUpperCase()
    })
  }

  useEffect(() => {
    axios(`https://pokeapi.co/api/v2/pokemon/${params.name}/`).then((res) =>
      setPoke(res.data)
    )
  }, [params])
  console.log(poke)

  return (
    <div>
      <h2>{ucwords(poke.name)}</h2>
      <img src={poke?.sprites?.front_default} alt="poke-imagen" />
    </div>
  )
}
