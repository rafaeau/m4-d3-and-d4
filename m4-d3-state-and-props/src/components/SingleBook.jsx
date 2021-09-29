import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import scifi from '../data/scifi.json'

function SingleBook(props) {
    return (
        <Container>
            <Row className="justify-content-center my-3">
                <Col xs={12} md={6} className="text-center">
                    <Card>
                        <Card.Img variant="top" src={this.props.data.img} />
                        <Card.Body>
                            <Card.Title>{scifi.title}</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default SingleBook
