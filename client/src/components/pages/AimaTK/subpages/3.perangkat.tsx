import * as React from "react";
import {createStyles, Tooltip, Typography, WithStyles, withStyles} from "@material-ui/core";
import SubPage from "../../../__components/SubPage/index";
import {EAimaTKSubPages} from "../index";

const onExited = () => {
    // do something
};

export interface IPeraProps {
    showed: EAimaTKSubPages,
    reverse: boolean,
    toPage: (to: EAimaTKSubPages) => void,
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

function PerangkatView({ showed, reverse, classes, toPage }: WithStyles&IPeraProps) {
    const toPlan = () => toPage(EAimaTKSubPages.PLAN);
    const toDo = () => toPage(EAimaTKSubPages.DO);
    const toCheck = () => toPage(EAimaTKSubPages.CHEC);
    const toAct = () => toPage(EAimaTKSubPages.ACT);

    const show = showed === EAimaTKSubPages.PERA;
    return (
        <SubPage show={show} onExited={onExited} appear={true} reverse={reverse}>
            <div className={classes.container} style={(!show) ? { overflow: 'hidden' } : undefined}>
                <div className={classes.content}>
                    <Typography className={classes.title} variant="subheading">PERANGKAT AIMA TK</Typography>
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
                                <DownloadAble code="p1" name="P1" classes={classes}/>
                            </td>
                            <td className={classes.tdNormal}>
                                <p className="western">Persyaratan menjadi Tim Auditor</p>
                            </td>
                        </tr>
                        <tr>
                            <td className={classes.tdNormal}>
                                <ol start={2} className={classes.ol}>
                                    <li>
                                        <p>Kepala TK menentukan kriteria auditor</p>
                                    </li>
                                </ol>
                            </td>
                            <td className={classes.tdNormalCenter}>
                                <DownloadAble code="p2" name="P2" classes={classes}/>
                            </td>
                            <td className={classes.tdNormal}>
                                <p>Instrumen Perekrutan Tim Auditor dan sampai terpilih Tim Auditor</p>
                            </td>
                        </tr>
                        <tr>
                            <td className={classes.tdNormal}>
                                <ol start={3} className={classes.ol}>
                                    <li>
                                        <p>Kepala TK menentukan tanggung jawan Tim Auditor</p>
                                    </li>
                                </ol>
                            </td>
                            <td className={classes.tdNormalCenter}>
                                <DownloadAble code="p3" name="P3" classes={classes}/>
                            </td>
                            <td className={classes.tdNormal}>
                                <p className="western">Tanggung jawab Tim Auditor</p>
                            </td>
                        </tr>
                        <tr>
                            <td className={classes.tdNormal}>
                                <ol start={4} className={classes.ol}>
                                    <li>
                                        <p>Kepala TK membuat surat tugas kepada Tim Auditor</p>
                                    </li>
                                </ol>
                            </td>
                            <td className={classes.tdNormalCenter}>
                                <DownloadAble code="p4" name="P4" classes={classes}/>
                            </td>
                            <td className={classes.tdNormal}>
                                <p>Format contoh surat keputusan dan surat tugas Tim Auditor</p>
                            </td>
                        </tr>
                        <tr>
                            <td className={classes.tdNormal}>
                                <ol start={5} className={classes.ol}>
                                    <li>
                                        <p>Tim Auditor menyusun langkah kerja</p>
                                    </li>
                                </ol>
                            </td>
                            <td className={classes.tdNormalCenter}>
                                <DownloadAble code="p5" name="P5" classes={classes}/>
                            </td>
                            <td className={classes.tdNormal}>
                                <p className="western">Format langkah kerja audit internal manajemen</p>
                            </td>
                        </tr>
                        <tr>
                            <td className={classes.tdNormal}>
                                <ol start={6} className={classes.ol}>
                                    <li>
                                        <p>Tim Auditor membuat ruang lingkup/dimensi audit internal manajemen</p>
                                    </li>
                                </ol>
                            </td>
                            <td className={classes.tdNormalCenter}>
                                <DownloadAble code="p6" name="P6" classes={classes}/>
                            </td>
                            <td className={classes.tdNormal}>
                                <p>Format ruang lingkup audit internal manajemen</p>
                            </td>
                        </tr>
                        <tr>
                            <td className={classes.tdNormal}>
                                <ol start={7} className={classes.ol}>
                                    <li>
                                        <p>Tim Auditor menyusun jadwal dan rencana pelaksanaan audit</p>
                                    </li>
                                </ol>
                            </td>
                            <td className={classes.tdNormalCenter}>
                                <DownloadAble code="p7" name="P7" classes={classes}/>
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
                                <DownloadAble code="d1" name="D1" classes={classes}/>
                            </td>
                            <td className={classes.tdNormal}>
                                <p>Format Instrumen Dokumen disusun oleh Audite</p>
                            </td>
                        </tr>
                        <tr>
                            <td className={classes.tdNormal}>
                                <ol start={2} className={classes.ol}>
                                    <li>
                                        <p>Uji lapangan</p>
                                    </li>
                                </ol>
                            </td>
                            <td className={classes.tdNormalCenter}>
                                <DownloadAble code="d2" name="D2" classes={classes}/>
                                <br />
                                <DownloadAble code="d2a" name="D2a" classes={classes}/>
                            </td>
                            <td className={classes.tdNormal}>
                                <p>Format Instrumen Kesesuaian/Observasi</p>
                            </td>
                        </tr>
                        <tr>
                            <td className={classes.tdNormal}>
                                <ol start={3} className={classes.ol}>
                                    <li>
                                        <p>Berita acara</p>
                                    </li>
                                </ol>
                            </td>
                            <td className={classes.tdNormalCenter}>
                                <DownloadAble code="d3" name="D3" classes={classes}/>
                            </td>
                            <td className={classes.tdNormal}>
                                <p>Format berita acara</p>
                            </td>
                        </tr>
                        <tr>
                            <td className={classes.tdNormal}>
                                <ol start={4} className={classes.ol}>
                                    <li>
                                        <p>Analisa temuan</p>
                                        <p>- Rapat pelaksanaan</p>
                                        <p>- Notulen rapat</p>
                                        <p>- Daftar hadir</p>
                                    </li>
                                </ol>
                            </td>
                            <td className={classes.tdNormalCenter}>
                                <DownloadAble code="d4" name="D4" classes={classes}/>
                            </td>
                            <td className={classes.tdNormal}>
                                <p>Format Instrumen analisa temuan</p>
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
                                <DownloadAble code="c1" name="C1" classes={classes}/>
                            </td>
                            <td className={classes.tdNormal}>
                                <p className="western">Format Instrumen rekomendasi</p>
                            </td>
                        </tr>
                        <tr>
                            <td className={classes.tdNormal}>
                                <ol start={2} className={classes.ol}>
                                    <li>
                                        <p>Membuat Laporan Audit</p>
                                    </li>
                                </ol>
                            </td>
                            <td className={classes.tdNormalCenter}>
                                <DownloadAble code="c2" name="C2" classes={classes}/>
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
                                        <p>Tindak Lanjut pelaksanaan rekomendasi dan  Evaluasi Proses Audit</p>
                                    </li>
                                </ol>
                            </td>
                            <td className={classes.tdNormalCenter}>
                                <DownloadAble code="a1" name="A1" classes={classes}/>
                            </td>
                            <td className={classes.tdNormal}>
                                <p className="western">Format tindak lanjut</p>
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

export default withStyles(styles)<IPeraProps>(PerangkatView);