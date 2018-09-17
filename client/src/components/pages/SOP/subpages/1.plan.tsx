import * as React from "react";
import {createStyles, withStyles, WithStyles} from "@material-ui/core";
import {Typography} from "@material-ui/core";
import SubPage from "../../../__components/SubPage/index";
import {ESOPSubPages} from "../index";

const onExited = () => {
    // do something
};

export interface IPlanProps {
    showed: ESOPSubPages,
    reverse: boolean,
}

function PlanView({ showed, reverse, classes }: WithStyles&IPlanProps) {
    const show = showed === ESOPSubPages.PLAN;
    return (
        <SubPage show={show} onExited={onExited} appear={true} reverse={reverse}>
            <div className={classes.container} style={(!show) ? { overflow: 'hidden' } : undefined}>
                <div className={classes.content}>
                    <Typography className={classes.title} variant="subheading">PLAN</Typography>
                    <Typography className={classes.title} variant="subheading">Perancangan</Typography>
                    <Typography className={classes.normal}>
                        Langkah  I adalah tahap perencanaan (Plan) terdiri dari: <br />
                        1) Kepala TK menentukan persyaratan dan kriteria tim auditor. <br />
                        2) Kepala TK membuat surat tugas kepada tim auditor. <br />
                        3) Persiapan tim auditor.
                    </Typography>
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
        top: 0,
        height: '100%',
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

export default withStyles(styles)<IPlanProps>(PlanView);