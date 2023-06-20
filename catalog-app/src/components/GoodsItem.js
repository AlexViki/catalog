const GoodsItem = ({ item, addToBasket }) => {
    const handleAddToBasket = () => {
      addToBasket(item);
    };
  
    return (
      <li className="li_list">
        <img className="li_list_img" src={item.image} alt={item.title} width="100" />
        <div>
          <h3>{item.title}</h3>
          <p>Price: ${item.price}</p>
          <p className="li_list_description">{item.description}</p>
          <button className="li_list_button" onClick={handleAddToBasket}>
            Buy
          </button>
        </div>
      </li>
    );
  };

  export default GoodsItem;