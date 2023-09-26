/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";

const DonationList = ({ card }) => {
    const { id, category_id, picture, picture_rectangle, title, category, color_category_bg, color_card_bg, color_text_and_button_bg, description, price } = card || {};


    const cardStyle = {
        backgroundColor: color_card_bg,
    };
    const categoryStyle = {
        color: color_text_and_button_bg,
        backgroundColor: color_category_bg
    }
    const titleStyle = {
        color: color_text_and_button_bg,
    }
    const btnStyle = {
        backgroundColor: color_text_and_button_bg,
    }

    return (
        <div>
            <div className="h-auto w-auto">
                <div className="flex flex-col mx-6 rounded-lg md:flex-row lg:flex-row" style={cardStyle}>
                    <img src={picture_rectangle} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className="flex flex-col gap-0 pl-5 pt-4">
                        <h2 className="card-title py-1 px-3 mr-auto text-bold text-sm" style={categoryStyle}>{category}</h2>
                        <h2 className="text-bold text-2xl text-black" style={titleStyle}>{title}</h2>
                        <p className="py-2 font-bold" style={titleStyle}>$ {price}.00</p>
                        <Link to={`/cards/${id}`}>
                            <button className="btn text-white w-[150px]" style={btnStyle}>View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonationList;