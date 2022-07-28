import React from "react";
import "./App.css";
import Header from "./components/Header";
import CharacterBar from "./components/CharacterBar";
import ComicCard from "./components/ComicCard";
import CheckBox from "./components/toggle";

const App=()=>{

    return(
        <div>         
            <div className="main">          
            <Header></Header>
            <CharacterBar></CharacterBar>
            <ComicCard>
            </ComicCard>
            </div>
        </div>
 )
}
export default App