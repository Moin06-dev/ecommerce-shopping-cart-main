import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Quantity from "../components/ui/Quantity";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Button from "../components/ui/Button";
import { useContext } from "react";
import { ShopContext } from "../App";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const { carts, handleRemove } =  useContext(ShopContext)
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0)




 const updateQuantity = (product, newQuantity) => {
  setQuantity(prevQuantities => ({ ...prevQuantities, [product]: newQuantity }));
};



  const decreaseQuantity = (product) => {
    updateQuantity(product, Math.max(quantity[product] - 1, 1)); // first -1 is to decrease by one, second 1 is make sure that its never less than one
  };

  const increaseQuantity = (product) => {
    updateQuantity(product, (quantity[product] || 0) + 1);
  };



  useEffect(() => {
    const handlePrice = () => {
      return carts.reduce((total, product) => total + product.price * (quantity[product.id] || 1), 0).toFixed(2);};

    // Calculate total price when carts or quantity change
    setTotalPrice(handlePrice());
  }, [carts, quantity]); 




  const handleCheckout = () => {
    alert("Thank you for your order!");
  };

  

  const goBack = () => {
    navigate("/pages/productpage")
    window.scrollTo(0, 0);
  };
  
  return (
    <>
      <NavBar badge={carts.length} />

      <h1 className="text-3xl mt-5 text-center font-poppins font-bold mb-4 lg:mt-0">
        Your Cart
      </h1>
      <div className="container mb-56 max-w-7xl mt-5 mx-auto flex-col flex  p-4 lg:flex-row lg:gap-20">
        <div className="flex flex-col gap-3  items-center flex-1">
          {carts.map((product) => (
            <div
              key={product.id}
              className="flex flex-col w-full  p-4 border-t border-b border-gray-300 lg:flex-row  lg:gap-20"
            >
              <img
                className="h-32 w-32 rounded-md object-cover mb-4 "
                src={product.image}
                alt={product.name}
              />

              <div className="flex flex-col h-full justify-center items-center gap-2 flex-1 ml-5 lg:flex-row lg:ml-0">
                <div className="flex items-center justify-between w-full">
                  <div className="flex flex-col gap-3 ">
                    <p className="text-xs font-sora lg:text-md font-medium">
                      {product.name}
                    </p>
                    <p className="text-xs font-sora font-medium lg:text-md">
                      ${product.price}
                    </p>
                    <p className="text-xs font-sora font-medium lg:text-md">
                      {product.size}
                    </p>
                  </div>
                  <div  className="flex flex-col  items-center justify-center lg:gap-2">
                    <XMarkIcon
                      className="w-12 h-12 hover:outline-2 p-3 active:text-red-500 cursor-pointer"
                      onClick={() => handleRemove(product.id)}
                    />

                  <Quantity
                    value={quantity[product.id] || 1}
                    onDecrease={() => decreaseQuantity(product.id)}
                    onIncrease={() => increaseQuantity(product.id)}
                  />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {carts.length > 0 && (
          <div className="flex flex-col w-full h-fit mx-auto mt-6 pt-5 border justify-center items-center gap-5 lg:mt-0 lg:w-80">
            <h2 className="font-montserrat w-full text-md uppercase border-b pb-3 text-center">
              Order summary
            </h2>
            <p className="text-md font-montserrat uppercase">
              Total{" "}
              <span className="font-bold ml-2 tracking-widest">${totalPrice}</span>
            </p>
            <Button
             btnClass="text-white w-full uppercase font-poppins bg-gray-950 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium text-sm px-5 py-2.5"
             text="Keep Shopping"
             onClick={goBack}
           />
            <Button
              btnClass="text-white w-full uppercase font-poppins bg-gray-950 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium text-sm px-5 py-2.5"
              text="Checkout"
              onClick={handleCheckout}
            />
          </div>
        )}
      </div>
        
      <Footer />
    </>
  );
};

Cart.propTypes = {
  carts: PropTypes.array,
  totalPrice: PropTypes.number,
  handleRemove: PropTypes.func
};

export default Cart;
