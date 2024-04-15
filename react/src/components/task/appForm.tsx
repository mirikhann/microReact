import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import {Box, Button, Typography} from "@mui/material";
import {useDispatch} from "react-redux";
import {updateTask} from "../../redux/slices/taskSlice";
import {TaskEnum} from "../../enum/taskEnum";
const AppForm = ({taskData,setStageCond}) => {

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
        dispatch(updateTask({formData,nextStage:TaskEnum.CreditForm}));
        setStageCond(TaskEnum.CreditForm)
    }

    return (
        <form>
            <Typography variant="h5" style={{fontWeight:"bold"}}>
                Birinci mərhələ - Şəxs haqqında məlumat
            </Typography>
            <Box marginBottom={2}>
                <TextField
                    id="sector"
                    name="sector"
                    label="Fəaliyyət sektoru"
                    variant="outlined"
                    value={formData.sector}
                    onChange={handleChange}
                    className="fieldPadding"
                    margin="normal"
                />
                <TextField
                    id="salary"
                    name="salary"
                    label="Əmək haqqı"
                    variant="outlined"
                    value={formData.salary}
                    onChange={handleChange}
                    className="fieldPadding"
                    margin="normal"
                />
                <TextField
                    id="experienceMonth"
                    name="experienceMonth"
                    label="Təcrübə ay"
                    variant="outlined"
                    value={formData.experienceMonth}
                    onChange={handleChange}
                    className="fieldPadding"
                    margin="normal"
                />
            </Box>
            <Box marginBottom={2}>
                <TextField
                    id="experienceYear"
                    name="experienceYear"
                    label="Təcrübə il"
                    variant="outlined"
                    value={formData.experienceYear}
                    onChange={handleChange}
                    className="fieldPadding"
                    margin="normal"
                />
                <TextField
                    id="region"
                    name="region"
                    label="Region"
                    variant="outlined"
                    value={formData.region}
                    onChange={handleChange}
                    className="fieldPadding"
                    margin="normal"
                />
                <TextField
                    id="businessAddress"
                    name="businessAddress"
                    label="Biznes ünvanı"
                    variant="outlined"
                    value={formData.businessAddress}
                    onChange={handleChange}
                    className="fieldPadding"
                    margin="normal"
                />
            </Box>

            {formData.stageId == TaskEnum.AppForm && (<Button variant="contained" style={{marginTop:"10px"}} onClick={saveAppFormData}>Davam et</Button>)}
        </form>
    );
};

export default AppForm;
