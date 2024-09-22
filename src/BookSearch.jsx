import { useState } from "react";
import axios from "axios";
import { AddBookButton } from "./AddBookButton";

export function BookSearch() {
  const [query, setQuery] = useState("");
  const [bookSearchResults, setBookSearchResults] = useState([]);

  const apiKey = import.meta.env.VITE_GOOGLE_BOOKS_API_KEY;

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmitSearch = (event) => {
    event.preventDefault();
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apiKey}`).then((response) => {
      console.log("get Google Book");
      setBookSearchResults(response.data.items);
      console.log(bookSearchResults);
    });
    console.log("Search query:", query);
  };

  return (
    <div>
      <form onSubmit={handleSubmitSearch}>
        <input type="text" placeholder="Search..." value={query} onChange={handleInputChange} />
        <button type="submit">Search</button>
      </form>
      <h1>Book Search Results</h1>
      {bookSearchResults.map((book) => (
        <div key={book.id}>
          <h2>Title:{book.volumeInfo.title}</h2>
          <h3>Subtitle:{book.volumeInfo.subtitle}</h3>
          <p>Author:{book.volumeInfo.authors}</p>
          <p>Published Date:{book.volumeInfo.publishedDate}</p>
          <p>Pages:{book.volumeInfo.pageCount}</p>
          <img src={book.volumeInfo.imageLinks.thumbnail} alt="" />
          <AddBookButton book={book} />
        </div>
      ))}
    </div>
  );
}
