import React from 'react'
import Author from './Author'
import Description from './Description'
import Poster from './Poster'
import Title from './Title'

const BookRender = (props) => {
  //attribute, eventHandler
  //onClick, onMouseOver
  const { poster, title, author, children } = props
  //const { poster, title, author, children } = props.book

  const clickHandler = () => {
    alert('clicked')
  }

  return (
    <div className='book' onClick={clickHandler}>
      <Poster poster={poster} />
      <Title title={title} />
      <Author author={author} />
      <Description description={children} />
    </div>
  )
}

// const Book = (props) => {
//   return (
//     <div className='book'>
//       <Poster poster={props.poster} />
//       <Title title={props.title} />
//       <Author author={props.author} />
//     </div>
//   )
// }

export default BookRender
