import React from 'react'
import {Container, Row, Col, Card} from 'react-bootstrap'


/* const SingleBook = (props) => (
    
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
    ) */

    class SingleBook extends React.Component {

        state = {
            selected: false
        }

        render(){
            return(
            <Container>
                <Row className="justify-content-center my-3">
                    <Col xs={0} md={0} className="text-center">
                        <Card style={{ width: '13rem', border: this.state.selected ? "5px solid blue" : "none"}} onClick={() => this.setState({selected: !this.state.selected})}>
                            <Card.Img variant="top" src={this.props.book.img} style={{height:300, width:"auto"}} />
                            <Card.Body>
                                <Card.Title>{this.props.book.title}</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            )}
    }

export default SingleBook
