import styled from "styled-components";
import {TfiShoppingCart} from 'react-icons/tfi'
import {IoIosArrowDown} from 'react-icons/io'
const Header = ()=>{

    const HeaderLeftRight = styled.div`
        display:flex;
        flex-direction:row;
        align-items:center;
        gap:25px;
    `;
    const HeaderHeading = styled.h2`
        font-family:"Sedgwick Ave Display",cursive;
        color:white;
        font-size:39px;
        font-weight:600;
        margin-bottom:10px;
    `;
    const HeaderPara = styled.p`
        color:white;
        font-family:"Roboto";
        font-size:22px;
        margin-top:auto;
        margin-bottom:auto;
    
    `;
    const ReecoHeader = styled.div`
        display:flex;
        align-items:center;
        justify-content:space-between;
        background-color:#42b883;
        padding:5px 90px;
        height:70px;
        position:sticky;
        top:0px;
        left:0px
    `;

    return(
        <ReecoHeader>
            <HeaderLeftRight>
                <div>
                <HeaderHeading>Reeco</HeaderHeading>
                </div>
                <HeaderPara>Store</HeaderPara>
                <HeaderPara>Orders</HeaderPara>
                <HeaderPara>Analytics</HeaderPara>
            </HeaderLeftRight>
            <HeaderLeftRight>
                <TfiShoppingCart style={{fontSize:"27px",color:"white"}}/>
                <HeaderPara>Hello,<span> James</span></HeaderPara>
                <IoIosArrowDown style={{fontSize:"25px",color:"white"}}/>
            </HeaderLeftRight>
        </ReecoHeader>
    )
}

export default Header