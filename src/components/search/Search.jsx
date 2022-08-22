import searchimage from "../../assets/search-icon.png";
import "./Search.scss";

const Search = (props) => {
  return (
    <>
      <div className="search-bar">
        <img src={searchimage} alt="searchicon" className="search-icon" />
        <input
          type="text"
          className="search-imput"
          onChange={() => props.childToParent(event.target.value)}
        ></input>
      </div>
    </>
  );
};

export default Search;
