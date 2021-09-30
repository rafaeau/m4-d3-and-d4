import { ListGroup } from 'react-bootstrap'
import SingleComment from './SingleComment'

const CommentList = ({ commentsToShow }) => (
    <ListGroup>
        {commentsToShow.map(comment => (
            <ListGroup.Item key={comment._id}>
                <SingleComment comment={comment}/>
            </ListGroup.Item>
        ))}
    </ListGroup>
)

export default CommentList