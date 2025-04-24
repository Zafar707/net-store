import React from 'react'
import Intro from '../intro/Intro'

const Product = () => {
    const [product, setProduct] = useState([])
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => setProduct(data));
  return (
    <div>
        <Intro Product={product}/>
    </div>
  )
}

export default Product
