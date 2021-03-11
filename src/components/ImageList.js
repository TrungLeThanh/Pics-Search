import React from 'react';
import '../css/ImageList.css';

const ImageList = props => {

    const images = props.images.map( (image) => {
        return <img src={image.urls.regular} alt={image.description} key={image.id} />
    });

    return (
        <div className="image-list">{images}</div>
    );
};

export default ImageList;