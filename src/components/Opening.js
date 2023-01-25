import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import carousel1 from '../assets/carousel1.jpeg'
import carousel2 from '../assets/carousel2.jpeg'
import carousel3 from '../assets/carousel3.jpeg'
import carousel4 from '../assets/carousel4.jpeg'
import carousel5 from '../assets/carousel5.jpeg'
import AsyncImage from "./AsyncImage";

const Opening = () => {
    return (
        <section id='opening'>
            <Carousel fade className='carousel'>
                <Carousel.Item interval={3000}>
                    <AsyncImage
                        className="d-block w-100"
                        src={carousel1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <AsyncImage
                        className="d-block w-100"
                        src={carousel2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <AsyncImage
                        className="d-block w-100"
                        src={carousel3}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <AsyncImage
                        className="d-block w-100"
                        src={carousel4}
                        alt="Forth slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <AsyncImage
                        className="d-block w-100"
                        src={carousel5}
                        alt="Fifth slide"
                    />
                </Carousel.Item>
            </Carousel>
        </section>
    )
}

export default Opening;