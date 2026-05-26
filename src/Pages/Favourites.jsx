 import { useFavourites } from '../context/FavouritesContext'

function Favourites() {
  const { favourites } = useFavourites()

  if (favourites.length === 0) {
    return (
      <div>
        <p>No favourites yet</p>
        <Link to="/">Go Home</Link>
      </div>
    )
  }

  return (
    <div className="cards-grid">
      {favourites.map((country) => (
        <CountryCard key={country.cca3} country={country} />
      ))}
    </div>
  )
}

export default Favourites;