import React, { useContext } from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import ShowcaseSection from '../sections/ShowcaseSection'
import ProductGridSection from '../sections/ProductGridSection'
import PamelaSection from '../sections/PamelaSection'
import DealSection from '../sections/DealSection'
import CustomerSection from '../sections/CustomerSection'
import FooterSection from '../sections/FooterSection'
import { ProductContext } from '../contexts/contexts'





const Home = () => {

  const productContext = useContext(ProductContext)


  window.top.document.title = 'Fixxo.'

  return (
    <>
      <MainMenuSection />
      <ShowcaseSection />
      <ProductGridSection title="Featured Products" items={productContext.featuredProducts} />
      <PamelaSection />
      <DealSection title="Product Deals" items={productContext.dealProducts} />
      <CustomerSection />
      <FooterSection />
    </>

  )
}

export default Home