import React, { useState, useEffect } from "react";
import { MdClose, MdSearch } from "react-icons/md";
import "./Search.scss";
import useFetch from "../../../hooks/useFetch";
import { useNavigate } from "react-router-dom";


const Search = ({ setShowSearch }) => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const onChangeFunction = (e) => {
    setQuery(e.target.value);
  };


  const handleSearch = () => {
    // Thực hiện tìm kiếm và lưu kết quả vào biến trạng thái searchResults
    /* let { data } = useFetch(
      `/api/products?populate=*&[filters][title][$contains]=${query}`
    ); */

    /* if (!query.length) {
      data = null;
    }

    setSearchResults(data?.data || []); */
  };

  return (
    <div className="search-modal">
      <div className="form-field">
        <input
          type="text"
          value={query}
          onChange={onChangeFunction}
          autoFocus
          placeholder="Search For Products..."
        />
        <button onClick={handleSearch}>
          <MdSearch /> {/* Sử dụng biểu tượng kính lúp */}
        </button>
        <MdClose onClick={() => setShowSearch(false)} />
      </div>
      <div className="search-result-content">
        <div className="search-results">
          {searchResults.map((item) => (
            <div
              key={item.id}
              className="search-result-item"
              onClick={() => {
                navigate("/product/" + item.id);
                setShowSearch(false);
              }}
            >
              <div className="img-container">
                <img
                  src={item.attributes.img.data[0].attributes.url}
                  alt="searched-item"
                />
              </div>
              <div className="product-details">
                <span className="name">{item.attributes.title}</span>
                <span className="desc">{item.attributes.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
