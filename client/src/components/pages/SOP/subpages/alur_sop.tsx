import * as React from "react";
import {createStyles, Typography, WithStyles, withStyles} from "@material-ui/core";
import SubPage from "../../../__components/SubPage/index";
import {ESOPSubPages} from "../index";

const onExited = () => {
    // do something
};

export interface IAlurSOPProps {
    showed: ESOPSubPages,
    reverse: boolean,
}

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;
function AlurSOPView({ showed, reverse, classes }: WithStyles&IAlurSOPProps) {
    const show = showed === ESOPSubPages.ALUR;
    return (
        <SubPage show={show} onExited={onExited} appear={true} reverse={reverse}>
            <div className={classes.container} style={(!show) ? { overflow: 'hidden' } : undefined}>
                <div className={classes.content}>
                    <Typography className={classes.title} variant="subheading">ALUR</Typography>
                    <Typography className={classes.title} variant="subheading">Standar Operasional Prosedur</Typography>
                    <img style={{
                        width: 760,
                        height: 'auto',
                    }} src={`${API_ENDPOINT}public/img/flow-a.jpg`} />
                    <img style={{
                        width: 760,
                        height: 'auto',
                    }} src={`${API_ENDPOINT}public/img/flow-b.jpg`} />
                    <img style={{
                        width: 760,
                        height: 'auto',
                    }} src={`${API_ENDPOINT}public/img/flow-c.jpg`} />
                    <img style={{
                        width: 760,
                        height: 'auto',
                    }} src={`${API_ENDPOINT}public/img/flow-d.jpg`} />
                    <img style={{
                        width: 760,
                        height: 'auto',
                    }} src={`${API_ENDPOINT}public/img/flow-e.jpg`} />
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

export default withStyles(styles)<IAlurSOPProps>(AlurSOPView);