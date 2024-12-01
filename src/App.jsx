import { useState, useEffect } from 'react';
import { index as fetchStarships} from './services/starshipService';
// import StarshipSearch from './components/StarshipSearch';
import StarshipList from './components/StarshipList';


const App = () => {

  const [starships, setStarships] = useState([]);

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
      console.error('Error', error);
    }
  };

  // console.log(starships);

  useEffect(() => {
    fetchDefaultData();
  }, []);

  return (
    <>
    <h1>Star Wars</h1>
    <StarshipList starships={starships} />
    </>
  )
}

export default App
