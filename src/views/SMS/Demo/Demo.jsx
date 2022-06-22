import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { connect, useSelector } from "react-redux";
import { useDispatch } from 'react-redux'
import { UncontrolledTooltip, Button } from 'reactstrap';
import get from '../../../helpers/get';
import post from '../../../helpers/post';
import { StoreCommentData } from '../../../redux/actions/SMS/DemoActions/DemoActions'
import { commentDataReducer } from '../../../redux/reducers/SMS/DemoReducers'
import { roleDataReducer } from '../../../redux/reducers/SMS/RoleReducer';



const Demo = () => {
  const dispatch = useDispatch()

  const role = useSelector((state) => state.roleDataReducer.roles)

  const [formType, setFormType] = useState([]);
 
  // Fetching get api
  useEffect(()=>{

    get('Practice/GetAttribute')
    .then(res => {
      console.log('dynamic form', res);
      setFormType(res);
    })
  
  },[]);

const handleSubmit  = (event) => {

  event.preventDefault();

  const subdata = new FormData(event.target);

  for (var x of subdata.values()){
    console.log(x);
  }

}



  // Fetching post api
 




  return (
    <div>
    <form onSubmit={handleSubmit}>
    {
      formType.map(form => 
        <div className=' mb-3 row '>
        
        <div className='col-md-2'>
        <p>{form?.name}</p>
        </div>

        <div className = 'col-md-4'>
        
        <input className='w-100 p-2'
        type={form?.type}
        name={form?.name}
        id={form?.name}
        />
        
        </div>
    
        
        </div>
    
        )
    }


    <button type='submit' className='btn btn-danger mx-auto mt-2'>
    Submit
    </button>

    </form>

    

      
      
    </div>
  )
}


export default Demo;
