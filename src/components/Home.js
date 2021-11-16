import React from 'react'
import poster from '../img/movie.jpg'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Footer from './Footer';

const Home = () =>{

    return(
    <>
        <div style={{ 
            backgroundImage: `url(${poster})` ,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '100vh'
          }}>
              <div className="caption">
            <h3 className="hlo">Choice is yours</h3>
            <h2 className='quote'> We reviewed for you </h2>

            <a href="/review" className="get-btn">Take a View <ArrowForwardIosIcon /></a>
            </div>
          </div>
          <Footer />
    </>
    )
    
}

export default Home;