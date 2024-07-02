import PropTypes from "prop-types";

const Card = ({ textStyle, imageStyle, image, name, description, price }) => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex flex-col bg-white">
        <div className="flex">
          <img src={image} alt={name} className={imageStyle} />
        </div>


        <div className={textStyle}>
       
          <p className="text-xl font-montserrat uppercase font-bold">{name}</p>

         
          <p className="font-montserrat uppercase font-bold mt-2">{description}</p>

        
          <p className="font-montserrat uppercase font-bold mt-1">{price}</p>

        </div>
        
      </div>
    </div>
  );
};

Card.propTypes = {
  description: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.string,
  textStyle: PropTypes.node,
  imageStyle: PropTypes.node,
  addtoCart: PropTypes.func
};

export default Card;
