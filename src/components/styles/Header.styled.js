import styled from "styled-components";

export const StyledHeader = styled.header`
    border-bottom: ${({ theme }) => theme.bottomBorder};
    
    h1 {
        color: ${({ theme }) => theme.titleColor};
        font-size: 14px;
        margin: 0;
        margin-bottom:15px;
        margin-left:20px;
        margin-top:20px;
    }
`