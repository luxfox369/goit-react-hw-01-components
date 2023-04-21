import styled from '@emotion/styled';
export const StatsList = styled.ul`
margin:0px;
     width:inherit;
      display:flex;
      
      justify-content: stretch ;
      align-items: center;
`;
export const Item = styled.li`
background-color:rgb(246, 230, 230);;
 outline: 1px solid grey;
  flex-basis: calc((100% - 2 *1px) / 2);
 display:flex;
 flex-direction:column;
 gap:1px;
 justify-content: center ;
 align-items: center;
 padding-top:5px;
`;
export const Label = styled.span`
padding-bottom:15px;
`;
export const Quantity = styled.span`
   font-weight: 500;
   font-size: 20px;
   padding-bottom:20px;
`;