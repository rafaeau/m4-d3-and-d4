import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

const SingleBook = (props) => (
    
        <Container>
            <Row className="justify-content-center my-3">
                <Col xs={0} md={0} className="text-center">
                    <Card style={{ width: '13rem' }}>
                        <Card.Img variant="top" src={props.book.img} style={{height:300, width:"auto"}} />
                        <Card.Body>
                            <Card.Title>{props.book.title}</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )

export default SingleBook
