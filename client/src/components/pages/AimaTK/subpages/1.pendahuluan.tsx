import * as React from "react";
import {createStyles, withStyles, WithStyles} from "@material-ui/core";
import {Typography} from "@material-ui/core";
import SubPage from "../../../__components/SubPage/index";
import {EAimaTKSubPages} from "../index";

const onExited = () => {
    // do something
};

export interface IPendProps {
    showed: EAimaTKSubPages,
    reverse: boolean,
    untouched: boolean,
}

function PendView({ showed, reverse, untouched, classes }: WithStyles&IPendProps) {
    const show = showed === EAimaTKSubPages.PEND;
    return (
        <SubPage show={show} onExited={onExited} appear={!untouched} reverse={reverse}>
            <div className={classes.container} style={(!show) ? { overflow: 'hidden' } : undefined}>
                <div className={classes.content}>
                    <Typography className={classes.title} variant="subheading">PENDAHULUAN</Typography>
                    <Typography className={classes.normal}>
                        Sistem Penjaminan Mutu Pendidikan dituangkan dalam Peraturan Menteri Pendidikan Nasional (Permendiknas) Nomor 63 Tahun 2009, sedangkan Standar Nasional Pendidikan Anak Usia Dini tertuang pada Peraturan Menteri Pendidikan dan Kebudayaan Republik Indonesia (Permendikbud RI) Nomor 137 Tahun 2014. Penjaminan mutu merupakan suatu implementasi kebijakan pemerintah, sebagai upaya untuk mengatur lembaga TK agar berkualitas atau bermutu. Quality assurance bidang pendidikan berguna untuk mencegah terjadinya kesalahan sejak awal proses pendidikan. Penjaminan mutu internal dilakukan sebagai suatu kebijakan lembaga. Jika mutu tidak terkontrol, maka dapat berakibat negatif terhadap lembaga/sekolah karena banyak pelanggan yang tidak puas. Penjaminan mutu pendidikan yang paling dekat dan mendasar adalah audit internal manajemen.
                    </Typography>
                    <Typography className={classes.normal}>
                        Audit manajemen mengevaluasi setiap pengendalian (control) yang mempengaruhi efektivitas dan efisiensi organisasi. Oleh karena itu, pengendalian intern termasuk dalam ruang lingkup audit manajemen. Hasil audit manajemen berupa rekomendasi perbaikan-perbaikan atas kekurangan atau kelemahan dari sistem pengendalian intern yang ada. Audit internal manajemen akan mengevaluasi serta memberikan rekomendasi perbaikan terhadap sistem pengendalian intern organisasi.
                    </Typography>
                    <Typography className={classes.normal}>
                        Produk Audit Internal Manajemen TK merupakan lanjutan dari instrumen deteksi mutu TK. Produk ini akan membantu lembaga untuk memperbaiki kriteria mutu lembaga TK pada jenjang di atasnya. Selain itu, produk ini akan membantu lembaga untuk mempersiapkan berbagai dokumen yang nantinya akan digunakan dalam menghadapi audit eksternal organisasi yaitu akreditasi lembaga. Produk AIMA TK berupa format-format isian.
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

export default withStyles(styles)<IPendProps>(PendView);