

export default function StarshipCard( {name, starship_class, manufacturer, model }) {
    return (
    <div className="card">
        <p>Name: {name}</p>
        <p> Starship Class: {starship_class}</p>
       <p> Starship Manufacturer: {manufacturer}</p>
      <p> Starship Model: {model}</p>
    </div>
);
}




