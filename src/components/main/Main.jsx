import React from "react";
import DetailProduct from "@/components/product/details/DetailProduct";
import IndexImages from "@/components/product/gallery/IndexImages";

/*aqui va el fech */
import sliderImagen1 from "@/assets/images/image-product-1.jpg";
import sliderImagen2 from "@/assets/images/image-product-2.jpg";
import sliderImagen3 from "@/assets/images/image-product-3.jpg";
import sliderImagen4 from "@/assets/images/image-product-4.jpg";
import sliderImagenSmall1 from "@/assets/images/image-product-1-thumbnail.jpg";
import sliderImagenSmall2 from "@/assets/images/image-product-2-thumbnail.jpg";
import sliderImagenSmall3 from "@/assets/images/image-product-3-thumbnail.jpg";
import sliderImagenSmall4 from "@/assets/images/image-product-4-thumbnail.jpg";

const IMGS = [sliderImagen1, sliderImagen2, sliderImagen3, sliderImagen4];

const IMGS_SMALL = [sliderImagenSmall1, sliderImagenSmall2, sliderImagenSmall3, sliderImagenSmall4];




const Main = () => {
  return (
    <main
      className="md:min-h-[calc(100vh - 88px-1px)] grid grid-cols-1 
    gap-8 md:container md:mx-auto md:grid-cols-2 md:py-8"
    >
      <IndexImages  IMGS={IMGS} IMGS_SMALL={IMGS_SMALL} />
      <DetailProduct />
    </main>
  );
};
export default Main;
