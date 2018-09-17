import * as React from "react";
import {createStyles, withStyles, WithStyles} from "@material-ui/core";
import {Typography} from "@material-ui/core";
import SubPage from "../../../__components/SubPage/index";
import {ESOPSubPages} from "../index";

const onExited = () => {
    // do something
};

export interface IKaPeProps {
    showed: ESOPSubPages,
    reverse: boolean,
    untouched: boolean,
}

function KPView({ showed, reverse, untouched, classes }: WithStyles&IKaPeProps) {
    const show = showed === ESOPSubPages.KAPE;
    return (
        <SubPage show={show} onExited={onExited} appear={!untouched} reverse={reverse}>
            <div className={classes.container} style={(!show) ? { overflow: 'hidden' } : undefined}>
                <div className={classes.content}>
                    <Typography className={classes.title} variant="subheading">KATA PENGANTAR</Typography>
                    <Typography className={classes.normal}>
                        Puji syukur penulis panjatkan kepada Allah Yang Maha Tinggi, Yang Maha Agung, dan Maha Kekal yang mana telah melimpahkan segala rahmat, hidayah, dan karunia-Nya, sehingga penulis mampu menyelesaikan karya berupa Buku Audit Internal Manajemen Taman Kanak-Kanak (AIMA TK). Buku ini dikembangkan sebagai bagian dari produk disertasi dengan judul Pengembangan Model Audit Internal Manajemen Sebagai Implementasi Penjaminan Mutu Organisasi pada Taman Kanak-Kanak di Kota Malang.
                    </Typography>
                    <Typography className={classes.normal}>
                        Buku ini terdiri dari 3 bagian, yaitu:
                    </Typography>
                    <Typography className={classes.rNormal}>
                        Bab 1, berisi tentang Standar Operasional Prosedur (SOP) Audit Internal Manajemen Taman Kanak-Kanak (AIMA TK). Bab 1 terdiri dari bagan alur SOP dan keterangan secara garis besar. Bagian ini akan memberikan kemudahan bagi pengguna untuk mempergunakan buku pada bab 2 dan bab 3.
                    </Typography>
                    <Typography className={classes.rNormal}>
                        Bab 2, berisi tentang instrumen deteksi mutu Taman Kanak-Kanak. Bagian ini mencoba untuk dapat mendeteksi mutu TK yang akan diketahui dimana posisi mutu lembaga, sebelum menggunakan  bab 3 yaitu AIMA TK. Instrumen deteksi mutu dapat diisi oleh Kepala TK/guru/staf/bagian penjaminan mutu lembaga. Bagian ini dapat digunakan sebagai instrumen evaluasi diri dari lembaga TK.
                    </Typography>
                    <Typography className={classes.rNormal}>
                        Bab 3, berisi tentang AIMA TK yang biasa disebut audit mutu internal. AIMA terdiri dari 4 siklus kegiatan audit internal manajemen yaitu:
                    </Typography>
                    <Typography className={classes.normal}>
                        Perencanaan (plan), tindakan yang dilakukan: 1) Kepala TK menentukan persyaratan Tim Auditor, 2) Kepala TK menentukan kriteria auditor, 3) Kepala TK menentukan tanggung jawab Tim Auditor, 4) Kepala TK membuat surat tugas kepada Tim Auditor, 5) Tim Auditor menyusun langkah kerja, 6) Tim Auditor membuat ruang lingkup/dimensi audit internal manajemen, dan 7) Tim Auditor menyusun jadwal dan rencana pelaksanaan audit.
                    </Typography>
                    <Typography className={classes.normal}>
                        Pelaksanaan/implementasi (do), tindakan yang dilakukan: 1) evaluasi dokumen yang disusun oleh auditi, 2) uji lapangan, 3) membuat berita acara, dan 4) analisa temuan (rapat pelaksanaan, notulen rapat, dan daftar hadir).
                    </Typography>
                    <Typography className={classes.normal}>
                        Pemeriksanaan/monitoring dan evaluasi (check), tindakan yang dilakukan: 1) membuat rekomendasi dan 2) membuat laporan audit.
                    </Typography>
                    <Typography className={classes.normal}>
                        Tindak lanjut (act), tindakan yang dilakukan adalah tindak lanjut pelaksanaan rekomendasi dan  evaluasi proses audit.
                    </Typography>
                    <br/>
                    <Typography className={classes.normal}>
                        Format pada bab 3 dimodifikasi oleh penulis dari buku yang berjudul Penjaminan Mutu Sekolah oleh Ridwan Abdullah Sani, Isda Pramuniati, dan Anies Mucktiany  serta dari AMI SMK 12 Malang (khusus format lembar observasi) yang lebih sederhana untuk kelas rendah.
                    </Typography>
                    <Typography className={classes.normal}>
                        Standar isi dari buku yang digunakan dalam penjaminan mutu internal ini diadopsi dari 9 negara yaitu: Indonesia, Hong Kong, Australia, New Zealand, Spanyol, USA, Italia, Singapura, dan Finlandia; kajian teori Psikologi Perkembangan anak usia TK; hasil penelitian pendahuluan; SNP PAUD Permendikbud RI Nomor 137 Tahun 2014; dan instrumen akreditasi PAUD tahun 2016.
                    </Typography>
                    <Typography className={classes.normal}>
                        Buku ini jauh dari sempurna, karena penulis  sebagai manusia biasa yang tidak luput dari kesalahan, kekilafan, dan kekurangan, oleh karena itu masukan dan saran kami harapkan dari para pembaca dan pengguna demi perbaikan buku ini. Semoga buku ini dapat menjadi salah satu sarana yang bermanfaat untuk meningkatkan mutu pendidikan TK di Indonesia.
                    </Typography>
                    <Typography style={{ textAlign: 'right' }}>
                        Malang, 2018
                    </Typography>
                    <br/>
                    <br/>
                    <Typography style={{ textAlign: 'right', marginBottom: 25 }}>
                        Penulis
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

export default withStyles(styles)<IKaPeProps>(KPView);