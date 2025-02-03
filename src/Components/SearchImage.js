import React, { useState } from "react";
import axios from "axios";

const SearchImage = ({ setImages }) => {
  let [search, setSearch] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .get("https://api.unsplash.com/search/photos", {
        headers: {
          "Accept-Version": "v1",
          Authorization:
            "Client-ID Nj22p9ZYr2XiSKtrIGjH8_m2gyWG3Wr_A2C0nly-E-Y",
        },
        params: {
          query: search,
        },
      })
      .then((response) => {
        setImages(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={search}
          placeholder="Search image here..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Seacrh</button>
      </form>
    </div>
  );
};

export default SearchImage;
