import React from 'react'
import { Button } from 'react-bootstrap'

import logo from '../images/logo.jpg';

export default function Interface() {
  return (
    <div>
    <div> 
      <img 
              alt="logo"
              src={logo}
              width="59"
              height="50"
              className="d-inline-block align-top"
            />{' '}
            BetterMind
     </div>

     <div>
     <Button variant="primary" href="../components/Login">Login </Button > {' '}
     <Button variant="primary" href="../components/SignUp">Get Started</Button > {' '}
     </div>
    </div>
  )
}
//href="../components/Interface"
