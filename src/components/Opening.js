import React from "react";
import {MDBCarousel, MDBCarouselItem} from 'mdb-react-ui-kit';
import photo1 from '../assets/jurta1.jpeg'
import photo2 from '../assets/jurta2.jpeg'
import photo3 from '../assets/jurta3.jpeg'

const Opening = () => {
    return (
        <section id='opening'>
            <MDBCarousel className='carousel' showControls fade interval={3000}>
                <MDBCarouselItem
                    className='w-100 d-block'
                    itemId={1}
                    src={photo1}
                    alt="First slide"
                />
                <MDBCarouselItem
                    className='w-100 d-block'
                    itemId={2}
                    src={photo2}
                    alt="Second slide"
                />
                <MDBCarouselItem
                    className='w-100 d-block'
                    itemId={3}
                    src={photo3}
                    alt="Third slide"
                />
            </MDBCarousel>
        </section>
    )
}

export default Opening;