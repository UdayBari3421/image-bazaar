import React from "react";

const ShowImage = ({ images }) => {
  return (
    <div className="image-conrtainer">
      {images.length > 0 &&
        images.map((img) => {
          return <img src={img.urls.regular} alt={img.alt_description} />;
        })}
    </div>
  );
};

export default ShowImage;
