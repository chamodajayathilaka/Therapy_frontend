import React from 'react'
import { Button, Card } from 'react-bootstrap'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const img1 = new URL("../images/treatment/nopuzzel/IMG-4860.PNG", import.meta.url)
const img2 = new URL("../images/treatment/nopuzzel/IMG-4867.PNG", import.meta.url)
const img3 = new URL("../images/treatment/nopuzzel/IMG-4871.PNG", import.meta.url)
const img4 = new URL("../images/treatment/nopuzzel/IMG-4873.PNG", import.meta.url)
const img5 = new URL("../images/treatment/nopuzzel/IMG-4875.PNG", import.meta.url)
const img6 = new URL("../images/treatment/nopuzzel/IMG-4877.PNG", import.meta.url)
const img7 = new URL("../images/treatment/nopuzzel/IMG-4947.PNG", import.meta.url)
const img8 = new URL("../images/treatment/nopuzzel/IMG-4949.jpg", import.meta.url)
const img9 = new URL("../images/treatment/nopuzzel/IMG-4951.jpg", import.meta.url)
const img10 = new URL("../images/treatment/nopuzzel/IMG-4953.PNG", import.meta.url)
const img11 = new URL("../images/treatment/nopuzzel/IMG-4955.PNG", import.meta.url)
const img12 = new URL("../images/treatment/nopuzzel/IMG-4958.jpg", import.meta.url)
const img13 = new URL("../images/treatment/nopuzzel/IMG-4962.PNG", import.meta.url)
const img14 = new URL("../images/treatment/nopuzzel/IMG-4964.PNG", import.meta.url)
const img15 = new URL("../images/treatment/nopuzzel/IMG-4966.PNG", import.meta.url)


export default function Puzzel() {
  return (
    <div className='gallery'>
     <Col >
      {Array.from({ length: 1 }).map((_, idx) => (
      <Row>
      <Card style={{ width: '18%', margin:10 } }>
        <Card.Img variant="top" src={img1} />
        <Button variant="success" href="../images/treatment/nopuzzel/IMG-4861.PNG">Answer</Button>
      </Card>
      <Card style={{ width: '18%' ,margin:10 }}>
        <Card.Img variant="top" src={img2} />
        <Button variant="success" href="../images/treatment/nopuzzel/IMG-4867.PNG">Answer</Button>
      </Card>
      
      <Card style={{ width: '18%' ,margin:10 }}>
        <Card.Img variant="top" src={img3} />
        <Button variant="success" href="../images/treatment/nopuzzel/IMG-4869.PNG">Answer</Button>
      </Card>
      <Card style={{ width: '18%' ,margin:10 }}>
        <Card.Img variant="top" src={img4} />
        <Button variant="success" href="../images/treatment/nopuzzel/IMG-4869.PNG">Answer</Button>
      </Card>
      <Card style={{ width: '18%' ,margin:10}}>
        <Card.Img variant="top" src={img5} />
        <Button variant="success" href="../images/treatment/nopuzzel/IMG-4869.PNG">Answer</Button>
      </Card>
      </Row>
      ))}
    </Col>
    <Col >
      {Array.from({ length: 1 }).map((_, idx) => (
      <Row>
      <Card style={{ width: '18%' ,margin:10  }}>
        <Card.Img variant="top" src={img6} />
        <Button variant="success" href="../images/treatment/nopuzzel/IMG-4861.PNG">Answer</Button>
      </Card>
      <Card style={{ width: '18%' ,margin:10 }}>
        <Card.Img variant="top" src={img7} />
        <Button variant="success" href="../images/treatment/nopuzzel/IMG-4867.PNG">Answer</Button>
      </Card>
      
      <Card style={{ width: '18%' ,margin:10 }}>
        <Card.Img variant="top" src={img8} />
        <Button variant="success" href="../images/treatment/nopuzzel/IMG-4869.PNG">Answer</Button>
      </Card>
      <Card style={{ width: '18%' ,margin:10 }}>
        <Card.Img variant="top" src={img9} />
        <Button variant="success" href="../images/treatment/nopuzzel/IMG-4869.PNG">Answer</Button>
      </Card>
      <Card style={{ width: '18%' ,margin:10 }}>
        <Card.Img variant="top" src={img10} />
        <Button variant="success" href="../images/treatment/nopuzzel/IMG-4869.PNG">Answer</Button>
      </Card>
      </Row>
      ))}
    </Col>
    <Col >
      {Array.from({ length: 1 }).map((_, idx) => (
      <Row>
      <Card style={{width: '18%' ,margin:10 }}>
        <Card.Img variant="top" src={img11} />
        <Button variant="success" href="../images/treatment/nopuzzel/IMG-4861.PNG">Answer</Button>
      </Card>
      <Card style={{ width: '18%' ,margin:10  }}>
        <Card.Img variant="top" src={img12} />
        <Button variant="success" href="../images/treatment/nopuzzel/IMG-4867.PNG">Answer</Button>
      </Card>
      
      <Card style={{ width: '18%' ,margin:10  }}>
        <Card.Img variant="top" src={img13} />
        <Button variant="success" href="../images/treatment/nopuzzel/IMG-4869.PNG">Answer</Button>
      </Card>
      <Card style={{ width: '18%' ,margin:10  }}>
        <Card.Img variant="top" src={img14} />
        <Button variant="success" href="../images/treatment/nopuzzel/IMG-4869.PNG">Answer</Button>
      </Card>
      <Card style={{ width: '18%' ,margin:10  }}>
        <Card.Img variant="top" src={img15} />
        <Button variant="success" href="../images/treatment/nopuzzel/IMG-4869.PNG">Answer</Button>
      </Card>
      </Row>
      ))}
    </Col>
    
    </div>
  )
}
