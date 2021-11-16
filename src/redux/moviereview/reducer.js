import { ADD_FAV, REMOVE_FAV } from "./types";


const initialState = {
    fav:[]
};


const reducer = (state=initialState,action) =>{
    switch(action.type){
        case ADD_FAV : 
        console.log("added to fav", action.payload)
        return{
            ...state,
            fav:[ ...state.fav, action.payload],
            
        }

        case REMOVE_FAV : 
        return{
            ...state,
            fav: state.fav.filter((props) => props.id !== action.payload)
        }

        default:
            return state;
    }
}

export default reducer;