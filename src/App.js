import React, { useState } from "react";
import SearchImage from "./Components/SearchImage";
import ShowImage from "./Components/ShowImage";

const App = () => {
  let [images, setImages] = useState([]);

  return (
    <div className="app-container">
      <SearchImage setImages={setImages} />
      <ShowImage images={images} />
    </div>
  );
};

export default App;
