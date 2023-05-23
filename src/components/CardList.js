import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    return(
        <div>
            {
                // Lets loop all our robots in an array. We need to give our elements a name like a foreach loop
                // This key prop is used to help React keep track of thing if one is removed and prevent it to reload the whole page
                robots.map((user, i) => {
                    return (
                        <Card 
                        // And create a component with properties for all those robots
                            key = {i} 
                            id={robots[i].id} 
                            name={robots[i].name} 
                            email={robots[i].email}
                        />
                    );
                })
            }
        </div> 
    );
}

    
        
        


export default CardList;