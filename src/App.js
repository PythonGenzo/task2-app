import './App.css';
import { useState } from "react";
import Cart from "./Cart";


const products = [
  {
    id:1,
    size:"https://thumbs.dreamstime.com/b/internet-online-shopping-concept-19874908.jpg",
    name: "Fancy Product",
    rating:"⭐⭐⭐⭐⭐",
    price:"$40.00"
  },
  {
    id:2,
    size:"https://thumbs.dreamstime.com/b/internet-online-shopping-concept-19874908.jpg",
    name: "Special Item",
    rating:"⭐⭐⭐⭐",
    price:"$18.00"
  }, {
    id:3,
    size:"https://thumbs.dreamstime.com/b/internet-online-shopping-concept-19874908.jpg",
    name: "Sale Item",
    rating:"⭐⭐⭐",
    price:"$25.00"
  }, {
    id:4,
    size:"https://thumbs.dreamstime.com/b/internet-online-shopping-concept-19874908.jpg",
    name: "Popular Item",
    rating:"⭐⭐",
    price:"$40.00"
  }, {
    id:5,
    size:"https://thumbs.dreamstime.com/b/internet-online-shopping-concept-19874908.jpg",
    name: "Sale Product",
    rating:"⭐⭐⭐⭐",
    price:"$120.00"
  }, {
    id:6,
    size:"https://thumbs.dreamstime.com/b/internet-online-shopping-concept-19874908.jpg",
    name: "Popular Product",
    rating:"⭐⭐⭐",
    price:"$240.00"
  }
]

function App() {

  const [initialProducts, setinitialProducts] = useState(products);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    let cartCopy = [...cart];
    cartCopy.push(product);
    setCart(cartCopy);

    let selectedProduct = cartCopy.filter((item) => item.id === product.id);
    selectedProduct.isDisabled = true;

    setCart(cartCopy);

   
  }

//   const removeCart = (product) => {
//     let cartCopy = [...cart];
//     cartCopy.remove(product);
//     setCart(cartCopy);

//     let selectedProduct = cartCopy.filter((item) => item.id === product.id);
//     selectedProduct.isDisabled = true;

//     setCart(cartCopy);
//  } 

  return (
    <div className="App">
      <nav>
        Home 
        Products
        About
      <button className="cart" 
      // onClick={() => removeCart(product)}
      >
      <Cart  cart={cart} />
      </button>
      </nav>
      <div className="main-page">
       <h1>Shop in style</h1>
       <p>With this shop homepage template</p>
       </div>
      <div className="price-cart">
        {initialProducts.map((product) => (
          <div className="price-cart1">
            <div className="price-cart2">
              <img className="cart-pic" src={product.size} alt={product.size} />
              <div className="cart-details">
                <div>{product.name}</div> 
                <div>{product.rating}</div> 
                <div>{product.price}</div>
              </div>
            </div>
      
            <button
              disabled={product.isDisabled}
              onClick={() => addToCart(product)}>
           Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
