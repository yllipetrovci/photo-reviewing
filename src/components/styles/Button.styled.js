import styled from "styled-components";

export const StyledButton = styled.button`
    margin-top:20px;
    border-radius:40px;
    height: 50px;
    background: none;
    background-color: ${({ bgColor }) => bgColor ? bgColor : "#fff"};
    width: calc(50% - 10px);
    border:none;

    
`