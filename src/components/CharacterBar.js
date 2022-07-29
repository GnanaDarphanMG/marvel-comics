import React from "react";
import Carousel from "./Carousel/Carousel"
import "./CharacterBar.css"
import CheckBox from "./CheckBox";
const CharacterBar=()=>
{
    return(<div className="main-div2">
    <div className="main-div2-round">
            <div className="main-div2-round1">
            <Carousel show={6}>
            <CheckBox selected={require('./image/spider-man.png')} deselected={require('./image/SpidyTick.png')}></CheckBox>
            <CheckBox selected={require('./image/thor.png')} deselected={require('./image/ThorTick.png')}></CheckBox>
            <CheckBox selected={require('./image/iron-man.png')} deselected={require('./image/IronTick.png')}></CheckBox>
            <CheckBox selected={require('./image/wolverine.png')} deselected={require('./image/wolvTick.png')}></CheckBox>
            <CheckBox selected={require('./image/captain-america.png')} deselected={require('./image/CATick.png')}></CheckBox>
            <CheckBox selected={require('./image/hulk.png')} deselected={require('./image/HulkTick.png')}></CheckBox>
            <CheckBox selected={require('./image/spider-man.png')} deselected={require('./image/SpidyTick.png')}></CheckBox>
            <CheckBox selected={require('./image/thor.png')} deselected={require('./image/ThorTick.png')}></CheckBox>
            <CheckBox selected={require('./image/iron-man.png')} deselected={require('./image/IronTick.png')}></CheckBox>
            <CheckBox selected={require('./image/wolverine.png')} deselected={require('./image/wolvTick.png')}></CheckBox>
            <CheckBox selected={require('./image/captain-america.png')} deselected={require('./image/CATick.png')}></CheckBox>
            <CheckBox selected={require('./image/hulk.png')} deselected={require('./image/HulkTick.png')}></CheckBox>
        </Carousel>
        </div>
     
 </div>
</div>
    )
}
export default CharacterBar