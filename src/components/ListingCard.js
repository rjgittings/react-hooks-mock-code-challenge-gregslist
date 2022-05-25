import React, {useState } from "react";

function ListingCard( { id, description, image, location }) {

  const [like, setLike] = useState ('')

  function handleClick (){
    setLike(!like)
  }

  // function handleDeleteClick () {
  //   (fetch("http://localhost:6001/listings/:id"),
  //   { method: 'DELETE' })
  //   onRemoveListing(id)
  // }


  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={"description"} />
      </div>
      <div className="details">
        {like ? (
          <button className="emoji-button favorite active" onClick={handleClick}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleClick}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
