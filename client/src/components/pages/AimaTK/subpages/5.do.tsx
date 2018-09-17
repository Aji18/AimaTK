import * as React from "react";
import {createStyles, Tooltip, withStyles, WithStyles} from "@material-ui/core";
import {Typography} from "@material-ui/core";
import SubPage from "../../../__components/SubPage/index";
import {EAimaTKSubPages} from "../index";

const onExited = () => {
    // do something
};

export interface IDoProps {
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

function DoView({ showed, reverse, classes }: WithStyles&IDoProps) {
    const show = showed === EAimaTKSubPages.DO;
    return (
        <SubPage show={show} onExited={onExited} appear={true} reverse={reverse}>
            <div className={classes.container} style={(!show) ? { overflow: 'hidden' } : undefined}>
                <div className={classes.content}>
                    <Typography className={classes.title} variant="subheading">AUDIT INTERNAL MANAJEMEN TAMAN KANAK-KANAK (AIMA TK)</Typography>
                    <Typography className={classes.title} variant="subheading">PELAKSANAAN/IMPLEMENTASI (DO)</Typography>
                    <Typography className={classes.normal}>
                        Tahap kedua adalah tahap pelaksanaan/implementasi yang terdiri dari kegiatan: 1) evaluasi dokumen yang disusun oleh auditi, 2) uji lapangan, 3) membuat berita acara pelaksanaan tugas, dan 4) analisa temuan.
                    </Typography>
                    <Typography className={classes.nNormal}>
                        1. Evaluasi Dokumen yang Disusun oleh Auditi
                    </Typography>
                    <Typography className={classes.iNormal}>
                        Langkah di dalam pelaksanaan di lapangan, Tim Auditor mengevaluasi terhadap dokumen yang oleh Auditi, format evaluasi tertera pada
                        <DownloadAble code="d1" name=" Kode Dokumen D1" classes={classes}/>.
                    </Typography>
                    <Typography className={classes.nNormal}>
                        2. Uji Lapangan
                    </Typography>
                    <Typography className={classes.iNormal}>
                        Uji lapangan pada waktu observasi, Tim Audit akan menemukan kriteria ketidaksesuaian antara dokumen yang telah disusun oleh Tim Auditi dengan kenyataan di lapangan. Ketidaksesuaian digolongkan berat, sedang, dan ringan. Tidak sesuai kondisi dalam golongan berat: 1) Berpengaruh besar terhadap mutu produk pelayanan, 2) Berisiko kehilangan pelanggan, 3) Mengancam sertifikasi dan akreditasi, dan 4) Mengancam kegiatan atau para pelaksana dalam organisasi. Ketidaksesuaian dokumen dan lapangan dalam golongan ringan: 1) Tidak secara langsung mempengaruhi mutu, 2) Mudah diralat, dan  Tidak menghambat sertifikasi dan akreditasi.
                        <br/>
                        Tindakan pada waktu mengisi form observasi adalah: 1) diskusi rekomendasi dengan auditi, 2) auditor mempresentasikan temuan pada auditi sebelum dilaporkan ke pimpinan, 3) auditi memberikan komentar atas temuan pada kertas kerja audit. Tugas auditor:  1) mengidentifikasi ketidaksesuaian dengan standar yang diacu, 2) menjelaskan ketidaksesuaian kepada auditi, dan 3) menyepakati tanggal dan waktu penyelesaian perbaikan ketidaksesuaian. Tugas Auditi: 1) memahami ketidaksesuaian secara rinci, 2) menimbang seberapa berat ketidaksesuaian dan lama waktu penyelesaian, dan 3) melaksanakan tindakan koreksi dan pencegahan. Format lembar observasi tertera pada
                        <DownloadAble code="d2" name=" Kode Dokumen D2" classes={classes}/>. Ringkasan hasil observasi lapangan tertera pada
                        <DownloadAble code="d2a" name=" Kode Dokumen D2A" classes={classes}/>.
                    </Typography>
                    <Typography className={classes.nNormal}>
                        3. Berita Acara Pelaksanaan Observasi Lapangan
                    </Typography>
                    <Typography className={classes.iNormal}>
                        Berita acara perlu dibuat, sebagai pertangungjawaban Tim Auditor dalam melaksanakan tugas di lapangan. Contoh berita acara tertera pada
                        <DownloadAble code="d3" name=" Kode Dokumen D3" classes={classes}/>.
                    </Typography>
                    <Typography className={classes.nNormal}>
                        4. Analisa Temuan
                    </Typography>
                    <Typography className={classes.iNormal}>
                        Analisa temuan, hal yang ditempuh adalah: 1) rapat pelaksanaan audit,  2) membuat notulen rapat, dan 3) pengisian daftar hadir, yang masing-masing format dicontohkan pada
                        <DownloadAble code="d4" name=" Kode Dokumen D4" classes={classes}/>..
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

export default withStyles(styles)<IDoProps>(DoView);