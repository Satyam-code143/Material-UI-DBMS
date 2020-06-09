import { makeStyles , styled, Paper, Typography ,Icon} from '@material-ui/core';
import Background from '../../Images/1.jpg';




export const homeStyle = makeStyles((theme)=>({
    navBar:{
        backgroundColor:'rgba(0,0,0,0.4)',
    },
    main:{
        backgroundImage:'url('+ Background +')',
        backgroundSize:'cover',
        height:'644px'
    },
    logo:{
        fontSize:'28px',
        fontFamily:'Roboto Slab',
        fontWeight: 700,
    },
    box:{
        width:620,
        height:360,
        backgroundColor:' rgba(221, 221, 221, 0.5)',
        borderRadius:20,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        
    },
    container:{
        width:'100%',
        height:'500px',
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    vl:{
        width: '2px',
        backgroundColor: 'aliceblue',
        height: '290px',
        borderRadius: '50%',
    }
    ,
    grid:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        alignContent:'center',
        color:'#fff',
    },
    headTypo:{
        fontWeight:'600',
        fontSize:'22px',
        fontFamily:'Roboto Slab',
    },
    subTypo:{
        color:'rgb(148, 9, 245)',
        fontWeight:'500',
        fontSize:'16px',
    },
    button:{
        fontFamily:'Roboto Slab',
        backgroundColor:'#06b933',
        color:'#fff',
        '&:hover': {
            backgroundColor: 'rgb(74, 255, 0)',
        }
    },
    icons:{
        fontSize:'80px',
        color:'#000'
    }
}));

export const PaperBox=styled(Paper)({
        width:360,
        height:360,
        backgroundColor:'rgba(221, 221, 221, 0.5)',
        borderRadius:20,
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',

});


export const MainTypo=styled(Typography)({
    fontFamily:'Roboto Slab',
    fontSize:'22px',
    color:'#000'

});

export const IconChose=styled(Icon)({
    fontSize:'80px',
    color:'#000'

});

