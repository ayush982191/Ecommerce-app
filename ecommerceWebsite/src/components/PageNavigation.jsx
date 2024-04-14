import React from 'react'
import { NavLink } from 'react-router-dom'

function PageNavigation({title}) {
  return (
    <div style={{display:"flex"}}>
        <NavLink to="/" >Home/</NavLink>
        <p>{title}</p>
    </div>
  )
}

export default PageNavigation