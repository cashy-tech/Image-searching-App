import { useState } from "react";
import "./style.css";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    onSubmit(term);
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
  };
  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <h2>Welcome to pics-finder</h2>
        <label className="label">Enter your search term</label>
        <input className="input" value={term} onChange={handleChange} />
      </form>
    </div>
  );
}
export default SearchBar;
