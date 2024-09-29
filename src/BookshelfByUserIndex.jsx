import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

export function BookshelfByUserIndex() {
  const { state } = useLocation();
  const jwt = localStorage.getItem("jwt");

  const [bookshelf, setBookshelf] = useState([]);

  const handleBookshelfIndex = () => {
    console.log(state);
    axios
      .get(`http://localhost:3000/bookshelf/${state.userId}.json`, {
        headers: { Authorization: `Bearer ${jwt}` },
      })
      .then((response) => {
        console.log(response);
        setBookshelf(response.data);
      });
  };

  useEffect(handleBookshelfIndex, []);

  return (
    <div>
      <h1>All Bookshelf</h1>
      {bookshelf.map((data) => (
        <div key={data.id}>
          <p>hello</p>
          <p>{data.status}</p>
          <p>{data.rating}</p>
          <p>{data.format_type}</p>
          <p>{data.book_location}</p>
          <p>{data.book.title}</p>
          <p>{data.book.author}</p>
          <img src={data.book.image_link} />
        </div>
      ))}
    </div>
  );
}
