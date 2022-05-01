import React from 'react';
import { StyledThumbnailPhoto } from './styles/ThumbnailPhoto.styled';
import TickPhoto from '../assets/tick.svg';

const ThumbnailPhoto = () => {
    return (
        <StyledThumbnailPhoto>
            {/* <h1>ThumbnailPhoto</h1> */}
            <div className="icon">
                <img src={TickPhoto} />
            </div>
        </StyledThumbnailPhoto>
    )
}

export default ThumbnailPhoto;