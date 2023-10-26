import Details from "./aboutDetails";
import { Box } from "./style";

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