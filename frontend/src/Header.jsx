import React from 'react'

function Header() {
  return (
    <>
    <header style={{display:'flex',border:'1px solid black',justifycontent:'space-evenly'}}>
    <img height={50} width={50} src="https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_t.png"/>
     
     <nav>
        <a href="">Home</a>
    <a href="">About</a>
    <a href="">Login</a>
    <a href="">Signup</a>
    <a href="">Login</a>

    </nav>
    </header>

</>
    
  )
}

export default Header