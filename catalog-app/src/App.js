import React, { useState, useEffect } from 'react';
import './App.css';
import Basket from './components/Basket.js'
import Filter from './components/Filter.js'
import GoodsList from './components/GoodsList.js'

const App = () => {
  const [goodsData, setGoodsData] = useState([]);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(async (response) => {
        if (response.ok) {
          const data = await response.json();
          const result = data.products.map((item) => ({
            title: item.title,
            price: item.price,
            description: item.description,
            category: item.category,
            image: item.images[0],
            brand: item.brand,
          }));
          setGoodsData(result);
          console.log(result);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const addToBasket = (item) => {
    setBasket([...basket, item]);
  };

  const removeItem = (item) => {
    const updatedBasket = basket.filter((basketItem) => basketItem.title !== item.title);
    setBasket(updatedBasket);
  };

  return (
    <div>
      <div>
      <div className='header_wrapper'>
        <h1 className="header_name">Mini Store</h1>
        <div>
          <Basket basket={basket} removeItem={removeItem} />
        </div>
      </div>
        <Filter goods={goodsData} setFilteredGoods={setGoodsData} />
        <GoodsList goods={goodsData} addToBasket={addToBasket} />
      </div>
    </div>
  );
};

export default App;
