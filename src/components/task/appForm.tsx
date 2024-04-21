import React from 'react';
import { useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { Box, Button, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { updateTask } from "../../redux/slices/taskSlice";
import { TaskEnum } from "../../enum/taskEnum";

interface FormData {
    sector: string;
    salary: string;
    experienceMonth: string;
    experienceYear: string;
    region: string;
    businessAddress: string;
}

interface Props {
    taskData: FormData;
    setStageCond: (stage: TaskEnum) => void;
}

const AppForm: React.FC<Props> = ({ taskData, setStageCond }) => {
    const dispatch = useDispatch();
    const { register, handleSubmit, setValue, formState: { errors } } = useForm<FormData>({ defaultValues: taskData });

    const onSubmit = (data: FormData) => {
        dispatch(updateTask({ formData: data, nextStage: TaskEnum.CreditForm }));
        setStageCond(TaskEnum.CreditForm);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Typography variant="h5" style={{ fontWeight: "bold" }}>
                Birinci mərhələ - Şəxs haqqında məlumat
            </Typography>
            <Box marginBottom={2}>
                <TextField
                    id="sector"
                    label="Fəaliyyət sektoru"
                    variant="outlined"
                    {...register("sector", { required: true })}
                    error={!!errors.sector}
                    helperText={errors.sector && "vacib"}
                    className="fieldPadding"
                    margin="normal"
                />
                <TextField
                    id="salary"
                    label="Əmək haqqı"
                    variant="outlined"
                    {...register("salary", { required: true })}
                    error={!!errors.salary}
                    helperText={errors.salary && "vacib"}
                    className="fieldPadding"
                    margin="normal"
                />
                <TextField
                    id="experienceMonth"
                    label="Təcrübə ay"
                    variant="outlined"
                    {...register("experienceMonth", { required: true })}
                    error={!!errors.experienceMonth}
                    helperText={errors.experienceMonth && "vacib"}
                    className="fieldPadding"
                    margin="normal"
                />
            </Box>
            <Box marginBottom={2}>
                <TextField
                    id="experienceYear"
                    label="Təcrübə il"
                    variant="outlined"
                    {...register("experienceYear", { required: true })}
                    error={!!errors.experienceYear}
                    helperText={errors.experienceYear && "vacib"}
                    className="fieldPadding"
                    margin="normal"
                />
                <TextField
                    id="region"
                    label="Region"
                    variant="outlined"
                    {...register("region", { required: true })}
                    error={!!errors.region}
                    helperText={errors.region && "vacib"}
                    className="fieldPadding"
                    margin="normal"
                />
                <TextField
                    id="businessAddress"
                    label="Biznes ünvanı"
                    variant="outlined"
                    {...register("businessAddress", { required: true })}
                    error={!!errors.businessAddress}
                    helperText={errors.businessAddress && "vacib"}
                    className="fieldPadding"
                    margin="normal"
                />
            </Box>
            {taskData.stageId === TaskEnum.AppForm && ( <Button type="submit" variant="contained" style={{ marginTop: "10px" }}>Davam et</Button>)}

        </form>
    );
};

export default AppForm;
