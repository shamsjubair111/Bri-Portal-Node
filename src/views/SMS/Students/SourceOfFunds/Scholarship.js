import { Upload } from 'antd';
import React from 'react';
import { Col, FormGroup, Input, Modal } from 'reactstrap';
import * as Icon from 'react-feather';

const Scholarship = ({previewVisible5, setPreviewVisible5, previewTitle5, setPreviewTitle5, previewImage5, setPreviewImage5, FileList5, setFileList5, handleCancel5, handlePreview5,getBase645, handleChange5, scholarshipError, setScholarshipError}) => {
    return (
        <div>
                <FormGroup row className="has-icon-left position-relative">
              <Col md="2">
                <span>
                  Scholarship <span className="text-danger">*</span>{" "}
                </span>
               
              </Col>
              <Col md="6">
               
                <Input
                type='textarea'
                required
                placeholder='Add name, amount in the box '
                />

             
                     
                 

              </Col>
            </FormGroup>

            <FormGroup row className="has-icon-left position-relative">
              <Col md="2">
                <span>
                  Attachment <span className="text-danger">*</span>{" "}
                </span>
               
              </Col>
              <Col md="6">
                <div className="row">
                  {/* {consultantData?.idOrPassportMedia?.fileUrl != null ? (
                    <div className="col-md-3">
                      <Image
                        width={104}
                        height={104}
                        src={
                          rootUrl + consultantData?.idOrPassportMedia?.thumbnailUrl
                        }
                      />
                    </div>
                  ) : null} */}

                  <div className="col-md-6">
                    <Upload
                   
                      listType="picture-card"
                      multiple={false}
                      fileList={FileList5}
                      onPreview={handlePreview5}
                      onChange={handleChange5}
                      beforeUpload={(file) => {
                        return false;
                      }}
                    >
                      {FileList5.length < 1 ? (
                        <div className="text-danger" style={{ marginTop: 8 }}>
                          <Icon.Upload />
                          <br />
                          <span>Upload Here</span>
                        </div>
                      ) : (
                        ""
                      )}
                    </Upload>
                  
                    <Modal
                      visible={previewVisible5}
                      title={previewTitle5}
                      footer={null}
                      onCancel={handleCancel5}
                    >
                      <img
                        alt="example"
                        style={{ width: "100%" }}
                        src={previewImage5}
                      />
                    </Modal>
                    <span className="text-danger d-block">{scholarshipError}</span>
                  </div>
                </div>

             
                     
                 

              </Col>
            </FormGroup>
            
        </div>
    );
};

export default Scholarship;