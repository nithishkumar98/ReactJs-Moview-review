import React from "react";
import popcorn from "../img/sad pop.png"
const Error = () =>{
    return(
        <div>
                <div class="error-page">
                    <img src={popcorn}/>
                        <h1 class="error"> 404 </h1>
                        <h4> Looks like this page doesn't exist,</h4> <h4>but
                     find out more about what's trending in movie world here.
                        </h4>

                </div>

        </div>
    )
}
export default Error