import Alert from 'react-bootstrap/Alert'
import Container from 'react-bootstrap/Container'

const WarningSign = (props) => (
    <Container>
        <Alert variant="danger" className="text-center mt-3">
            <Alert.Heading>{props.text}</Alert.Heading>
        </Alert>
    </Container>
)

export default WarningSign