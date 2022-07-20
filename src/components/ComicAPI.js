import React from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import axios from "axios";
import "./ComicApi.css"
const queryClient = new QueryClient();
const ComicAPI=()=>{
    return(
    <QueryClientProvider client={queryClient}>
       
        <Example></Example>

    </QueryClientProvider>)

function Example() {
    const { isLoading, error, data, isFetching } = useQuery("repoData", () =>
      axios.get(
        "https://gateway.marvel.com/v1/public/comics?ts=1&apikey=a1fc014e793ee7ab39b68e4eb97b235f&hash=23c73a5d5c4b19db52967f73a021127e"
      ).then((res) => res.data));
  
    if (isLoading) return "Loading...";
  
    if (error) return "An error has occurred: " + error.message;
  
    return (
        <div className="main-card">
            <div class="cards">
            <div className="card">               
                <img src={`${data.data.results[0].thumbnail.path},${data.data.results[0].thumbnail.extension}`} alt="spidy"></img>
                <h1 className="title">{data.data.results[0].title}</h1>
            </div>
        </div>
        <div>{isFetching ? "Updating..." : ""}</div>
        <ReactQueryDevtools initialIsOpen />
      </div>
    );
}
}
export default ComicAPI