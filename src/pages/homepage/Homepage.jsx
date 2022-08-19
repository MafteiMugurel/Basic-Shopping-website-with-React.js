import "./Homepage.scss";
import Cards from "../../components/cards/Cards";
import Search from "../../components/search/Search";
import { useState } from "react";

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
