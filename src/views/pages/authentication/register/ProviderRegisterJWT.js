import React from "react"
import { Form, FormGroup, Input, Label, Button } from "reactstrap"
import Checkbox from "../../../../components/core/checkbox/CheckboxesVuexy"
import { Check } from "react-feather"
import { connect } from "react-redux"
import { signupWithJWT } from "../../../../redux/actions/auth/registerActions"
import { history } from "../../../../history"
import axios from "axios"
import { rootUrl } from "../../../ReusableFunction/Api/ApiFunc"
import { store } from "react-notifications-component"
import { Link } from "react-router-dom"

class ProviderRegisterJWT extends React.Component {
  state = {
    email: "",
    password: "",
    name: "",
    phone:"",
    confirmPass: "",
    confirmPassError: "",
  }

  handleConfirmPassword = (e) => {

    if(this.state.password !== e.target.value){
      this.setState({confirmPassError: "Password Doesn't Match"});
    }else{
      this.setState({confirmPass: e.target.value, confirmPassError: "Password Matched!"});
    }
  }

  handleRegister = e => {
    e.preventDefault()
    // this.props.signupWithJWT(
    //   this.state.email,
    //   this.state.password,
    //   this.state.name
    // )
    if(this.state.confirmPass){
      axios
      .post(`${rootUrl}/Account/CreateUser`, {
        Name: this.state.name,
        Email: this.state.email,
        PhoneNumber: this.state.phone,
        Password: this.state.confirmPass,
      })
      .then(response => {

        if(response.data){
       
          // loggedInUser = response.data.user

          // localStorage.setItem("token", response.data.token)

         
          // history.push("/")
        }

      })
      .catch()
    }


  }
  

  render() {
    return (
      <Form action="/" onSubmit={this.handleRegister}>
        <FormGroup className="form-label-group">
          <Input
            type="text"
            placeholder="Name"
            required
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
          />
          <Label>Name</Label>
        </FormGroup>
        <FormGroup className="form-label-group">
          <Input
            type="email"
            placeholder="Email"
            required
            value={this.state.email}
            onChange={e => this.setState({ email: e.target.value })}
          />
          <Label>Email</Label>
        </FormGroup>
        <FormGroup className="form-label-group">
          <Input
            type="number"
            placeholder="Phone Number"
            required
            value={this.state.phone}
            onChange={e => this.setState({ phone: e.target.value })}
          />
          <Label>Phone</Label>
        </FormGroup>
        <FormGroup className="form-label-group">
          <Input
            type="password"
            placeholder="Password"
            required
            value={this.state.password}
            onChange={e => this.setState({ password: e.target.value })}
          />
          <Label>Password</Label>
        </FormGroup>
        <FormGroup className="form-label-group">
          <Input
            type="password"
            placeholder="Confirm Password"
            required
            // value={this.state.confirmPass}
            onBlur={e => this.handleConfirmPassword(e)}
          />
          <Label>Confirm Password</Label>
          {this.state.confirmPassError && <span className={`${this.state.confirmPassError == 'Password Matched!' ? 'text-success' : 'text-danger'}`}>{this.state.confirmPassError}</span>}
        </FormGroup>
        <FormGroup>
          <Checkbox
            color="primary"
            icon={<Check className="vx-icon" size={16} />}
            label=" I accept the terms & conditions."
            // defaultChecked={true}
          />
        </FormGroup>
        <div className="d-flex justify-content-between">

        <Button.Ripple className="uapp-submit-btn" color="primary" type="submit">
            Register
          </Button.Ripple>

          <Link to="/pages/providerLogin">Already Have an Account? Login</Link>
          
        </div>
      </Form>
    )
  }
}
const mapStateToProps = state => {
  return {
    values: state.auth.register
  }
}
export default connect(mapStateToProps, { signupWithJWT })(ProviderRegisterJWT)
