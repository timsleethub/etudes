import React from 'react'
import ReactDOM from 'react-dom'
import BookRender from './BookRender/BookRender'
import books from './books'
import './index.css'

function BooklistRender() {
  return (
    <div className='booklist'>
      {books.map((book) => {
        // const { poster, title, author } = book
        return <BookRender key={book.isbn} {...book} />
        // book = {book}
      })}
    </div>
  )
}

ReactDOM.render(<BooklistRender />, document.getElementById('root'))
