import React from "react";
import { ReactQueryDevtools} from "react-query/devtools";
import { useQuery } from "react-query";
import axios from "axios";
import "./ComicAPICall.css"

function ComicAPICall() {
    const { isLoading, error, data, isFetching } = useQuery("repoData", () =>
      axios.get(
        "https://gateway.marvel.com/v1/public/comics?ts=1&apikey=a1fc014e793ee7ab39b68e4eb97b235f&hash=23c73a5d5c4b19db52967f73a021127e"
      ).then((res) => res.data));
  
    if (isLoading) return "Loading...";
  
    if (error) return "An error has occurred: " + error.message;
    
  
    return (
        <div className="main-card">
            <div className="cards">
              {Array.apply(null,{length:20}).map((e,i)=>(               
                 <div className="card">              
                <a href={`${data.data.results[i].description}`}>
                <img className="card-image" src={`${data.data.results[i].thumbnail.path}/portrait_incredible.${data.data.results[i].thumbnail.extension}`} alt="spidy"></img>
                </a>
                <p className="title">{data.data.results[i].title}</p>
                </div> ))}
               
            
        </div>
        <div>{isFetching ? "Updating..." : ""}</div>
        <ReactQueryDevtools initialIsOpen />
      </div>
    );
}
export default ComicAPICall