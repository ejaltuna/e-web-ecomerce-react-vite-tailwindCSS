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
  handleOpen= null,
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
        gap-8
        md:grid-cols-4 "
        {...props}
      >
        {isOpenModal && (
          <button
            onClick={handleClose}
            className="ml-auto mr-2 text-right text-white md:col-span-4"
          >
            <CloseIcons fill="#fff" />
          </button>
        )}
        <div
          className="relative
         col-span-4"
        >
          <img src={IMGS[index]} alt="" className="aspect-[16/13] md:aspect-[16/18] md:cursor-pointer  xl:aspect-[16/16]  2xl:aspect-[18/18] rounded-md 2xl:max-h-[500px] " onClick={handleOpen} />
          <div
            ref={btnslider}
            className={`
            absolute top-1/2 left-0 flex w-full -translate-y-1/2 justify-between px-2 
           
             ${!isOpenModal && "md:hidden"}`}
          >
            <button
              onClick={handlePre}
              className="grid h-10 w-10 place-items-center rounded-full bg-white hover:bg-slate-300"
            >
              <PreIcons />
            </button>
            <button
              onClick={handleNext}
              className=" grid h-10 w-10 place-items-center  rounded-full bg-white hover:bg-slate-300"
            >
              <NextIcons />
            </button>
          </div>
        </div>
        {IMGS_SMALL.map((smallImg, i) => (
          <div key={smallImg}
            onClick={() => setIndex(i)}
            className="relative overflow-hidden rounded-md cursor-pointer"
          >
            <img
              src={smallImg}
              alt=""
              className="hidden
            rounded-md md:block"
            />
            <span className={`absolute top-0 h-full w-full hover: hover:bg-[rgba(255,255,255,0.5)] ${i=== index && "bg-[rgba(255,255,255,0.5)] border-2 rounded-md border-orange-primary"}`}></span>
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
