import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CustomerData {
    name: string;
    surname: string;
    fatherName: string;
    idNumber: number;
    pin: string;
    birthday: string;
    address: string;
    registerAddress: string;
    phoneNumber: number;
}

interface InitialStateType {
    customers: CustomerData[];
    count: number;
}

const initialState: InitialStateType = {
    customers: [],
    count: 0
};

const customerSlice = createSlice({
    name: "customers",
    initialState,
    reducers: {
        addCustomer: (state, action: PayloadAction<{ newCustomer: CustomerData }>) => {
            state.count++;
            const { newCustomer } = action.payload;
            newCustomer.id = state.count;
            state.customers.push(newCustomer);
        }
    }
});

export const { reducer: customerReducer, actions } = customerSlice;
export const { addCustomer } = actions;
