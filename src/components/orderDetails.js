import styled from "styled-components";
import Details from "./aboutDetails";
const Box = styled.div`
margin:20px 90px;
border:solid 0.5px #D0D0D0;
display:flex;
padding:10px;
background-color:white;
box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
`;

const OrderDetails = ()=>{

    return(
        <>
        <Box>
            <Details para={"Supplier"} heading={"East coast fruits & vegetables"} type={"solid 2px grey"}/>
            <Details para={"Shipping Date"} heading={"Sat,Feb 14"} type={"solid 2px grey"}/>
            <Details para={"Total"} heading={"9,000"} type={"solid 2px grey"}/>
            <Details para={"Category"} heading={"Food"} type={"solid 2px grey"}/>
            <Details para={"Department"} heading={"333-444-55"} type={"solid 2px grey"}/>
            <Details para={"Status"} heading={"Awaiting your approvel"} />   
        </Box>
        </>
    )
    }

export default OrderDetails
