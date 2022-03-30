import React, { useEffect, useState } from "react";
import LeftPanel from "./LeftPanel";
import MainImage from "./MainImage";

function Home() {
  const [items, setItems] = useState([]);
  const [selectedItemUrl, setSelectedItemUrl] = useState(null);
  var [searchText, setSearchText] = useState(null);
  const sendDataToParent = (index) => {
    const selectedItem = items.find(i => i.id === index)
    console.log( 'home', index)
    setSelectedItemUrl(selectedItem?.url);
  };
  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/photos?_limit=20";
    fetch(url)
      .then((resp) => resp.json())
      .then((resp) => setItems(resp));
  }, []);

  const textChange = (e) => {
    const text = e.target.value;
    setSearchText(text);
    setSelectedItemUrl(null)
  }
  return items.length > 0 ? (
    <div className="row">
      <div className="col-12 text-center">
        <input placeholder="Search" className="text-center mt-4 w-full" onChange={textChange}/>
      </div>
      <div className="col-4">
        <LeftPanel items={items.filter(item => {
          return searchText == null ? true : item.title?.toLowerCase()?.includes(searchText)
        })} imageSelected={sendDataToParent}/>
      </div>
      <div className="col-8">
        <MainImage url={ selectedItemUrl }/>
      </div>
    </div>
  ) : (
    <div className="row">
      <div className="col-12">
        <p className="loading-msg">Loading...</p>
      </div>
    </div>
  );
}

export default Home;
