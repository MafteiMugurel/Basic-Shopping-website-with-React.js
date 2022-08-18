import "./App.scss";
import Nav from "./components/nav/Nav";
import Cards from "./components/cards/Cards";
import Search from "./components/search/Search";

const App = () => {
  return (
    <>
      <Nav />
      <Search />
      <Cards />
    </>
  );
};

export default App;
