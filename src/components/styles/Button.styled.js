import styled from "styled-components";

export const StyledButton = styled.button`
    transition: 600ms;
    margin-top:20px;
    border-radius:40px;
    height: 55px;
    background: none;
    background-color: ${({ bgColor }) => bgColor ? bgColor : "#fff"};
    width: calc(50% - 10px);
    border:none;
    cursor: pointer;

    img{
        width: 20px;
    }

    &:hover{
        transition: 600ms;
        opacity: 0.9;
    }

    
`