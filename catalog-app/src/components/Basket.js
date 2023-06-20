const Basket = ({ basket, removeItem }) => {
    const handleRemoveItem = (item) => {
      removeItem(item);
    };
  
    const totalPrice = basket.reduce((total, item) => total + item.price, 0);
  
    return (
      <div className="basket">
        {/* <h2>Basket</h2> */}
        <img src="./icons/basket-icon.png" alt="basket"/>
        {basket.length === 0 ? (
          <p>Your basket is empty.</p>
        ) : (
          <div className="basket_list">
            <ul>
              {basket.map((item) => (
                <li className="li_basket" key={item.title}>
                  <div className="li_basket_row_wraper">
                    <div className="li_basket_row_column">
                      <p>{item.title}</p>
                      <p>Price: ${item.price}</p>
                    </div>
                    <div className="li_basket_row_column">
                      <button onClick={() => handleRemoveItem(item)}>Remove</button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="total-price-wraper">
              <p className="total-price">Total Price: ${totalPrice}</p>
            </div>
          </div>
        )}
      </div>
    );
  };

  export default Basket;