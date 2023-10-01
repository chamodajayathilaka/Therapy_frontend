import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import '../App.css';

function Login() {
  return (
    <section className='backlogin'>
   

    <Form className='rounded p-4 p-5m-3'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      
      
      <Button variant="primary" type="submit" href="../pages/Therapist_Home">
        Log In 
      </Button>
      <Button variant="primary" type="submit" href="../Therapist/HomeT">
        Log In 
      </Button>
       
    </Form>
    
    </section>
  );
}

export default Login;
