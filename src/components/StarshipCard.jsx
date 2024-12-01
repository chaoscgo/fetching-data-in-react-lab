

export default function StarshipCard( {name, starship_class, manufacturer, model }) {
    return (
    <>
        <p>Name: {name}</p>
        <p> Class: {starship_class}</p>
       <p> Manufacturer: {manufacturer}</p>
      <p> Model: {model}</p>
    </>
);
}

