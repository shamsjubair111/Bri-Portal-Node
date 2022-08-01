import React from 'react';

const EditDivButton = (props) => {
    const {className, func, permission} = props;

    const data = [1,2,3,4,6];

    return (
        <>
          {
             data?.includes(permission)?
            <div className={className} onClick={func}>
              <div className="text-right">
                  <span> <i className="fas fa-pencil-alt pencil-style"></i> </span>
              </div>
            </div>
            :
            null
          }
        </>
    );
};

export default EditDivButton;