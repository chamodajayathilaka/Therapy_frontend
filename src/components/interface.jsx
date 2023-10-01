import React,{useState} from 'react';
import './style.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function SignUp() {

    let navigate=useNavigate()

    const[user, setUser]=useState(
        {
            firstname:"",
            lastname:"",
            dateOfBirth:"",
            gender:"",
            mobile:"",
            email:"",
            password:"",
            emergencyContactName:"",
            emergencyContactNumber:""
        }
    );
    const{firstname,lastname,dateOfBirth,male,female,mobile,email,password,emergencyContactName,emergencyContactNumber}=user;

    const onInputChange=(e)=>{
        setUser({...user,[e.target.id]:e.target.value});

    };

    const onSubmit=async(e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8080/api/v1/user/saveUser",user)
        navigate("/");
    }

    return(
    <section className='backlogin'> 
    <div className="color-overlay d-flex
      justify-content-center align-items-center">
        <div className="form">
        <form onSubmit={(e)=>onSubmit(e)}>
            <div className="form-body">
                
                <div className="username">
                    <label className="form__label" for="firstname">Full Name </label>
                    <input className="form__input" type="text" value={firstname} onChange = {(e) => onInputChange(e)} id="firstname" placeholder="First Name"/>
                </div>
                <div className="lastname">
                    <label className="form__label" for="lastname">Last Name </label>
                    <input  type="text" name="" id="lastname" value={lastname}  className="form__input" onChange = {(e) => onInputChange(e)} placeholder="LastName"/>
                </div> 
                <div className="dateOfBirth"> 
                    <label className="form__label" for="dateOfBirth">Date of Birth </label>
                    <input  type="date" id="dateOfBirth" className="form__input" value={dateOfBirth} onChange = {(e) => onInputChange(e)} placeholder="dateOfBirte"/>
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

                <div className="password">
                    <label className="form__label" for="password">Password </label>
                    <input className="form__input" type="password"  id="password" value={password} onChange = {(e) => onInputChange(e)} placeholder="Password"/>
                </div>
                
                <div className="emergencyContactName">
                    <label className="form__label" for="emergencyContactName">Emergency Contact Peason </label>
                    <input className="form__input" type="text" id="emergencyContactName" value={emergencyContactName} onChange = {(e) => onInputChange(e)} placeholder="Name"/>
                </div>

                <div className="emergencyContactNumber">
                    <label className="form__label" for="mobile">Emergency Contact Number </label>
                    <input className="form__input" type="text" id="emergencyContactNumber"  value={emergencyContactNumber} onChange = {(e) => onInputChange(e)} placeholder="ContactNumber"/>
                    
                    
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

export default SignUp;
