import React from 'react';
import { Link } from 'react-router-dom';

const LinkSpanButton = (props) => {
    const {url, className, icon, permission, name, data} = props;
    console.log("LinkSpanButton", props);

    const datass = [1,2,3,4,6];

    return (
        <>
          {
            datass?.includes(permission) ?
            <Link className={className} to={url}>
                <span>
                   {data}
                </span>
            </Link>
            :
            null
          }
        </>
    );
};

export default LinkSpanButton;