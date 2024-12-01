import { useState, useEffect } from 'react';
import { index as fetchStarships, show as fetchStarship} from './services/starshipService';
import StarshipSearch from './components/StarshipSearch';
import StarshipList from './components/StarshipList';
import './App.css';


const App = () => {

  const [starship, setStarship] = useState({});
  const [starships, setStarships] = useState([]);

  const fetchData = async (starship) => {
    try {
      const data = await fetchStarship(starship);
      const newStarshipState = {
        name: data.results[0].name,
        starship_class: data.results[0].starship_class,
        manufacturer: data.results[0].manufacturer,
        model: data.results[0].model,
      };
  setStarship(newStarshipState);
    } catch (error) {
  console.error('Error fetching starship', error);
    }
  };

  useEffect(() => {
    const fetchDefaultData = async () => {
      try {
        const data = await fetchStarships();
        const newStarshipsState = data.results.map((starship) => ({
          name: starship.name,
          starship_class: starship.starship_class,
          manufacturer: starship.manufacturer,
          model: starship.model,
      }));
      setStarships(newStarshipsState);
      } catch (error) {
        console.error('Error fetching list of starships', error);
      }
    };
    fetchDefaultData();
  }, []);
 
  let starshipCount = 0;

  if (starship && Object.keys(starship).length > 0) {
    starshipCount = ((Object.keys(starship).length)-3);
  } else {
    starshipCount = starships.length;
  };

  return (
    <>
      <h1>Star Wars</h1>
      <h2>Starship Count: {starshipCount}</h2>
      <StarshipSearch fetchData={fetchData} />
      <StarshipList starships={starships} starship={starship} />
    </>
  )
}

export default App
