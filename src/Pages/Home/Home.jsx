import { useLoaderData } from "react-router-dom";
import Cards from "../../components/Cards/Cards";
import Banner from "../../components/Header/Banner/Banner";

const Home = () => {
    const cards = useLoaderData();

    console.log(cards);
    return (

        <div className="max-w-[1300px] mx-auto">
            <div className="h-[600px]">
                <Banner></Banner>
                <div className="mt-10 pb-10">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
                        {
                            cards.map(card => <Cards key={card.price} card={card}></Cards>)
                        }
                    </div>
                </div>



            </div>
        </div>
    );
};

export default Home;