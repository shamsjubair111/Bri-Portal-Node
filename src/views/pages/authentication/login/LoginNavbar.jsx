import React from 'react'
import { useHistory } from 'react-router';
import { Col, Row, Nav, Navbar, NavItem, NavLink, NavbarBrand, NavbarToggler, UncontrolledDropdown, DropdownToggle, DropdownItem, NavbarText, Collapse, DropdownMenu} from 'reactstrap';
import Uapp from '../../../../assets/img/UappLogo.png'
const LoginNavbar = () => {

  const history = useHistory();
  const navigate = (url) => {
    history.push(url);
  }


  return (
    <div className="uapp-user-nav">

 {/*       style={{ width: "100%", zIndex: "1200", position: "absolute", top: "0" }}*/}

      <Navbar expand="md" className="navbar navbar-expand-lg shadow-sm fixed-top" style={{background:"#fff"}} >
            <NavbarBrand className="login-nav-logo">
              <img src={Uapp} />
            </NavbarBrand>
         
              <Nav className="ml-auto" navbar>

                <UncontrolledDropdown inNavbar nav>
                  <DropdownToggle caret nav>
                    <i class="fas fa-user"></i>
                  </DropdownToggle> 

                  <DropdownMenu right>
                    <DropdownItem className="d-block w-100 login-nav-dropdown-item" onClick={()=>navigate('/pages/studentLogin')}>
                      Student
                    </DropdownItem>
                    <DropdownItem className="d-block w-100 login-nav-dropdown-item" onClick={()=>navigate('/pages/consultantLogin')}>
                      Consultant
                    </DropdownItem>
                    <DropdownItem className="d-block w-100 login-nav-dropdown-item" onClick={()=>navigate('/pages/providerLogin')}>
                      Provider
                    </DropdownItem>

                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
          </Navbar>






        </div>


    )
}

export default LoginNavbar
