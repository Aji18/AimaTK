// import community package
import * as React from 'react';
import {EAimaTKSubPages} from "./index";
import {Button, createStyles, Tooltip, Typography, withStyles} from "@material-ui/core";
import {defaultStyles} from "../../__components/Page";
import {
    Close as CloseIcon,
    NavigateBefore as NavigateBeforeIcon,
    NavigateNext as NavigateNextIcon
} from "@material-ui/icons";
import * as classNames from "classnames";
import Page from "../../__components/Page";
import {WithStyles} from "@material-ui/core";

export interface IAimaTKViewProps {
    data: {
        show: boolean,
        showNext: boolean,
        showBefo: boolean,
        nowPage: EAimaTKSubPages,
        next?: string,
        befo?: string,
    }
    actions: {
        exit: () => void,
        exited: () => void,
        handleNext: (e: any, to?: EAimaTKSubPages) => void,
        handleBefo: (e: any) => void,
    },
    children?: any,
}

function AimaTKView({ data, actions, classes, children }:IAimaTKViewProps&WithStyles) {
    const handleNext = () => actions.handleNext(undefined);
    const toPend = () => actions.handleNext(undefined, EAimaTKSubPages.PEND);
    const toFlow = () => actions.handleNext(undefined, EAimaTKSubPages.FLOW);
    const toPera = () => actions.handleNext(undefined, EAimaTKSubPages.PERA);
    const toPlan = () => actions.handleNext(undefined, EAimaTKSubPages.PLAN);
    const toDo   = () => actions.handleNext(undefined, EAimaTKSubPages.DO);
    const toChec = () => actions.handleNext(undefined, EAimaTKSubPages.CHEC);
    const toAct  = () => actions.handleNext(undefined, EAimaTKSubPages.ACT);
    const toPenu = () => actions.handleNext(undefined, EAimaTKSubPages.PENU);

    return (
        <Page show={data.show} onExited={actions.exited}>
            <div className={classes.header}>
                <div className={classes.headerLeft}>
                    {(data.showBefo) &&
                        <Tooltip title={data.befo} placement="bottom">
                            <Button
                            variant="extendedFab"
                            color="primary"
                            value="Close"
                            className={classes.btn}
                            onClick={actions.handleBefo}
                            >
                                <NavigateBeforeIcon className={classes.btnIcon}/>
                                Sebelumnya
                            </Button>
                        </Tooltip>
                    }
                </div>
                <div className={classes.headerCenter}>
                    <Typography variant="headline">Aima TK</Typography>
                    <div className={classes.navigation}>
                        <Typography className={classNames(classes.navigationItem, {
                            [classes.navigationItemActive]: data.nowPage === EAimaTKSubPages.PEND
                        })}
                                    onClick={toPend}
                        >Pendahuluan</Typography>
                        <Typography className={classNames(classes.navigationItem, {
                            [classes.navigationItemActive]: data.nowPage === EAimaTKSubPages.FLOW
                        })}
                                    onClick={toFlow}
                        >Flowchart Aima TK</Typography>
                        <Typography className={classNames(classes.navigationItem, {
                            [classes.navigationItemActive]: data.nowPage === EAimaTKSubPages.PERA
                        })}
                                    onClick={toPera}
                        >Perangkat Aima TK</Typography>
                        <Typography className={classNames(classes.navigationItem, {
                            [classes.navigationItemActive]: data.nowPage === EAimaTKSubPages.PLAN
                        })}
                                    onClick={toPlan}
                        >PLAN</Typography>
                        <Typography className={classNames(classes.navigationItem, {
                            [classes.navigationItemActive]: data.nowPage === EAimaTKSubPages.DO
                        })}
                                    onClick={toDo}
                        >DO</Typography>
                        <Typography className={classNames(classes.navigationItem, {
                            [classes.navigationItemActive]: data.nowPage === EAimaTKSubPages.CHEC
                        })}
                                    onClick={toChec}
                        >CHECK</Typography>
                        <Typography className={classNames(classes.navigationItem, {
                            [classes.navigationItemActive]: data.nowPage === EAimaTKSubPages.ACT
                        })}
                                    onClick={toAct}
                        >ACT</Typography>
                        <Typography className={classNames(classes.navigationItem, {
                            [classes.navigationItemActive]: data.nowPage === EAimaTKSubPages.PENU
                        })}
                                    onClick={toPenu}
                        >Penutup</Typography>
                    </div>
                </div>
                <div className={classes.headerRight}>
                    {(data.showNext) &&
                        <Tooltip title={data.next} placement="bottom">
                            <Button
                                variant="extendedFab"
                                color="primary"
                                value="Close"
                                className={classNames(classes.btn, classes.btnNext)}
                                onClick={handleNext}
                            >
                                Selanjutnya
                                <NavigateNextIcon className={classes.btnIcon}/>
                            </Button>
                        </Tooltip>
                    }
                    <Tooltip title="Kembali ke Halaman Utama" placement="bottom">
                        <Button
                            variant="extendedFab"
                            color="primary"
                            value="Close"
                            className={classNames(classes.btn, classes.btnClose)}
                            onClick={actions.exit}
                        >
                            <CloseIcon className={classes.btnIcon}/>
                            Tutup
                        </Button>
                    </Tooltip>
                </div>
            </div>
            <div className={classes.line}/>
            <div className={classes.content}>
                { children }
            </div>
        </Page>
    );
}

const styles = createStyles({
    ...defaultStyles,
} as any);
export default withStyles(styles)<IAimaTKViewProps>(AimaTKView);