import { 
    AppBar,
    Toolbar,
    Typography,
    Grid,
    List,
    ListItem,
    ListItemIcon,
    Divider,
    ListItemText,
    styled,
    Button
} from "@material-ui/core";



export const Appbar=styled(AppBar)({
    backgroundColor:'transparent',
    
});


export const MainTypo=styled(Typography)({
    fontSize:'28px',
    fontFamily:'Roboto Slab',
    flex:1
});


export const NameTypo=styled(Typography)({
    fontSize:'18px',
    fontFamily:'Roboto Slab',
});


export const ContainerGrid1=styled(Grid)({
    width:210,
    flex:1
});


export const ItemGrid1=styled(Grid)({
    backgroundColor:'transparent',
});


export const ItemGrid2=styled(Grid)({
    backgroundColor:'red',
    width:575
});


export const ItemGrid3=styled(Grid)({
    backgroundColor:'blue',
    width:580
});


export const MainList=styled(List)({
    width:'100%',
    height:'580px'
    
});


export const ContainerGrid2=styled(Grid)({
    width:1155
});

