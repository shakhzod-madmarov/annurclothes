import { useState } from "react";

import "../styles/components/Search.css";

const Search = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  const onChangeSearch = async (e) => {
    setSearch(e.target.value);
    const response = await fetch(`/api/search`);
    const data = await response.json();
    setData(data);
  };

  return (
    <div className="nav-search">
      <label className="search__label">Search</label>
      <input type="text" placeholder="Поиск" onChange={onChangeSearch} />
      <div>
        {data.map((clothes) => (
          <div key={clothes.id}>
            {clothes.name} <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
