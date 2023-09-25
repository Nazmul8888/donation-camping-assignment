import { Link } from "react-router-dom";
import Card from "./Card";


const Cards = ({cards}) => {

    console.log(cards)
    return (
        <div className="grid grid-cols-1 md:gird-cols-2 lg:grid-cols-4 gap-5">
{cards.map((card) => (
    <div key={card.id}>
         <Link to={`/donation/${card.name}`} >
        <Card key={card.id} card={card}></Card>

     </Link>
    </div>
    
      ))}

            {/* {cards.map(card => {
                <>
                <Link to={`/donation/${card.name}`} >
                <Card key={card.id} card={card}></Card>)
                </Link>
               </>
            })} */}
        
        
        </div>
    );
};

export default Cards;