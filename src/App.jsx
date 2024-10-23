
import Navbar from './components/Navbar/Navbar'
import './App.css'
import AllProducts from './components/AllProducts/AllProducts'
import CartContainer from './components/CartContainer/CartContainer'
import { useState } from 'react'

function App() {
    const [isActive,setIsActive] = useState({
      cart: true,
      status: "cart"
    })
    const [selectedProduct,setSelectedProduct] = useState([]);
    const [price,setPrice] = useState(500)

    const handleDelete = (id) =>{
      handleDeletePrice(id)

          const newProducts = selectedProduct.filter((p) => p.id != id);
          setSelectedProduct(newProducts)

    }

    const handleIncreasePrice = (pr) =>{
      setPrice(price + pr)

    }

    const handleDeletePrice =(id)=>{
        const product = selectedProduct.find((p) => p.id == id);
        setPrice(price - product.price)

    }


    const handleSelectedProduct = (product) =>{
      const isExists = selectedProduct.find((p)=> p.id == product.id);
        // console.log(isExists)
        if(isExists){
          alert('Already Added')
        }else{
          handleIncreasePrice(product.price)
          const newProducts = [...selectedProduct,product];
          setSelectedProduct(newProducts)
        }
     
    }
    // console.log(selectedProduct)
    const handleIsActiveState = (status) =>{
        if(status == 'cart'){
          setIsActive({
            cart: true,
            status: "cart"
          })
        }
        else{
          setIsActive({
            cart: false,
            status: "about"
          })
        }
    }


  return (
    <>
     <Navbar price={price} selectedProduct={selectedProduct} />
     <div className='flex'>
     <AllProducts handleSelectedProduct={handleSelectedProduct} />
     <CartContainer handleDelete={handleDelete} selectedProduct={selectedProduct} isActive={isActive} handleIsActiveState={handleIsActiveState} />
     </div>
    </>
  )
}

export default App
