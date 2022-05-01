import styled from "styled-components";

export const StyledApprovedImagesScroller = styled.div`
    margin-top:10px;
    margin-bottom:20px;
    border-bottom:1px solid rgba(0,0,0,0.2);
    
    h3 {
        color: rgb(64,83,220);
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