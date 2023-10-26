import styled from "styled-components"
import {FiSearch} from 'react-icons/fi'
import {BsPrinter} from 'react-icons/bs'
import TableComponent from "./table";
import { Btn } from "./style";

const ContainerBox = styled.div`
    margin:10px 90px;
    border-top:solid 1px grey;
    border-left:solid 1px grey;
    border-right:solid 1px grey;
    padding:20px;
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
`;
const ContainerBoxTop = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
`;
const ContainerBoxLeft = styled.div`
    border:1px solid grey;
    border-radius:18px;
    padding:5px ;
`;
const ContainerBoxRight = styled.div`
    display;flex;
    align-items:center;
    gap:40px;
`;

const CartProducts = ()=>{
    return(
        <ContainerBox>
            <ContainerBoxTop>
                <ContainerBoxLeft>
                    <input type="text" placeholder="Search" style={{outline:"none",borderStyle:"none",width:"90%",paddingLeft:"10px", paddingRight:"130px"}}/>
                    <FiSearch/>
                </ContainerBoxLeft>
                <ContainerBoxRight>
                    <Btn color={"green"} padding={"22px"} background={"white"} >
                        Add item
                    </Btn>
                    <BsPrinter style={{fontSize:"25px",marginTop:"0px"}}/>
                </ContainerBoxRight>
            </ContainerBoxTop>
            <TableComponent/>
        </ContainerBox>
    )
}

export default CartProducts