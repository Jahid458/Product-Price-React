import About from '../About/About';
import Cart from '../Cart/Cart';
import './CartContainer.css';
import propTypes from 'prop-types'

const CartContainer = ({handleIsActiveState,isActive,selectedProduct,handleDelete}) => {
  
  return (
    <div className='cart-container'>
      <h1>CartContainer.jsx</h1>
      <div className="flex">
      <div onClick={() =>handleIsActiveState("cart")} className={`${isActive.cart ? "btn active": "btn"}`}>Cart</div>
      <div onClick={() =>handleIsActiveState("about")} className={`${isActive.cart ? "btn": "btn active"}`}>About</div>
      </div>

      {isActive.cart ? <Cart handleDelete={handleDelete} selectedProduct={selectedProduct}  />: <About /> }

    </div>
  );
};

CartContainer.propTypes = {
  handleIsActiveState: propTypes.func.isRequired,
  isActive:propTypes.object
  
}



export default CartContainer;