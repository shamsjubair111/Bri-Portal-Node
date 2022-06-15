import Axios from 'axios';
import React, { useEffect } from 'react'
import { connect, useSelector } from "react-redux";
import { useDispatch } from 'react-redux'
import { UncontrolledTooltip, Button } from 'reactstrap';
import get from '../../../helpers/get';
import post from '../../../helpers/post';
import { StoreCommentData } from '../../../redux/actions/SMS/DemoActions/DemoActions'
import { commentDataReducer } from '../../../redux/reducers/SMS/DemoReducers'
import { roleDataReducer } from '../../../redux/reducers/SMS/RoleReducer';



const Demo = (props) => {
  const dispatch = useDispatch()

  const role = useSelector((state) => state.roleDataReducer.roles)
 
  // Fetching get api
  useEffect(()=>{
    const returnValue = get('api/Permission/Get/1').then((action)=>{
      
      // action.length && dispatch(StoreCommentData(action))
    })
  },[]);


  // Fetching post api
  const subdata = {
    name: '',
    value: 7811
  }

   const clickApi = () => {
     const returnPostStat = post('api/Permission/Create',subdata).then()
   }



  return (
    <div>
      <h1>demo page</h1>
      <button onClick={clickApi}>Click</button>
                  <p id="positionLeft">Hello</p>
                  <UncontrolledTooltip
                    placement="top"
                    target="positionLeft"
                  >
                    Tooltip on Bottom
                  </UncontrolledTooltip>
    </div>
  )
}
const mapStateToProps = state => ({
  // countryList: state.country.list
  commentList: state.commentDataReducer.commentData,
  roleList: state.roleDataReducer.roles
})

export default connect(mapStateToProps)(Demo);
