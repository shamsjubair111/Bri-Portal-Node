import React from 'react';

const SpanButton = (props) => {
    const {func, className, style, data, permission} = props;

    const datass = [1,2,3,4,6];

    return (
        <>
         {
            datass?.includes(permission) ?
            <span onClick={func} className={className} style={style}>
                {data}
            </span>
            :
            null
         }
        </>
    );
};

export default SpanButton;