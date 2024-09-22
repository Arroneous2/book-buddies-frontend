import axios from "axios";

export function AddBookButton(props) {
  const jwt = localStorage.getItem("jwt");

  const handleClick = async () => {
    try {
      const bookResponse = await axios.post(
        "http://localhost:3000/books.json",
        {
          title: props.book.volumeInfo.title,
          subtitle: props.book.volumeInfo.subtitle,
          author: props.book.volumeInfo.authors,
          pages: props.book.volumeInfo.pageCount,
          published_date: props.book.volumeInfo.publishedDate,
          description: props.book.volumeInfo.description,
          publisher: props.book.volumeInfo.publisher,
          image_link: props.book.volumeInfo.imageLinks?.thumbnail,
          self_link: props.book.selfLink,
        },
        { headers: { Authorization: `Bearer ${jwt}` } }
      );

      console.log(bookResponse);

      const bookshelveResponse = await axios.post(
        "http://localhost:3000/bookshelves.json",
        {
          book_id: bookResponse.data.id,
        },
        { headers: { Authorization: `Bearer ${jwt}` } }
      );

      window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.

      console.log(bookshelveResponse.data);
    } catch (error) {
      // Log any errors that occur during either request
      console.error(error.response || error.message);
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Add Book</button>
    </div>
  );
}
