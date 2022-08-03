import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState: {
        items:[],
        totalQunatity:0,
    },
    reducers:{
        additemcart(state,action){
            const newitem=action.payload;
            const existingitem=state.items.find((item)=>item.id===newitem.id);
            state.totalQunatity++
            if(!existingitem){
                state.items.push({
                     id:newitem.id,
                     price:newitem.price, 
                     quantity:1, 
                     totalPrice:newitem.price,
                     name:newitem.title
                    });
            }
            else {
                existingitem.quantity++;
                existingitem.totalPrice=existingitem.totalPrice+newitem.price;
            }
        },
        removeitemfromcart(state,action){
            const id= action.payload;
            const existingitem=state.items.find((item)=>item.id===id) ;
            state.totalQunatity--;
        
            if(existingitem.quantity===1){
                state.items=state.items.filter((item)=>item.id!==id);
            }
            else {
                existingitem.quantity--;
               
            }
        }
    }
})

export const cartActions=cartSlice.actions;
export default cartSlice;