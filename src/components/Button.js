import React, { memo } from 'react';

import { StyledButton } from './styles/Button.styled';

const Button = ({ icon, label, onClickEvent }) => {
    return (
        <StyledButton label={label} onClick={onClickEvent}>
            <img src={icon} alt={label} />
        </StyledButton>
    );
};

export default memo(Button);