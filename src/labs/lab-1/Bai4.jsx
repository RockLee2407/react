import { Button, Card, Row, Col, Container} from 'react-bootstrap'

function Bai4() {
  return (
    <Container>
        <Row className='justify-content-color mt-3'>
            <Col md={4} className='mb-4'>
                <Card>.
                    <Card.Img variant="top" src="https://maytinhtientan.com/wp-content/uploads/2023/05/may-tinh-de-ban-ttc-01.jpg" />
                    <Card.Body>
                      <Card.Title>Sản phẩm 1</Card.Title>
                      <Card.Text>Ngon bổ rẻ</Card.Text>
                      <Card.Text>Giá: 11tr</Card.Text>
                      <Button variant='primary'>Xem chi tiết</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={4} className='mb-4'>
                <Card>.
                    <Card.Img variant="top" src="https://maytinhtientan.com/wp-content/uploads/2023/05/may-tinh-de-ban-ttc-01.jpg" />
                    <Card.Body>
                      <Card.Title>Sản phẩm 2</Card.Title>
                      <Card.Text>Ngon bổ rẻ</Card.Text>
                      <Card.Text>Giá: 11tr</Card.Text>
                      <Button variant='primary'>Xem chi tiết</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={4} className='mb-4'>
                <Card>.
                    <Card.Img variant="top" src="https://maytinhtientan.com/wp-content/uploads/2023/05/may-tinh-de-ban-ttc-01.jpg" />
                    <Card.Body>
                      <Card.Title>Sản phẩm 3</Card.Title>
                      <Card.Text>Ngon bổ rẻ</Card.Text>
                      <Card.Text>Giá: 11tr</Card.Text>
                      <Button variant='primary'>Xem chi tiết</Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
  )
}

export default Bai4
