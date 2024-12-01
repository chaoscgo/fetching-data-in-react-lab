import { useState, useEffect } from 'react';
import { index as fetchStarships} from './services/starshipService';
// import StarshipSearch from './components/StarshipSearch';
// import StarshipList from './components/StarshipList';


const App = () => {

  const [starships, setStarships] = useState([]);

  const fetchDefaultData = async () => {
    try {
      const data = await fetchStarships();
      const newStarshipsState = data.results.map((starship) => ({
        name: starship.name,
        starships_class: starship.starship_class,
       starships_manufacturer: starship.manufacturer,
       starships_model: starship.model,
    }));
    setStarships(newStarshipsState);
    } catch (error) {
      console.error('Error', error);
    }
  };

  console.log(starships);

  useEffect(() => {
    fetchDefaultData();
  }, []);

}

export default App
