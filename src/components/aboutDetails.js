import styled from "styled-components";

const Block=styled.div`
display:flex;
flex-direction:column;
padding:15px;
overflow:anywhere;
border-right:${(props)=>props.type};
padding-right:20px
`;
const BlockPara=styled.p`
color:grey;
font-size:15px;
font-family:"Roboto;
`;
const ContainerHeading = styled.h2`
font-family:"Roboto";
`;

const Details = (props)=>{
    const {para,heading,type} = props

    return(
        <Block type={type}>
            <BlockPara>{para}</BlockPara>
            <ContainerHeading>{heading}</ContainerHeading>
        </Block>
    )
}

export default Details
