import React, { useEffect, useState } from "react";
import ITEMS from "../../mockData";
import "./home.css";
import { useSelector } from "react-redux";

const Home = () => {
  const [filters, setFilters] = useState(["laptop", "deodrant", "bags"]);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [items, setItems] = useState(ITEMS);
  const [title, setTitle] = useState(window.localStorage.getItem("savedData"));
  const COunter = useSelector((state) => state.counter.value);

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
      <h1>{title}</h1>
      <h2>{COunter}</h2>
      <input
        value={title}
        onChange={(ev) => {
          setTitle(ev.target.value);
          window.localStorage.setItem("savedData", ev.target.value);
        }}
      ></input>
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
