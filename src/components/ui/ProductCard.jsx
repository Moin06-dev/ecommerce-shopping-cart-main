import PropTypes from "prop-types";
import Button from "./Button";


const Card = ({ textStyle, imageStyle, image, name, price, moreInfo }) => {
  

  const handleMoreInfoClick = () => {
    moreInfo(); // Call the original moreInfo function passed as a prop
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex flex-col bg-white">
        {/* Full-width image with object-cover fit */}
        <div className="flex">
          <img src={image} alt={name} className={imageStyle} />
        </div>

        {/* Text content */}
        <div className={textStyle}>
          {/* Description */}
          <p className="font-montserrat text-sm uppercase font-bold">
            {name}
          </p>

          {/* Price */}
          <p className="font-montserrat text-sm uppercase font-bold">{price}</p>
        </div>
        
        <Button
          text="View"
          btnClass="bg-gray-950 font-montserrat uppercase m-2 mb-6 text-xs text-center text-white rounded-md px-4 py-2 w-1/4 mx-auto transition duration-300 ease-in-out focus:outline-none hover:bg-gray-950 hover:text-red-500"
          onClick={handleMoreInfoClick}
        />
      </div>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.string,
  textStyle: PropTypes.node,
  imageStyle: PropTypes.node,
  moreInfo: PropTypes.func,
};

export default Card;
