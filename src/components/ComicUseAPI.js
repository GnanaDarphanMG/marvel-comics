import React, { useEffect, useState } from 'react'

const ComicUseAPI=()=> {

    const [heros,setUsers] = useState([]);

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
<div className="app">
  {heros &&
    heros.map((user) => (
      <div className="item-container">
        <img src={`${user.data.results[0].thumbnail.path},${user.dtat.results[0].thumbnail.extension}`} alt="spidy"></img>
        <div className="title">{user.data.results[0].title}</div>
      </div>
   ))}
</div>
)}

export default ComicUseAPI;
