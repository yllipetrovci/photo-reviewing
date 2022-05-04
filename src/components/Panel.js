import React, { memo }  from 'react';
import { StyledPanel } from './styles/Panel.styled';

const Panel = ({ children }) => {
    return (
        <StyledPanel>
            {children}
        </StyledPanel>
    );
};

export default memo(Panel);