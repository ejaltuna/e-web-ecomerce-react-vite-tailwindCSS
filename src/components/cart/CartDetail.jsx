import { useContext } from "react";
import { useCartDetails } from "@/context/useCartDetails";

import DeleteIcons from "@/components/icons/DeleteIcons";
import imgSmall from "@/assets/images/image-product-1-thumbnail.jpg";

const CartDetail = ({ ...props }) => {
    const { cartProducts , deleteCartProducts} = useContext(useCartDetails);

    return (
        <section
            {...props}
            className="absolute top-[125%] left-0 z-10  w-full md:left-full  md:top-full md:max-w-md md:-translate-x-full"
        >
            <div className="mx-4 rounded-md bg-white shadow-lg shadow-gray-600">
                <h4 className="px-6 py-8 pb-10 text-left font-bold">Cart</h4>
                <hr />
                {cartProducts.length === 0 ? <p className=" py-16  text-center text-dark-grayish-blue">Your cart is empty</p>
                :
                <>
                {cartProducts.map((product) => (
                    <article 
                    key={product.id}
                    className="grid grid-cols-[1fr_4fr_1fr] gap-4 p-4">
                        <img src={imgSmall} alt="" className=" rounded-md" />
                        <div>
                            <h6>{product.title} </h6>
                            <div>
                                <span>${product.discountPrice} x {product.amount} </span>
                                <span className="font-bold">${product.discountPrice * product.amount}</span>
                            </div>
                        </div>
                        <button 
                        onClick={()=>deleteCartProducts(product.id)}
                        className="ml-auto">
                            <DeleteIcons className="h-5 w-5 fill-slate-600 hover:fill-orange-primary" />
                        </button>
                    </article>
                ))}

                <div className=" grid p-2 ">
                    <button className=" mx-auto  w-11/12 rounded-md bg-orange-primary p-4 font-bold text-white  shadow-md shadow-gray-600">
                        Chechout
                    </button>
                </div>
                </>
                }
            </div>
        </section>
    );
};

export default CartDetail;
