import axios from "axios";

export function BookSearchButton(props) {
  const jwt = localStorage.getItem("jwt");

  const handleClick = () => {
    axios
      .post(
        "http://localhost:3000/books.json",
        {
          title: props.book.volumeInfo.title,
          subtitle: props.book.volumeInfo.subtitle,
          author: props.book.volumeInfo.authors,
          pages: props.book.volumeInfo.pageCount,
          published_date: props.book.volumeInfo.publishedDate,
          description: props.book.volumeInfo.description,
          publisher: props.book.volumeInfo.publisher,
          image_link: props.book.volumeInfo.imageLinks.thumbnail,
          self_link: props.book.selfLink,
        },
        { headers: { Authorization: `Bearer ${jwt}` } }
      )
      .then((response) => {
        console.log(response.data);
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response);
      });
    console.log(props.book.volumeInfo.imageLinks);
  };
  return (
    <div>
      <button onClick={handleClick}>Add Book</button>
    </div>
  );
}
