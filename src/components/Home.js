import React, { useEffect, useState } from "react";
import LeftPanel from "./LeftPanel";
import MainImage from "./MainImage";

function Home() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/photos?_limit=20";
    fetch(url)
      .then((resp) => resp.json())
      .then((resp) => setItems(resp));
  }, []);
  return items.length > 0 ? (
    <div className="row">
      <div className="col-3">
        <LeftPanel items={items} />
      </div>
      <div className="col-9">
        <MainImage url={''}/>
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
