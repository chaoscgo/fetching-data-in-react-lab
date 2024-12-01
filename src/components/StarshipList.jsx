// import StarshipCard from './StarshipCard';

const StarshipList = (props) => {
    return (
        <>
        <h1>List of Starships</h1>
        <ul>
            {props.starships.map((starship, index) => (
                <li key={index}>
                <p>Name: {starship.name}</p>
                <p> Class: {starship.starships_class}</p>
                <p> Manufacturer: {starship.manufacturer}</p>
                <p> Model: {starship.model}</p>
                </li>
            ))}
        </ul>
    </>
    )
}


export default StarshipList;