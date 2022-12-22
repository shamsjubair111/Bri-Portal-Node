import { Upload } from 'antd';
import React from 'react';
import { Col, FormGroup, Input, Modal } from 'reactstrap';
import * as Icon from 'react-feather';

const StudentLoanCompany = ({previewVisible3, setPreviewVisible3, previewTitle3, setPreviewTitle3, previewImage3, setPreviewImage3, FileList3, setFileList3, handleCancel3, handlePreview3,getBase643, handleChange3, sLoanError, setSLoanError}) => {
    return (
        <div>
            <FormGroup row className="has-icon-left position-relative">
              <Col md="2">
                <span>
                  Attachment <span className="text-danger">*</span>{" "}
                </span>
                <br/>
                <span>(If already applied please attach prove, If not we will ask latter)</span>
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
                      fileList={FileList3}
                      onPreview={handlePreview3}
                      onChange={handleChange3}
                      beforeUpload={(file) => {
                        return false;
                      }}
                    >
                      {FileList3.length < 1 ? (
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
                      visible={previewVisible3}
                      title={previewTitle3}
                      footer={null}
                      onCancel={handleCancel3}
                    >
                      <img
                        alt="example"
                        style={{ width: "100%" }}
                        src={previewImage3}
                      />
                    </Modal>
                    <span className="text-danger d-block">{sLoanError}</span>
                  </div>
                </div>

             
                     
                 

              </Col>
            </FormGroup>
            
        </div>
    );
};

export default StudentLoanCompany;