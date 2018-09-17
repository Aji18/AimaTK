import * as React from "react";
import {Button, createStyles, Tooltip, withStyles, WithStyles} from "@material-ui/core";
import {Typography} from "@material-ui/core";
import classNames from "classnames";

import SubPage from "../../../__components/SubPage/index";
import {EQualitySubPages} from "../index";
import {blue, lightBlue} from "@material-ui/core/colors";

const onExited = () => {
    // do something
};

export interface IKapeProps {
    showed: EQualitySubPages,
    reverse: boolean,
    untouched: boolean,
    handleNext: () => void,
}

// TODO: will it change?

function KapeView({ showed, reverse, untouched, handleNext, classes }: WithStyles&IKapeProps) {
    const show = showed === EQualitySubPages.KAPE;
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

                    <table cellPadding={7}>
                        <thead>
                            <td className={classes.tableHeader}
                                style={{ width: 50, }}>
                                <p className="western" style={{ textAlign: 'center' }}><b>No.</b></p>
                            </td>
                            <td className={classes.tableHeader}
                                style={{ width: 125, }}>
                                <p className="western" style={{ textAlign: 'center' }}><b>Kriteria</b></p>
                            </td>
                            <td className={classes.tableHeader}
                                style={{ width: 65, }}>
                                <p className="western" style={{ textAlign: 'center' }}><b>Huruf</b></p>
                            </td>
                            <td className={classes.tableHeader}
                                style={{ width: 80, }}>
                                <p className="western" style={{ textAlign: 'center' }}><b>Bidang 1</b></p>
                            </td>
                            <td className={classes.tableHeader}
                                style={{ width: 80, }}>
                                <p className="western" style={{ textAlign: 'center' }}><b>Bidang 2</b></p>
                            </td>
                            <td className={classes.tableHeader}
                                style={{ width: 80, }}>
                                <p className="western" style={{ textAlign: 'center' }}><b>Bidang 3</b></p>
                            </td>
                            <td className={classes.tableHeader}
                                style={{ width: 80, }}>
                                <p className="western" style={{ textAlign: 'center' }}><b>Bidang 4</b></p>
                            </td>
                            <td className={classes.tableHeader}
                                style={{ width: 140, }}>
                                <p className="western" style={{ textAlign: 'center' }}><b>Jumlah % <br/> (1+2+3+4)</b></p>
                            </td>
                        </thead>
                        <tbody>
                            <tr>
                                <td className={classNames( classes.tableContent, classes.tableContentLeft, classes.tableContentTop )}>
                                    <p className="western" style={{ textAlign: 'center' }}>1.</p>
                                </td>
                                <td className={classNames( classes.tableContent, classes.tableContentTop )}>
                                    <p className="western" style={{ textAlign: 'center' }}>Sangat Berkualitas</p>
                                </td>
                                <td className={classNames( classes.tableContent, classes.tableContentTop )}>
                                    <p className="western" style={{ textAlign: 'center' }}>A</p>
                                </td>
                                <td className={classNames( classes.tableContent, classes.tableContentTop )}>
                                    <p className="western" style={{ textAlign: 'center' }}>30-36</p>
                                </td>
                                <td className={classNames( classes.tableContent, classes.tableContentTop )}>
                                    <p className="western" style={{ textAlign: 'center' }}>56-68</p>
                                </td>
                                <td className={classNames( classes.tableContent, classes.tableContentTop )}>
                                    <p className="western" style={{ textAlign: 'center' }}>147-180</p>
                                </td>
                                <td className={classNames( classes.tableContent, classes.tableContentTop )}>
                                    <p className="western" style={{ textAlign: 'center' }}>69-84</p>
                                </td>
                                <td className={classNames( classes.tableContent, classes.tableContentRight, classes.tableContentTop )}>
                                    <p className="western" style={{ textAlign: 'center' }}>299-368</p>
                                </td>
                            </tr>
                            <tr>
                                <td className={classNames( classes.tableContent, classes.tableContentLeft )}>
                                    <p className="western" style={{ textAlign: 'center' }}>2.</p>
                                </td>
                                <td className={classNames( classes.tableContent )}>
                                    <p className="western" style={{ textAlign: 'center' }}>Berkualitas</p>
                                </td>
                                <td className={classNames( classes.tableContent )}>
                                    <p className="western" style={{ textAlign: 'center' }}>B</p>
                                </td>
                                <td className={classNames( classes.tableContent )}>
                                    <p className="western" style={{ textAlign: 'center' }}>23-29</p>
                                </td>
                                <td className={classNames( classes.tableContent )}>
                                    <p className="western" style={{ textAlign: 'center' }}>43-55</p>
                                </td>
                                <td className={classNames( classes.tableContent )}>
                                    <p className="western" style={{ textAlign: 'center' }}>113-146</p>
                                </td>
                                <td className={classNames( classes.tableContent )}>
                                    <p className="western" style={{ textAlign: 'center' }}>53-68</p>
                                </td>
                                <td className={classNames( classes.tableContent, classes.tableContentRight )}>
                                    <p className="western" style={{ textAlign: 'center' }}>230-298</p>
                                </td>
                            </tr>
                            <tr>
                                <td className={classNames( classes.tableContent, classes.tableContentLeft )}>
                                    <p className="western" style={{ textAlign: 'center' }}>3.</p>
                                </td>
                                <td className={classNames( classes.tableContent )}>
                                    <p className="western" style={{ textAlign: 'center' }}>Kualitas Standar</p>
                                </td>
                                <td className={classNames( classes.tableContent )}>
                                    <p className="western" style={{ textAlign: 'center' }}>C</p>
                                </td>
                                <td className={classNames( classes.tableContent )}>
                                    <p className="western" style={{ textAlign: 'center' }}>16-22</p>
                                </td>
                                <td className={classNames( classes.tableContent )}>
                                    <p className="western" style={{ textAlign: 'center' }}>30-42</p>
                                </td>
                                <td className={classNames( classes.tableContent )}>
                                    <p className="western" style={{ textAlign: 'center' }}>79-112</p>
                                </td>
                                <td className={classNames( classes.tableContent )}>
                                    <p className="western" style={{ textAlign: 'center' }}>37-52</p>
                                </td>
                                <td className={classNames( classes.tableContent, classes.tableContentRight )}>
                                    <p className="western" style={{ textAlign: 'center' }}>161-229</p>
                                </td>
                            </tr>
                            <tr>
                                <td className={classNames( classes.tableContent, classes.tableContentLeft, classes.tableContentBottom )}>
                                    <p className="western" style={{ textAlign: 'center' }}>4.</p>
                                </td>
                                <td className={classNames( classes.tableContent, classes.tableContentBottom )}>
                                    <p className="western" style={{ textAlign: 'center' }}>Belum Berkualitas</p>
                                </td>
                                <td className={classNames( classes.tableContent, classes.tableContentBottom )}>
                                    <p className="western" style={{ textAlign: 'center' }}>D</p>
                                </td>
                                <td className={classNames( classes.tableContent, classes.tableContentBottom )}>
                                    <p className="western" style={{ textAlign: 'center' }}>9-15</p>
                                </td>
                                <td className={classNames( classes.tableContent, classes.tableContentBottom )}>
                                    <p className="western" style={{ textAlign: 'center' }}>17-29</p>
                                </td>
                                <td className={classNames( classes.tableContent, classes.tableContentBottom )}>
                                    <p className="western" style={{ textAlign: 'center' }}>45-78</p>
                                </td>
                                <td className={classNames( classes.tableContent, classes.tableContentBottom )}>
                                    <p className="western" style={{ textAlign: 'center' }}>21-36</p>
                                </td>
                                <td className={classNames( classes.tableContent, classes.tableContentRight, classes.tableContentBottom )}>
                                    <p className="western" style={{ textAlign: 'center' }}>92-160</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <br/>
                    <br/>
                    <Typography className={classes.normal}>
                        Pengisian pada instrumen dengan cara memberikan tanda √ pada kolom yang disediakan.  Untuk mempermudah kalkulasi hitungan, maka disarankan untuk menuliskan nilai pada kolom SKOR dengan rentang nilai 1 - 4 (Tidak Baik - Sangat Baik). Pengguna dapat menjumlahkan masing-masing dimensi, langkah selanjutnya adalah menjumlahkan SKOR masing-masing dimensi (Dimensi 1 + Dimensi 2 + Dimensi 3 + Dimensi 4) untuk mendapatkan total skor. Total skor dikonversikan ke dalam Huruf (dalam Tabel 2.1).  Hasil dari konversi, dapat dijadikan sebagai evaluasi diri, untuk mempertahankan atau meningkatkan mutu yang telah diraih selama ini. Semoga instrumen deteksi mutu ini bermanfaat baik bagi lembaga juga bagi semua pihak yang menginginkan peningkatan mutu pendidikan di Taman Kanak-Kanak.
                    </Typography>

                    <Tooltip title="Lqnjutkan ke Pengisian" placement="bottom">
                        <Button
                            variant="extendedFab"
                            color="primary"
                            value="Close"
                            onClick={handleNext}
                            className={classes.btnNext}
                        >
                            Selanjutnya
                        </Button>
                    </Tooltip>
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
    tableHeader: {
        borderTop: '1px solid #00000a',
        borderBottom: '1px solid #00000a',
        borderLeft: 'none',
        borderRight: 'none',
        padding: '0in',
        backgroundColor: '#bfbfbf',
    },
    tabelContent: {
        borderTop: 'none',
        borderBottom: 'none',
        borderLeft: 'none',
        borderRight: 'none',
        padding: '0in',
    },
    tableContentTop: {
        borderTop: '1px solid #00000a',
    },
    tableContentLeft: {
        borderLeft: '1px solid #00000a',
    },
    tableContentRight: {
        borderRight: '1px solid #00000a',
    },
    tableContentBottom: {
        borderBottom: '1px solid #00000a',
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
        display: 'flex',
        flexDirection: 'column'
    },
    btnNext: {
        marginTop: 14,
        marginBottom: 25,
        width: 110,
        background: 'linear-gradient(45deg, '+blue[600]+' 35%, '+lightBlue[400]+' 90%)',
        // minHeight: 34,
        height: 38,
        // padding: '0 16px 0 14px',
        boxShadow: 'none',
        fontSize: '0.8em',
        alignSelf: 'center',
    },
});

export default withStyles(styles)<IKapeProps>(KapeView);