import React from "react"
//import "./ComicCard.css"
//import { useEffect, useState } from 'react'
import ComicAPI from "./ComicAPI";

const ComicCard=()=> {

    /*const [heros,setUsers] = useState([]);

    const getApiData = async () => {
        const response = await fetch(
          "https://gateway.marvel.com/v1/public/comics?ts=1&apikey=a1fc014e793ee7ab39b68e4eb97b235f&hash=23c73a5d5c4b19db52967f73a021127e"
        ).then((response) => response.json());
      
        // update the state
        setUsers(response);
      };
      
      useEffect(() => {
        getApiData();
      }, []);

return(
<div className="main-card">
  {heros &&
    heros.map((user) => (
         <div class="cards">
            <div className="card">               
                <img src={`${user.data.results[0].thumbnail.path},${user.dtat.results[0].thumbnail.extension}`} alt="spidy"></img>
                <h1 className="title">{user.data.results[0].title}</h1>
            </div>
        </div>
        
   ))}
</div>
)}*/
return(
    <div>
        <ComicAPI></ComicAPI>
    </div>
)
}

export default ComicCard;

