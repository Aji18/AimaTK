// import community package
import * as React from 'react';
import {Button, createStyles, Tooltip, Typography, withStyles, WithStyles} from "@material-ui/core";
import {
    Close as CloseIcon,
    NavigateBefore as NavigateBeforeIcon,
    NavigateNext as NavigateNextIcon
} from "@material-ui/icons";
import Page, {defaultStyles} from "../../__components/Page";
import * as classNames from "classnames";
import {EQualitySubPages} from "./index";

export interface IQualityViewProps {
    data: {
        show: boolean,
        nowPage: EQualitySubPages,
        dimensionTotal: number,
        showDimension?: number,

        showNext: boolean,
        next: string,
        showBefo: boolean,
        befo: string,
    },
    actions: {
        exit: () => void,
        exited: () => void,

        handleNext: () => void,
        handleBefo: () => void,
    },
    children?: any,
}

/*
<Typography className={classNames(classes.navigationItem, {
                            [classes.navigationItemActive]: data.nowPage === EQualitySubPages.PEPE,
                        })}
                                    style={{ cursor: 'default' }}
                        >Petunjuk Pengisian</Typography>
*/

function QualityView({ data, actions, classes, children }: IQualityViewProps&WithStyles) {
    const nowDimension = (data.nowPage === EQualitySubPages.RESL) ? data.dimensionTotal : data.showDimension || 0;
    return (
        <Page show={data.show} onExited={actions.exited}>
            <div className={classes.header}>
                <div className={classes.headerLeft}>
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
                </div>
                <div className={classes.headerCenter}>
                    <Typography variant="headline">Deteksi Mutu</Typography>
                    <div className={classes.navigation}>
                        <Typography className={classNames(classes.navigationItem, {
                            [classes.navigationItemActive]: data.nowPage === EQualitySubPages.KAPE,
                        })}
                                    style={{ cursor: 'default' }}
                        >Kata Pengantar</Typography>
                        <Typography className={classNames(classes.navigationItem, {
                            [classes.navigationItemActive]: data.nowPage === EQualitySubPages.USER,
                        })}
                                    style={{ cursor: 'default' }}
                        >Identitas Pengisi</Typography>
                        <Typography className={classNames(classes.navigationItem, {
                            [classes.navigationItemActive]: data.nowPage === EQualitySubPages.INST,
                        })}
                                    style={{ cursor: 'default' }}
                        >Identitas TK</Typography>
                        <Typography className={classNames(classes.navigationItem, {
                            [classes.navigationItemActive]: data.nowPage === EQualitySubPages.DIME,
                        })}
                                    style={{ cursor: 'default' }}
                        >Dimensi { nowDimension }/{data.dimensionTotal}</Typography>
                        <Typography className={classNames(classes.navigationItem, {
                            [classes.navigationItemActive]: data.nowPage === EQualitySubPages.RESL,
                        })}
                                    style={{ cursor: 'default' }}
                        >Hasil</Typography>
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
                                onClick={actions.handleNext}
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
                { children}
            </div>
        </Page>
    );
}

const styles = createStyles({
    ...defaultStyles,
    content: {
        ...defaultStyles.content,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    }
} as any);

export default withStyles(styles)<IQualityViewProps>(QualityView);