import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import img1 from '../Assets/3.jpg'
import img2 from '../Assets/4.jpg'

const Services = () => {
  return (
    <div className='services'>
        <Carousel infiniteLoop autoPlay showStatus={false} showIndicators={false} showThumbs={false} interval={3000}>
            <div>
                <img src={img1} alt="Item1" />
                <h1 className='legend carText'>Front-End Development</h1>
            </div>
            <div>
                <img src={img2} alt="Item2" />
                <h1 className='legend carText'>Peer-to-peer Support</h1>
            </div>
        </Carousel>
      
    </div>
  )
}

export default Services
