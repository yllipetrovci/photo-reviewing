import React from 'react';
import ThumbnailPhoto from './ThumbnailPhoto';
import { StyledApprovedImagesScroller } from './styles/ApprovedImagesScroller.styled';

const ApprovedImagesScroller = ({ approvedImagesCount }) => {
    return (
        <StyledApprovedImagesScroller>
            <h3>APPROVED IMAGES ({approvedImagesCount})</h3>
            <div className='thumbnail-photos'>
                <ThumbnailPhoto />
                <ThumbnailPhoto />
                <ThumbnailPhoto />
                <ThumbnailPhoto />
            </div>
        </StyledApprovedImagesScroller>
    )
}

export default ApprovedImagesScroller;