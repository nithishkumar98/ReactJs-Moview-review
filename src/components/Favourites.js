import React from "react";
import { useSelector  } from "react-redux";
import FavCard from "./FavCard";
import sadheart from "../img/sad heart.gif"
const Favourites = () => {

    const { fav } = useSelector(state => state.fav)

    return (
        <div>
            <div className="Trending-title">
                <h3>Favourites</h3>
                </div>
                {
                fav.length<=0 ? <div className="null-fav"><img src={sadheart}/><h2 className="no-fav">Currently no favourites available...</h2></div> : ""
                }
     <div className= 'card-x'>
       {
           
           fav && fav.map((list,index)=>(
            <FavCard
            index={index}
            key={list.id}
            id={list.id}
            release_date={list.release_date}
            poster={list.poster_path}
            title={list.title || list.name}
            vote_avg={list.vote_average}
            overview={list.overview}
            />
           ))
       }
        </div>
    </div>
    )
}

export default Favourites;