import './App.css'
import Movies from './components/Movies.jsx';

const sampleMovie = [
  {
    id: 1,
    image: 'https://tailwindcss.com/_next/static/media/prognosis-negative.6897ae50.jpg',
    title: 'Prognosis Negative',
    starRating: '2.66',
    rating: 'PG-13',
    year: '2021',
    genre: 'Comedy',
    runtime: '1h 46m',
    cast: 'Simon Pegg, Zach Galifianakis'
  },
  {
    id: 2,
    image: 'https://tailwindcss.com/_next/static/media/rochelle-rochelle.b97e372a.jpg',
    title: 'Rochelle, Rochelle',
    starRating: '3.25',
    rating: 'R',
    year: '2020',
    genre: 'Romance',
    runtime: '1h 56m',
    cast: 'Emilia Clarke'
  },
  {
    id: 3,
    image: 'https://tailwindcss.com/_next/static/media/death-blow.bcfcabb1.jpg',
    title: 'Death Blow',
    starRating: '4.95',
    rating: '18A',
    year: '2020',
    genre: 'Action',
    runtime: '2h 5m',
    cast: 'Idris Elba, John Cena, Thandiwe Newton'
  },
]
export default function App() {
  return (
   <Movies movies={sampleMovie}/>
  )
}


