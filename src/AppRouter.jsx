import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import About from './pages/About'
import Error from './pages/Error'

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/about" element={<About />} />
        </Route>

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}
