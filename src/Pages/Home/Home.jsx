import { useLoaderData } from "react-router-dom";
import Cards from "../../components/Cards/Cards";
import Banner from "../../components/Header/Banner/Banner";
import { useState } from "react";


const Home = () => {
    const cards = useLoaderData();

    const [searchTerm, setSearchTerm] = useState([]); 
   
    console.log(searchTerm);

    
    const handleSearch = ()=> {
        const newCards = cards.filter(card => card.category.includes(searchTerm));
        return (
            searchTerm && newCards || cards
            )
        // console.log(newCards);
    };
    
    // console.log(cards);
    return (

        <div className="max-w-[1300px] mx-auto">
            <div className="h-[600px]">
                <Banner searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleSearch={handleSearch}></Banner>
                <div className="mt-10 pb-10 flex justify-center items-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                        {
                            handleSearch().map(card => <Cards key={card.id} card={card}></Cards>)
                            
                        }
                        {/* {
                            cards.map(card => <Cards key={card.id} card={card}></Cards>)
                        } */}
                    </div>
                </div>



            </div>
        </div>
    );
};

export default Home;