import React, {useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  // const [searchTerm, setSearchTerm] = useState([])

  // const displayedListings = listings.filter((searchList) => {
  //   console.log(searchList, ' sea')
  //   return listing.name.toLowerCase().includes(searchTerm);
  // });

  return (
    <div className="app">
      <Header />
      <ListingsContainer />
    </div>
  );
}

export default App;
