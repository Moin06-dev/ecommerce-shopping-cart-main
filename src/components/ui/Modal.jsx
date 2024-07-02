import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Modal = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/pages/cart")
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  };
  
  return (
    <div className="flex w-full max-w-full overflow-hidden mt-3 mb-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <div className="flex items-center justify-center w-12 bg-emerald-500">
        <svg
          className="w-6 h-6 text-white fill-current"
          viewBox="0 0 40 40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z" />
        </svg>
      </div>
      <div className="flex flex-col px-4 py-2 ">
        <div className=" ">
          <p className="text-sm  text-gray-600 dark:text-gray-200">
           Added to Shopping Cart!
          </p>
          <Button 
          btnClass="text-xs font-montserrat text-white mx-auto mt-3 bg-gray-950 px-4 py-2 rounded-md text-center" 
          text="View Cart" 
          onClick={handleButtonClick} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
