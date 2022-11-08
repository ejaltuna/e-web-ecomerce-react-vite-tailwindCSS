import sliderImagen1 from "@/assets/images/image-product-1.jpg";
import sliderImagen2 from "@/assets/images/image-product-2.jpg";
import sliderImagen3 from "@/assets/images/image-product-3.jpg";
import sliderImagen4 from "@/assets/images/image-product-4.jpg";
import sliderImagenSmall1 from "@/assets/images/image-product-1-thumbnail.jpg";
import sliderImagenSmall2 from "@/assets/images/image-product-2-thumbnail.jpg";
import sliderImagenSmall3 from "@/assets/images/image-product-3-thumbnail.jpg";
import sliderImagenSmall4 from "@/assets/images/image-product-4-thumbnail.jpg";
import NextIcons from "@/components/icons/NextIcons";
import PreIcons from "@/components/icons/PreIcons";
import { useState } from "react";
const IMGS = [sliderImagen1, sliderImagen2, sliderImagen3, sliderImagen4];
export default () => {
  const [index, setIndex] = useState(0);
  const handleNext = () => {
   index === IMGS.length - 1 ? setIndex(0): setIndex(index + 1);
  };
  const handlePre = () => {
    index === 0 ? setIndex(IMGS.length - 1): setIndex(index - 1);
  };
  return (
    <section
      className="grid
         gap-4
         md:grid-cols-4 "
         
    >
      <div
        className="relative
         col-span-4"
      >
        <img src={IMGS[index]} alt="" className="aspect-[16/16] rounded-sm" />
        <div
          className="absolute 
         top-1/2
         left-0 flex w-full -translate-y-1/2 justify-between px-2"
        >
          <button
            onClick={handlePre}
            className="grid h-10 w-10 place-items-center rounded-full bg-white"
          >
            <PreIcons />
          </button>
          <button
            onClick={handleNext}
            className=" grid h-10 w-10 place-items-center  rounded-full bg-white"
          >
            <NextIcons />
          </button>
        </div>
      </div>
      <img
        src={sliderImagenSmall1}
        alt=""
        className="hidden rounded-md
         md:block"
      />
      <img
        src={sliderImagenSmall2}
        alt=""
        className="hidden rounded-md
         md:block"
      />
      <img
        src={sliderImagenSmall3}
        alt=""
        className="hidden rounded-md
         md:block"
      />
      <img
        src={sliderImagenSmall4}
        alt=""
        className="hidden rounded-md
         md:block"
      />
    </section>
  );
};

