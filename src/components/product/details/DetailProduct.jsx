import CartIcons from "@/components/icons/CartIcons";

import { useCartDetails } from "@/context/useCartDetails";
import { useState } from "react";
import { useContext } from "react";

export default ({ products }) => {
    const { addCartProducts } = useContext(useCartDetails);
    const [count, setCount] = useState(1);

    const decrementcount = () =>{
        if(count === 1) return
        setCount(count - 1);
    }
    const handleAddToCartDetail = () =>{
        addCartProducts({
            id: products.id,
            img: products.images_small[0],
            discountPrice: (
                products.price *
                (1 - products.discount)
            ).toFixed(2),
            title: products.title,
            amount: count === 0 ? 1 : count,
        })
        setCount(0);
    }
  
    return (
        <section className="container mx-auto my-auto px-4">
            <small className="font-bold uppercase text-orange-primary ">
                {products.subtitle}
            </small>
            <h2 className="mb-4 text-3xl font-bold">{products.title}</h2>
            <p
                className="mb-4 text-dark-grayish-blue
      "
            >
                {products.descProduct}
            </p>

            <div className="mb-4 grid grid-cols-3 items-center gap-4 font-bold md:gap-0">
                <span className="text-3xl">
                    {" "}
                    ${(products.price * (1 - products.discount)).toFixed(2)}
                </span>
                <span className="mr-auto rounded-md bg-pale-orange py-1 px-2 text-orange-primary">
                    {products.discount * 100}%
                </span>
                <p className="text-right text-lg text-grayish-blue line-through md:col-span-3 md:text-left">
                    ${products.price.toFixed(2)}
                </p>
            </div>

            <div className="grid grid-cols-3 gap-4 md:grid-cols-[1fr_1.5fr] md:items-center">
                <div className="col-span-3 mb-4 flex items-center justify-around rounded-md bg-orange-200 font-bold md:col-span-1 md:mb-0">
                    <button  onClick={decrementcount}
                     className="bg-orange-200 p-2  text-3xl text-orange-primary transition-all hover:text-orange-800">
                        -
                    </button>
                    <span className="">{count}</span>
                    <button 
                    onClick={()=> setCount(count + 1)}
                    className="bg-orange-200  p-2  text-3xl  text-orange-primary transition-all hover:text-orange-800">
                        +
                    </button>
                </div>
                <button
                    onClick={handleAddToCartDetail}
                    className="col-span-3 flex items-center justify-center gap-x-4 rounded-md bg-orange-primary py-3 text-center  font-bold text-white shadow-lg shadow-dark-grayish-blue transition-all  hover:bg-orange-600 md:col-span-1"
                >
                    <CartIcons fill="#fff" />
                    <span> Add to cart</span>
                </button>
            </div>
        </section>
    );
};
