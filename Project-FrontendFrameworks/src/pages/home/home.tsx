import { Container, Row, Col} from 'react-bootstrap'

export default function Home(){
    return(
    <Container className='d-flex justify-content-center align-items-center vh-100'>
      <Row>
        <Col className="text-center mb-4">
            <h1>Music Library</h1>
            <h2>Made by Lander Vennekens</h2>
        </Col>
      </Row>
    </Container>
    )
}