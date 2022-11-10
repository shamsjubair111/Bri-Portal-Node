import React, { useEffect } from "react";

import "./components/core/rippleButton/RippleButton"
import Router from "./Router"
import "react-perfect-scrollbar/dist/css/styles.css"
import "prismjs/themes/prism-tomorrow.css"

import "./components/core/rippleButton/RippleButton";

import "react-perfect-scrollbar/dist/css/styles.css";
import "prismjs/themes/prism-tomorrow.css";

import { useDispatch } from 'react-redux';
import { StoreRoleData } from './redux/actions/SMS/RoleAction/RoleAction';
import {StoreEmployeeTypeData} from './redux/actions/SMS/Employees/EmployeesTypeAction';
import { StoreUniversitytypeData } from "./redux/actions/SMS/UniversityAction/UniversityTypeAction";
import { StoreUniversityCountryData } from "./redux/actions/SMS/UniversityAction/UniversityCountryAction";
import { StoreUniversityStateData } from "./redux/actions/SMS/UniversityAction/UniversityStateAction";
import get from "./helpers/get";

const App = (props) => {
  

  
 return (
  
  <Router />


 )
}

export default App
