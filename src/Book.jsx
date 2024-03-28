import books from '../assets/books.json'

const Book = () => {
    return (
      <div className='Böcker'>
        {books.map(book => (
          <div className='booken' key={book.id}>
            <div className="boknamn">
            <h2>{book.title}</h2>
            <p>Av {book.author}</p>
            </div>
            <p>{book.desc}</p>
            <button>Add to cart</button>
          </div>
        ))}
      </div>
    );
  }
  

export default Book
