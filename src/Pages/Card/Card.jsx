/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { setItem } from "localforage";
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import swal from "sweetalert";

const Card = () => {

    const [cardInfo, setCardInfo] = useState();

    const { id } = useParams();
    // console.log(id);
    const cards = useLoaderData();
    // console.log(cards);
    useEffect(() => {
        // console.log(id, cards);
        const findCard = cards?.find(card => card.id == id);
        setCardInfo(findCard);
    }, [id, cards])
    // console.log(cardInfo);

    const detailsPictureStyle = {
        backgroundImage: `url(${cardInfo?.picture})`
    }
    const detailsBtnStyle = {
        backgroundColor: cardInfo?.color_text_and_button_bg
    }

    const handleAddToDonation = () => {
        const addedDonationsArray = [];
        const getDonatedItems = JSON.parse(localStorage.getItem('donations'))
        if (!getDonatedItems) {
            addedDonationsArray.push(cardInfo)
            localStorage.setItem('donations', JSON.stringify(addedDonationsArray))
            swal("Good job!", "Donation Successful!", "success")
        }
        else {
            const isExist = getDonatedItems.find(cardInfo => cardInfo.id == id)
            if (!isExist) {

                addedDonationsArray.push(...getDonatedItems, cardInfo)
                localStorage.setItem('donations', JSON.stringify(addedDonationsArray))
                swal("Good job!", "Donation Successful!", "success")
            }
            else{
                swal("Already Donated !", "Do you want to donate more? Try our other categories", "error")
            }
        }

        // console.log(cardInfo);
        // localStorage.setItem('test', "Zahid")
        // const setDonatedItems = localStorage.setItem('test', JSON.stringify(cardInfo))
        // console.log(setDonatedItems);
        // const getDonatedItems = JSON.parse(localStorage.getItem('test'))
        // console.log(getDonatedItems);

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