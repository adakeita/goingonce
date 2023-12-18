import { useState } from "react";
import "./search.css";

const SearchComponent = ({ onSearch, onClearSearch }) => {
  const [tag, setTag] = useState("");

  const handleSearch = () => {
    onSearch(tag);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };


  return (
    <div className="search-wrapper">
      <div className="search-container">
        <input
          className="search-input"
          type="text"
          placeholder="Search by tag..."
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button className="search-btn" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchComponent;
