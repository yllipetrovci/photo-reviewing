import styled from "styled-components";

export const Container = styled.div`
    margin:0;
    background: ${({ theme }) => theme.blueBgColor};
    height: 100vh;
    display: flex;
    align-items:center;
    justify-content:center;
`