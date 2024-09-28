import { useState, useEffect } from "react";
import axios from "axios";

export function BookshelfIndex() {
  const jwt = localStorage.getItem("jwt");

  const [bookshelf, setBookshelf] = useState([]);

  const handleBookshelfIndex = () => {
    axios
      .get("http://localhost:3000/bookshelves.json", {
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
