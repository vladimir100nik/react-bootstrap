import React, {Component} from 'react';
import {Card, Col, Container, ListGroup, Media, Row} from "react-bootstrap";


class Blog extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md={9}>
                        <Media className="m-5">
                            <img width={150} height={150} className="mr-3"
                                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS03kU4dJIELF0cQ2-3RDOdddELLgszn2inLQ&usqp=CAU"/>
                            <Media.Body className="mt-4">
                                <h5>Blog post</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At eaque est explicabo ipsa
                                    provident. Ad architecto doloribus expedita inventore ipsa iste quaerat quia
                                    repellendus voluptate voluptates? Assumenda impedit repellat sequi.</p>
                            </Media.Body>
                        </Media>
                        <Media className="m-5">
                            <img width={150} height={150} className="mr-3"
                                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS03kU4dJIELF0cQ2-3RDOdddELLgszn2inLQ&usqp=CAU"/>
                            <Media.Body className="mt-4">
                                <h5>Blog post</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At eaque est explicabo ipsa
                                    provident. Ad architecto doloribus expedita inventore ipsa iste quaerat quia
                                    repellendus voluptate voluptates? Assumenda impedit repellat sequi.</p>
                            </Media.Body>
                        </Media>
                        <Media className="m-5">
                            <img width={150} height={150} className="mr-3"
                                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS03kU4dJIELF0cQ2-3RDOdddELLgszn2inLQ&usqp=CAU"/>
                            <Media.Body className="mt-4">
                                <h5>Blog post</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At eaque est explicabo ipsa
                                    provident. Ad architecto doloribus expedita inventore ipsa iste quaerat quia
                                    repellendus voluptate voluptates? Assumenda impedit repellat sequi.</p>
                            </Media.Body>
                        </Media>
                        <Media className="m-5">
                            <img width={150} height={150} className="mr-3"
                                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS03kU4dJIELF0cQ2-3RDOdddELLgszn2inLQ&usqp=CAU"/>
                            <Media.Body className="mt-4">
                                <h5>Blog post</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At eaque est explicabo ipsa
                                    provident. Ad architecto doloribus expedita inventore ipsa iste quaerat quia
                                    repellendus voluptate voluptates? Assumenda impedit repellat sequi.</p>
                            </Media.Body>
                        </Media>
                    </Col>

                    <Col md={3}>
                        <h5 className="text-center mt-5">My knowledges</h5>
                        <Card>
                            <ListGroup variant="flush">
                                <ListGroup.Item>HTML/CSS</ListGroup.Item>
                                <ListGroup.Item>JavaScript</ListGroup.Item>
                                <ListGroup.Item>PHP</ListGroup.Item>
                                <ListGroup.Item>React</ListGroup.Item>
                                <ListGroup.Item>Lavarel</ListGroup.Item>
                            </ListGroup>
                        </Card>

                        <Card className="mt-3 bg-light">
                            <Card.Body>
                                <Card.Title> Title</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, quas!
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Blog;