import React from "react"
import { Link } from "react-router-dom"
import { CardBody, FormGroup, Form, Input, Button, Label } from "reactstrap"
import Checkbox from "../../../../components/core/checkbox/CheckboxesVuexy"
import { Mail, Lock, Check } from "react-feather"
// import { loginWithJWT } from "../../../../redux/actions/auth/loginActions"
import { connect } from "react-redux"
import { history } from "../../../../history"
import axios from "axios"

import { rootUrl } from "../../../../constants/constants"
import get from "../../../../helpers/get"
import { fontSize } from "@mui/system"

class Login extends React.Component {
  state = {
    email: "",
    password: "",
    remember: false,
    error: "",
    emailerror: "",
    passwordError: "",
    canNavigate: true
  }

  handleLogin = e => {
    e.preventDefault()
    var loggedInUser = { id: 0, email: '', name: '', image: 'gbhgyhgv', loggedInWith: 'jwt' }
    axios
      .post(`${rootUrl}Account/Login`, {
        email: this.state.email,
        password: this.state.password
      })
      .then(response => {
     
        if (response?.status == 200) {
          if (response?.data?.isSuccess == true) {
            this.setState({ error: '' });
            localStorage.setItem('token', 'Bearer ' + response?.data?.message);
            localStorage.setItem('permissions', JSON.stringify(response?.data?.permissions));
            const AuthStr = 'Bearer ' + response?.data?.message;
            axios.get(`${rootUrl}Account/GetCurrentUser`, {

              headers: {
                'authorization': AuthStr
              }
            })
              .then(res => {
                console.log(res);
                
                if (res?.status == 200) {
                  if(res?.data?.isActive == true){
                    localStorage.setItem('current_user', JSON.stringify(res?.data))
                  localStorage.setItem('userType', res?.data?.userTypeId);
                  localStorage.setItem('referenceId', res?.data?.referenceId);
                  window.location.reload();
                  }
                  else{
                    this.setState({ error: 'User is blocked', canNavigate: false})

                  }
                }

              })


            history.push("/")





          }
          else {
            // alert('email not valid')
            this.setState({ error: response?.data?.message })
            // if(response.data.message === 'Wrong Creadentials'){
            //   this.setState({emailerror: 'Invalid Email', passwordError: ''})
            // }
            // else if(response.data.message === 'Wrong Password'){
            //   this.setState({passwordError: 'Wrong Password', emailerror: ''})
            // }
            // else{
            //   this.setState({error: 'Something Went Wrong! please try again', emailerror: '', passwordError: ''})
            // }

          }


        }
      })
      .catch()
  }
  render() {
    return (
      <React.Fragment>
        <CardBody className="pt-1">
          <Form action="/" onSubmit={this.handleLogin} className='' style={{ marginTop: '30px' }}>
            <FormGroup className="form-label-group position-relative has-icon-left" >
              <Input
                type="email"
                placeholder="Email"
                value={this.state.email}
                onChange={e => this.setState({ email: e.target.value, emailerror: '' })}
                style={{ height: "calc(1.5em + 1.3rem + 2px)" }}
                required
              />
              <div className="form-control-position">

              </div>
              <Label style={{ fontSize: "18px", fontWeight: '600', top: "-35px" }} >Email</Label>
              {this.state.emailerror && <span className="text-danger">{this.state.emailerror}</span>}
            </FormGroup>
            <FormGroup className="form-label-group position-relative has-icon-left" style={{ marginTop: "30px" }}>
              <Input
                type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={e => this.setState({ password: e.target.value, passwordError: '' })}
                style={{ height: "calc(1.5em + 1.3rem + 2px)" }}
                required
              />
              <div className="form-control-position">

              </div>
              <Label style={{ fontSize: "18px", fontWeight: '600', top: "-32px" }}>Password</Label>
              {this.state.passwordError && <span className="text-danger">{this.state.passwordError}</span>}
            </FormGroup>
            <div className="text-danger">
              <span>{this.state.error}</span>
            </div>
            <div className="row d-flex justify-content-space-between">

              <div className="col-md-6">

             <div >
             <button className="login-btn-style"  type="submit">
                 Login
                </button>
             </div>

              </div>
              
              <div className="col-md-6">

              

              <div className="mt-3 float-right">
                <Link to="/pages/forgot-password" style={{ textDecoration: 'none', color: '#db2c2a', fontSize: '18px', fontWeight: '500' }}>Forgot Password?</Link>
              </div>

             

              </div>

            </div>
           


          </Form>
          <br/>

          <span style={{fontSize: '16px', fontWeight:'500'}}>Or Login With</span>

         

          <div className="d-flex mt-4">

            <div className="login-page-icon-style1 me-1">
              <i className="fab fa-google"></i>
            </div>

            <div className="login-page-icon-style2 mx-1">
              <i className="fab fa-apple"></i>
            </div>

            <div className="login-page-icon-style3 ms-1">
              <i className="fab fa-facebook"></i>
            </div>

          </div>
          <br/>
          <br/>
          <span className="" style={{color:'#7f7f7f', fontSize:'16px', fontWeight:'500'}}>Don't have any account yet?</span>

          <br/>
          <span className="" style={{color:'#7f7f7f', fontSize:'16px', fontWeight:'500'}}>Register as</span>

          <br/>
          <br/>



          <div className="d-flex">
          <Link to='/studentRegister' style={{color:'rgb(30 152 176)', fontSize: '16px', marginRight: '20px', fontWeight: '600'  }}>Student</Link>

          <br />


          <Link to='/consultantRegister' style={{ color:'rgb(30 152 176)', fontSize: '16px', fontWeight: '600', marginRight: '20px', textDecoration: 'none'}}> Consultant</Link>

          <br />


          <Link to='/providerRegister' style={{ color:'rgb(30 152 176)', fontSize: '16px', fontWeight: '600', textDecoration: 'none'}}> Provider</Link>
          </div>

          <br/>
          
          
          <div className="d-flex justify-content-between">
            <div className="" style={{color: '#707070', fontSize: '13px', fontWeight: '400'}}>
              Privacy policy
            </div>

            <div className="" style={{color: '#1E98B0', fontSize: '13px', fontWeight: '400'}}>
            UAPP © SMS Higher Education Group.
            </div>
          </div>

        </CardBody>
      </React.Fragment>
    )
  }
}
const mapStateToProps = state => {
  return {
    values: state.auth.login
  }
}
export default connect(mapStateToProps)(Login)
