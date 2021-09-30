import SingleBook from './SingleBook'
import {Col, Container, Row} from 'react-bootstrap'

const BookList = (props) =>(
    <Container>
        <Row>
            {
            props.books.map(book =>(
                <Col xs={3}>
                    <SingleBook book={book}/> {/* Note for myself: book (props) and book (name I gave for array) */}
                </Col>
            ))
            }
        </Row>
    </Container>
)

export default BookList