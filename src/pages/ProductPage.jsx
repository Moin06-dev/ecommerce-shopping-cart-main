import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import ProductCard from "../components/ui/ProductCard";
import { Tab } from "@headlessui/react";
import productData from "../productData";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useContext } from "react";
import { ShopContext } from "../App";

const ProductPage = () => {

  const { carts } = useContext(ShopContext)

  const navigate = useNavigate();
  return (
    <div>
      <NavBar badge={carts.length} />
      <div className="container mx-auto mb-16">
        <Tab.Group defaultIndex={0}>
          <div className="flex flex-col items-center">
          <Tab.List className="flex flex-col  mx-auto p-4  lg:flex-row ">
            {Object.keys(productData).map((category, index) => (
              <Tab
                key={index}
                className="uppercase font-montserrat ui-selected:border-b hover:translate-y-1 border-black text-gray-900 px-4 py-2  cursor-pointer"
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          </div>
          <Tab.Panels>
            {Object.values(productData).map((categoryProducts, index) => (
              <Tab.Panel key={index}>
                <div className="mt-14 grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {categoryProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      name={product.name}
                      textStyle="text-center mt-2 mb-2 flex flex-col  item-center justify-between text-black lg:flex-row"
                      image ={product.image}
                      imageStyle=" rounded-sm object-cover hover:outline"
                      price={product.price}
                      moreInfo={() => navigate(`/pages/product/${product?.id}`)}
                    />
                  ))}
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
      <Footer />
    </div>
  );
};

ProductPage.propTypes = {
  carts: PropTypes.array
};


export default ProductPage;
