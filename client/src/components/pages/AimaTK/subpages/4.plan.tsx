import * as React from "react";
import {createStyles, Tooltip, withStyles, WithStyles} from "@material-ui/core";
import {Typography} from "@material-ui/core";
import SubPage from "../../../__components/SubPage/index";
import {EAimaTKSubPages} from "../index";

const onExited = () => {
    // do something
};

export interface IPlanProps {
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

function PlanView({ showed, reverse, classes }: WithStyles&IPlanProps) {
    const show = showed === EAimaTKSubPages.PLAN;
    return (
        <SubPage show={show} onExited={onExited} appear={true} reverse={reverse}>
            <div className={classes.container} style={(!show) ? { overflow: 'hidden' } : undefined}>
                <div className={classes.content}>
                    <Typography className={classes.title} variant="subheading">AUDIT INTERNAL MANAJEMEN TAMAN KANAK-KANAK (AIMA TK)</Typography>
                    <Typography className={classes.title} variant="subheading">PERENCANAAN (PLAN)</Typography>
                    <Typography className={classes.normal}>
                        Tahap I adalah tahap perencanaan (Plan) terdiri dari: 1)  Kepala TK menentukan persyaratan, 2) Kepala TK membuat kriteria tim auditor, 3) Kepala TK menentukan tanggung jawab Tim Auditor, 4) Kepala TK membuat surat tugas kepada tim auditor, dan 5) Tim Auditor menyusun langkah kerja, 6) Tim Auditor membuat ruang lingkup/dimensi audit internal manajemen, dan 7) Tim Auditor menyusun jadwal dan rencana pelaksanaan audit.
                    </Typography>
                    <Typography className={classes.nNormal}>
                        1. Kepala TK Menentukan Persyaratan Tim Auditor
                    </Typography>
                    <Typography className={classes.iNormal}>
                        Langkah awal dalam menjalankan audit internal manajemen (Audit Mutu Internal) yang perlu ditempuh oleh kepala TK adalah menentukan persyaratan tim auditor yang akan bertugas untuk mengaudit layanan audit internal manajemen. Persyaratan  Tim Auditor tertera pada
                        <DownloadAble code="p1" name=" Kode Dokumen P1" classes={classes}/>.
                    </Typography>
                    <Typography className={classes.nNormal}>
                        2. Kepala TK Menentukan Kriteria Auditor
                    </Typography>
                    <Typography className={classes.iNormal}>
                        Setelah menentukan persyaratan tim audit, langkah selanjutnya adalah menentukan kriteria dan melaksanakan perekrutan Tim Auditor. Kriteria Auditor dan contoh angket perekrutan tim auditor tertera pada
                        <DownloadAble code="p2" name=" Kode Dokumen P2" classes={classes}/>.
                    </Typography>
                    <Typography className={classes.nNormal}>
                        3. Kepala TK Menentukan Tanggung Jawan Tim Auditor
                    </Typography>
                    <Typography className={classes.iNormal}>
                        Selanjutnya Kepala TK menentukan tanggung  jawab Tim Auditor untuk melaksanakan tugasnya. Tugas dan tanggung jawab Tim Auditor yaitu Ketua Tim Auditor dan Anggota Tim Auditor. Tugas dan tanggung jawab tertera pada
                        <DownloadAble code="p3" name=" Kode Dokumen P3" classes={classes}/>.
                    </Typography>
                    <Typography className={classes.nNormal}>
                        4. Kepala TK Membuat Surat Tugas Kepada Tim Auditor
                    </Typography>
                    <Typography className={classes.iNormal}>
                        Kepala TK membuat surat keputusan dan surat tugas kepada tim auditor. Langkah selanjutnya adalah kepala TK membuat surat keputusan dan surat tugas untuk Tim Auditor sebagai langkah awal Tim Auditor dalam menjalankan tugasnya. Contoh format surat keputusan dan surat tugas tertera pada
                        <DownloadAble code="p4" name=" Kode Dokumen P4" classes={classes}/>.
                    </Typography>
                    <Typography className={classes.nNormal}>
                        5. Tim Auditor Menyusun Langkah Kerja
                    </Typography>
                    <Typography className={classes.iNormal}>
                        Tim Auditor setelah ditetapkan oleh Kepala TK dengan surat keputusan dan surat tugas. Tugas Tim Auditor menyusun langkah kerja, menentukan ruang lingkup, dan jadwal pelaksanaan Audit Internal Manajemen. Contoh langkah kerja Tim Auditor tertera pada
                        <DownloadAble code="p5" name=" Kode Dokumen P5" classes={classes}/>.
                    </Typography>
                    <Typography className={classes.nNormal}>
                        6. Tim Auditor Membuat Ruang Lingkup/Dimensi Audit Internal Manajemen
                    </Typography>
                    <Typography className={classes.iNormal}>
                        Ruang lingkup/dimensi audit internal manajemen tertera pada contoh format
                        <DownloadAble code="p6" name=" Kode Dokumen P6" classes={classes}/>.
                    </Typography>
                    <Typography className={classes.nNormal}>
                        7. Tim Auditor Menyusun Jadwal dan Rencana Pelaksanaan Audit
                    </Typography>
                    <Typography className={classes.iNormal}>
                        Contoh format jadwal dan rencana pelaksanaan audit internal manajemen tertera pada
                        <DownloadAble code="p7" name=" Kode Dokumen P7" classes={classes}/>.
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

export default withStyles(styles)<IPlanProps>(PlanView);