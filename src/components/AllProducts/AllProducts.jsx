import { useEffect, useState } from 'react';
import './AllProducts.css'
import SingleProduct from '../SingleProduct/SingleProduct';

const AllProducts = ({handleSelectedProduct}) => {
  const [products,setProducts] = useState([]);


  useEffect(()=>{
    fetch('./fakeData.json')
    .then(res => res.json())
    .then(data => {
      setProducts(data.products)
    })},[])

  return (
    <div className='product-container'>
      <h1>All Products.jsx</h1>
     {
      // eslint-disable-next-line react/jsx-key
      products.map((p)=><SingleProduct handleSelectedProduct={handleSelectedProduct} key={p.id} product={p}></SingleProduct>)
     }
    </div>
  );
};

export default AllProducts;