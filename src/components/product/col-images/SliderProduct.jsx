import { useState } from "react";
import NextIcons from "@/components/icons/NextIcons";
import PreIcons from "@/components/icons/PreIcons";
import CloseIcons from "@/components/icons/CloseIcons";
import { useRef } from "react";
import { useEffect } from "react";
// const IMGS = [sliderImagen1, sliderImagen2, sliderImagen3, sliderImagen4];
export default ({
  IMGS = [],
  IMGS_SMALL = [],
  isOpenModal = false,
  handleClose = null,
  ...props
}) => {
  const btnslider = useRef(null);
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    index === IMGS.length - 1 ? setIndex(0) : setIndex(index + 1);
  };
  const handlePre = () => {
    index === 0 ? setIndex(IMGS.length - 1) : setIndex(index - 1);
  };
  // useEffect(() => {
  //   if (isOpenModal) {
  //     btnslider.current.classList.remove("md:hidden");
  //   }
  // });
  return (
    <>
      <section
        className="grid
        gap-5
        md:grid-cols-4 "
        {...props}
      >
        {isOpenModal && (
          <button
            onClick={handleClose}
            className="ml-auto mr-2 text-right text-dark-grayish-blue md:col-span-4"
          >
            <CloseIcons />
          </button>
        )}
        <div
          className="relative
         col-span-4"
        >
          <img src={IMGS[index]} alt="" className="aspect-[16/16] rounded-md" />
          <div
            ref={btnslider}
            className={`
            absolute top-1/2 left-0 flex w-full -translate-y-1/2 justify-between px-2 
           
             ${!isOpenModal && "md:hidden"}`}
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
        {IMGS_SMALL.map((smallImg) => (
         <div className="relative overflow-hidden rounded-md"> 
         <img
            key={smallImg} src={smallImg} alt="" className="hidden
            rounded-md md:block"
            />
            <span className="absolute top-0 h-full w-full hover:bg-[rgba(255,255,255,0.5)]"></span>
            </div>
        ))}
        {/* <img
        src={sliderImagenSmall2}
        alt=""
        className="hidden
         md:block rounded-md"
      />
      <img
        src={sliderImagenSmall3}
        alt=""
        className="hidden
         md:block rounded-md"
      />
      <img
        src={sliderImagenSmall4}
        alt=""
        className="hidden
         md:block rounded-md"
      /> */}
      </section>
    </>
  );
};
