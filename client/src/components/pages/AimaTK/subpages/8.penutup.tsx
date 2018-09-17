import * as React from "react";
import {createStyles, withStyles, WithStyles} from "@material-ui/core";
import {Typography} from "@material-ui/core";
import SubPage from "../../../__components/SubPage/index";
import {EAimaTKSubPages} from "../index";

const onExited = () => {
    // do something
};

export interface IPenuProps {
    showed: EAimaTKSubPages,
    reverse: boolean,
}

function PenuView({ showed, reverse, classes }: WithStyles&IPenuProps) {
    const show = showed === EAimaTKSubPages.PENU;
    return (
        <SubPage show={show} onExited={onExited} appear={true} reverse={reverse}>
            <div className={classes.container} style={(!show) ? { overflow: 'hidden' } : undefined}>
                <div className={classes.content}>
                    <Typography className={classes.title} variant="subheading">PENUTUP</Typography>
                    <Typography className={classes.normal}>
                        Produk ini dapat dipakai,  apabila lembaga TK menginginkan audit internal manajemen dengan standar mutu dari 9 negara (Indonesia, Hong Kong, Australia, New Zealand, Spanyol, USA, Italia, Singapura, dan Finlandia), teori Psikologi Perkembangan, SNP PAUD Permendiknas Nomor 137 Tahun 2014, dan akreditasi PAUD. Produk AIMA TK dibuat selengkap mungkin. Apabila lembaga TK mempunyai sumber daya manusia yang memadahi, maka langkah-langkah dalam AIMA TK dapat dilaksanakan dengan maksimal. Apabila sumber daya manusia tidak memadahi, maka dapat mengambil langkah-langkah/format yang disesuaikan dengan kebutuhan lembaga TK. 	Bersama produk AIMA TK, diharapkan mutu lembaga TK dapat meningkatkan atau dapat mempertahankan mutu yang sudah bagus.
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

export default withStyles(styles)<IPenuProps>(PenuView);