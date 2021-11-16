import React from 'react'
import { Button } from 'react-bootstrap';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import { img_500 } from '../config.js/config';
import { img_300 } from '../config.js/config';
import Box from '@mui/material/Box';
import { useState } from 'react';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { addFav, removeFav } from '../redux/moviereview/action';
import { useDispatch, useSelector } from 'react-redux';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Card = (props) => {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        bgcolor: 'background.paper',
        border: '0px solid #000',
        borderRadius:"6px",
        padding: "50px"
        // boxShadow: 24,
        // p: 4,
      };

    var vote=props.vote_avg;
    vote=vote.toFixed(1);

    var release_year = props.release_date;   
    release_year=String(release_year)
    release_year=release_year.substring(0,4);

  


    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const dispatch = useDispatch();
    const { fav } = useSelector(state => state.fav)

    let favlistitem = fav.find(o => o.id === props.id);
    const favdisabled= favlistitem ? true :false;

    const favButtonText= favlistitem ? <FavoriteIcon /> : <FavoriteBorderIcon />;

    
    let cardtitle = props.title.length>21 ? "card-title-alt" : "card-title"

    return(
        <>
            <div className="cards" key={props.id}>
            <div  className="rating">
                <p><b>{ vote==0 ? 'N/A' : vote}</b></p>
                </div>
                <div className='card-img'>
                  <img src={`${img_500}/${props.poster}`}/> 
                </div>
                
                <div className={cardtitle}>
                    {props.title} 

                </div>

                {/* <div className='card-desc'>
                    <p>{props.overview}</p>
                </div> */}

            <div className="card-btns">
            <div className="add-fav">
                    <Button size="sm" variant='outline-danger' onClick={()=>{dispatch(addFav(props.content))}} disabled={favdisabled} > {favButtonText} </Button>
                </div>
              <span>  <div className="review-btn">
                    <Button size="sm" variant='outline-success' onClick={handleOpen}>  
                        Review<DoubleArrowIcon />
                    </Button>
                </div>
            </span>
                </div>
            </div>

            {
                <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-tdispatch(addFav(props.title))dispatch(addFav(props.title))itle"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography id="modal-modal-title" variant="h6" component="h2">
                  <p >{props.title}<span className="modal-rating">{ vote==0 ? 'Not rated yet' : vote} </span></p>
                  </Typography>
                  <div className="release_year">  <p>Released: {release_year}</p> </div>
                  <div className='modal-img'>
                    <img src={`${img_300}/${props.poster}`} alt='card image'/>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      {props.overview}
                  </Typography>
                </div>
            
              {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      {props.overview}
                  </Typography> */}
                </Box>
              </Modal>
            }
        </>
    )
}
export default Card;