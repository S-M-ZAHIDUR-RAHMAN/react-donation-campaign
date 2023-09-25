

const Banner = () => {
    return (
        <div className="hero min-h-[50vh]" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
            <div className="hero-overlay bg-white bg-opacity-90"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-black text-2xl font-bold">I Grow By Helping People In Need</h1>
                    <div className="flex justify-center">
                    <input className="h-[50px] w-[3600px] text-black px-10" type="search" placeholder="Search here..." name="" id="" />
                    <button className="btn bg-red-500 w-[110px] text-white">Search</button>

                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Banner;