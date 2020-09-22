import React, {Component} from 'react';
import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/cjs/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import design from "../assets/TabImg/design.jpg";
import team from "../assets/TabImg/team.jpg";
import programming from "../assets/TabImg/programming.jpg";
import frameworks from "../assets/TabImg/frameworks.jpg";
import lib from "../assets/TabImg/libraries.jpg";


class About extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-5">
                                <Nav.Item className="design">
                                    <Nav.Link eventKey="first">Design</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Team</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Programming</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">Frameworks</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fifth">Libraries</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className="mt-5">
                                <Tab.Pane eventKey="first">
                                    <img className="img-fluid w-100" src={design} alt="tabContent"/>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem culpa, delectus
                                        doloremque iure laborum mollitia nisi, placeat porro praesentium, recusandae
                                        rerum
                                        unde vel. Recusandae, sapiente.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <img className="img-fluid w-100" src={team} alt="tabContent"/>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid est facilis
                                        fugiat iusto libero nostrum nulla omnis recusandae sit sunt tenetur, ullam vel.
                                        A ex fuga harum ipsum iusto laboriosam, laborum laudantium, minus perspiciatis
                                        porro rerum saepe ut voluptatem?</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <img className="img-fluid w-100" src={programming} alt="tabContent"/>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem culpa, delectus
                                        doloremque iure laborum mollitia nisi, placeat porro praesentium, recusandae
                                        rerum
                                        unde vel. Recusandae, sapiente.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <img className="img-fluid w-100" src={frameworks} alt="tabContent"/>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem culpa, delectus
                                        doloremque iure laborum mollitia nisi, placeat porro praesentium, recusandae
                                        rerum
                                        unde vel. Recusandae, sapiente.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth">
                                    <img className="img-fluid w-100" src={lib} alt="tabContent"/>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem culpa, delectus
                                        doloremque iure laborum mollitia nisi, placeat porro praesentium, recusandae
                                        rerum
                                        unde vel. Recusandae, sapiente.</p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        );
    }
}

export default About;