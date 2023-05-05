import React from "react";

const BookDetails = ({ location }) => {
  const book = location.state?.book;

  if (!book) {
    return <div>Loading...</div>;
  }
  console.log(Object.keys(book), "this be the book");
  return (
    <div>
      <h2>{book.Title}</h2>
      <p>Author: {book.Author}</p>
      <img src={book.ImageLink} alt={book.Title} />
      <p>{book.Description}</p>
    </div>
  );
};

export default BookDetails;
