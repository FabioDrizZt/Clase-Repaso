import { Outlet, useOutlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Main from './components/Main'
import './App.css'

export default function App() {
  const outlet = useOutlet()
  return (
    <main>
      <Navbar />
      <hr />
      {!outlet && <Main/>}      
      <Outlet />
    </main>
  )
}
