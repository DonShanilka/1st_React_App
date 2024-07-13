import React from 'react'
import './MenuLink.css'

function MenuLink(props) {
    return (
        <>
            <a href={props.url} className='link'>{props.linkname}</a>
        </>
    )
}

export default MenuLink