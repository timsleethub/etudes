import React from 'react'
import ReactDOM from 'react-dom'
import Book from './Book/Book'
import Poster from './Book/Poster'
import Title from './Book/Title'
import firstBook from './firstBook'
import './index.css'

function Booklist() {
  return (
    <div className='booklist'>
      <Book
        poster={firstBook.poster}
        title={firstBook.title}
        author={firstBook.author}
      />
    </div>
  )
}

ReactDOM.render(<Booklist />, document.getElementById('root'))
