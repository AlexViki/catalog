import React, { useState } from 'react';

const Filter = ({ goods, setFilteredGoods }) => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [sortOption, setSortOption] = useState('');
  
    const handleCategoryChange = (event) => {
      const category = event.target.value;
      setSelectedCategory(category);
  
      const filteredGoods = goods.filter(
        (item) => category === '' || item.category === category
      );
      setFilteredGoods(filteredGoods);
    };
  
    const handleSortChange = (event) => {
      const option = event.target.value;
      setSortOption(option);
  
      let sortedGoods = [...goods];
      if (option === 'price') {
        sortedGoods = sortedGoods.sort((a, b) => a.price - b.price);
      } else if (option === 'title') {
        sortedGoods = sortedGoods.sort((a, b) => a.title.localeCompare(b.title));
      }
  
      setFilteredGoods(sortedGoods);
    };
  
    return (
      <div className="filter_wrapper">
        <h2 className="filter_header">Filters</h2>
        <div>
          <label>
            Category:
            <select className="filter" value={selectedCategory} onChange={handleCategoryChange}>
              <option value="">All</option>
              <option value="smartphones">Mobile</option>
              <option value="laptops">Laptop</option>
              <option value="fragrances">Fragrances</option>
              <option value="skincare">Skincare</option>
              <option value="groceries">Groceries</option>
              <option value="home-decoration">Decoration</option>
            </select>
          </label>
  
          <label className="sort">
            Sort:
            <select className="filter" value={sortOption} onChange={handleSortChange}>
              <option value="">None</option>
              <option value="price">Price</option>
              <option value="title">Name</option>
            </select>
          </label>
        </div>
      </div>
    );
  };

  export default Filter;