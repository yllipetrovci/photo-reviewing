import React, { memo } from 'react';
import { StyledThumbnailPhotoEmpty } from './styles/ThumbnailPhotoNotFound.styled';
import { assets } from '../assets';

const ThumbnailPhotoEmpty = () => {
    return (
        <StyledThumbnailPhotoEmpty>
            <img src={assets.AddIcon} alt="not found"/>
        </StyledThumbnailPhotoEmpty>
    );
};

export default memo(ThumbnailPhotoEmpty);