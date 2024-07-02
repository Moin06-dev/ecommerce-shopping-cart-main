import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";
import { useContext } from "react";
import { ShopContext } from "../App";


const ErrorPage = () => {


  const { carts } = useContext(ShopContext)

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(`/`);
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <Navbar badge={carts.length} />
      <main className="grid min-h-full place-items-center mb-2 bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-indigo-600">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button
              text="Go Back Home"
              onClick={handleButtonClick}
              btnClass="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

ErrorPage.propTypes = {
  carts: PropTypes.array,
};

export default ErrorPage;
