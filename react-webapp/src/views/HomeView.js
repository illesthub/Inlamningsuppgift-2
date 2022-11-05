import React, { useState } from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import ShowcaseSection from '../sections/ShowcaseSection'
import PamelaSection from '../sections/PamelaSection'
import FooterSection from '../sections/FooterSection'
import ProductGridSection from '../sections/ProductGridSection'


const Home = () => {

  const [featuredProducts, setFeaturedProducts] = useState([
    { id: 1, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: "5", img: "https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?cs=srgb&dl=pexels-anastasiya-gepp-1462637.jpg&fm=jpg&_gl=1*1hwel71*_ga*MTI4MzY3MjYxMS4xNjY3NTE3MDc1*_ga_8JE65Q40S6*MTY2NzUxNzA3NS4xLjEuMTY2NzUxNzYxNC4wLjAuMA.." },
    { id: 2, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: "5", img: "https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?cs=srgb&dl=pexels-anastasiya-gepp-1462637.jpg&fm=jpg&_gl=1*npjfz3*_ga*MTI4MzY3MjYxMS4xNjY3NTE3MDc1*_ga_8JE65Q40S6*MTY2NzUxNzA3NS4xLjEuMTY2NzUxNzYxNC4wLjAuMA.." },
    { id: 3, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: "5", img: "https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?cs=srgb&dl=pexels-anastasiya-gepp-1462637.jpg&fm=jpg&_gl=1*npjfz3*_ga*MTI4MzY3MjYxMS4xNjY3NTE3MDc1*_ga_8JE65Q40S6*MTY2NzUxNzA3NS4xLjEuMTY2NzUxNzYxNC4wLjAuMA.." },
    { id: 4, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: "5", img: "https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?cs=srgb&dl=pexels-anastasiya-gepp-1462637.jpg&fm=jpg&_gl=1*npjfz3*_ga*MTI4MzY3MjYxMS4xNjY3NTE3MDc1*_ga_8JE65Q40S6*MTY2NzUxNzA3NS4xLjEuMTY2NzUxNzYxNC4wLjAuMA.." },
    { id: 5, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: "5", img: "https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?cs=srgb&dl=pexels-anastasiya-gepp-1462637.jpg&fm=jpg&_gl=1*npjfz3*_ga*MTI4MzY3MjYxMS4xNjY3NTE3MDc1*_ga_8JE65Q40S6*MTY2NzUxNzA3NS4xLjEuMTY2NzUxNzYxNC4wLjAuMA.." },
    { id: 6, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: "5", img: "https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?cs=srgb&dl=pexels-anastasiya-gepp-1462637.jpg&fm=jpg&_gl=1*npjfz3*_ga*MTI4MzY3MjYxMS4xNjY3NTE3MDc1*_ga_8JE65Q40S6*MTY2NzUxNzA3NS4xLjEuMTY2NzUxNzYxNC4wLjAuMA.." },
    { id: 7, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: "5", img: "https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?cs=srgb&dl=pexels-anastasiya-gepp-1462637.jpg&fm=jpg&_gl=1*npjfz3*_ga*MTI4MzY3MjYxMS4xNjY3NTE3MDc1*_ga_8JE65Q40S6*MTY2NzUxNzA3NS4xLjEuMTY2NzUxNzYxNC4wLjAuMA.." },
    { id: 8, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: "5", img: "https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?cs=srgb&dl=pexels-anastasiya-gepp-1462637.jpg&fm=jpg&_gl=1*npjfz3*_ga*MTI4MzY3MjYxMS4xNjY3NTE3MDc1*_ga_8JE65Q40S6*MTY2NzUxNzA3NS4xLjEuMTY2NzUxNzYxNC4wLjAuMA.." }
  ])

  return (
    <>
      <MainMenuSection />
      <ShowcaseSection />
      <ProductGridSection title="Featured Products" products={featuredProducts} />
      <PamelaSection />
      <FooterSection />
    </>

  )
}

export default Home