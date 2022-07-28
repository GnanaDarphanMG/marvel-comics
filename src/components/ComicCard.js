import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import ComicAPICall from "./ComicAPICall";
const queryClient = new QueryClient();
const ComicCard=()=>{
    return(
    <QueryClientProvider client={queryClient}>
    
        <ComicAPICall></ComicAPICall>

    </QueryClientProvider>)
}
export default ComicCard