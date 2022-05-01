import React from 'react';
import { StyledThumbnailPhotoNotFound } from './styles/ThumbnailPhotoNotFound.styled';
import AddIcon from '../assets/add.svg';

const ThumbnailPhotoNotFound = () => {
    return (
        <StyledThumbnailPhotoNotFound>
            {/* <h1>ThumbnailPhoto</h1> */}
            <img src={AddIcon} />

        </StyledThumbnailPhotoNotFound>
    )
}

export default ThumbnailPhotoNotFound;