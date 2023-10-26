import { Block,BlockPara,ContainerHeading } from "./style"

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