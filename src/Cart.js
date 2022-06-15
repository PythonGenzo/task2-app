export default function Cart({ cart }) {

  // const [initialProducts, setinitialProducts] = useState(products);

  // const [cart, setCart] = useState([]);
  // const clearCart = () => {
  //   setCart([]);
  // }

  const removeCart = (itemToRemove) => {

    
      Cart.filter((item) => item !== itemToRemove)
    
  }

    return (
      <>
        {/* <button>🛒 CART</button> */}
        <div>
          {cart.map((item) => (
            <div>
                <div>
                    {item.size} 
                    {item.name} 
                    {item.rating}
                    {item.price} 
                </div>
             <button onClick={() => removeCart(item)}>Remove</button>
            </div>
        
          ))}
        </div>
      </>
    );
  }
  