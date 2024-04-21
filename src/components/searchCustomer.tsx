import { ChangeEvent, FC, useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Customer from "./customer";
import { getCustomerByPin } from "../models/customerModel";
import { NavLink, useNavigate } from "react-router-dom";
import { generateTaskData } from "../helper/taskHelper";
import { addTask } from "../redux/slices/taskSlice";
import { RootState } from "../redux/store";

interface Props {
    guarantor?: boolean;
}

const SearchCustomer: FC<Props> = ({ guarantor }) => {
    const [pin, setPin] = useState<string>("");
    const [customer, setCustomer] = useState<any>(null);
    const [checkCustomer, setCheckCustomer] = useState<boolean>(false);
    const dispatch = useDispatch();
    const { taskCount } = useSelector((store: RootState) => store.tasks);
    const navigate = useNavigate();

    const searchCustomerByPin = () => {
        const foundCustomer = getCustomerByPin(pin);
        if (foundCustomer !== undefined) {
            setCustomer(foundCustomer);
            setCheckCustomer(false);
        } else {
            setCustomer("");
            setCheckCustomer(true);
        }
    };

    const createNewTask = () => {
        if (customer) {
            const task = generateTaskData(customer.id);
            dispatch(addTask({ newTask: task }));
            navigate("/task/" + (taskCount + 1));
        }
    };


    return (
        <>
            <Box sx={{marginTop:"15px"}}>
            <TextField id="outlined-basic" label="Fin kod" variant="outlined" value={pin} onChange={(e:ChangeEvent<HTMLInputElement>)=>{setPin(e.target.value)}}
                       sx={{
                           height: "20px",
                           lineHeight: "20px",
                           padding: "auto"
                       }}
            />
            <Button variant="contained" className="send" onClick={searchCustomerByPin}>Axtar</Button>
            </Box>
            {customer && (
                <>
                    <Customer data={customer}/>
                    { (!guarantor && <Button variant="contained" className="send" sx={{float:"right"}} onClick={createNewTask}> Yeni Sifariş </Button>)}
                </>
            )}
            {(checkCustomer && !guarantor) ? (<><Button variant="contained" className="send" sx={{float:"right"}} to="/customerData" component={NavLink}> Yeni Müştəri </Button></>) : ""}
            {(!checkCustomer && guarantor) && (<><Button variant="contained" className="send" sx={{float:"right"}}> Əlavə et </Button></>)}
        </>
    )
}


export default SearchCustomer;