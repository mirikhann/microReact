import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import {NavLink} from "react-router-dom";
import {Button} from "@mui/material";
import {TaskEnum} from "../enum/taskEnum";

function Navbar({task,stageCond}) {
    const handleClick = (event) => {
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Button className={`navMenu ${stageCond === TaskEnum.AppForm && 'active'}`}
                                onClick={(e)=>handleClick(e.target)}
                                disabled={task.stageId < TaskEnum.AppForm}
                                component={NavLink} to={`/task/${task.id}/${TaskEnum.AppForm}`}
                        >Şəxs haqqında məlumat</Button>

                        <Button className={`navMenu ${stageCond === TaskEnum.CreditForm && 'active'}`}
                                onClick={(e)=>handleClick(e.target)}
                                disabled={task.stageId < TaskEnum.CreditForm}
                                component={NavLink} to={`/task/${task.id}/${TaskEnum.CreditForm}`}
                        >Kredit barədə məlumat</Button>

                        <Button className={`navMenu ${stageCond === TaskEnum.GuarantorAdd && 'active'}`}
                                onClick={(e)=>handleClick(e.target)}
                                disabled={task.stageId < TaskEnum.GuarantorAdd}
                                component={NavLink} to={`/task/${task.id}/${TaskEnum.GuarantorAdd}`} >Zaminin əlavəsi</Button>
                        <Button className="navMenu"  onClick={(e)=>handleClick(e.target)}  disabled >Kredit Kalkulyatoru</Button>
                        <Button className="navMenu"  onClick={(e)=>handleClick(e.target)}  disabled >Xülasə</Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navbar;