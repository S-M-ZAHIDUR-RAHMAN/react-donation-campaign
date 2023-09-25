/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const Cards = ({ card }) => {
    const { picture, picture_rectangle, title, category, color_category_bg, color_card_bg, color_text_and_button_bg, description, price } = card || {}

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


    return (
        <section>
            <div>
                <div className="card hover:opacity-75 hover:hero-overlay card-compact w-[312px] shadow-xl" style={cardStyle}>
                    <figure><img className="w-full" src={picture} alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className="flex">
                            <h2 className="card-title py-1 px-3 text-bold text-sm" style={categoryStyle}>{category}</h2>
                        </div>
                        <h2 className="text-bold text-2xl text-black" style={titleStyle}>{title}</h2>
                    </div>
                </div>
            </div>
        </section>


    );
};

export default Cards;