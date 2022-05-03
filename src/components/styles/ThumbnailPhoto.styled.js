import styled from "styled-components";

export const StyledThumbnailPhoto = styled.div`
    position: relative;
    min-width: 75px;
    max-width: 75px;
    height: 40px;
    border-radius: 4px;
    margin-right:10px;
    background: ${({ theme }) => theme.blueBgColor};
    border: 1px solid rgb(64,83,220);

    .icon{
        position: absolute;
        right: 3px;
        top:3px;
    }

    .bg-image{
        width:100%;
        height: 40px;
        object-fit: cover;
    }

`