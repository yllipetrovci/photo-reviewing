import React from 'react';
import { StyledThumbnailPhoto } from './styles/ThumbnailPhoto.styled';
import TickPhoto from '../assets/tick.svg';

const ThumbnailPhoto = ({ item }) => {
    return (
        <StyledThumbnailPhoto>
            <div className="icon">
                <img src={TickPhoto} />
            </div>
            <img  className="bg-image" src={item.urls.small} />
        </StyledThumbnailPhoto>
    )
}

export default ThumbnailPhoto;