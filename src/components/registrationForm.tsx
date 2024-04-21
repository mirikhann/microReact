import React, { useState, ChangeEvent } from 'react';
import TextField from '@mui/material/TextField';
import { Box, Button, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { CustomerData, addCustomer } from "../redux/slices/customerSlice";
import { useNavigate } from "react-router-dom";

const RegistrationForm: React.FC = () => {
    const dispatch = useDispatch();
    const [insert, setInsert] = useState<boolean>(false);
    const navigate = useNavigate();

    const [formData, setFormData] = useState<CustomerData>({
        name: '',
        surname: '',
        fatherName: '',
        pin: '',
        birthday: '',
        address: '',
        registerAddress: '',
        phoneNumber: '',
        idNumber: '',
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = () => {
        dispatch(addCustomer({ newCustomer: formData }));
        setInsert(true);
        setTimeout(() => {
            navigate('/searchCustomer');
        }, 2000);
    };

    return (
        <form>
            <Typography variant="h5" style={{ fontWeight: "bold" }}>
                Müştəri qeydiyyatı
            </Typography>
            <Box>
                <TextField
                    id="name"
                    name="name"
                    label="Ad"
                    variant="outlined"
                    value={formData.name}
                    onChange={handleChange}
                    className="fieldPadding"
                    margin="normal"
                />
                <TextField
                    id="surname"
                    name="surname"
                    label="Soyad"
                    variant="outlined"
                    value={formData.surname}
                    onChange={handleChange}
                    className="fieldPadding"
                    margin="normal"
                />
                <TextField
                    id="fatherName"
                    name="fatherName"
                    label="Ata adı"
                    variant="outlined"
                    value={formData.fatherName}
                    onChange={handleChange}
                    className="fieldPadding"
                    margin="normal"
                />
            </Box>
            <Box>
                <TextField
                    id="pin"
                    name="pin"
                    label="Fin"
                    variant="outlined"
                    value={formData.pin}
                    onChange={handleChange}
                    className="fieldPadding"
                    margin="normal"
                />
                <TextField
                    id="idNumber"
                    name="idNumber"
                    label="Sənədin nömrəsi"
                    variant="outlined"
                    value={formData.idNumber}
                    onChange={handleChange}
                    className="fieldPadding"
                    margin="normal"
                />
                <TextField
                    id="birthday"
                    name="birthday"
                    label="Doğum tarixi"
                    variant="outlined"
                    value={formData.birthday}
                    onChange={handleChange}
                    className="fieldPadding"
                    margin="normal"
                />
            </Box>
            <Box>
                <TextField
                    id="address"
                    name="address"
                    label="Faktiki ünvan"
                    variant="outlined"
                    value={formData.address}
                    onChange={handleChange}
                    className="fieldPadding"
                    margin="normal"
                />
                <TextField
                    id="registerAddress"
                    name="registerAddress"
                    label="Qeydiyyat ünvanı"
                    variant="outlined"
                    value={formData.registerAddress}
                    onChange={handleChange}
                    className="fieldPadding"
                    margin="normal"
                />
                <TextField
                    id="phoneNumber"
                    name="phoneNumber"
                    label="Əlaqə nömrəsi"
                    variant="outlined"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="fieldPadding"
                    margin="normal"
                />
            </Box>
            <Button variant="contained" style={{ marginTop: "10px" }} onClick={handleSubmit}>Yadda saxla</Button>

            {insert && (<Box className="alert-success">Yeni müştəri qeydiyyata alındı. Fin-i daxil etməklə yeni sifariş yarada bilərsiniz.</Box>)}
        </form>
    );
};

export default RegistrationForm;
