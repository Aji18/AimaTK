// import community package
import * as React from 'react';
import { Button, Typography, withStyles, WithStyles } from "@material-ui/core"
import {Link} from "react-router-dom";
import classNames from 'classnames';


import {ILink} from "../../App";

export interface IHomeViewProps {
    data: {
        active: boolean,
        toLink: ILink[],
    }
    children?: any
}

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;
function HomeView({ data, children, classes }: IHomeViewProps&WithStyles) {
    return (
        <div className={classes.root}>
            <div className={classNames( classes.content, data.active ? classes.contentActive : classes.contentBlur)}>
                <div className={classes.imgBackground} />
                <div className={classes.transparentBackground}/>

                <Typography style={{
                    marginTop: '-7%',
                    marginBottom: 10,
                    fontSize: '3rem',
                }}> AimaTK </Typography>
                <Typography style={{
                    marginBottom: 5,
                    fontSize: '2rem',
                }}> AUDIT INTERNAL MANAJEMEN TAMAN KANAK-KANAK </Typography>
                <Typography style={{
                    fontSize: '1.5rem',
                }}> Oleh Sunarni </Typography>

                <div className={classes.imgContainer}>
                    <img className={classes.imgLogo} src={`${API_ENDPOINT}public/img/himapudi.png`} alt="Logo Himapudi"/>
                    <img className={classes.imgLogo} src={`${API_ENDPOINT}public/img/taman-kanak.png`} alt="Logo Taman Kanak-Kanak"/>
                    <img className={classes.imgLogo} src={`${API_ENDPOINT}public/img/igtk.png`} alt="Logo Ikatan Guru Taman Kanak-Kanak"/>
                </div>

                <div className={classes.nav}>
                    {data.toLink.map(link => (
                        <Button
                            variant="outlined"
                            color="primary"
                            component={Link as any} {...{ to: link.to } as any}
                            key={link.to}
                            className={classes.navItem}
                        >
                            { link.title }
                        </Button>
                    ))}
                </div>
            </div>
            { children }
        </div>
    );
}

const absolute = {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    maxHeight: '100%',
    width: '100%',
    maxWidth: '100%',
};
const styles = {
    imgBackground: {
        position: 'absolute',
        top: -30,
        left: -30,

        backgroundImage: `url(${API_ENDPOINT}public/img/home.jpg)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',

        width: 'calc(100% + 60px)',
        height: 'calc(100% + 60px)',

        filter: 'blur(30px)',
        zIndex: -1,
    },
    transparentBackground: {
        ...absolute,
        background: 'rgba(255, 255, 255, 0.25)',
        zIndex: -1,
    },

    root: {
        ...absolute,
        overflow: 'hidden',
    },
    content: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    contentActive: {
        transition: `all 500ms cubic-bezier(0.165, 0.84, 0.44, 1)`,
        filter: 'blur(0px)',
    },
    contentBlur: {
        transition: `all 500ms cubic-bezier(0.165, 0.84, 0.44, 1)`,
        filter: 'blur(25px)',
    },
    nav: {
        position: 'absolute',
        bottom: '12%',
        width: '75%',
        display: 'flex',
        justifyContent: 'space-between',
    },
    navItem: {
        width: 200,
        height: 50,
        border: '3px solid rgba(63, 81, 181, 0.5)',
        fontSize: '1.25rem',
    },

    imgContainer: {
        marginTop: 25,
        marginBottom: 25,
        width: '60%',
        display: 'flex',
        justifyContent: 'space-between',
    },
    imgLogo: {
        height: 175,
    }
};

export default withStyles(styles as any)<IHomeViewProps>(HomeView);