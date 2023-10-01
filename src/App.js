import React from 'react';
import './App.css';
import {Routes,Route} from "react-router-dom";


import Navigation from './components/Navigation';
import Homepage from './pages/Homepage';

import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Treatment from './pages/Treatment';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Quiz from './quizcomponent/Quiz';
import Footer from './components/Footer';
import Film from './therapy/Film';
import SignUpTherapist from './Therapist/SignUpTherapist';
import HomeT from './Therapist/HomeT';

import DeleteTherapist from './Therapist/DeleteTherapist';
import UpdateTherapist from './Therapist/UpdateTherapist';

import Counciling from './pages/Counciling';
import Puzzel from './therapy/Puzzel';


function App() {
  return (
    <div className="App">
    <Navigation/>
   

<Routes>
  <Route path="/" element = {<Homepage/>} />  
  <Route path="/pages/Treatment" element ={<Treatment/>}/>
  <Route path="/pages/AboutUs" element= {<AboutUs/>}/>
  <Route path="/pages/Contact"element= {<Contact/>}/>
  <Route path="/components/Login" element= {<Login/>}/>
  <Route path="/components/SignUp"element= {<SignUp/>}/>
  <Route path="/quizcomponent/Quiz"element= {<Quiz/>}/>
  <Route path="/therapy/Film"element= {<Film/>}/>
  <Route path="/therapy/Puzzel"element= {<Puzzel/>}/>
  <Route path="/Therapist/HomeT"element= {<HomeT/>}/>
  <Route path="/Therapist/signUPTherapist"element= {<SignUpTherapist/>}/>
  <Route path="/Therapist/UpdateTherapist"element= {<UpdateTherapist/>}/>
  <Route path="/Therapist/DeleteTherapist"element= {<DeleteTherapist/>}/>
  <Route path="/components/Interface"element= {<Interface/>}/>
  <Route path="/pages/Councilling"element= {<Counciling/>}/>
  <Route path="/pages/Treatment"element= {<Treatment/>}/>
  
 </Routes>
 

 <Footer/>

</div>
  );
}

export default App;
