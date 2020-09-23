import React, {Component} from 'react';
import Carousel from "react-bootstrap/cjs/Carousel";
import fauxels from '../assets/pexels-fauxels-3183149.jpg';
import olegmagni from '../assets/pexels-oleg-magni-2764678.jpg';
import thisisengineering from '../assets/pexels-thisisengineering-3861976.jpg';


class CarouselBox extends Component {
    render() {
        return (
            <Carousel className="carousel">
                <Carousel.Item>
                    <div className="carouselItem">
                        <img className="d-block w-100" src={fauxels} alt="fauxels"/>
                        <Carousel.Caption>
                            <h3>Img 1</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="carouselItem">
                        <img className="d-block w-100" src={olegmagni} alt="olegmagni"/>
                        <Carousel.Caption>
                            <h3>Img 2</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="carouselItem">
                        <img className="d-block w-100" src={thisisengineering} alt="thisisengineering"/>
                        <Carousel.Caption>
                            <h3>Img 3</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default CarouselBox;