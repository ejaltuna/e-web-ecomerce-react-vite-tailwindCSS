import CartIcons from '@/components/icons/CartIcons'


export default () => {
  return (
    <section className="container mx-auto  px-4">
      <small className="font-bold uppercase text-orange-primary ">
        Sneaker Company
      </small>
      <h2 className="mb-4 text-3xl font-bold">Fall Limited Edition Sneakers</h2>
      <p className="text-dark-grayish-blue mb-4
      " >
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>

      <div className="grid gap-4 grid-cols-3 items-center font-bold mb-4">
        <span className="text-3xl"> $125.00</span>
        <span className="bg-pale-orange rounded-md mr-auto py-1 px-2 text-orange-primary">50%</span>
      <p className="text-right line-through text-dark-grayish-blue text-lg">$250.00</p>
      </div>

      <div className="grid grid-cols-3">
        <div className="col-span-3 text-center items-center bg-light-grayish-blue mb-4 font-bold">
          <button className="text-xl text-orange-primary">-</button>
          <span className="">0</span>
          <button className="text-xl text-orange-primary">+</button>
        </div>
        <button className="col-span-3 bg-orange-primary text-white py-3 rounded-md items-center font-bold"><CartIcons fill='#fff' /><span> Add to cart</span></button>
      </div>
    </section>
  );
};
