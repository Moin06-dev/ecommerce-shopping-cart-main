import { Disclosure } from "@headlessui/react";
import {  Bars3Icon,  XMarkIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Logo from "./ui/Logo";


const navigation = [
  { name: "Home", to: "/", current: true },
  { name: "Products", to: "/pages/productpage", current: false },
  { name: "Collections", to: "/pages/collections", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = ({ badge }) => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Disclosure as="nav" className="">
      {({ open }) => (
        <div>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-4 py-4">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Logo
                  onClick={() => navigate("/")} />
                  
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-3">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.to}
                        title={item.name}
                        aria-label={item.name}
                        className={classNames(
                          location.pathname === item.to
                            ? "bg-gray-900 text-white"
                            : "text-black hover:bg-gray-900 hover:text-white",
                          "rounded-md px-3 py-2 text-sm uppercase font-sora"
                        )}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>

              <button
                onClick={() => navigate("/pages/cart")}
                type="button"
                className="relative p-2 text-black focus:outline-none focus:ring-2 focus:ring-white hover:border-b-2 border-black active:translate-y-1"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">Cart</span>
                <ShoppingCartIcon
                  className="h-7 w-7 md:h-8 md:w-8"
                  aria-hidden="true"
                />

                <div className="absolute font-montserrat inline-flex items-center justify-center w-7 h-7 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
                  {badge}
                </div>
              </button>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 flex flex-col px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  title={item.name}
                  aria-label={item.name}
                  className={classNames(
                    location.pathname === item.to
                      ? "bg-gray-900 text-white"
                      : "text-black hover:bg-gray-900 hover:text-white",
                    "rounded-md px-3 py-2 text-sm uppercase font-sora font-bold"
                  )}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
};

Navbar.propTypes = {
  badge: PropTypes.number,
};

export default Navbar;
