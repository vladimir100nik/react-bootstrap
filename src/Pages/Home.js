import React, {Component} from 'react';
import CarouselBox from "../Components/CarouselBox";
import {Button, Card, CardDeck, Container} from "react-bootstrap";

class Home extends Component {
    render() {
        return (
            <div>
                <CarouselBox/>
                <Container>
                    <h2 className="text-center m-4">Our team</h2>
                    <CardDeck className="m-4">
                        <Card>
                            <Card.Img variant="top"
                                      src="https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Aspernatur,dolore.</Card.Text>
                                <Button variant="primary">About our team</Button>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Img variant="top"
                                      src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Aspernatur,dolore.</Card.Text>
                                <Button variant="primary">About our team</Button>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Img variant="top"
                                      src="https://images.pexels.com/photos/186076/pexels-photo-186076.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Aspernatur,dolore.</Card.Text>
                                <Button variant="primary">About our team</Button>
                            </Card.Body>
                        </Card>

                    </CardDeck>
                </Container>
            </div>
        );
    }
}

export default Home;