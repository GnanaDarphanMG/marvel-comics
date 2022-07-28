import React from "react";
import Carousel from "./Carousel/Carousel";
import "./CharacterBar.css"
import CheckBox from "./toggle";
const CharacterBar=()=>
{
    return(<div className="main-div2">
    <div className="main-div2-round">
        <Carousel show={7}> <div className="main-div2-round1">
            <CheckBox></CheckBox>
            <CheckBox></CheckBox>
            <CheckBox></CheckBox>
        </div>
    
    </Carousel> 
 </div>
</div>
    )
}
export default CharacterBar