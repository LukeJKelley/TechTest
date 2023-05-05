export const fetchBooks = async () => {
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=$flowers`
  );
  const data = await response.json();
  console.log(data);
  console.log(data.items);
  const books = data.items.map((item, index) => {
    return {
      Title: item.volumeInfo?.title,
      Author: item.volumeInfo?.authors?.[0],
      PublishDate: item.volumeInfo?.publishedDate,
      Description: item.volumeInfo?.description,
      ImageLink: item.volumeInfo.imageLinks?.thumbnail,
      index: index,
    };
  });

  return books;
};
