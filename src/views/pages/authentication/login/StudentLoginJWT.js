import React from "react"
import { Link } from "react-router-dom"
import { CardBody, FormGroup, Form, Input, Button, Label } from "reactstrap"
import Checkbox from "../../../../components/core/checkbox/CheckboxesVuexy"
import { Mail, Lock, Check } from "react-feather"
// import { loginWithJWT } from "../../../../redux/actions/auth/loginActions"
import { connect } from "react-redux"
import { history } from "../../../../history"
import axios from "axios"

import { rootUrl } from "../../../ReusableFunction/Api/ApiFunc"

class StudentLoginJWT extends React.Component {
  state = {
    email: "",
    password: "",
    remember: false,
    error: "",
    emailerror: "",
    passwordError: "",
  }

  handleLogin = e => {
    e.preventDefault()
    var loggedInUser = {id: 0, email: '', name: '', image: 'gbhgyhgv', loggedInWith: 'jwt'}
    axios
      .post(`${rootUrl}/Account/Login`, {
        Email: this.state.email,
        Password: this.state.password
      })
      .then(response => {
        if (response.data) {
          if(response.data.isSuccess == true){
            this.setState({error: ''});
            localStorage.setItem('token',response.data.message);
            const AuthStr = 'Bearer ' + response.data.message;
            history.push("/")
            window.location.reload();
            // axios.get(`${rootUrl}/Account/GetCurrentUser`,{ 'headers': { 'Authorization': AuthStr } })
            // .then(res => {
          
            //   loggedInUser.name = res.data.fullName;
            //   loggedInUser.id = res.data.id;
            //   loggedInUser.email = res.data.email;
            //   // loggedInUser = JSON.stringify(res.data);
            //   dispatch({
            //             type: "LOGIN_WITH_JWT",
            //             payload: { loggedInUser, loggedInWith: "jwt" }
            //           })
            // })
             


          }else{
            // alert('email not valid')
            this.setState({error: 'Email or Password Is Not Valid'})
            if(response.data.message === 'Wrong Creadentials'){
              this.setState({emailerror: 'Invalid Email', passwordError: ''})
            }else if(response.data.message === 'Wrong Password'){
              this.setState({passwordError: 'Wrong Password', emailerror: ''})
            }else{
              this.setState({error: 'Something Went Wrong! please try again', emailerror: '', passwordError: ''})
            }
            
          }

          
        }
      })
      .catch()
  }
  render() {
    return (
      <React.Fragment>
        <CardBody className="pt-1">
          <Form action="/" onSubmit={this.handleLogin} className='mb-2'>
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
              <Label style={{ fontSize: "14px", top:"-29px" }}>Email</Label>
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
              <Label style={{ fontSize: "14px", top: "-29px" }}>Password</Label>
              {this.state.passwordError && <span className="text-danger">{this.state.passwordError}</span>}
            </FormGroup>
            <FormGroup className="d-flex justify-content-between align-items-center">
              <Checkbox
                color="primary"
                icon={<Check className="vx-icon" size={16} />}
                label="Remember me"
                defaultChecked={false}
                onChange={this.handleRemember}
                
              />
              <div className="float-right">
                <Link to="/pages/forgot-password" style={{textDecoration: 'none'}}>Forgot Password?</Link>
              </div>
            </FormGroup>
            <div className="d-flex justify-content-between">

            <Button.Ripple className="uapp-submit-btn" color="primary" type="submit">
                Login
              </Button.Ripple>
             
            </div>
           
          </Form>
          <br/>

            <button className="btn btn-outline-primary me-1"><i class="fab fa-google"></i></button>

            <button className="btn btn-outline-primary mx-1"><i class="fab fa-apple"></i></button>

            <button className="btn btn-outline-primary ms-1"><i class="fab fa-facebook"></i></button>

            <br/>
            <br/>

            <Link to='/pages/studentRegister' style={{textDecoration: 'none'}}>Register as Student</Link>

            <br/>
           

            <Link to='/pages/consultantRegister' style={{textDecoration: 'none'}}>Register as Consultant</Link>

            <br/>
           

            <Link to='/pages/providerRegister' style={{textDecoration: 'none'}}>Register as Provider</Link>

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
export default connect(mapStateToProps)(StudentLoginJWT)
