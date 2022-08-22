import { useState } from "react";
import Search from "../../components/search/Search";
import Cards from "../../components/cards/Cards";
import "./Homepage.scss";

const Homepage = () => {
  const [name, setData] = useState("");
  const childToParent = (searchText) => {
    setData(searchText);
  };
  return (
    <>
      <Search childToParent={childToParent} />
      <Cards searchByName={name} />
    </>
  );
};

export default Homepage;
