import React from 'react'

function BodyContent(props) {
  return (
    <div className='content'>
      {props.children}
    </div>
  )
}

export default BodyContent