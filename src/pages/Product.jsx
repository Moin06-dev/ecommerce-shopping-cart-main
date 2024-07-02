import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { useContext } from "react";
import { ShopContext } from "../App";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import productData from "../productData";
import Button from "../components/ui/Button";
import Newsletter from "../components/Newsletter";
import Modal from "../components/ui/Modal";

const links = [
  { name: "XS" },
  { name: "SM" },
  { name: "M" },
  { name: "L" },
  { name: "XL" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Product = () => {
  const { id } = useParams();
  const [selected, setSelected] = useState(links[0]);
  const [showModal, setShowModal] = useState(false);
  const { carts, addToCart } = useContext(ShopContext);

  const handleAddToCart = () => {
    addToCart({ ...product, size: selected.name }); // product represents the product you want to add to the cart,  includes id, image, name, description, and price.
    setShowModal(true);
  };

  // Find the product with the given id in all categories
  const product = Object.values(productData)
    .flat()
    .find((product) => product.id.toString() === id);

  const { image, name, description, price } = product;

  return (
    <>
      <NavBar badge={carts.length} />
      {product ? (
        <div className="  mx-auto mt-5 mb-20">
          <div className="flex flex-col px-5 justify-center mx-auto lg:flex-row lg:justify-evenly">
            <img
              className="w-full object-cover md:w-full lg:w-96"
              src={image}
              alt={`product ${id}`}
            />
            <div className="flex flex-col w-full justify-center lg:w-1/5 ">
              <p className="text-3xl font-montserrat mt-4 lg:mt-0 font-bold">
                {name}
              </p>
              <p className="text-xl mt-8 font-montserrat border-b border-black py-2">
                ${price}
              </p>
              <p className="text-xs text-gray-500 mt-8 font-montserrat">
                {description}
              </p>

              <Listbox value={selected} onChange={setSelected}>
                {({ open }) => (
                  <>
                    <Listbox.Label className="block text-sm mt-8 font-medium leading-6 text-gray-900">
                      Select Size
                    </Listbox.Label>
                    <div className="relative">
                      <Listbox.Button className="relative mt-3 w-full cursor-default rounded-md bg-white py-1 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                        <span className="flex items-center">
                          <span className="ml-3 block truncate">
                            {selected.name}
                          </span>
                        </span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                          <ChevronUpDownIcon
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                        </span>
                      </Listbox.Button>

                      <Transition
                        show={open}
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                          {links.map((link, index) => (
                            <Listbox.Option
                              key={index}
                              className={({ active }) =>
                                classNames(
                                  active
                                    ? "bg-indigo-600 text-white"
                                    : "text-gray-900",
                                  "relative cursor-default select-none py-2 pl-3 pr-9"
                                )
                              }
                              value={link}
                            >
                              {({ selected, active }) => (
                                <>
                                  <div className="flex items-center">
                                    <span
                                      className={classNames(
                                        selected
                                          ? "font-semibold"
                                          : "font-normal",
                                        "ml-3 block truncate"
                                      )}
                                    >
                                      {link.name}
                                    </span>
                                  </div>

                                  {selected ? (
                                    <span
                                      className={classNames(
                                        active
                                          ? "text-white"
                                          : "text-indigo-600",
                                        "absolute inset-y-0 right-0 flex items-center pr-4"
                                      )}
                                    >
                                      <CheckIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    </span>
                                  ) : null}
                                </>
                              )}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </>
                )}
              </Listbox>

              <Button
                text="Add to Cart"
                btnClass="bg-black mt-8 font-montserrat uppercase m-2 mb-6 text-sm text-white rounded-md px-8 py-4  transition duration-300 ease-in-out active:bg-red-500 focus:outline-none hover:bg-gray-900"
                onClick={() => handleAddToCart(selected.name)}
              ></Button>

              {showModal && <Modal onClose={() => setShowModal(false)} />}

              <div className="flex flex-col mt-4 justify-center items-center cursor-pointer gap-3 lg:items-stretch">
                <p className="text-xs font-montserrat text-black hover:font-bold">
                  Check In-Store Availability
                </p>
                <p className="text-xs font-montserrat text-black hover:font-bold">
                  Product Details
                </p>
                <p className="text-xs font-montserrat text-black hover:font-bold">
                  Delivery & Returns
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Product not found</p>
      )}
      <Newsletter />
      <Footer />
    </>
  );
};

Product.propTypes = {
  addToCart: PropTypes.func,
  carts: PropTypes.array,
};

export default Product;
