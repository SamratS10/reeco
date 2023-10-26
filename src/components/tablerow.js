// TableRow.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TiTick } from 'react-icons/ti';
import { ImCross } from 'react-icons/im';
import styled from 'styled-components';
import { updateItem, updateYes, updateNo } from './store';

const TableRow = ({ item }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleYesClick = () => {
    dispatch(updateYes(item.id));
    setIsModalOpen(false);
  };
  const handleImCrossClick = () => {
    setIsModalOpen(true);
  };

  const handleNoClick = () => {
    dispatch(updateNo(item.id));
    setIsModalOpen(false);
  };

  const handleTick = () => {
    dispatch(updateItem(item.id));
  };
  const Modal = styled.div` 
  display: ${isModalOpen ? 'flex' : 'none'};
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 100%; 
  align-items: center;
  justify-content: center;
  z-index:1;
`;

  const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  width:25rem;
`;
const StatusPara =styled.p`
    border-radius:5px;
    border-style:solid 1px grey;
    padding:0px 12px;
`;


  return (
    <tr style={{padding:"10px", borderBottom:"solid 1px grey", fontFamily:"Playpen Sans"}}>
                            <td style={{padding:"8px",textAlign:"left"}}>
                            <div style={{display:"flex",alignItems:"center",gap:"15px",color:"#000000",fontSize:"18px"}}>
                                <img src={item.image} alt={item.id} style={{height:"60px",width:"60px"}}/>
                                <p>{item.text}</p>
                            </div>
                            </td>
                            <td style={{padding:"8px",textAlign:"left",color:"#000000",fontSize:"18px"}}>
                                {item.brand}
                            </td>
                            <td style={{padding:"8px",textAlign:"left",color:"#000000",fontSize:"18px"}}>{item.price}</td>
                            <td style={{padding:"8px",textAlign:"left",color:"#000000",fontSize:"18px"}}>{item.quantity}</td>
                            <td style={{padding:"8px",textAlign:"left",color:"#000000",fontSize:"18px"}}>{item.total}</td>
                            <td style={{display:"flex",alignItems:"center",justifyContent:"space-around",padding:"8px",textAlign:"left",marginTop:"15px",backgroundColor:"#E2E2E2"}}>
                                <StatusPara>{item.status}</StatusPara>
                                <button style={{border:"none",backgroundColor:"inherit",outline:"none",fontSize:"29px"}} onClick={()=>handleTick(item.id)}>{item.verify? <TiTick style={{color:"green"}}/> : <TiTick/>}</button>
                                <button style={{border:"none",backgroundColor:"inherit",outline:"none"}} onClick={handleImCrossClick}>{item.missing ?<ImCross style={{color:"red"}}/> : <ImCross/>}</button>
                                <Modal>
                                    <ModalContent>
                                        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"13px"}}>
                                            <h1>Missing Product</h1>
                                            <button onClick={() => setIsModalOpen(false)} style={{backgroundColor:"inherit",borderStyle:"none",outline:"none"}}><ImCross/></button>
                                        </div>
                                        <p style={{padding:"13px"}}>Is {item.text} required?</p>
                                        <div style={{textAlign:"right",padding:"13px"}}>
                                        <button style={{backgroundColor:"inherit",borderStyle:"none",outline:"none"}} onClick={()=>handleYesClick(item.id)}>Yes</button>
                                        <button style={{marginLeft:"18px",backgroundColor:"inherit",borderStyle:"none",outline:"none"}} onClick={()=>handleNoClick(item.id)}>No</button>
                                        </div>
                                    </ModalContent>
                                </Modal> 
                                <span>Edit</span>
                            </td>
                        </tr>
  );
};

export default TableRow;
