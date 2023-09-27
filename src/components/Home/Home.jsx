import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";

import Cards from "../CardDonation/Cards";



const Home = () => {


    const cards = useLoaderData()
 


    
    return (
        <div className="max-w-[1600px] mx-auto">
         <Banner></Banner>
        <Cards cards={cards}></Cards>
       
        </div>
    );
};

export default Home;