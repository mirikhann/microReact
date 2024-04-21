import React from 'react';
import { useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import { Button, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { TaskEnum } from "../../enum/taskEnum";
import { updateTask } from "../../redux/slices/taskSlice";

interface FormData {
    currency: string;
    purpose: string;
    amount: number;
    duration: number;
    interest: number;
}

interface Props {
    taskData: FormData;
    setStageCond: (stage: TaskEnum) => void;
}

const CreditForm: React.FC<Props> = ({ taskData, setStageCond }) => {
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm<FormData>({ defaultValues: taskData });

    const onSubmit = (data: FormData) => {
        dispatch(updateTask({ formData: data, nextStage: TaskEnum.GuarantorAdd }));
        setStageCond(TaskEnum.GuarantorAdd);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Typography variant="h5" style={{ fontWeight: "bold" }}>
                İkinci mərhələ - Kredit barədə məlumat
            </Typography>
            <Box marginBottom={2}>
                <TextField
                    id="currency"
                    name="currency"
                    label="Currency"
                    variant="outlined"
                    select
                    {...register("currency")}
                    className="fieldPadding"
                    sx={{ width: "150px" }}
                    margin="normal"
                    value={taskData.currency}
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
                    {...register("purpose")}
                    className="fieldPadding"
                    sx={{ width: "150px" }}
                    margin="normal"
                    value={taskData.purpose}
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
                    {...register("amount")}
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
                    {...register("duration")}
                    className="fieldPadding"
                    margin="normal"
                />
                <TextField
                    id="interest"
                    name="interest"
                    label="Interest Rate (%)"
                    type="number"
                    variant="outlined"
                    {...register("interest")}
                    className="fieldPadding"
                    margin="normal"
                />
            </Box>

            {taskData.stageId === TaskEnum.CreditForm && ( <Button type="submit" variant="contained" style={{ marginTop: "10px" }}>Yadda saxla</Button>)}

        </form>
    );
};

export default CreditForm;
