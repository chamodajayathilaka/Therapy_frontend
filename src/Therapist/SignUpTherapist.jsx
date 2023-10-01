import React, { useState } from 'react'
import '../components/style.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function SignUpTherapist() {

  let navigate=useNavigate()

    const[therapist, setTherapist]=useState(
        {
            name:"",
            Position:"",
            gender:"",
            mobile:"",
            email:"",
            
        }
    );
    const{name,position,male,female,mobile,email}=therapist;

    const onInputChange=(e)=>{
        setTherapist({...therapist,[e.target.id]:e.target.value});

    };

    const onSubmit=async(e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8080/api/v1/therapist/saveTherapist",therapist)
        navigate("/");
    }
  return (
    <section className='backlogin'> 
    <div className="color-overlay d-flex
      justify-content-center align-items-center">
        <div className="form">
        <form onSubmit={(e)=>onSubmit(e)}>
            <div className="form-body">
                <div> 
                    <h3>Edit Therapist details</h3>
                </div>
                <div className="username">
                    <label className="form__label" for="name">Name </label>
                    <input className="form__input" type="text" value={name} onChange = {(e) => onInputChange(e)} id="name" placeholder="Name"/>
                </div>
                <div className="position">
                    <label className="form__label" for="position">Position</label>
                    <input className="form__input" type="position"  id="position" value={position} onChange = {(e) => onInputChange(e)} placeholder="Position"/>
                </div>
 
                <fieldset class="form-group">
                    <div class="row">
                    <legend class="col-form-label col-sm-2 pt-0">Gender</legend>
                    <div class="col-sm-10" >
                        <div class="form-check">
                        <input class="form-check-input" type="radio" name="gender" id="gender"value={male} onChange = {(e) => onInputChange(e)}/>
                        <label class="form-check-label" for="gridRadios1" >
                            Male
                        </label>
                        </div>
                        <div class="form-check">
                        <input class="form-check-input" type="radio" name="gender" id="gender" value={female} onChange = {(e) => onInputChange(e)}/>
                        <label class="form-check-label" for="gridRadios2">
                            Female
                        </label>
                        </div>
                    </div>
                    </div>
                </fieldset>

                <div className="mobile">
                    <label className="form__label" for="mobile">Contact Number </label>
                    <input  type="text" id="mobile" className="form__input" value={mobile} onChange = {(e) => onInputChange(e)} placeholder="mobile"/>
                    
                    
                </div>

                <div className="email">
                    <label className="form__label" for="email">Email </label>
                    <input  className="form__input" type="email" id="email"  value={email} onChange = {(e) => onInputChange(e)} placeholder="Email"/>
                </div>  

                
               

            </div>
           
            <div class="footer">
            <button type="submit" class="btn btn-primary" >Register</button>
            
            </div>
            </form>
        </div>
        </div>
 </section> 
        
  );
  
}
