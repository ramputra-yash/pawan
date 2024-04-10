import React from 'react'
import './SideBar.css'

function SideBar({menu,setMenu,handleFeature,handleContact,handleAbout}) {
  return (
    <div className={`sidebar ${menu===true ? 'open' : ''}`}>
        <ul className='side_ul'>
            <li onClick={()=>setMenu(!menu)}>Home</li>
            <li onClick={()=>{
              handleFeature();
              setMenu(!menu)
            }}>Features</li>
            <li onClick={()=>{
              handleContact();
              setMenu(!menu)
            }}>Contact</li>
            <li onClick={()=>{
              handleAbout();
              setMenu(!menu)
            }}>About</li>
        </ul>
    </div>
  )
}

export default SideBar
