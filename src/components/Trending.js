import React, { useEffect, useState } from "react";
import axios from "axios";
// import {Navbar, Container, Nav, Form, FormControl, Button} from 'react-bootstrap'
import Card from './Card'
import Search from "./Search";


const Trending = () =>{

    const [trending, setTrending] = useState([]);
    const baseURL = `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&include_adult=false`;
  

const getTrending = async () =>{
    try{
        const {data} = await axios.get(baseURL);
        setTrending(data.results)
        console.log(data);
    }
    catch (e)
    {
        console.log(e);
    }
   
}

useEffect (() =>{
    getTrending();
},[]);


    return(
        <div> 
            <Search />
            <div className="Trending-title">
                <h3>Trending</h3>
                </div>

                <div className= 'card-x'>
  
            {
                trending && trending.map((content)=>(
                    
                    <Card 
                    content={content}
                    key={content.id}
                    id={content.id}
                    release_date={content.release_date}
                    poster={content.poster_path}
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

export default Trending;