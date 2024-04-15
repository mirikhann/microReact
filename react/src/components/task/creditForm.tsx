import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import {Button, Typography} from "@mui/material";
import {useDispatch} from "react-redux";
import {TaskEnum} from "../../enum/taskEnum";
import {updateTask} from "../../redux/slices/taskSlice";

interface FormData {
    currency: string;
    purpose: string;
    amount: number;
    duration: number;
    interest: number;
}

const creditForm: React.FC = ({taskData,setStageCond}) => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState(taskData);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const saveAppFormData = () => {
        dispatch(updateTask({formData,nextStage:TaskEnum.GuarantorAdd}));
        setStageCond(TaskEnum.GuarantorAdd)
    }

    const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: parseInt(value, 10)
        }));
    };

    return (
        <form>
            <Typography variant="h5" style={{fontWeight:"bold"}}>
                İkinci mərhələ - Kredit barədə məlumat
            </Typography>
            <Box marginBottom={2}>
                <TextField
                    id="currency"
                    name="currency"
                    label="Currency"
                    variant="outlined"
                    select
                    value={formData.currency}
                    onChange={handleChange}
                    className="fieldPadding"
                    sx={{width:"150px"}}
                    margin="normal"
                >
                    <MenuItem value="USD">USD</MenuItem>
                    <MenuItem value="EUR">EUR</MenuItem>
                    <MenuItem value="GBP">GBP</MenuItem>
                </TextField>
                <TextField
                    id="purpose"
                    name="purpose"
                    label="Purpose"
                    variant="outlined"
                    select
                    value={formData.purpose}
                    onChange={handleChange}
                    className="fieldPadding"
                    sx={{width:"150px"}}
                    margin="normal"
                >
                    <MenuItem value="Loan">Loan</MenuItem>
                    <MenuItem value="Investment">Investment</MenuItem>
                    <MenuItem value="Savings">Savings</MenuItem>
                </TextField>
                <TextField
                    id="amount"
                    name="amount"
                    label="Amount"
                    type="number"
                    variant="outlined"
                    value={formData.amount}
                    onChange={handleNumberChange}
                    className="fieldPadding"
                    margin="normal"
                />
            </Box>
            <Box marginBottom={2}>
                <TextField
                    id="duration"
                    name="duration"
                    label="Duration (months)"
                    type="number"
                    variant="outlined"
                    value={formData.duration}
                    onChange={handleNumberChange}
                    className="fieldPadding"
                    margin="normal"
                />
                <TextField
                    id="interest"
                    name="interest"
                    label="Interest Rate (%)"
                    type="number"
                    variant="outlined"
                    value={formData.interest}
                    onChange={handleNumberChange}
                    className="fieldPadding"
                    margin="normal"
                />
            </Box>

            {formData.stageId == TaskEnum.CreditForm && (<Button variant="contained" style={{marginTop:"10px"}} onClick={saveAppFormData}>Yadda saxla</Button>)}
        </form>
    );
};

export default creditForm;
