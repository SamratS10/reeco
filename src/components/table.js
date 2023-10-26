import styled from 'styled-components'
import TableRow from './tablerow'
import { useSelector } from 'react-redux';
const TableComponent= ()=>{

    const tableData = useSelector((state) => state.cart);
    const TableColums = styled.thead`
    border:solid 1px grey;
    padding:20px 10px;
    margin-top:20px;
    border-top-right-radius:10px;
    border-top-left-radius:10px;
`;
const TableColumn=styled.th`
    textAlign:left;
    font-family:"Roboto Mono";
    color:grey;
    font-size:20px;
    font-weight:0;
`;


    return(
        <table style={{borderCollapse:"collapse",width:"100%",marginTop:"30px",padding:"10px",overflowWrap:"anywhere"}}>
            <TableColums>
                <tr>
                    <TableColumn style={{padding:"8px",textAlign:"left"}}>Product Name</TableColumn>
                    <TableColumn style={{padding:"8px",textAlign:"left"}}>Brand</TableColumn>
                    <TableColumn style={{padding:"8px",textAlign:"left"}}>Price</TableColumn>
                    <TableColumn style={{padding:"8px",textAlign:"left"}}>Quantity</TableColumn>
                    <TableColumn style={{padding:"8px",textAlign:"left"}}>Total</TableColumn>
                    <TableColumn style={{padding:"8px",textAlign:"left"}}>Status</TableColumn>
                </tr>
            </TableColums>
            <tbody>
            {tableData.map((each) => (
          <TableRow key={each.id} item={each} />
        ))}
            </tbody>
        </table>
    )
}

export default TableComponent;