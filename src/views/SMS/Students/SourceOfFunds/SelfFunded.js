import { Upload } from 'antd';
import React from 'react';
import { Col, FormGroup, Input, Modal } from 'reactstrap';
import * as Icon from 'react-feather';

const SelfFunded = ({previewVisible1, setPreviewVisible1, previewTitle1, setPreviewTitle1, previewImage1, setPreviewImage1, FileList1, setFileList1, handleCancel1, handlePreview1,getBase641, handleChange1, selfError, setSelfError}) => {
    return (
        <div>
            <FormGroup row className="has-icon-left position-relative">
              <Col md="2">
                <span>
                  Attachment <span className="text-danger">*</span>{" "}
                </span>
                <br/>
                <span>(Bank statement, Job Reference with Salary Amount or Business Certificate)</span>
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
                      fileList={FileList1}
                      onPreview={handlePreview1}
                      onChange={handleChange1}
                      beforeUpload={(file) => {
                        return false;
                      }}
                    >
                      {FileList1.length < 1 ? (
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
                      visible={previewVisible1}
                      title={previewTitle1}
                      footer={null}
                      onCancel={handleCancel1}
                    >
                      <img
                        alt="example"
                        style={{ width: "100%" }}
                        src={previewImage1}
                      />
                    </Modal>
                    <span className="text-danger d-block">{selfError}</span>
                  </div>
                </div>

             
                     
                 

              </Col>
            </FormGroup>
            
        </div>
    );
};

export default SelfFunded;