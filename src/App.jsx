 import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

import Header from './components/Header'

import Home from './pages/Home'
import CountryPage from './pages/CountryPage'
import NotFound from './pages/NotFound'

import './styles/App.css'

function App() {
  return (
    <BrowserRouter>
      <Header />

      <main>
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={<Home />}
          />

          {/* Country Detail Page */}
          <Route
            path="/country/:code"
            element={<CountryPage />}
          />

          {/* Favourites Page */}
          <Route
            path="/favourites"
            element={
              <div>Favourites Page</div>
            }
          />

          {/* 404 Page */}
          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App