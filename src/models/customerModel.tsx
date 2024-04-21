import {store} from "../redux/store";

export const getCustomerByPin = (customerPin) =>{
    const customers = store.getState().customers.customers;
    return customers.find(customer => customer.pin === customerPin);
}