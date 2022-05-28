export default function Cart({ cart }) {
    return (
      <>
        <button>🛒 CART</button>
        <div>
          {cart.map((item) => (
            <div>
                <div>
                    {item.size} 
                    {item.name} 
                    {item.rating}
                    {item.price} 
                </div>
             <button>Remove</button>
            </div>
        
          ))}
        </div>
      </>
    );
  }
  