/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Card = () => {

    const [cardInfo, setCardInfo] = useState();

    const { id } = useParams();
    // console.log(id);
    const cards = useLoaderData();
    // console.log(cards);
    useEffect(() => {
        // console.log(id, cards);
        const findCard = cards.find(card => card.id == id);
        setCardInfo(findCard);
    }, [id, cards])
    console.log(cardInfo);

    const detailsPictureStyle = {
        backgroundImage: `url(${cardInfo?.picture})`
    }
    const detailsBtnStyle = {
        backgroundColor: cardInfo?.color_text_and_button_bg
    }

    const handleAddToDonation =()=>{
        console.log(cardInfo);
    }

    return (

        <div>
            <div className="hero min-h-[50vh] flex flex-col justify-end" style={detailsPictureStyle}>
                <div className="w-full bg-opacity-60">
                    <div className="hero-overlay pl-5 py-5">
                    <button onClick={handleAddToDonation} className="btn text-lg glass hover:marker hover:w-[200px] hover:rounded-full hover:text-xl text-white" style={detailsBtnStyle}>Donate ${cardInfo?.price}</button>
                    </div>
                </div>
            </div>
            <div className="mt-14">
                <div className="text-4xl font-bold">
                    {cardInfo?.title}
                </div>
                <div className="text-lg mt-6">
                    {cardInfo?.description}
                </div>
            </div>
        </div>
    );
};

export default Card;