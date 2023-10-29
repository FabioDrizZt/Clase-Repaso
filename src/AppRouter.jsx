import App from './App'
import Error from './pages/Error'
import Pokemon from './components/Pokemon'
import Pokemons from './pages/Pokemons'
import Tipo from './components/Tipo'
import Tipos from './pages/Tipos'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { routes } from './Routes'

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.app} element={<App />}>
          <Route path={routes.pokemons} element={<Pokemons />}>
            <Route path={routes.pokemon} element={<Pokemon />} />
          </Route>
          <Route path={routes.tipos} element={<Tipos />}>
            <Route path={routes.tipo} element={<Tipo />}>
              <Route path={routes.tipoPokemon} element={<Pokemon />} />
            </Route>
          </Route>
        </Route>

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}
