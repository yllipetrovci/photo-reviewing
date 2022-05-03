import React from 'react';
import { StyledThumbnailPhotoNotFound } from './styles/ThumbnailPhotoNotFound.styled';
import { assets } from '../assets';

const ThumbnailPhotoNotFound = () => {
    return (
        <StyledThumbnailPhotoNotFound>
            <img src={assets.AddIcon} />
        </StyledThumbnailPhotoNotFound>
    )
}

export default ThumbnailPhotoNotFound;