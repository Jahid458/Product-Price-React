/* eslint-disable react/prop-types */


const Cart = ({selectedProduct,handleDelete}) => {

  return (
    <div>
      {
        // eslint-disable-next-line no-unused-vars
        selectedProduct.map((product) => (
          // eslint-disable-next-line react/jsx-key
          <div>
             <div className="flex">
                  <img className="selected-img" src={product.image} alt="" />
                  <p>Name:{product.name} </p>
                  <button onClick={()=>handleDelete(product.id)}>Delete</button>
             </div>
          </div>
        ))
      }
    </div>
  );
};

export default Cart;