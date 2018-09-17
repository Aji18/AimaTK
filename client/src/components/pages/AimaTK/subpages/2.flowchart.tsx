import * as React from "react";
import {createStyles, withStyles, WithStyles} from "@material-ui/core";
import {Typography} from "@material-ui/core";
import SubPage from "../../../__components/SubPage/index";
import {EAimaTKSubPages} from "../index";

const onExited = () => {
    // do something
};

export interface IFlowProps {
    showed: EAimaTKSubPages,
    reverse: boolean,
}

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;
function FlowView({ showed, reverse, classes }: WithStyles&IFlowProps) {
    const show = showed === EAimaTKSubPages.FLOW;
    return (
        <SubPage show={show} onExited={onExited} appear={true} reverse={reverse}>
            <div className={classes.container} style={(!show) ? { overflow: 'hidden' } : undefined}>
                <div className={classes.content}>
                    <Typography className={classes.title} variant="subheading">ALUR FLOWCHART</Typography>
                    <Typography className={classes.title} variant="subheading">AUDIT INTERNAL MANAJEMEN TAMAN KANAK-KANAK (AIMA TK)</Typography>
                    <Typography className={classes.normal}>
                        Perangkat AIMA TK, terdiri dari: a) Perencanaan (PLAN), b) Pelaksanaan (DO), c) Pemeriksaan/monitoring & evaluasi (CHECK), dan  d)  Tindak lanjut (ACT).  Alur Flowchart  AIMA TK tertera pada Gambar di bawah ini.
                    </Typography>
                    <img style={{
                        width: 760,
                        height: 'auto',
                    }} src={`${API_ENDPOINT}public/img/flowchart-aima.jpg`} />
                </div>
            </div>
        </SubPage>
    )
}

const styles = createStyles({
    title: {
        marginBottom: '0.14in',
        lineHeight: '120%',
        textAlign: 'center',
    },
    normal: {
        textIndent: '0.28in',
        marginBottom: '0.14in',
        lineHeight: '0.19in',
        textAlign: 'justify'
    },
    rNormal: {
        marginLeft: '0.28in',
        textIndent: '-0.28in',
        marginBottom: '0.14in',
        lineHeight: '0.19in',
        textAlign: 'justify'
    },
    container: {
        position: 'absolute',
        top: 2,
        height: 'calc(100% - 2px)',
        width: '100%',
        overflow: 'auto',
        marginLeft: ((window as any).chrome) ? -5 : 0,
        display: 'flex',
        justifyContent: 'center',

        '&::-webkit-scrollbar': {
            width: 8,
            backgroundColor: 'rgba(245, 245, 245, 0.4)',
        },
        '&::-webkit-scrollbar-thumb': {
            borderRadius: 4,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
        '&::-webkit-scrollbar-track': {
            boxShadow: 'inset 0 0 6px rgba(0, 0, 0, 0.3)',
            backgroundColor: 'rgba(245, 245, 245, 0.4)',
            borderRadius: 4,
        }
    },
    content: {
        width: '100%',
        maxWidth: 760,
        marginBottom: 25,
        marginTop: 25,
    },
});

export default withStyles(styles)<IFlowProps>(FlowView);