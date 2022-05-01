import React from 'react';
import { StyledMainImage } from './styles/MainImage.styled';
import AnimatedSearchIcon from '../assets/loading.svg';

const MainImage = ({ imageURL, isLoading }) => {
    return (
        <StyledMainImage>
            {!isLoading ?
                <img src={imageURL} alt="main image" />
                :
                <div className="isLoading">
                    <img src={AnimatedSearchIcon} alt="loading" />
                    <p>Loading...</p>
                </div>
            }
        </StyledMainImage>
    )
}

export default MainImage;