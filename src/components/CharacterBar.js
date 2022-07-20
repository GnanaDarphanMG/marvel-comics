import React from "react";
import Carousel from "./Carousel/Carousel";
import "./CharacterBar.css"
const CharacterBar=()=>
{
    return(<div className="main-div2">
    <div className="main-div2-round">
        <Carousel show={7}>  
    <img src={require("./image/spider-man.png")} className="main-div2-round1" alt="Avatar" ></img>
    <img src={require("./image/iron-man.png")} className="main-div2-round1" alt="Avatar" ></img>
    <img src={require("./image/hulk.png")} className="main-div2-round1"alt="Avatar" ></img>
    <img src={require("./image/thor.png")} className="main-div2-round1"alt="Avatar" ></img>
    <img src={require("./image/wolverine.png")} className="main-div2-round1" alt="Avatar" ></img>
    <img src={require("./image/captain-america.png")} className="main-div2-round1" alt="Avatar" ></img>
    <img src={require("./image/spider-man.png")} className="main-div2-round1" alt="Avatar" ></img>
    <img src={require("./image/iron-man.png")} className="main-div2-round1" alt="Avatar" ></img>
    <img src={require("./image/hulk.png")} className="main-div2-round1"alt="Avatar" ></img>
    <img src={require("./image/thor.png")} className="main-div2-round1"alt="Avatar" ></img>
    <img src={require("./image/wolverine.png")} className="main-div2-round1" alt="Avatar" ></img>
    <img src={require("./image/captain-america.png")} className="main-div2-round1" alt="Avatar" ></img>
    
    </Carousel> 
 </div>
</div>
    )
}
export default CharacterBar