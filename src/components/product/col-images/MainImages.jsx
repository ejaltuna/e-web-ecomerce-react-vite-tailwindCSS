import { useState } from "react";
import SliderProduct from "@/components/product/col-images/SliderProduct";

export default ({ IMGS, IMGS_SMALL }) => {
  const [isOpenModal, SetIsOpenModal] = useState(false);

  const handleOpen = () => window.innerWidth > 767 && SetIsOpenModal(true);
  const handleClose = () =>SetIsOpenModal(false);
  return (
    <>
      <SliderProduct
        IMGS={IMGS}
        IMGS_SMALL={IMGS_SMALL}
        className="grid
       gap-4
       md:grid-cols-4"
        onClick={handleOpen}
      />

      {isOpenModal && (
        <SliderProduct
          IMGS={IMGS}
          IMGS_SMALL={IMGS_SMALL}
          isOpenModal={isOpenModal}
          handleClose={handleClose}
          className="hidden md:grid gap-4
            md:absolute md:top-1/2 md:left-1/2 md:max-w-xl md:-translate-x-1/2
            md:-translate-y-1/2 md:grid-cols-4 md:justify-center"
        />
      )}
    </>
  );
};
