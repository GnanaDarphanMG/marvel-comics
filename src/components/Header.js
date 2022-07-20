import React from "react"
import "./Header.css"
const Header =()=>{
    return(
        <div className="main-div1">
            <img src={require("./image/logo.png")} className="main-image" alt="logo"></img>
            <div className="main-search">
                <input placeholder="Search for comics....." type="text" className="main-search-space"/>
            
            </div>
            </div>
    )
}

export default Header