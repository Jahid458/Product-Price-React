import './Navbar.css'

const Navbar = ({selectedProduct,price}) => {
  return (
    <div>
      <div className="nav-container">
        <div className="logo">
          Logo
        </div>
        <div className="menus">
          <li>Home</li>
          <li>Products</li>
          <li>Cart {selectedProduct.length}</li>
          <li>$ {price}</li>
        </div>
      </div>
      
    </div>
  );
};

export default Navbar;