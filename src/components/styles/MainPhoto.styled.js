import styled from "styled-components";

export const StyledMainPhoto = styled.div`
   background: ${({ theme }) => theme.blueBgColor};
   border-radius: 4px;
   height: 350px;

   img{
      width: 100%;
      height: 350px;
   }

   .isLoading{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 100%;

      img{
         width:100px;
         height: 100px;
      }
      p{
         color: ${({ theme }) => theme.loadingTextColor};
         font-size: 20px;
      }
   }
`