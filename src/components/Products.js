import React from 'react'
import Product from './Product';
import "./Product.css";
const Products = () => {
    return (
        <>
         <div className="products_row">
            <Product
            id="1" 
            title="Razer BlackShark V2 X Gaming Headset: 7.1 Surround Sound - 50mm Drivers - Memory Foam Cushion - For PC,"           
            image="https://m.media-amazon.com/images/I/51FRJHB7XOL._AC_UY327_FMwebp_QL65_.jpg"
            rating= {5}
            price={34.99}
            />
             <Product 
            id="1" title="Razer BlackShark V2 X Gaming Headset: 7.1 Surround Sound - 50mm Drivers - Memory Foam Cushion - For PC,"           
            image="https://m.media-amazon.com/images/I/51FRJHB7XOL._AC_UY327_FMwebp_QL65_.jpg"
            rating= {3}
            price={34.99}
            />
        </div>

        <div className="products_row">
        <Product 
            id="1" title="Razer BlackShark V2 X Gaming Headset: 7.1 Surround Sound - 50mm Drivers - Memory Foam Cushion - For PC,"           
            image="https://m.media-amazon.com/images/I/51FRJHB7XOL._AC_UY327_FMwebp_QL65_.jpg"
            rating= {3}
            price={34.99}
            />
             <Product 
            id="1" title="Razer BlackShark V2 X Gaming Headset: 7.1 Surround Sound - 50mm Drivers - Memory Foam Cushion - For PC,"           
            image="https://m.media-amazon.com/images/I/51FRJHB7XOL._AC_UY327_FMwebp_QL65_.jpg"
            rating= {3}
            price={34.99}
            />
              <Product 
            id="1" title="Razer BlackShark V2 X Gaming Headset: 7.1 Surround Sound - 50mm Drivers - Memory Foam Cushion - For PC,"           
            image="https://m.media-amazon.com/images/I/51FRJHB7XOL._AC_UY327_FMwebp_QL65_.jpg"
            rating= {3}
            price={34.99}
            />
        </div>
        <div className="products_row">
        <Product 
            id="1" title="Razer BlackShark V2 X Gaming Headset: 7.1 Surround Sound - 50mm Drivers - Memory Foam Cushion - For PC,"           
            image="https://m.media-amazon.com/images/I/51FRJHB7XOL._AC_UY327_FMwebp_QL65_.jpg"
            rating= {3}
            price={34.99}
            />
        </div>

        </>
       
    )
}

export default Products