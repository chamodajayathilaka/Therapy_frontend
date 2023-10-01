import React, { useEffect, useState } from 'react'
//import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
//import Carousel from 'react-bootstrap/Carousel';

import axios from "axios";

import '../components/style.css';

//const wallpaper = new URL("../images/wallpaper.jpg", import.meta.url)
//const wallpaper2 = new URL("../images/wallpaper2.jpg", import.meta.url)
//const wallpaper3= new URL("../images/wallpaper3.jpg", import.meta.url)
//const bg= new URL("../images/pexels-magda-ehlers-985266.jpg", import.meta.url)

export default function HomeT() {
    const [therapists,setTherapists] = useState([])

    useEffect(()=>{
      loadTherapist();
    },[]
    );
    const loadTherapist=async()=>{
      const result = await axios.get("http://localhost:8080/api/v1/therapist/getAllTherapist");
      setTherapists(result.data);
    };  
  return ( 
    <div>
      <div>
        <h1>This is therapist details</h1>
      </div>
    <div className='container'>
      <div className='py-4'>
        <table className="table border shadow">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Position </th>
            <th scope="col">Gender</th>
            <th scope="col">Mobile</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
           
          </tr>
        </thead>
        <tbody>
          {
            
            therapists.map((therapist,index)=>(   
            <tr>
            <th scope="row" key={index}>{index + 1}</th> 
            <td>{therapist.name}</td>
            <td>{therapist.position}</td>
            <td>{therapist.gender}</td>
            <td>{therapist.mobile}</td>
            <td>{therapist.email}</td>
            <td>
              
              <Button className='btn btn-denger mx-2'herf="../Therapist/DeleteTherapist">Delete</Button>
              <Button className='btn btn-primary mx-2' herf="../Therapist/UpdateTherapist">Edit</Button>
            </td>
          </tr>
           )) 
          }
        </tbody>
      </table>

      </div>
    </div>
    <div>
    <Button variant="secondary" href="../Therapist/SignUpTherapist">Add</Button>
    
    </div>
    </div>
  )
}
/*
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
*/