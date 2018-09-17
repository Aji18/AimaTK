// import community package
import * as React from 'react';
import {Button, Typography, withStyles, createStyles, WithStyles, Tooltip} from "@material-ui/core";
import { Close as CloseIcon } from "@material-ui/icons";

import Page, {defaultStyles} from "../../__components/Page";
import * as classNames from "classnames";

export interface IProfileViewProps {
    data: {
        show: boolean,
    }
    actions: {
        exit: () => void,
        exited: () => void,
    }
}

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

function ProfileView ({ data, actions, classes }: IProfileViewProps&WithStyles) {
    return (
        <Page show={data.show} onExited={actions.exited}>
            <div className={classes.header}>
                <div className={classes.headerLeft} />
                <div className={classes.headerCenter}>
                    <Typography variant="headline">Profil</Typography>
                </div>
                <div className={classes.headerRight}>
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

                <div className={classes.viewContainer}>
                    <div className={classes.viewContent}>

                        <Typography className={classes.title} variant="subheading">PROFIL PENGEMBANG PRODUK</Typography>
                        <div className={classes.imgContainer} />

                        <Typography className={classes.normal} style={{marginTop: 24}}>
                            Sunarni lahir di Kota Klaten, Jawa Tengah pada tanggal 15 November 1971. Menempuh pendidikan Sekolah Dasar di SDN Gondangsari I Juwiring Klaten. Melanjutkan Sekolah Menengah Pertama di SMPN Karangdowo I. Dilanjutkan ke Sekolah Menengah Atas di SMAN Karangdowo Klaten. Pada tahun 1993, mengikuti pendidikan tinggi di IKIP Malang sekarang Universitas Negeri Malang (UM) S1 mengambil Jurusan AP dan lulus tahun 1997. Tahun 2003, diangkat sebagai dosen Jurusan Administrasi Pendidikan (AP FIP UM). Pada tahun 2005 mengambil Program Studi Manajemen Pendidikan S2 Program Pascasarjana UM dan lulus tahun 2007 dengan beasiswa BPPS. Sejak tahun 2014 mulai menempuh Program Doktoral di Universitas Negeri Malang dan lulus tahun 2018.
                        </Typography>
                        <Typography className={classes.normal}>
                            Hingga saat ini aktif berkarya dalam pengembangan keilmuan manajemen pendidikan. Pengalaman sebagai peneliti, pernah mendapatkan hibah baik yang didanai oleh Fakultas dan didanai dari DP2M Dikti antara lain: Hibah Dosen Muda, Hibah Bersaing, Hibah Pakerti baik sebagai ketua maupun sebagai anggota peneliti. Penulisan buku teks yang diterbitkan oleh penerbit baik untuk bahan kuliah mahasiswa maupun buku referensi. Menulis artikel dan paper prosiding yang diterbitkan secara nasional dan internasional.
                        </Typography>

                    </div>
                </div>

            </div>
        </Page>
    );
}

const styles = createStyles({
    ...defaultStyles,
    content: {
        ...defaultStyles.content,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    normal: {
        textIndent: '0.28in',
        marginBottom: '0.16in',
        lineHeight: '0.19in',
        textAlign: 'justify'
    },
    imgContainer: {
        backgroundImage: `url(${API_ENDPOINT}public/img/profile.jpg)`,
        backgroundSize: 'auto 100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: 200,
        height: 200,
        borderRadius: '50%',
        marginTop: 12,
        alignSelf: 'center',
    },

    title: {
        marginBottom: '0.14in',
        lineHeight: '120%',
        alignSelf: 'center',
    },
    viewContainer: {
        position: 'absolute',
        top: 75,
        height: 'calc(100% - 75px)',
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
    viewContent: {
        width: '100%',
        maxWidth: 760,
        marginBottom: 25,
        marginTop: 25,

        display: 'flex',
        flexDirection: 'column',
    },
} as any);

export default withStyles(styles)<IProfileViewProps>(ProfileView);

/*
<div className={classes.root}>
            <Transition in={data.show} timeout={duration} appear={true} onExited={actions.exited}>
                {(state: string) => (
                    <div className={classNames(classes.wrapper, {
                        [classes.wrapperEntering]: state === 'entering',
                        [classes.wrapperEntered]: state === 'entered',
                        [classes.wrapperExiting]: state === 'exiting',
                    })}>
                        <div className={classes.transparentBackground}/>
                        <div className={classes.header}>
                            <div className={classes.headerCenter}>
                                <Typography variant="headline">Profil</Typography>
                            </div>
                            <div className={classes.headerLeft}>
                                <Button
                                    variant="extendedFab"
                                    color="primary"
                                    value="Close"
                                    className={classes.btnClose}
                                    onClick={actions.exit}
                                >
                                    <CloseIcon className={classes.btnCloseIcon}/>
                                    Tutup
                                </Button>
                            </div>
                        </div>
                        <div className={classes.line}/>
                        <div className={classes.content}>
                            <Typography >Content</Typography>
                        </div>
                    </div>
                )}
            </Transition>
        </div>
 */