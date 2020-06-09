import React,{ Component, Fragment } from "react";
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import { Toolbar, Grid, Button } from "@material-ui/core";
import { Appbar, ContainerGrid1,ContainerGrid2,MainTypo,NameTypo,ItemGrid1,ItemGrid2,ItemGrid3 ,HoriLine,ItemIcon,ItemList,ListText,MainList } from "./style";
import { Link } from "react-router-dom";





class AdminPage extends Component{
    
    render(){
        return(
            <Fragment>
                <Appbar position="static">
                    <Toolbar>
                        <MainTypo>
                            Manage Mart
                        </MainTypo>
                        <NameTypo>
                            Mr. Admin
                        </NameTypo>
                    </Toolbar>
                </Appbar>
                <Grid container>
                    <ContainerGrid1 container >
                        <ItemGrid1 item container >
                            <MainList component="nav" aria-label="main mailbox folders">
                                <ItemList button >
                                <ItemIcon>
                                    <InboxIcon />
                                </ItemIcon>
                                <Button component={Link} to={'/Showroom'} style={{ backgroundColor: 'transparent', textTransform:'capitalize', fontSize:'16px',fontFamily:'Roboto Slab',fontWeight:'400' }}>Showroom</Button>
                                </ItemList>
                            <HoriLine />
                                <ItemList button>
                                <ItemIcon>
                                    <DraftsIcon />
                                </ItemIcon>
                                <ListText primary="Drafts" />
                                </ItemList>
                            </MainList>
                        </ItemGrid1>
                    </ContainerGrid1>
                    <ContainerGrid2 container>
                        <ItemGrid2 item container>
                            Hi I am 2
                        </ItemGrid2>
                        <ItemGrid3 item container>
                            Hi I am 3
                        </ItemGrid3>
                    </ContainerGrid2>
                </Grid>
            </Fragment>
        )

    }
}

export default AdminPage;