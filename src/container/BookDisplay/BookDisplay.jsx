import { useState, useEffect } from "react";
import { fetchBooks } from "../../services/FetchBooks.js";
import BooksCard from "../../components/BooksCard/BooksCard";

const BookDisplay = () => {
  const [books, setBooks] = useState([]);
  const [sortOption, setSortOption] = useState("title");

  useEffect(() => {
    const Wrapper = async () => {
      try {
        const books = await fetchBooks();
        setBooks(books);
      } catch (e) {
        console.log(e);
      }
    };
    Wrapper();
  }, []);

  useEffect(() => {
    setBooks((prevBooks) => sortBooks(prevBooks, sortOption));
  }, [sortOption]);

  const sortBooks = (booksToSort, option) => {
    const sortedBooks = [...booksToSort];

    if (option === "title") {
      sortedBooks.sort((a, b) => a.Title.localeCompare(b.Title));
    } else if (option === "publish") {
      sortedBooks.sort((a, b) => b.PublishDate.localeCompare(a.PublishDate));
    } else if (option === "author") {
      sortedBooks.sort((a, b) => {
        const authorA = a.Author && a.Author[0] ? a.Author[0] : "";
        const authorB = b.Author && b.Author[0] ? b.Author[0] : "";
        return authorA.localeCompare(authorB);
      });
    }
    return sortedBooks;
  };

  const handleSortOptionChange = (e) => {
    setSortOption(e.target.value);
  };

  return (
    <>
      <div>
        <label htmlFor="sort-option">Sort by:</label>
        <select
          id="sort-option"
          value={sortOption}
          onChange={handleSortOptionChange}
        >
          <option value="title">Title</option>
          <option value="author">Author</option>
          <option value="publish">Publish Date</option>
        </select>
      </div>
      <BooksCard books={books} />
    </>
  );
};

export default BookDisplay;
