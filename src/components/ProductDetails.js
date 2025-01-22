import React from 'react';
import {useParams} from 'react-router-dom';

const ProductDetails = () => {
    const params = useParams()
    console.log(params)
    return (
        <div>
           <p>{params.id}</p>
        </div>
    )
}

export default ProductDetails