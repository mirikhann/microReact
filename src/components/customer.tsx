import * as React from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";

interface CustomerData {
    name: string;
    surname: string;
    fatherName: string;
    idNumber: string;
    pin: string;
    birthday: string;
    address: string;
    registerAddress: string;
    phoneNumber: string;
}

interface Props {
    data: CustomerData;
}

const Customer: React.FC<Props> = ({ data }) => {
    return (
        <>
            <TableContainer sx={{ marginTop: 10 }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Adı</TableCell>
                            <TableCell>Soyadı</TableCell>
                            <TableCell>Ata adı</TableCell>
                            <TableCell>ŞV Nömrəsi</TableCell>
                            <TableCell>Fin Kodu</TableCell>
                            <TableCell>Doğum tarixi</TableCell>
                            <TableCell>Faktiki ünvan</TableCell>
                            <TableCell>Qeydiyyat ünvanı</TableCell>
                            <TableCell>Əlaqə nömrəsi</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>{data.name}</TableCell>
                            <TableCell>{data.surname}</TableCell>
                            <TableCell>{data.fatherName}</TableCell>
                            <TableCell>{data.idNumber}</TableCell>
                            <TableCell>{data.pin}</TableCell>
                            <TableCell>{data.birthday}</TableCell>
                            <TableCell>{data.address}</TableCell>
                            <TableCell>{data.registerAddress}</TableCell>
                            <TableCell>{data.phoneNumber}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}

export default Customer;
