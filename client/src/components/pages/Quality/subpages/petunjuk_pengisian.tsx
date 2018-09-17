import * as React from "react";
import {createStyles, withStyles, WithStyles} from "@material-ui/core";
import {Typography} from "@material-ui/core";
import SubPage from "../../../__components/SubPage/index";
import {EQualitySubPages} from "../index";

const onExited = () => {
    // do something
};

export interface IPePengProps {
    showed: EQualitySubPages,
    reverse: boolean,
    untouched: boolean,
}

// TODO: FIX THIS

function PePengView({ showed, reverse, untouched, classes }: WithStyles&IPePengProps) {
    const show = showed === EQualitySubPages.PEPE;
    return (
        <SubPage show={show} onExited={onExited} appear={!untouched} reverse={reverse}>
            <div className={classes.container} style={(!show) ? { overflow: 'hidden' } : undefined}>
                <div className={classes.content}>
                    <Typography className={classes.title} variant="subheading">Kata Pengantar</Typography>
                    <Typography className={classes.rNormal}>
                        A. Penjelasan Instrumen Deteksi Mutu TK
                    </Typography>
                    <Typography className={classes.normal}>
                        Instrumen deteksi mutu Taman Kanak-Kanak ini mencoba untuk dapat mendeteksi mutu khususnya di tingkat pendidikan Taman KanakKanak. Setelah instrumen diisi, selanjutnya pengguna akan mengetahui dimana letak posisi mutu lembaga tersebut, sebelum menggunakan  AIMA TK (Bab 3). Instrumen deteksi mutu dapat diisi oleh Kepala TK/ guru/ staf/bagian penjaminan mutu lembaga. Bagian ini merupakan instrumen evaluasi diri dari lembaga TK. Instrumen terdiri dari: petunjuk pengisian, identitas lembaga, dan instrumen penjaminan mutu internal. Instrumen Deteksi Mutu TK terdiri dari 4 domain/bidang, yaitu: 1.
                    </Typography>
                    <Typography className={classes.normal}>
                        Pendidik dan tenaga kependidikan yang terdiri dari: kepala TK, guru, dan staf. 2.	Manajemen dan Kepemimpinan terdiri dari: administrasi lembaga, kepemimpinan kepala TK,  organisasi, dan biaya. 3.	Kegiatan Belajar Mengajar (KBM) terdiri dari: kurikulum, mengajar dan perawatan anak, kesehatan anak, tumbuh kembang anak, hubungan dengan anak, sarana prasarana, penilaian KBM, dan Standar Tingkat Pencapaian Perkembangan Anak (STPPA). 4.	Peran Serta Masyarakat dan Dukungan kepada anak, yang terdiri dari: komite, hubungan dengan orangtua anak, hubungan dengan masyarakat luas, iklim lembaga TK, dan lingkungan belajar.
                    </Typography>
                    <Typography className={classes.normal}>
                        Pertanyaan instrumen deteksi mutu TK, pada Dimensi Pendidik dan Tenaga Kependidikan berjumlah 9 pertanyaan, Dimensi Manajemen & Kepemimpinan berjumlah 17 pertanyaan, Dimensi Kegiatan Belajar Mengajar  berjumlah 45, dan Dimensi Peran Serta Masyarakat dan Dukungan Kepada Anak  berjumlah 21 pertanyaan. Apabila dijumlahkan menjadi 92 pertanyaan. Skor nilai masing-masing pertanyaan/ pernyataan bergerak dari 1-4, sehingga jumlah nilai minimal berjumlah 92 hingga 368 (jumlah nilai maksimal). Setelah dijumlahkan semua, jumlah nilai dikonversikan ke dalam huruf A (Sangat Berkualitas), B (Berkualitas), C (Kualitas Standar), dan D (Belum Berkualitas). Kriteria mutu lembaga TK ditetapkan sesuai dengan Tabel 2.1.
                    </Typography>
                    <Typography className={classes.normal}>
                        TABEL TABEL
                    </Typography>
                    <Typography className={classes.normal}>
                        Pengisian pada instrumen dengan cara memberikan tanda √ pada kolom yang disediakan.  Untuk mempermudah kalkulasi hitungan, maka disarankan untuk menuliskan nilai pada kolom SKOR dengan rentang nilai 1 - 4 (Tidak Baik - Sangat Baik). Pengguna dapat menjumlahkan masing-masing dimensi, langkah selanjutnya adalah menjumlahkan SKOR masing-masing dimensi (Dimensi 1 + Dimensi 2 + Dimensi 3 + Dimensi 4) untuk mendapatkan total skor. Total skor dikonversikan ke dalam Huruf (dalam Tabel 2.1).  Hasil dari konversi, dapat dijadikan sebagai evaluasi diri, untuk mempertahankan atau meningkatkan mutu yang telah diraih selama ini. Semoga instrumen deteksi mutu ini bermanfaat baik bagi lembaga juga bagi semua pihak yang menginginkan peningkatan mutu pendidikan di Taman Kanak-Kanak.
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

export default withStyles(styles)<IPePengProps>(PePengView);