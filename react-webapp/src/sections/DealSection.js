import React from 'react'
import { NavLink } from 'react-router-dom'
import ProductCard from "../components/ProductCard"

const DealSection = ({products}) => {
  return (
    <section className='dealsection'>
        <div className='container-fluid'>
            <div className='two-for-one'>
                <h1>2 FOR USD $29</h1>
                <NavLink className='button btn-theme-light'>                    
                    <span className='corner-left'></span>
                    <span className='corner-right'></span>
                    FLASH SALE
                </NavLink>
            </div>
            <div className='grid row row-cols-1 row-cols-md-2 g-2'>
                {
                  products.map(product => <ProductCard key={product.id} product={product} />)
                }
            </div>
        </div>
        <div className='container-fluid-reverse'>           
            <div className='grid row row-cols-1 row-cols-md-2 g-2'>
                {
                  products.map(product => <ProductCard key={product.id} product={product} />)
                }
            </div>
            <div className='two-for-one'>
                <h1>2 FOR USD $49</h1>
                <NavLink className='button btn-theme-light'>                    
                    <span className='corner-left'></span>
                    <span className='corner-right'></span>
                    FLASH SALE
                </NavLink>
            </div>
        </div>
    </section>
  )
}

export default DealSection