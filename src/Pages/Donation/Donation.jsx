import { useEffect, useState } from "react";
import DonationList from "./DonationList";


const Donation = () => {

    const [donations, setDonations] = useState([]);
    const [noDataFound, setNoDataFound] = useState("");
    const [isShow, setIsShow] = useState(false);


    useEffect(() => {
        const getDonatedItems = JSON.parse(localStorage.getItem('donations'))
        setDonations(getDonatedItems)
        if (getDonatedItems) {
            setDonations(getDonatedItems)
        }
        else {
            setNoDataFound("No Data Found")
        }
    }, [])
    // console.log(donations);
    const handleRemove=()=>{
        localStorage.clear();
        setDonations([]);
        setNoDataFound("No Data Found");
    }


    return (
        <div>
            {noDataFound && <h2 className="h-[100vh] flex justify-center items-center">{noDataFound}</h2> || <div>
                {
                    donations.length > 0 && <button onClick={handleRemove} className="p-5 bg-red-700 text-white block hover:rounded-full mx-auto">Delete All</button>
                }
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-16">
                    {
                        isShow ? donations?.map(card => <DonationList key={card.id} card={card}></DonationList>) 
                        : donations.slice(0,4)?.map(card => <DonationList key={card.id} card={card}></DonationList>)
                    }
                </div>
                <button onClick={()=>setIsShow(!isShow)} className="p-5 bg-green-700 text-white block hover:rounded-full mx-auto">{isShow ? "See Less" : "See More"}</button>


            </div>}
        </div>
    );
};

export default Donation;