import { Link } from "react-router-dom";
import React from "react";
import styles from "./BooksCard.module.scss";

const BooksCard = ({ books }) => (
  <div className={styles.Books}>
    {books.map((book, index) => (
      <React.Fragment key={index}>
        <div className={styles.Books__Card}>
          <h3 className={styles.Books__Card__Title}>{book.Title}</h3>
          <p>{book.Author}</p>
          <p>{book.PublishDate}</p>
          <Link
            className={styles.Books__Card__Link}
            to={{
              pathname: `/book/${index}`,
              state: { book },
            }}
          >
            Read more
          </Link>
        </div>
      </React.Fragment>
    ))}
  </div>
);

export default BooksCard;
