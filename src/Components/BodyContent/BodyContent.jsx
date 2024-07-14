import React from 'react'

function BodyContent(props) {
  return (
    <div className='content'>
      <h3>Home Page</h3>
      {props.children}
    </div>
  )
}

export default BodyContent