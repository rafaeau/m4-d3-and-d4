import React from 'react'
import SingleBook from './SingleBook'
import {Container, Row, Col, Form} from 'react-bootstrap'

/* const BookList = (props) =>(
    <Container>
        <Row>
            {
            props.books.map(book =>(
                <Col xs={3}>
                    <SingleBook book={book}/> //Note for myself: book (props) and book (name I gave for array)
                </Col>
            ))
            }
        </Row>
    </Container>
) */

class BookList extends React.Component {

    state = {
        searchQuery:""
    }

    render() {
        return (
    <Container>
        <Row>
            <Col>
            <Form>
            <Form.Group controlId="formGroupEmail">
                <h3 className="text-center"><Form.Label>Search</Form.Label></h3>
                <Form.Control type="text" placeholder="Type here" value={this.state.searchQuery} onChange={event => this.setState({searchQuery: event.target.value})}/>
            </Form.Group>
            </Form>
            </Col>
        </Row>

        <Row>
            {
            this.props.books.filter(book => book.title.toLowerCase().includes(this.state.searchQuery)).map(book =>(
                <Col xs={3}>
                    <SingleBook book={book}/>
                </Col>
            ))
            }
        </Row>
    </Container>
)}
}



export default BookList