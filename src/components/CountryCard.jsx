
<CountryCard
  name={country.name.common}
  flag={country.flags.png}
  capital={country.capital}
/>
import { Link } from 'react-router-dom'
import { useFavourites } from '../context/FavouritesContext'


import '../styles/App.css'

function CountryCard({ country }) {
  const {
    name,
    flags,
    population,
    region,
    capital,
    cca3,
  } = country

  const { favourites, dispatch } =
    useFavourites()

  const isSaved = favourites.some(
    (c) => c.cca3 === cca3
  )

  function handleFavClick(e) {
    e.stopPropagation()

    if (isSaved) {
      dispatch({
        type: 'REMOVE_FAVOURITE',
        payload: cca3,
      })
    } else {
      dispatch({
        type: 'ADD_FAVOURITE',
        payload: country,
      })
    }
  }

  return (
    <Link
      to={`/country/${cca3}`}
      className="country-card"
    >
      <img
        src={flags.svg}
        alt={name.common}
      />

      <div className="card-body">
        <h3>{name.common}</h3>
        <p>{region}</p>
        <p>{population}</p>

        <button
          className={`fav-btn ${
            isSaved ? 'fav-btn--saved' : ''
          }`}
          onClick={handleFavClick}
        >
          {isSaved ? '♥ Saved' : '♡ Save'}
        </button>
        <button
  aria-label={
    isSaved
      ? `Remove ${country.name.common} from favourites`
      : `Save ${country.name.common} to favourites`
  }
  aria-pressed={isSaved}
  onClick={(e) => {
    e.stopPropagation()

    dispatch({
      type: isSaved ? 'REMOVE_FAVOURITE' : 'ADD_FAVOURITE',
      payload: isSaved ? country.cca3 : country
    })
  }}
>
  {isSaved ? '♥ Saved' : '♡ Save'}
</button>
      </div>
    </Link>
  )
}

export default CountryCard;