import React from 'react';
import { StyledButton } from './styles/Button.styled';

const Button = ({ icon, bgColor, onClickEvent }) => {
    return (
        <StyledButton bgColor={bgColor} onClick={onClickEvent}>
            <img src={icon} />
        </StyledButton>
    )
}

export default Button;