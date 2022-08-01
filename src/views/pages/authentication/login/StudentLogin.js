import React from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane
} from "reactstrap"
import classnames from "classnames"
import loginImg from "../../../../assets/img/pages/login.png"
import "../../../../assets/scss/pages/authentication.scss"
import LoginAuth0 from "./LoginAuth0"
import LoginFirebase from "./LoginFirebase"
import StudentLoginJWT from "./StudentLoginJWT"
import ThemeNavbar from '../../../../layouts/components/navbar/Navbar'
import NavbarUser from '../../../../layouts/components/navbar/NavbarUser'
import LoginNavbar from "./LoginNavbar"
import { Height } from "@material-ui/icons"
import UappLogo from '../../../../assets/img/UappLogo.png'; 
import Lgimage from"../../../../assets/img/UappLogo.png"
import Footer from "../../../../layouts/components/footer/Footer"

class StudentLogin extends React.Component {
  state = {
    activeTab: "1"
  }


  
  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      })
    }
  }
  render() {
    return (
      
      <div className="top-style">
        
        


        <div className="" style={{ backgroundColor:"#fff"}}>
          <div className="responsive-top">
            <Row className="m-0 ">
              <Col lg="6" md="6" className=" px-1 py-0 hide-responsive-left-side">
                <div className="flexbox-container" style={{ backgroundColor: 'rgb(234, 246, 249)' }}>

                <div>
                <img src={UappLogo} className='w-50 mt-5 ms-5' />
                </div>
             
                </div>
              
              </Col>
              <Col lg="6" md="6" className="col-right">

              <div className="text-center hide-responsive-right-side">
              <img src={UappLogo} className='w-50' />
              </div>
                <div className="flexbox-container2" style={{ backgroundColor: "#fff" }} >

                
                  <Card className="rounded-0 mb-0 px-2 md-p" style={{ boxShadow: "none", width:"100%" }}>
                  <CardHeader className="pb-1">
                    <CardTitle>

                      <h4 className="mb-0 login-page-heading-style">Login</h4>
                    </CardTitle>
                  </CardHeader>
              
                  <Nav tabs className="px-2">


                  </Nav>

                  <TabContent activeTab={this.state.activeTab}>

                    <TabPane tabId="1">
                      <StudentLoginJWT />
                    </TabPane>

                    {/* <TabPane tabId="2">
                      <LoginFirebase />
                    </TabPane>
                    
                    <TabPane tabId="3">
                      <LoginAuth0 />
                    </TabPane> */}
                    

                  </TabContent>

              </Card>

               </div>
              </Col>


            </Row>
           </div>
          </div>
     
  
        <Footer></Footer>
       


      </div>
    )
  }
}
export default StudentLogin
