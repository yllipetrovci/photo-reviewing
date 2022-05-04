import React, { memo }  from 'react';
import ThumbnailPhoto from './ThumbnailPhoto';
import { StyledApprovedImagesScroller } from './styles/ApprovedImagesScroller.styled';
import ThumbnailPhotoEmpty from './ThumbnailPhotoEmpty';

const ApprovedImagesScroller = ({ items }) => {
    return (
        <StyledApprovedImagesScroller>
            <h3>APPROVED IMAGES ({items.length})</h3>
            <div className='thumbnail-photos'>
                {items.length === 0 && <ThumbnailPhotoEmpty />}
                {items.map((item, index) => <ThumbnailPhoto item={item} key={index} />)}
            </div>
        </StyledApprovedImagesScroller>
    );
};

export default memo(ApprovedImagesScroller);