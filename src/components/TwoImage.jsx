const TwoImage = () => {
  return (
    <div className="mt-10 mb-20 flex flex-col justify-center gap-1 p-5 max-w-full md:flex-row">
      <div className="relative">
        <img
          className="object-cover rounded-sm h-full cursor-pointer  w-full"
          src="https://img.freepik.com/free-vector/fashion-models-with-urban-outfit_79603-524.jpg?size=626&ext=jpg&ga=GA1.1.316288856.1705851322&semt=ais"
          alt="streetwear"
        />
        <p className="relative font-montserrat bottom-0 left-0 p-3 font-extrabold text-lg uppercase text-white bg-gray-950 md:text-2xl ">
          Outfit of the day
        </p>
      </div>
      <div className="relative ">
        <img
          className="object-cover rounded-sm h-full cursor-pointer  w-full"
          src="https://img.freepik.com/free-vector/fashion-model-with-casual-outfit_79603-526.jpg?size=626&ext=jpg&ga=GA1.1.316288856.1705851322&semt=ais"
          alt="streetwear"
        />
        <p className="relative font-montserrat bottom-0 left-0 p-3 font-extrabold text-lg uppercase text-white bg-gray-950 md:text-2xl ">
          Outfit of the day
        </p>
      </div>
    </div>
  );
};

export default TwoImage;
