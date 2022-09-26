import React, { useEffect, useState } from "react";
import ITEMS from "../../mockData";
import "./home.css";

const Home = () => {
  const [filters, setFilters] = useState(["laptop", "deodrant", "bags"]);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [items, setItems] = useState(ITEMS);

  // useEffect(() => {
  //   console.log(selectedFilters);
  // }, [selectedFilters]);
  useEffect(() => {
    let filtered = ITEMS.filter((el) => selectedFilters.includes(el.ctaegory));
    setItems(filtered);
  }, [selectedFilters]);

  const selectFilter = (filter) => {
    if (selectedFilters.includes(filter)) {
      let filtered = selectedFilters.filter((el) => el !== filter);
      setSelectedFilters(filtered);
    } else {
      setSelectedFilters([...selectedFilters, filter]);
    }
  };

  return (
    <div>
      <h1>Items</h1>
      <div className="filterWrapper">
        {filters.map((el, ind) => (
          <button
            className={
              selectedFilters.includes(el) ? "slectedBtn" : "unSlectedBtn"
            }
            onClick={() => selectFilter(el)}
            key={ind}
          >
            {el}
          </button>
        ))}
      </div>
      <div className="itemWrapper">
        {items.map((el, ind, arrayItself) => (
          <div className="item" key={ind}>
            <h3>{el.item}</h3>
            <p>{el.ctaegory}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Home;
