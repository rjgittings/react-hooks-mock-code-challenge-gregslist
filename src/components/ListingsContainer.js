import React, { useState, useEffect }from "react";
import ListingCard from "./ListingCard";

function ListingsContainer() {

const [listings, setListings] = useState([])




  useEffect (() =>  {
    fetch("http://localhost:6001/listings")
    .then((res) => res.json())
    .then((listings) => setListings(listings))

  }, []);

  return (
    <main>
      <ul className="cards" listings={listings}>
        {listings.map((listing) => {
          return (
            <ListingCard
            key={listing.id}
            image ={listing.image}
            description={listing.description}
            location={listing.location}
            />
          )
        })


        }
      </ul>
    </main>
  );
}

export default ListingsContainer;
