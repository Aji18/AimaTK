import {grey, amber, red, green, lightGreen} from "@material-ui/core/colors";

export const line2Height= 110;

export const defaultStyles = {
    line: {
        position: 'absolute',
        top: 75,
        left: 20,
        width: 'calc(100% - 40px)',
        height: '0px',
        borderBottom: '1px solid grey'
    },
    line2: {
        position: 'absolute',
        top: line2Height,
        left: 20,
        width: 'calc(100% - 40px)',
        height: '0px',
        borderBottom: '1px solid grey'
    },
    header: {
        minHeight: 75,
        maxHeight: 75,
        overflow: 'hidden',
        display: 'flex',
    },
    headerCenter: {
        margin: 0,
        width: 'calc(100% - 600px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    headerLeft: {
        paddingLeft: 30,
        width: 300,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    headerRight: {
        paddingRight: 30,
        width: 300,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    navigation: {
        margin: 0,
        marginBottom: -10,
        minHeight: 22, // minHeight: line2Height-75,
        maxHeight: 22, // maxHeight: line2Height-75,
        width: '100%',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    navigationItem: {
        marginLeft: 10,
        marginRight: 10,
        fontSize: '0.8rem',
        color: grey[700],
        transition: `all 600ms cubic-bezier(0.165, 0.84, 0.44, 1)`,
        transitionDelay: '400ms',
        cursor: 'pointer',
    },
    navigationItemActive: {
        transform: 'scale(1.2)',
        color: 'black',
        cursor: 'default',
    },
    content: {
        height: 'calc(100% - 75px)',
    },
    content2: {
        height: 'calc(100% - '+line2Height+'px)',
    },
    btn: {
        marginRight: 10,
        background: 'linear-gradient(45deg, '+green.A700+' 35%, '+lightGreen.A700+' 90%)',
        minHeight: 34,
        height: 34,
        padding: '0 16px 0 14px',
        boxShadow: 'none',
        fontSize: '0.7em'
    },
    btnClose: {
        background: 'linear-gradient(45deg, '+red.A200+' 35%, '+amber[800]+' 90%)',
        marginRight: 0,
    },
    btnNext: {
        padding: '0 10px 0 18px',
    },
    btnIcon: {
        fontSize: 17,
    }
};