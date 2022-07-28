import React from "react"
import "./Header.css"
const Header =()=>{
    return(
        <div className="main-div1">
            <img src={require("./image/logo.png")} className="main-image" alt="logo"></img>
            <form className='search-form'>
            <div className="main-search">
                <input placeholder="Search for comics....." type="text" className='form-input'/>
            
            </div></form>
            </div>
    )
}

export default Header