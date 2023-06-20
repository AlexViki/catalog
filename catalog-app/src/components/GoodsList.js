import GoodsItem from './GoodsItem.js'

const GoodsList = ({ goods, addToBasket }) => {
    return (
      <ul className="ul_list">
        {goods.map((item) => (
          <GoodsItem key={item.title} item={item} addToBasket={addToBasket} />
        ))}
      </ul>
    );
  };

  export default GoodsList;