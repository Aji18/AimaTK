// import community package
import * as React from 'react';
import {Button, createStyles, Tooltip, Typography, withStyles} from "@material-ui/core";
import Page, {defaultStyles} from "../../__components/Page";
import {
    Close as CloseIcon,
    NavigateBefore as NavigateBeforeIcon,
    NavigateNext as NavigateNextIcon
} from "@material-ui/icons";
import {WithStyles} from "@material-ui/core/es";
import * as classNames from "classnames";
import {ESOPSubPages} from "./index";

export interface ISOPViewProps {
    data: {
        show: boolean,
        showNext: boolean,
        showBefo: boolean,
        nowPage: ESOPSubPages,
        next?: string,
        befo?: string,
    }
    actions: {
        exit: () => void,
        exited: () => void,
        handleNext: (e: any, to?: ESOPSubPages) => void,
        handleBefo: (e: any) => void,
    },
    children?: any,
}

/*
            <div className={classes.navigation}>
                <Typography className={classes.navigationItem}>Kata Pengantar</Typography>
                <Typography className={classes.navigationItem}>Alur SOP</Typography>
                <Typography className={classes.navigationItem}>Keterangan SOP</Typography>
            </div>
            <div className={classes.line2}/>
 */

function SOPView ({ data, actions, classes, children }:ISOPViewProps&WithStyles) {
    const handleNext = () => actions.handleNext(undefined);
    const toKaPe = () => actions.handleNext(undefined, ESOPSubPages.KAPE);
    const toAlur = () => actions.handleNext(undefined, ESOPSubPages.ALUR);
    const toKete = () => actions.handleNext(undefined, ESOPSubPages.KETE);
    const toPlan   = () => actions.handleNext(undefined, ESOPSubPages.PLAN);
    const toDo   = () => actions.handleNext(undefined, ESOPSubPages.DO);
    const toChec = () => actions.handleNext(undefined, ESOPSubPages.CHEC);
    const toAct  = () => actions.handleNext(undefined, ESOPSubPages.ACT);

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
                    <Typography variant="headline">Standar Operasional Prosedur</Typography>
                    <div className={classes.navigation}>
                        <Typography className={classNames(classes.navigationItem, {
                            [classes.navigationItemActive]: data.nowPage === ESOPSubPages.KAPE
                        })}
                                    onClick={toKaPe}
                        >Kata Pengantar</Typography>
                        <Typography className={classNames(classes.navigationItem, {
                            [classes.navigationItemActive]: data.nowPage === ESOPSubPages.ALUR
                        })}
                                    onClick={toAlur}
                        >Alur SOP</Typography>
                        <Typography className={classNames(classes.navigationItem, {
                            [classes.navigationItemActive]: data.nowPage === ESOPSubPages.KETE
                        })}
                                    onClick={toKete}
                        >Keterangan SOP</Typography>
                        <Typography className={classNames(classes.navigationItem, {
                            [classes.navigationItemActive]: data.nowPage === ESOPSubPages.PLAN
                        })}
                                    onClick={toPlan}
                        >PLAN</Typography>
                        <Typography className={classNames(classes.navigationItem, {
                            [classes.navigationItemActive]: data.nowPage === ESOPSubPages.DO
                        })}
                                    onClick={toDo}
                        >DO</Typography>
                        <Typography className={classNames(classes.navigationItem, {
                            [classes.navigationItemActive]: data.nowPage === ESOPSubPages.CHEC
                        })}
                                    onClick={toChec}
                        >CHECK</Typography>
                        <Typography className={classNames(classes.navigationItem, {
                            [classes.navigationItemActive]: data.nowPage === ESOPSubPages.ACT
                        })}
                                    onClick={toAct}
                        >ACT</Typography>
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
export default withStyles(styles)<ISOPViewProps>(SOPView);