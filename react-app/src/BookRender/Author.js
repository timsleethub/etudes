import React from 'react'

const complexExample = (author) => {
  console.log(author)
}

const Author = (props) => {
  return (
    <div onClick={() => complexExample(props.author)}>
      <p>{props.author}</p>
    </div>
  )
}

export default Author
