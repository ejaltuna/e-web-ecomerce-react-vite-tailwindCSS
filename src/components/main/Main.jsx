import React from 'react'
import DetailProduct from '@/components/product/DetailProduct';
import SliderProduct from '@/components/product/SliderProduct';

 const Main=()=> {
  return (
    <main className='grid grid-cols-1 md:grid-cols-2 gap-8'>
    <SliderProduct/>
   <DetailProduct/>
  </main>
  );
};
export default Main;
