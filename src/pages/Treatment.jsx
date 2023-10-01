import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const meditaion = new URL("../images/meditation.jpg", import.meta.url)
const song = new URL("../images/songs.jpg", import.meta.url)
const film = new URL("../images/films.jpg", import.meta.url)
const Art = new URL("../images/Art2.jpg", import.meta.url)
const puzzle = new URL("../images/puzzle2.jpg", import.meta.url)

function Treatment() {
  return (
    <div>
    <CardGroup>
      
      <Card>
        <Card.Img variant="top" src={meditaion} />
        <Card.Body>
          <Card.Title>Meditation</Card.Title>
          <Card.Text>
            If you want to relax your mind meditation is the best for it.It is good therapy for your mind
          </Card.Text>
        </Card.Body>
        <Button variant="success">Meditations</Button>
      </Card>
      <Card>
        <Card.Img variant="top" src={song} />
        <Card.Body>
          <Card.Title>Music</Card.Title>
          <Card.Text>
          If you want to relax your mind you can listen to music.It is good therapy for your mind {' '}
          </Card.Text>
        </Card.Body>
        <Button variant="warning" >Music</Button>
      </Card>
      <Card>
        <Card.Img variant="top" src={film} />
        <Card.Body>
          <Card.Title>Relaxing Movie</Card.Title>
          <Card.Text>
          If you want to relax your mind you can watch good relaxing films of tv series. i you have more 
          than two hours to spare, forgot your problems and enjoy the movies. It is good therapy for your mind
          </Card.Text>
        </Card.Body>
        <Button variant="primary" /*href="../therapy/Film"*/>Films</Button>
      </Card>
      
      <div>
      <Col >
      {Array.from({ length: 1 }).map((_, idx) => (
      <Row>
        <Card style={{ width: '50%' }}>
          <Card.Img variant="top" src={Art} />
          <Card.Body>
          <Card.Title>Art Therapy</Card.Title>
          <Card.Text>
            If you want to relax your mind meditation is the best for it.It is good therapy for your mind
          </Card.Text>
          </Card.Body>
          <Button variant="secondary" >Art Therapies</Button>
        </Card>
        <Card style={{ width: '50%' }}>
          <Card.Img variant="top" src={puzzle} />
          <Card.Body>
          <Card.Title>Puzzel</Card.Title>
          <Card.Text>
            If you want to relax your mind meditation is the best for it.It is good therapy for your mind
          </Card.Text>
          </Card.Body>
          <Button variant="info" href="../therapy/Puzzel" >Puzzels</Button>
         </Card>
        
         </Row>
      ))}
    </Col>
    </div>
    
    </CardGroup>
    </div>
  );
}

export default Treatment;


 