import CartIcons from "@/components/icons/CartIcons";

export default () => {
  return (
    <section className="container mx-auto  px-4">
      <small className="font-bold uppercase text-orange-primary ">
        Sneaker Company
      </small>
      <h2 className="mb-4 text-3xl font-bold">Fall Limited Edition Sneakers</h2>
      <p
        className="mb-4 text-dark-grayish-blue
      "
      >
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>

      <div className="mb-4 md:gap-0 grid grid-cols-3 items-center gap-4 font-bold">
        <span className="text-3xl"> $125.00</span>
        <span className="mr-auto rounded-md bg-pale-orange py-1 px-2 text-orange-primary">
          50%
        </span>
        <p className="text-right text-lg text-grayish-blue line-through md:col-span-3 md:text-left">
          $250.00
        </p>
      </div>

      <div className="grid gap-4 grid-cols-3 md:grid-cols-[1fr_1.5fr] md:items-center">
        <div className="flex justify-around col-span-3 mb-4 rounded-md bg-orange-200 items-center font-bold md:mb-0 md:col-span-1">
          <button className="text-3xl hover:text-orange-800  transition-all bg-orange-200 p-2 text-orange-primary">-</button>
          <span className="">0</span>
          <button className="text-3xl  hover:text-orange-800  transition-all  bg-orange-200 p-2 text-orange-primary">+</button>
        </div>
        <button className="col-span-3 md:col-span-1 flex gap-x-4 hover:bg-orange-600 transition-all justify-center  items-center rounded-md bg-orange-primary py-3 text-center  font-bold text-white">
          <CartIcons fill="#fff"/>
          <span> Add to cart</span>
        </button>
      </div>
    </section>
  );
};
