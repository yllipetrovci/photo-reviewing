import styled from "styled-components";

export const StyledApprovedImagesScroller = styled.div`
    margin-top:10px;
    margin-bottom:20px;
    border-bottom: ${({theme})=> theme.bottomBorder};
    
    h3 {
        color: ${({theme})=> theme.titleColor};
        font-size: 14px;
        margin: 0;
        margin-bottom:15px
    }
    
    .thumbnail-photos {
        margin-top:10px;
        margin-bottom:20px;
        overflow: scroll;
        display:flex;
    }
`