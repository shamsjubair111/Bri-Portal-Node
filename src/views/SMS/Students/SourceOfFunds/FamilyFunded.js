import { Upload } from 'antd';
import React from 'react';
import { Col, FormGroup, Input, Modal } from 'reactstrap';
import * as Icon from 'react-feather';

const FamilyFunded = ({previewVisible2, setPreviewVisible2, previewTitle2, setPreviewTitle2, previewImage2, setPreviewImage2, FileList2, setFileList2, handleCancel2, handlePreview2,getBase642, handleChange2, familyError, setFamilyError}) => {
    return (
        <div>
        <FormGroup row className="has-icon-left position-relative">
          <Col md="2">
            <span>
              Attachment <span className="text-danger">*</span>{" "}
            </span>
            <br/>
            <span>(Relationship with sponsor, attach prove of fund )</span>
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
                  fileList={FileList2}
                  onPreview={handlePreview2}
                  onChange={handleChange2}
                  beforeUpload={(file) => {
                    return false;
                  }}
                >
                  {FileList2.length < 1 ? (
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
                  visible={previewVisible2}
                  title={previewTitle2}
                  footer={null}
                  onCancel={handleCancel2}
                >
                  <img
                    alt="example"
                    style={{ width: "100%" }}
                    src={previewImage2}
                  />
                </Modal>
                <span className="text-danger d-block">{familyError}</span>
              </div>
            </div>

         
                 
             

          </Col>
        </FormGroup>
        
    </div>
    );
};

export default FamilyFunded;