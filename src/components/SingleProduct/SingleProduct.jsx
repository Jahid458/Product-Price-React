import './SingleProduct.css'

// eslint-disable-next-line react/prop-types
export default function SingleProduct({product,handleSelectedProduct}) {
  // console.log(handleSelectedProduct)
  // eslint-disable-next-line no-unused-vars, react/prop-types
  const{id,image,price, description,name,category,isFeature} = product;

  return (
    <div className='card'>
        <img className='img' src={image} alt="" />
        <h2>{name}</h2>
        <p>{description}</p>
        <div className="cat-price">
              <p>${price}</p>
              <p>{isFeature?"Feature Categoty": "Not Category"}</p>
        </div>
        <button onClick={()=>handleSelectedProduct(product)}>Add To Cart</button>
    </div>
  )
}
