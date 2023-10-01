import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';

import '../components/style.css';

const wallpaper = new URL("../images/wallpaper.jpg", import.meta.url)
const wallpaper2 = new URL("../images/wallpaper2.jpg", import.meta.url)
const wallpaper3= new URL("../images/wallpaper3.jpg", import.meta.url)
//const bg= new URL("../images/pexels-magda-ehlers-985266.jpg", import.meta.url)

export default function Homepage() {
  return (
    <div>
      <div>
        <Carousel>
      <Carousel.Item>

        <img
          className="d-inline-block  w-100"
          src={wallpaper}
          alt="First slide"
          height={500}
         

        />
        <Carousel.Caption>
          <h1>Welcome !</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-inline-block  w-100"
          src={wallpaper2}
          alt="Second slide"
          height={500}
        />

        <Carousel.Caption>
          <h1>Welcome !</h1>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-inline-block  w-100"
          src={wallpaper3}
          alt="Third slide"
          height={500}
        />
        

        <Carousel.Caption>
        <h1>Welcome !</h1>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
  </div>

      
      <div>
      <section  >
      { ['Secondary'].map ((variant) => ( 
      <Card bg={variant.toLowerCase()}
            key={variant}
            text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
            
            className="text-center " >
       <Card.Body className='image-bg'>
            <Card.Title> <h2 className="text-center " text color='white'>Self-mental Therapy</h2> </Card.Title>
              <Card.Text >
                <p>
                  In this therapy program for mental disorder as depression that you complete on your own or if need any counseling 
                from a doctor can be contacted through the system.The program is based on psychotherapy 
                treatment called cognitive behavioural therapy. The program is designed to teach you techniques that can help 
                you monitor, manage and improve your mood and mental health.
                If you have an emergency please seek immediate help and call an emergency phone line. The content presented in 
                this program is for informational purposes only and is not a substitute for services offered by professional 
                medical and healthcare providers.
                </p>
              </Card.Text>
          </Card.Body>
          
      </Card>
      ))}
      </section>
      </div>

      <div className="color-overlay d-flex
            justify-content-center align-items-center">
        { ['Light'].map ((variant) => (
          <Card
            bg={variant.toLowerCase()}
            key={variant}
            text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
            
            className="text-center " >
          <Card.Body className='image-bg2'>
          <Card.Title>Personality Test</Card.Title>
          <Card.Text>
            Our personality test can help you find out 
          your personality status. Answering these simple 
          questions will give you a description of who you
          are and guide to get best therapy by the system. please
          go through the questionnaire !  
          </Card.Text>
          <Button variant="warning" href="../quizcomponent/Quiz">Test</Button>{' '}
           
          </Card.Body>
          
          </Card>
          ))
        }
      </div>

      
    </div>
  )
}




