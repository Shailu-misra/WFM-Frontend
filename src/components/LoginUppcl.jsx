import React,{useRef} from 'react'
import './Loginlogo.css'
import axios from "axios";
import { useNavigate} from 'react-router-dom';


function LoginUppcl(props) {
 
  const phoneRef = useRef(null);
  const passwordRef = useRef(null);

  let navigate = useNavigate()
  const API_URL = "http://localhost:8080/users/login"
 
  const login =  async (e)=>{
      e.preventDefault();
      let phoneNumber = phoneRef.current.value
      let password = passwordRef.current.value

      let response = await axios.post(API_URL, {
          phoneNumber,
          password
      }).catch((res)=> {
          //alert user about password incorrrect or user not found
          alert(res.response.data.message)
      })

      if(response && response.status === 200) {
          alert("User "+ response.data.name +" logged in")
          console.log(response.data)
          localStorage.setItem('UPPCL_USER', JSON.stringify(response.data));
          navigate("/")
      }
  }
  const Checknumber = (e)=> {
    let phone = phoneRef.current.value
    console.log(phone)
    if(phone<999999999 && phone>9999999999)
     alert("mobile number is wrong  or invalid")
  }


  return (
    <section className="h-100 gradient-form bg-dark " id="loginsec" >
  <div className="container  py-5 h-150">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-xl-10">
        <div className="card rounded-3 text-black">
          <div className="row g-0">
            <div className="col-lg-6">
              <div className="card-body p-md-5 mx-md-4">

                <div className="text-center" id="back1">
                  
                 
                </div>

                <form>
                  <p><strong>Login to your account</strong></p>

                  <div className="form-outline mb-4 d-flex align-items-center">
                  <label className="form-label px-3" htmlFor="form2Example11">Phone No.</label>
                    <input type="tel" ref={phoneRef} pattern="[0-9]{10}" name="phoneno"id="form2Example11" className="form-control" onChange={Checknumber}
                      placeholder="Phone number without 0/+91" required/>
                     
                  </div>

                  <div className="form-outline mb-4 d-flex align-items-center ">
                    <label className="form-label px-3" htmlFor="form2Example22">Password</label>
                    <input type="password" ref={passwordRef} name="password=" id="form2Example22" className="form-control" />
                    
                  </div>
                  <div class="form-check d-flex align-items-center">
                     <input class="form-check-input px-2" type="checkbox" value="" id="flexCheck" />
                     <label class="form-check-label px-3" for="flexCheckDefault"> Check For Lineman Login
                        
                     </label>
                  </div>

                  <div className="text-center pt-1 mb-5 pb-1">
                    <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" onClick={login} type="button">Log
                      in</button>
                    
                  </div>

                  <div className="d-flex align-items-center justify-content-center pb-4">
                    <p className="mb-0 me-2">Dont have an account?</p>
                    <button type="button" className="btn btn-outline-danger">Generate Request</button>
                  </div>

                </form>

              </div>
            </div>
            <div className="col-lg-6 d-flex align-items-center gradient-custom-2" id="s2">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default LoginUppcl