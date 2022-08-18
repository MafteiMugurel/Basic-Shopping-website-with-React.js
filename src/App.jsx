import "./App.scss";
import { useState } from 'react';
import Nav from "./components/nav/Nav";
import Cards from "./components/cards/Cards";
import Search from "./components/search/Search";

const App = () => {
  const [name, setData] = useState("");

  const childToParent = (searchText) => {
    setData(searchText);
  };
  return (
    <>
      <Nav />
      <Search childToParent={childToParent} />
      <Cards searchByName={name}/>
    </>
  );
};

export default App;
