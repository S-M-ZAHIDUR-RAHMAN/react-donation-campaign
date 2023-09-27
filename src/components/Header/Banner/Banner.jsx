/* eslint-disable react/prop-types */

import { useState } from "react";

const Banner = ({searchTerm, setSearchTerm, handleSearch}) => {
    const [boxText, setBoxText] = useState('');

    const handleChange = (e) => {
        setBoxText(e.target.value.toUpperCase());
    };

    const handleClick=()=>{
        setSearchTerm(boxText);
        handleSearch(searchTerm);
    }
    return (
        <div className="hero min-h-[50vh]" style={{ backgroundImage: 'url(https://i.ibb.co/tPz3tK9/Rectangle-4281.png)' }}>
            <div className="hero-overlay bg-white bg-opacity-90"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="lg:max-w-md max-w-sm">
                    <h1 className="mb-5 text-black text-2xl font-bold">Be the <span className="text-orange-500">hand</span> that lifts <span className="animate-pulse">others</span> up</h1>
                    <div className="flex justify-center">
                    <input className="h-[50px] w-[3600px] text-black px-10" type="text" value={boxText} onChange={handleChange} placeholder="Search category here..." name="" id="" />
                    <button onClick={handleClick} className="btn bg-red-500 w-[110px] text-white">Search</button>
                    </div> 
                </div>
            </div>
        </div>
    );
};

export default Banner;