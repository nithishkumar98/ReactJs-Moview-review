import React, { useEffect, useState } from "react";
import axios from "axios";
// import {Navbar, Container, Nav, Form, FormControl, Button} from 'react-bootstrap'
import Card from './Card'
import Search from "./Search";


const NowPlaying = () =>{

    const [nowPlaying, setNowPlaying] = useState([]);
    const baseURL = ` https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;


const getNowPlaying = async () =>{
    try{
        const {data} = await axios.get(baseURL);
        setNowPlaying(data.results)
        console.log(data);
    }
    catch (e)
    {
        console.log(e);
    }
   
}

useEffect (() =>{
    getNowPlaying();
},[]);


    return(
        <div> 
            <Search />
            <div className="Trending-title">
                <h3>Now Playing</h3>
                </div>

                <div className= 'card-x'>
  
            {
                nowPlaying && nowPlaying.map((content)=>(
                    
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

export default NowPlaying;