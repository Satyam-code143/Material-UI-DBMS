import React, { useState } from 'react';
import { AppBar,Toolbar,Typography,Paper,Icon, Grid, Button } from '@material-ui/core';
import * as myConstClass from './style';
import Login from './Login';



function Home(){
    const [isLogin, setLog]=useState('');
    const [isIcon, setIcon]=useState('');

    function isAdmin(e){
        setLog(true);
        setIcon('admin');
    }

    function isManager(e){
        setLog(true);
        setIcon('manager');
    }

    const newClass=myConstClass.homeStyle();
    return(
        <div className={newClass.main}>
            <AppBar position="static" className={newClass.navBar} >
                <Toolbar>
                    <Typography variant="h6" className={newClass.logo}>
                        Manage Mart
                    </Typography>
                </Toolbar>
             </AppBar>
             <div className={newClass.container}>
                 {isLogin?<Login icon={isIcon}/>:
                <Paper elevation={3} className={newClass.box}>
                    <Grid container className={newClass.grid} >
                        <Grid item className={newClass.grid}>
                            <Icon className={newClass.icons}>admin_panel_settings</Icon>
                            <br/>
                            <Typography className={newClass.headTypo}>
                                Admins Login 
                            </Typography>
                            <Typography className={newClass.subTypo}>
                                Only Admins can Login.
                            </Typography>
                            <br/>
                            <Button variant="contained" disableElevation className={newClass.button} onClick={isAdmin}>Login</Button>
                        </Grid>
                    </Grid>
                    <div className={newClass.vl}/>
                    <Grid container className={newClass.grid} >
                        <Grid item className={newClass.grid}>
                            <Icon className={newClass.icons}>account_circle</Icon>
                            <br/>
                            <Typography className={newClass.headTypo}>
                                Managers Login
                            </Typography>
                            <Typography className={newClass.subTypo}>
                                Only Managers can Login.
                            </Typography>
                            <br/>
                            <Button variant="contained" disableElevation className={newClass.button} onClick={isManager} >Login</Button>
                        </Grid>
                    </Grid>
                </Paper>}
             </div>
        </div>
        
    )
}

export default Home;
