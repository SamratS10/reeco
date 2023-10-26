import {createSlice} from '@reduxjs/toolkit'
import Data from '../../data.json'


const cartSlice = createSlice({
    name:'cart',
    initialState:Data,
    reducers:{
        updateItem: (state, action) => {
            const itemId = action.payload;
            // Find the item by its ID and update the 'verify' property
            const item = state.find((item) => item.id === itemId);
            if (item) {
                const verify = item.verify;
                if(verify===false){
                    item.verify = true;
                    item.status = "Approved";
                    item.missing = false;
                }
                else{
                    item.verify = false;
                    item.status = "";
                    item.missing = false;
                }
            }
          },
          updateYes:(state,action)=>{
            const id = action.payload;
            const item=state.find((item)=>item.id===id)
            if(item){
                item.status ="Missing-urgent";
                item.verify=false
                item.missing = true;
            }
          },
          updateNo:(state,action)=>{
            const itemId = action.payload;
            const item=state.find((item)=>item.id===itemId)
            if(item){
                item.status ="Missing";
                item.verify=false
                item.missing = true;
            }
          }
    }
})

export const {updateItem,updateYes,updateNo} = cartSlice.actions
export default cartSlice.reducer