import React, { memo }  from 'react';
import { StyledHeader } from './styles/Header.styled';

const Header = () => {
    return (
        <StyledHeader>
            <h1>IMAGE APPROVAL APPLICATION</h1>
        </StyledHeader>
    );
};

export default memo(Header);