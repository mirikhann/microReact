import {createSlice} from "@reduxjs/toolkit";
export interface CustomerData {
    name:string;
    surname:string;
    fatherName:string;
    idNumber:string;
    pin:string;
    birthday:string;
    address:string;
    registerAddress:string;
    phoneNumber:string;
}

const initialState = {
    customers: [],
    count: 0
};


const customerSlice = createSlice({
    name: "customers",
    initialState,
    reducers:{
        addCustomer: (state, action) => {
            state.count++;
            const {newCustomer} = action.payload;
            newCustomer.id = Number(state.count);
            state.customers = [...state.customers, newCustomer];
        }
    }
});
export const { reducer: customerReducer} = customerSlice;
export const { addCustomer } = customerSlice.actions;
