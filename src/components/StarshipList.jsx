import StarshipCard from './StarshipCard';

const StarshipList = ( { starships, starship}) => {

    if (starship && Object.keys(starship).length > 0) {
        return (
           <div>
             <StarshipCard 
              name={starship.name}
              starship_class={starship.starship_class}
              manufacturer={starship.manufacturer}
              model={starship.model}
             />
           </div>
        );
    };

        return (
          <div>
            {starships.map((starshipPiece, index) => (
                <div key={index}>
                <StarshipCard 
                  name={starshipPiece.name}
                  starship_class={starshipPiece.starship_class}
                  manufacturer={starshipPiece.manufacturer}
                  model={starshipPiece.model}
                />
                </div>
            ))};
          </div>
        );
};


export default StarshipList;