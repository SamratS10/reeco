import styled from "styled-components"
import {AiOutlineRight} from "react-icons/ai"
const OrderIdDetails = ()=>{
    const Para = styled.p`
        color:grey;
        font-size:15px;
        font-family:"Roboto";
    `;
    const OrderId = styled.h1`
        color:black;
        font-size:34px;
    `;
    const OrderBox = styled.div`
        background-color:white-smoke;
        padding:20px 90px;
        box-shadow:0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
        height:150px;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
    `;
    const StyleElement = styled.div`
        display:flex;
        flex-direction:row;
        align-items:center;
        gap:6px;
        justify-content:${(props)=>props.name? "space-between" : ""};
    `;
    const Btn = styled.button`
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

    return(
        <OrderBox>
            <StyleElement name={false}>
                <Para>Orders</Para>
                <AiOutlineRight/>
                <Para>Order1234rts</Para>
            </StyleElement>
            <StyleElement name={true}>
                <StyleElement>
                    <OrderId>Order</OrderId>
                    <OrderId>12356789</OrderId>
                </StyleElement>
                <div>
                    <Btn color={"green"} padding={"22px"} background={"white"} weight={true}>
                        Back
                    </Btn>
                    <Btn color={"white"} padding={"15px"} background={"green"} weight={false}>Approve Order</Btn>
                </div>
            </StyleElement>
        </OrderBox>
    )

}

export default OrderIdDetails