import React from 'react'
import Author from './Author'
import Poster from './Poster'
import Title from './Title'

const Book = (props) => {
  console.log(props)
  return (
    <div className='book'>
      <Poster bookPoster={props.poster} />
      <Title bookTitle={props.title} />
      <Author bookAuthor={props.author} />
    </div>
  )
}

export default Book
