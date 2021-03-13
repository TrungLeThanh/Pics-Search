import React from 'react';

const NoImage = () =>{
    return(
        <div className="no-image">
            <div className="ui placeholder segment">
                <div className="ui icon header">
                    <i className="pdf file outline icon"></i>
                    No documents are listed for this customer.
                </div>
            </div>
        </div>
    );
};

export default NoImage;