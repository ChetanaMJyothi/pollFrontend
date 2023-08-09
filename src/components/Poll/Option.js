import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import style from './Option.module.css'
function Option() {
  return (
    <div>
    <div className={style.linkMenu}>
      <NavLink className={({ isActive }) => isActive ? style.activeStyle : style.linkStyle
  } to="create">Create Poll</NavLink>
      <NavLink className={({ isActive }) => isActive ? style.activeStyle : style.linkStyle
  } to="list">Active Poll</NavLink>
      <NavLink className={({ isActive }) => isActive ? style.activeStyle : style.linkStyle
  } to="result">Get Results</NavLink>
    </div>
<Outlet />
</div>
  )
}

export default Option
