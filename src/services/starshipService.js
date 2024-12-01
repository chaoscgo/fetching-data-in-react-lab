const BASE_URL = 'https://swapi.dev/api/starships/';

const index = async () => {
    try {
      const res = await fetch(BASE_URL);
      const data = await res.json();
      console.log(data.name);
      return data;
    } catch (err) {
      console.log(err);
    }
  };



const show = async (starship) => {
    try {
      const queryString = `?search=${starship}`;
      const res = await fetch(BASE_URL + queryString);
      const data = await res.json();
      console.log('Starship you requested:', data);
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  export { show };

  export { index };