import * as React from "react";
import {createStyles, withStyles, WithStyles} from "@material-ui/core";
import {Typography} from "@material-ui/core";
import SubPage from "../../../__components/SubPage/index";
import {ESOPSubPages} from "../index";

const onExited = () => {
    // do something
};


export interface IKetSopProps {
    showed: ESOPSubPages,
    reverse: boolean,
    handleNext: (e: any, to: ESOPSubPages) => void,
}

function KetSOPView({ showed, reverse, classes, handleNext }: WithStyles&IKetSopProps) {
    const toPlan   = () => handleNext(undefined, ESOPSubPages.PLAN);
    const toDo     = () => handleNext(undefined, ESOPSubPages.DO);
    const toCheck  = () => handleNext(undefined, ESOPSubPages.CHEC);
    const toAct    = () => handleNext(undefined, ESOPSubPages.ACT);

    const show = showed === ESOPSubPages.KETE;
    return (
        <SubPage show={show} onExited={onExited} appear={true} reverse={reverse}>
            <div className={classes.container} style={(!show) ? { overflow: 'hidden' } : undefined}>
                <div className={classes.content}>
                    <Typography className={classes.title} variant="subheading">KETERANGAN</Typography>
                    <Typography className={classes.title} variant="subheading">STANDAR OPERASIONAL PROSEDUR</Typography>
                    <Typography className={classes.subtitle}>
                        1. Instrumen Deteksi Mutu TK
                    </Typography>
                    <Typography className={classes.normal}>
                        Instrumen deteksi mutu TK terdiri dari 4 domain/bidang, yaitu: 1) pendidik dan tenaga kependidikan yang terdiri dari: kepala TK, guru, dan staf,; 2) Manajemen dan Kepemimpinan terdiri dari: administrasi lembaga TK, kepemimpinan kepala TK,  organisasi, dan biaya; 3) Kegiatan Belajar Mengajar (KBM) terdiri dari: kurikulum, mengajar dan perawatan anak, kesehatan anak, tumbuh kembang anak, hubungan dengan anak, sarana prasarana, penilaian KBM, dan Standar Tingkat Pencapaian Perkembangan Anak (STPPA); dan 4) Peran Serta Masyarakat dan Dukungan kepada anak, yang terdiri dari: komite sekolah, hubungan dengan orangtua anak, hubungan dengan masyarakat luas, iklim lembaga TK, dan lingkungan belajar.
                    </Typography>
                    <Typography className={classes.subtitle}>
                        2. Kegiatan AIMA TK
                    </Typography>
                    <Typography className={classes.normal}>
                        Perangkat produk AIMA TK, terdiri dari 4 langkah yaitu: a) Perencanaan (PLAN), b) Pelaksanaan (DO), c) Pemeriksaan/monitoring & evaluasi (CHECK), dan  d)  Tindak lanjut (ACT).  Masing-masing langkah terdiri dari dokumen yang perlu dipersiapkan. Dokumen yang perlu dipersiapkan tertera pada Tabel 1.
                    </Typography>
                    <Typography>
                        Tabel 1. Perangkat Produk AIMA TK
                    </Typography>
                    <table cellPadding="7" cellSpacing="0" style={{  marginBottom: 25 }}>
                        <thead>
                            <tr>
                                <th className={classes.thNormal}
                                    style={{ width: 23, }}>
                                    <p className="western" style={{ textAlign: 'center' }}>
                                        No.
                                    </p>
                                </th>
                                <th className={classes.thNormal}
                                    style={{ width: 205, }}>
                                    <p className="western" style={{ textAlign: 'center' }}>
                                        SIKLUS AUDIT INTERNAL MANAJEMEN
                                    </p>
                                </th>
                                <th className={classes.thNormal}
                                    style={{ width: 220, }}>
                                    <p className="western" style={{ textAlign: 'center' }}>
                                        TINDAKAN
                                    </p>
                                </th>
                                <th className={classes.thNormal}
                                    style={{ width: 140, }}>
                                    <p className="western" style={{ textAlign: 'center' }}>
                                        KODE DOKUMEN
                                    </p>
                                </th>
                                <th className={classes.thNormal}
                                    style={{ width: 154, }}>
                                    <p className="western" style={{ textAlign: 'center' }}>
                                        KETERANGAN
                                    </p>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td rowSpan={7} className={classes.tdNormal} style={{ verticalAlign: 'top' }}>
                                <p className="western">1.</p>
                            </td>
                            <td rowSpan={7} className={classes.tdNormal} style={{ verticalAlign: 'top' }}>
                                <p className={classes.clickable}
                                   onClick={toPlan}
                                >
                                    PLAN (Perencanaan AIMA)
                                </p>
                            </td>
                            <td className={classes.tdNormal}>
                                <ol className={classes.ol}>
                                    <li>
                                        <p>Kepala TK menentukan persyaratan Tim Auditor</p>
                                    </li>
                                </ol>
                            </td>
                            <td className={classes.tdNormalCenter}>
                                <p className="western">P1 (SOP)</p>
                            </td>
                            <td className={classes.tdNormal}>
                                <p className="western">Persyaratan menjadi Tim Auditor</p>
                            </td>
                        </tr>
                        <tr>
                            <td className={classes.tdNormal}>
                                <ol className={classes.ol} start={2}>
                                    <li>
                                        <p>Kepala TK menentukan kriteria auditor</p>
                                    </li>
                                </ol>
                            </td>
                            <td className={classes.tdNormalCenter}>
                                <p className="western">P2 (SOP)</p>
                            </td>
                            <td className={classes.tdNormal}>
                                <p>Instrumen Perekrutan Tim Auditor dan sampai terpilih Tim Auditor</p>
                            </td>
                        </tr>
                        <tr>
                            <td className={classes.tdNormal}>
                                <ol className={classes.ol} start={3}>
                                    <li>
                                        <p>Kepala TK menentukan tanggung jawan Tim Auditor</p>
                                    </li>
                                </ol>
                            </td>
                            <td className={classes.tdNormalCenter}>
                                <p className="western">P3 (SOP)</p>
                            </td>
                            <td className={classes.tdNormal}>
                                <p/>
                            </td>
                        </tr>
                        <tr>
                            <td className={classes.tdNormal}>
                                <ol className={classes.ol} start={4}>
                                    <li>
                                        <p>Kepala TK membuat surat tugas kepada Tim Auditor</p>
                                    </li>
                                </ol>
                            </td>
                            <td className={classes.tdNormalCenter}>
                                <p className="western">P4 (SOP)</p>
                            </td>
                            <td className={classes.tdNormal}>
                                <p>Format contoh surat keputusan dan surat tugas Tim Auditor</p>
                            </td>
                        </tr>
                        <tr>
                            <td className={classes.tdNormal}>
                                <ol className={classes.ol} start={5}>
                                    <li>
                                        <p>Tim Auditor menyusun langkah kerja</p>
                                    </li>
                                </ol>
                            </td>
                            <td className={classes.tdNormalCenter}>
                                <p className="western">P5 (SOP)</p>
                            </td>
                            <td className={classes.tdNormal}>
                                <p />
                            </td>
                        </tr>
                        <tr>
                            <td className={classes.tdNormal}>
                                <ol className={classes.ol} start={6}>
                                    <li>
                                        <p>Tim Auditor menyusun ruang lingkup </p>
                                    </li>
                                </ol>
                            </td>
                            <td className={classes.tdNormalCenter}>
                                <p className="western">P6 (Produk)</p>
                            </td>
                            <td className={classes.tdNormal}>
                                <p>Format ruang lingkup/dimensi</p>
                            </td>
                        </tr>
                        <tr>
                            <td className={classes.tdNormal}>
                                <ol className={classes.ol} start={7}>
                                    <li>
                                        <p>Tim Auditor menyusun jadwal pelaksanaan audit</p>
                                    </li>
                                </ol>
                            </td>
                            <td className={classes.tdNormalCenter}>
                                <p className="western">P7 (Produk)</p>
                            </td>
                            <td className={classes.tdNormal}>
                                <p>Format jadwal pelaksanaan audit</p>
                            </td>
                        </tr>

                        <tr>
                            <td rowSpan={4} className={classes.tdNormal} style={{ verticalAlign: 'top' }}>
                                <p className="western">2.</p>
                            </td>
                            <td rowSpan={4} className={classes.tdNormal} style={{ verticalAlign: 'top' }}>
                                <p className={classes.clickable}
                                   onClick={toDo}
                                >
                                    DO (Pelaksanaan/Implementasi AIMA)
                                </p>
                            </td>
                            <td className={classes.tdNormal}>
                                <ol className={classes.ol}>
                                    <li>
                                        <p>Evaluasi dokumen yang disusun oleh audit</p>
                                    </li>
                                </ol>
                            </td>
                            <td className={classes.tdNormalCenter}>
                                <p className="western">D1 (Produk)</p>
                            </td>
                            <td className={classes.tdNormal}>
                                <p className="western">Instrumen Dokumen disusun oleh Audite</p>
                            </td>
                        </tr>
                        <tr>
                            <td className={classes.tdNormal}>
                                <ol className={classes.ol} start={2}>
                                    <li>
                                        <p>Uji lapangan</p>
                                    </li>
                                </ol>
                            </td>
                            <td className={classes.tdNormalCenter}>
                                <p className="western">D2 (Produk)</p>
                            </td>
                            <td className={classes.tdNormal}>
                                <p>Instrumen Kesesuaian/Observasi</p>
                            </td>
                        </tr>
                        <tr>
                            <td className={classes.tdNormal}>
                                <ol className={classes.ol} start={3}>
                                    <li>
                                        <p>Berita acara</p>
                                    </li>
                                </ol>
                            </td>
                            <td className={classes.tdNormalCenter}>
                                <p className="western">D3 (Produk)</p>
                            </td>
                            <td className={classes.tdNormal}>
                                <p>Format berita acara</p>
                            </td>
                        </tr>
                        <tr>
                            <td className={classes.tdNormal}>
                                <ol className={classes.ol} start={4}>
                                    <li>
                                        <p>Analisa temuan</p>
                                    </li>
                                </ol>
                            </td>
                            <td className={classes.tdNormalCenter}>
                                <p className="western">D4 (Produk)</p>
                            </td>
                            <td className={classes.tdNormal}>
                                <p>Instrumen analisa temuan</p>
                            </td>
                        </tr>

                        <tr>
                            <td rowSpan={2} className={classes.tdNormal} style={{ verticalAlign: 'top' }}>
                                <p className="western">3.</p>
                            </td>
                            <td rowSpan={2} className={classes.tdNormal} style={{ verticalAlign: 'top' }}>
                                <p className={classes.clickable}
                                   onClick={toCheck}
                                >
                                    CHECK (Pemeriksaan/Monitoring & Evaluasi)
                                </p>
                            </td>
                            <td className={classes.tdNormal}>
                                <ol className={classes.ol}>
                                    <li>
                                        <p>Membuat rekomendasi</p>
                                    </li>
                                </ol>
                            </td>
                            <td className={classes.tdNormalCenter}>
                                <p className="western">C1 (Produk)</p>
                            </td>
                            <td className={classes.tdNormal}>
                                <p className="western">Instrumen rekomendasi</p>
                            </td>
                        </tr>
                        <tr>
                            <td className={classes.tdNormal}>
                                <ol className={classes.ol} start={2}>
                                    <li>
                                        <p>Membuat Laporan Audit</p>
                                    </li>
                                </ol>
                            </td>
                            <td className={classes.tdNormalCenter}>
                                <p className="western">C2 (SOP)</p>
                            </td>
                            <td className={classes.tdNormal}>
                                <p>Format laporan audit </p>
                            </td>
                        </tr>

                        <tr>
                            <td rowSpan={1} className={classes.tdNormal} style={{ verticalAlign: 'top' }}>
                                <p className="western">4.</p>
                            </td>
                            <td rowSpan={1} className={classes.tdNormal} style={{ verticalAlign: 'top' }}>
                                <p className={classes.clickable}
                                   onClick={toAct}
                                >
                                    ACT (Tindak Lanjut)
                                </p>
                            </td>
                            <td className={classes.tdNormal}>
                                <ol className={classes.ol}>
                                    <li>
                                        <p>Monitoring pelaksanaan rekomendasi dan  Evaluasi Proses Audit</p>
                                    </li>
                                </ol>
                            </td>
                            <td className={classes.tdNormalCenter}>
                                <p className="western">A1 (SOP)</p>
                            </td>
                            <td className={classes.tdNormal}>
                                <p className="western">Format monitoring</p>
                            </td>
                        </tr>
                        </tbody>
                    </table>
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
    subtitle: {
        marginBottom: '0.1in',
        lineHeight: '150%',
        fontWeight: 500,
    },
    normal: {
        textIndent: '0.28in',
        marginBottom: '0.14in',
        lineHeight: '0.19in',
        textAlign: 'justify'
    },
    thNormal: {
        border: '1px solid #00000a',
        paddingTop: '0in',
        paddingBottom: '0in',
        paddingLeft: '0.08in',
        paddingRight: '0.08in',
        backgroundColor: "#bfbfbf",
    },
    tdNormal: {
        border: '1px solid #00000a',
        paddingTop: '0in',
        paddingBottom: '0in',
        paddingLeft: '0.08in',
        paddingRight: '0.08in'
    },
    tdNormalCenter: {
        border: '1px solid #00000a',
        paddingTop: '0in',
        paddingBottom: '0in',
        paddingLeft: '0.08in',
        paddingRight: '0.08in',
        textAlign: 'center',
    },
    ol: {
        padding: 0,
        paddingLeft: 20,
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

export default withStyles(styles)<IKetSopProps>(KetSOPView);