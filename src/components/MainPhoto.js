import React, { memo } from 'react';
import { StyledMainPhoto } from './styles/MainPhoto.styled';
import AnimatedSearchIcon from '../assets/loading.svg';

const MainPhoto = ({ imageURL, isLoading }) => {
    return (
        <StyledMainPhoto>
            {!isLoading ?
                <img src={imageURL} alt="main image" className="main-photo" />
                :
                <div className="isLoading">
                    <img src={AnimatedSearchIcon} alt="loading" />
                    <p>Loading...</p>
                </div>
            }
        </StyledMainPhoto>
    )
}

export default memo(MainPhoto);