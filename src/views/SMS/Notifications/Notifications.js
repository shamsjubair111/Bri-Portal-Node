import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Card, CardHeader, CardBody, Row, Col, Button  } from 'reactstrap';
import get from '../../../helpers/get';
import Select from "react-select";
import Pagination from '../Pagination/Pagination';

const Notifications = () => {

    const history = useHistory();

    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [dataPerPage, setDataPerPage] = useState(30);
    const [callApi, setCallApi] = useState(false);
    const [entity, setEntity] = useState(0);
    const [data,setData] = useState([]);
    const [success,setSuccess] = useState(false);

  
    useEffect(()=>{

        get(`Notification/Index?page=${currentPage}&pageSize=${dataPerPage}`)
        .then(res => {
           
            setEntity(res?.totalEntity);
            setData(res?.models);
        })

    },[dataPerPage,currentPage, success])


      // user select data per page
  const dataSizeArr = [10, 15, 20, 30, 50, 100, 1000];
  const dataSizeName = dataSizeArr.map((dsn) => ({ label: dsn, value: dsn }));

  const selectDataSize = (value) => {
    
    setDataPerPage(value);
    setCallApi((prev) => !prev);
  };

    //  change page
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        setCallApi((prev) => !prev);
      };

    const backToDashboard = () => {
        history.push('/');
    }

    const gotoPath = (data) => {
        history.push(data?.targetUrl);
    }

    const handleDate = (e) => {
        var datee = e;
        var utcDate = new Date(datee);
        var localeDate = utcDate.toLocaleString("en-CA");
        const x = localeDate.split(",")[0];
        return x;
      };

      const markAsReadNotification = (data) => {

        
        get(`Notification/ViewNotification/${data?.id}`)
        .then(res => {
           
            if(res){
                setSuccess(!success);
               
            }
        })
      }

    return (
        <div>

    <Card className="uapp-card-bg">
        <CardHeader className="page-header">
          <h3 className="text-white">All Notifications</h3>
          <div className="page-header-back-to-home">
            <span onClick={backToDashboard} className="text-white">
              {" "}
              <i className="fas fa-arrow-circle-left"></i> Back to Dashboard
            </span>
          </div>
        </CardHeader>
      </Card>

  
          {/* new */}
          <Row className="mb-3">
            <Col lg="5" md="5" sm="4" xs="4">
              
            </Col>

            <Col lg="7" md="7" sm="8" xs="8">
              <div className="d-md-flex justify-content-end">
                
              </div>
            </Col>
          </Row>

          {/* map data from array and show */}

          {
            data?.map((list,i) => (
                
                <Card key={i} className='my-3 notification-div'>
                  
                <CardBody>

                <div className='d-flex justify-content-between'>
                    <span>{handleDate(list?.createdOn)}</span>
                    <div className='d-flex'>
                       {
                        !(list?.isSeen) ?
                        <Button color='primary' className='mr-1 btn-sm' onClick={()=> markAsReadNotification(list)}>
                        Mark as Read

                         </Button>
                         :
                         null
                       }

                        <Button color='danger' className='ml-1 btn-sm'>
                            Delete

                        </Button>

                    </div>
                   

                    </div>

                    <div>
                    <span className='title' onClick={()=>gotoPath(list)}>{list?.title}</span>
                    <span className='description'>{list?.description}</span>
                    </div>


                </CardBody>
                    


                </Card>
            ))
          }

         

        <Card>

        <CardBody>

        <Pagination
            dataPerPage={dataPerPage}
            totalData={entity}
            paginate={paginate}
            currentPage={currentPage}
          />
    
        </CardBody>

        </Card>
            
        </div>
    );
};

export default Notifications;