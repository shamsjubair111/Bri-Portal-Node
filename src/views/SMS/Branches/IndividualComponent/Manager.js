import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card } from 'reactstrap';
import get from '../../../../helpers/get';

const Manager = (props) => {

    const [branchManager, setBranchManager] = useState({});
    const {id} = props;
   

    useEffect(()=>{
        get(`BranchManager/GetbyBranch/${id}`).then((res) => {
            // console.log('Manager info here',res);
      
            setBranchManager(res);
          });

    },[])
    return (
        <div>
                {branchManager?.tittle && (
              <Card>
                <div className="uapp-circle-image margin-top-minus mt-3">
                  <img className="p-1" alt="provider_image" />
                </div>
                <h5 className="pt-2 h3 text-center mb-4">
                  {" "}
                  <span className="pe-1">{branchManager?.firstName}</span>
                  <span className=" ps-1">{branchManager?.lastName}</span>
                </h5>

                <div className="container text-center mb-4">
                  <Link
                    to={`/updateBranchManagerInformation/${branchManager?.id}`}
                  >
                    <button className="btn btn-primary px-lg-5 px-md-3 px-sm-1 py-2">
                      Edit
                    </button>
                  </Link>
                </div>

                <div>
                  <ul className="uapp-ul text-center pb-3">
                    <h5 className="py-b">
                      <span>{branchManager?.tittle}</span>{" "}
                    </h5>

                    <h5 className="py-b">
                      {" "}
                      <span>{branchManager?.email}</span>{" "}
                    </h5>
                    <h5 className="">
                      {" "}
                      <span>{branchManager?.phoneNumber}</span>{" "}
                    </h5>
                  </ul>
                </div>
              </Card>
            )}

            {!branchManager.tittle && (
              <Card>
                <div className="container py-3">
                  <Link to="/addBranchManager">
                    
                    <Button className="btn btn-uapp-add "
                    onClick={localStorage.removeItem('branchManagerId')}
                    >
                      {" "}
                      <i class="fas fa-plus"></i> Add Branch Manager{" "}
                    </Button>
                  </Link>
                </div>
              </Card>
            )}
            
        </div>
    );
};

export default Manager;