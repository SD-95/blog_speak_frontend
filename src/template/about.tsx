import React from 'react'
import { Button, Card, Col, Container, ListGroup, Row } from 'react-bootstrap'
import img1 from '../Somes_Dash.png';
import file1 from '../Somes_Dash_Resume_DS.pdf';

const About = () => {
    return (
        <React.Fragment>
            <header className="masthead py-5 bg-light text-center">
                <Container>
                    <h1>About Blog Speaks</h1>
                    <p className="lead">Express more. Create better.</p>
                </Container>
            </header>

            <Container className="mt-5">
                <Row className="justify-content-center">
                    <Col lg={10}>
                        <Card className="p-5 shadow-lg border-0 rounded-4">
                            <Card.Title as="h2" className="text-center mb-4 text-primary">
                                About Blog Speaks
                            </Card.Title>

                            <Card.Text className="lead text-muted">
                                <strong>Blog Speaks</strong> was born out of a passion for merging AI and human expression.
                                Our mission is to revolutionize content creation using AI-powered tools to craft engaging and insightful blog articles.
                                Whether you're a beginner or a pro writer, our platform empowers you to write smarter, faster, and with more impact.
                            </Card.Text>

                            <h3 className="mt-5 mb-3 text-success text-center">Why Blog Speaks?</h3>
                            <ListGroup variant="flush" className="mb-4">
                                <ListGroup.Item>🧠 AI-driven content suggestions</ListGroup.Item>
                                <ListGroup.Item>📈 SEO-optimized blog recommendations</ListGroup.Item>
                                <ListGroup.Item>🎯 Personalized writing insights</ListGroup.Item>
                                <ListGroup.Item>⚡ Intuitive & modern user experience</ListGroup.Item>
                            </ListGroup>

                            <hr className="my-5" />

                            <div className="creator-info">
                                <Row className="align-items-center">
                                    <Col md={4} className="text-center">
                                        <img src={img1} alt="Shom Profile" width={180} className="shadow rounded-circle" />
                                    </Col>

                                    <Col md={8}>
                                        <h4 className="mb-3">👨‍💻 About the Creator</h4>
                                        <p>
                                            Hi! I'm <strong>Shom</strong>, the creator of <em>Blog Speaks</em>.
                                            As a passionate developer and data science enthusiast, I built this platform to blend AI with creative expression.
                                            With experience in Python, machine learning, and full-stack development, I’m committed to making blogging smarter and more intuitive.
                                        </p>
                                        <p>
                                            <strong>Skills:</strong> Python, Machine Learning, Web Development, AI Integration
                                        </p>

                                        <div className="mt-3">
                                            <Button
                                                href="https://github.com/SD-95"
                                                target="_blank"
                                                variant="dark"
                                                size="sm"
                                                className="mx-1"
                                            >
                                                <i className="fab fa-github"></i> GitHub
                                            </Button>
                                            <Button
                                                href="https://www.linkedin.com/in/somes-dash-976201155/"
                                                target="_blank"
                                                variant="primary"
                                                size="sm"
                                                className="mx-1"
                                            >
                                                <i className="fab fa-linkedin"></i> LinkedIn
                                            </Button>
                                            <Button
                                                href="mailto:yourmail@example.com"
                                                variant="danger"
                                                size="sm"
                                                className="mx-1"
                                            >
                                                <i className="fas fa-envelope"></i> Email
                                            </Button>
                                            <Button
                                                href="tel:+918000000000"
                                                variant="success"
                                                size="sm"
                                                className="mx-1"
                                            >
                                                <i className="fas fa-phone-alt"></i> Call
                                            </Button>
                                            <Button
                                                href={file1}
                                                target="_blank"
                                                variant="warning"
                                                size="sm"
                                                className="mx-1"
                                            >
                                                <i className="fas fa-file"></i> Resume
                                            </Button>
                                            <Button
                                                href='https://sd-95.github.io/SD_Portfolio/'
                                                target="_blank"
                                                variant="secondary"
                                                size="sm"
                                                className="mx-1"
                                            >
                                                <i className="fas fa-briefcase"></i> Portfolio
                                            </Button>
                                        </div>
                                    </Col>
                                </Row>
                            </div>

                            <hr className="my-5" />

                            <div className="text-center">
                                <h5 className="text-info">📢 More to Come!</h5>
                                <p className="text-muted">
                                    We're constantly working on new features like voice blogging, real-time AI co-writing,
                                    and multi-language content generation. Stay tuned and keep blogging!
                                </p>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default About
