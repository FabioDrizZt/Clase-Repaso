import App from './App'
import Error from './pages/Error'
import Pokemon from './components/Pokemon'
import Pokemons from './pages/Pokemons'
import Tipo from './components/Tipo'
import Tipos from './pages/Tipos'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/pokemons" element={<Pokemons />}>
            <Route path="/pokemons/:name" element={<Pokemon />} />
          </Route>
          <Route path="/tipos" element={<Tipos />}>
            <Route path="/tipos/:tipo" element={<Tipo />}>
              <Route path="/tipos/:tipo/:name" element={<Pokemon />} />
            </Route>
          </Route>
        </Route>

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}
