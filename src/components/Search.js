import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from './Card';



const Search = () => {
    const [searchText, setSearchText] = useState("");
    const [searchResult,setSearchResult] = useState([])

    const baseURL=`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${searchText}&page=1&include_adult=false`
    const fetchSearch = async () =>{
        try{
            const {data} = await axios.get(baseURL);
            setSearchResult(data.results);
        }
        catch (e)
        {
            console.log(e);
        }
      
    };
    
    useEffect(()=>{
        fetchSearch();
    })


    return(
        <div>
            <div className="search-bar" style={{display:"flex"}}>
            {/* <TextField
            style={{flex:1 }}
            className="searchBox"
            variant="standard"
            label="Search..."
            onChange={(e) => setSearchText(e.target.value)}
            /> */}

            <input id="search" type="text" onChange={(e) => setSearchText(e.target.value)} placeholder="Search..."/>
            </div>

            {searchResult.length>0 ?  <div className="Trending-title">
                <h3>Search Results</h3>
                </div>
                :"" 
            }

            <div className= 'card-x'>

  {
      searchResult && searchResult.map((content)=>(
          <Card 
          content={content} //sending the one entire object to card
          key={content.id}
          id={content.id}
          poster={content.poster_path}
          release_date={content.release_date}
          title={content.title || content.name}
          vote_avg={content.vote_average}
          overview={content.overview}
          />
      ))
  }
</div>


    </div>
    )
}

export default Search;