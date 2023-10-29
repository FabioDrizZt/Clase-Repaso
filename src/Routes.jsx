export const routes = {
  app: '/',
  pokemons: '/pokemons',
  pokemon: '/pokemons/:name',
  tipos: '/tipos',
  tipo: '/tipos/:tipo',
  tipoPokemon: '/tipos/:tipo/:name'
}

/*
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
        */
