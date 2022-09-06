import React from 'react'
import './Loginlogo.css'

function LoginUppcl(props) {
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
                    <input type="text" id="form2Example11" className="form-control"
                      placeholder="Phone number " />
                    
                  </div>

                  <div className="form-outline mb-4 d-flex align-items-center ">
                    <label className="form-label px-3" htmlFor="form2Example22">Password</label>
                    <input type="password" id="form2Example22" className="form-control" />
                    
                  </div>

                  <div className="text-center pt-1 mb-5 pb-1">
                    <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button">Log
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
