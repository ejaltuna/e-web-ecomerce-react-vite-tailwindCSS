import { useState } from "react";
import SliderProduct from "@/components/product/gallery/SliderProduct";
import ModalSliderProduct from "./SliderProduct";

export default ({ IMGS, IMGS_SMALL }) => {
  const [isOpenModal, SetIsOpenModal] = useState(false);

  const handleOpen = () => window.innerWidth > 767 && SetIsOpenModal(true);
  const handleClose = () => SetIsOpenModal(false);
  return (
    <>
      <SliderProduct
        IMGS={IMGS}
        IMGS_SMALL={IMGS_SMALL}
        className="grid gap-4 md:grid-cols-4"
        handleOpen={handleOpen}
      />

      {isOpenModal && (
        <>
          <ModalSliderProduct
            IMGS={IMGS}
            IMGS_SMALL={IMGS_SMALL}
            isOpenModal={isOpenModal}
            handleClose={handleClose}
            className="hidden gap-4 md:absolute
          md:top-1/2 md:left-1/2 md:grid md:max-w-md md:-translate-x-1/2
          md:-translate-y-1/2 md:grid-cols-4 md:justify-center md:z-10 "
          />
          <span className="backdrop-blur-[2px] bg-black/70 w-full h-full fixed top-0 left-0" onClick={handleClose}>
          </span>
        </>
      )}
    </>
  );
};
