import StarshipCard from './StarshipCard';

const StarshipList = ( { starships }) => {
    return (
        <div>
            {starships.map((starship, index) => (
                <div key={index}>
                <StarshipCard 
                  name={starship.name}
                  starship_class={starship.starship_class}
                  manufacturer={starship.manufacturer}
                  model={starship.model}
               />
            </div>
            ))}
        </div>
 
    )
}


export default StarshipList;