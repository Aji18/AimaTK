import * as React from "react";
import {createStyles, Tooltip, withStyles, WithStyles} from "@material-ui/core";
import {Typography} from "@material-ui/core";
import SubPage from "../../../__components/SubPage/index";
import {EAimaTKSubPages} from "../index";

const onExited = () => {
    // do something
};

export interface ICheckProps {
    showed: EAimaTKSubPages,
    reverse: boolean,
}

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;
function DownloadAble({ code, name, classes }: {code: string, name: string}&WithStyles) {
    return (
        <Tooltip title={`Klik untuk mengunduh dokumen ${code.toUpperCase()}`}>
            <a className={classes.clickable}
               href={`${API_ENDPOINT}download/?document=dokumen_${code}.docx`}
               target="__blank"
            >
                { name }
            </a>
        </Tooltip>
    )
}

function CheckView({ showed, reverse, classes }: WithStyles&ICheckProps) {
    const show = showed === EAimaTKSubPages.CHEC;
    return (
        <SubPage show={show} onExited={onExited} appear={true} reverse={reverse}>
            <div className={classes.container} style={(!show) ? { overflow: 'hidden' } : undefined}>
                <div className={classes.content}>
                    <Typography className={classes.title} variant="subheading">AUDIT INTERNAL MANAJEMEN TAMAN KANAK-KANAK (AIMA TK)</Typography>
                    <Typography className={classes.title} variant="subheading">PEMERIKSAAN/MONITORING & EVALUASI (CHECK)</Typography>
                    <Typography className={classes.normal}>
                        Langkah ketiga (III) yaitu check. Tugas Tim Auditor adalah: 1) membuat rekomendasi perbaikan dan 2)  membuat laporan hasil audit internal manajemen.
                    </Typography>
                    <Typography className={classes.nNormal}>
                        1. Membuat Rekomendasi Perbaikan
                    </Typography>
                    <Typography className={classes.iNormal}>
                        Format rekomendasi hasil audit internal manajemen tertera pada
                        <DownloadAble code="c1" name=" Kode Dokumen C1" classes={classes}/>.
                    </Typography>
                    <Typography className={classes.nNormal}>
                        2. Setelah dirasa cukup, tugas Tim Auditor adalah membuat laporan hasil audit.
                    </Typography>
                    <Typography className={classes.iNormal}>
                        Format laporan hasil tertera pada
                        <DownloadAble code="c2" name=" Kode Dokumen C2" classes={classes}/>.
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
    nNormal: {
        marginBottom: '0in',
        lineHeight: '150%',
    },
    iNormal: {
        textAlign: 'justify',
        marginLeft: '0.2in',
        marginBottom: '0.14in',
        lineHeight: '150%',
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
    clickable: {
        textDecoration: 'none',
        cursor: 'pointer',
        color: '#3b78e7',
    },
    content: {
        width: '100%',
        maxWidth: 760,
        marginBottom: 25,
        marginTop: 25,
    },
});

export default withStyles(styles)<ICheckProps>(CheckView);