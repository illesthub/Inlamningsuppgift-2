import React, { useContext } from 'react'
import { ProductContext } from '../contexts/contexts'
import MainMenuSection from '../sections/MainMenuSection'
import FooterSection from '../sections/FooterSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import ProductGridSection from '../sections/ProductGridSection'


const ProductsView = () => {
  const productContext = useContext(ProductContext)

  return (
    <>
      <MainMenuSection />
      <BreadcrumbSection currentPage="Products" />
      <ProductGridSection title='Products' items={productContext.all} />
      <FooterSection />
    </>
  )
}

export default ProductsView