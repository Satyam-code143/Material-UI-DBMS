import React, { Fragment} from 'react';
import { PaperBox, MainTypo, IconChose} from './style';
import { FormControl, Button, TextField, Icon } from '@material-ui/core';




class Login extends React.Component{
    render(){
        return(
           <Fragment>
               <PaperBox elevation={3} >
                   {this.props.icon === 'admin'?<IconChose>admin_panel_settings</IconChose>:<IconChose>account_circle</IconChose>}
                    <MainTypo>
                        Login
                    </MainTypo>
                    <br/>
                    <FormControl>
                        <TextField id="username"  style={{width:250, fontFamily:'Roboto Slab'}} label='Username' />
                    </FormControl>
                    <br/>
                    <FormControl style={{display:'flex'}}>
                        <TextField id="password" type='password' style={{width:250, fontFamily:'Roboto Slab'}} label='Password'/>
                        
                    </FormControl>
                    <br/>
                    <Button color='primary' varient='contained' style={{width:250, backgroundColor:'blue',color:'#fff', fontWeight:500 }}>Signin</Button>
               </PaperBox>
           </Fragment>
        )
    }
    
}

export default Login;
