import React from "react";
import {MDBCarousel, MDBCarouselItem} from 'mdb-react-ui-kit';
import carousel1 from '../assets/carousel1.jpeg'
import carousel2 from '../assets/carousel2.jpeg'
import carousel3 from '../assets/carousel3.jpeg'
import carousel4 from '../assets/carousel4.jpeg'
import carousel5 from '../assets/carousel5.jpeg'

const Opening = () => {
    return (
        <section id='opening'>
            <MDBCarousel className='carousel' showControls fade interval={3000}>
                <MDBCarouselItem
                    className='w-100 d-block'
                    itemId={1}
                    src={carousel1}
                    alt="First slide"
                />
                <MDBCarouselItem
                    className='w-100 d-block'
                    itemId={2}
                    src={carousel2}
                    alt="Second slide"
                />
                <MDBCarouselItem
                    className='w-100 d-block'
                    itemId={3}
                    src={carousel3}
                    alt="Third slide"
                />
                <MDBCarouselItem
                    className='w-100 d-block'
                    itemId={4}
                    src={carousel4}
                    alt="Forth slide"
                />
                <MDBCarouselItem
                    className='w-100 d-block'
                    itemId={5}
                    src={carousel5}
                    alt="Fifth slide"
                />
            </MDBCarousel>
        </section>
    )
}

export default Opening;