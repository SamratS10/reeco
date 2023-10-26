import styled from "styled-components";

export const Block=styled.div`
display:flex;
flex-direction:column;
padding:15px;
overflow:anywhere;
border-right:${(props)=>props.type};
padding-right:20px
`;
export const BlockPara=styled.p`
color:grey;
font-size:15px;
font-family:"Roboto;
`;
export const ContainerHeading = styled.h2`
font-size:2px; 
font-family:"Roboto";
`;
export const Box = styled.div`
margin:20px 90px;
border:solid 0.5px #D0D0D0;
display:flex;
padding:10px;
background-color:white;
box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
`;

export const Btn = styled.button`
margin-right:10px;
font-size:16px;
padding-top:10px;
padding-bottom:10px;
padding-left:${(props)=>props.padding};
padding-right:${(props)=>props.padding};
border-radius:20px;
border:solid 2px green;
outline:none;
background-color:${(props)=>props.background};
color:${(props)=>props.color};
font-weight:${(props)=>props.weight? "500" : ""};
`;