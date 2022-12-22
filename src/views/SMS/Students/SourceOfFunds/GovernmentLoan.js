import React from 'react';
import { Col, FormGroup, Input } from 'reactstrap';

const GovernmentLoan = () => {
    return (
        <div>
              <FormGroup row className="has-icon-left position-relative">
              <Col md="2">
                <span>
                Government Loan/Fund <span className="text-danger">*</span>{" "}
                </span>
               
              </Col>
              <Col md="6">
               
                <Input
                type='textarea'
                placeholder='Add loan amount in the box'
                required
                />

             
                     
                 

              </Col>
            </FormGroup>
            
        </div>
    );
};

export default GovernmentLoan;