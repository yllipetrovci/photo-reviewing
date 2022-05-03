import styled from "styled-components";
import {BUTTON_LABELS} from '../../const/buttonLabels';

export const StyledButton = styled.button`
    transition: 600ms;
    margin-top:20px;
    border-radius:40px;
    height: 55px;
    background: none;
    background-color: ${({ label, theme  }) => label === BUTTON_LABELS.APPROVED ? theme.buttons.approved.bgColor : theme.buttons.rejected.bgColor};
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