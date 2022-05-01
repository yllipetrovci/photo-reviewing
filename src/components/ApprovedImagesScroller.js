import React from 'react';
import ThumbnailPhoto from './ThumbnailPhoto';
import { StyledApprovedImagesScroller } from './styles/ApprovedImagesScroller.styled';

const ApprovedImagesScroller = ({ items }) => {
    return (
        <StyledApprovedImagesScroller>
            <h3>APPROVED IMAGES ({items.length})</h3>
            <div className='thumbnail-photos'>
                {items.map((item, index) => <ThumbnailPhoto item={item} key={index} />)}
            </div>
        </StyledApprovedImagesScroller>
    )
}

export default ApprovedImagesScroller;