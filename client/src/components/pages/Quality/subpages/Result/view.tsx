import * as React from "react";
import {
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    withStyles,
    WithStyles,
    createStyles,
    Typography, Button, Tooltip
} from "@material-ui/core";

import SubPage from "../../../../__components/SubPage";
import {EScoreCriteria, IScore} from "./index";
import {IInstituteIdentity} from "../../../../../reducers/institute";
import {blue, lightBlue} from "@material-ui/core/colors";

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

export interface IResultViewProps {
    data: {
        show: boolean
        score: IScore[],
        institute: IInstituteIdentity,
        userId: string,
    }
}

const asa = () => {
    console.log("!!! Result Exited!");
};

const scoreEnumToString = (score: EScoreCriteria): { char: string, criteria: string } => {
    switch (score) {
        case EScoreCriteria.A:
            return {
                char: "A",
                criteria: "Sangat Berkualitas",
            };
        case EScoreCriteria.B:
            return {
                char: "B",
                criteria: "Berkualitas",
            };
        case EScoreCriteria.C:
            return {
                char: "C",
                criteria: "Kualitas Standar",
            };
        case EScoreCriteria.D:
            return {
                char: "D",
                criteria: "Belum Berkualitas",
            };
    }
};

function capitalizeFirstLetter(s: string) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}

function ResultView( { data, classes }: IResultViewProps&WithStyles) {
    return (
        <SubPage show={data.show} onExited={asa} appear={false}>
            <div className={classes.container} style={(!data.show) ? { overflow: 'hidden' } : undefined}>
                <div className={classes.content}>
                    <Typography className={classes.title} variant="subheading">Hasil Instrumen Deteksi Mutu TK</Typography>
                    <table style={{
                        marginTop: 25,
                        marginBottom: 20,
                        marginLeft: 22,
                    }}>
                        <tbody>
                            <tr>
                                <td style={{ width: 190 }}><Typography>Nama Lembaga TK</Typography></td>
                                <td><Typography>: {data.institute.name}</Typography></td>
                            </tr>
                            <tr>
                                <td style={{ width: 190 }}><Typography>Status TK</Typography></td>
                                <td><Typography>: {capitalizeFirstLetter(data.institute.status)}</Typography></td>
                            </tr>
                            <tr>
                                <td style={{ width: 190 }}><Typography>No. Statistik TK</Typography></td>
                                <td><Typography>: {data.institute.statisticNumber}</Typography></td>
                            </tr>
                            <tr>
                                <td style={{ width: 190 }}><Typography>No. NPSN</Typography></td>
                                <td><Typography>: {data.institute.NPSNNumber}</Typography></td>
                            </tr>
                            <tr>
                                <td style={{ width: 190 }}><Typography>Tahun Berdiri TK</Typography></td>
                                <td><Typography>: {data.institute.establishedDate}</Typography></td>
                            </tr>
                            <tr>
                                <td style={{ width: 190 }}><Typography>Alamat TK</Typography></td>
                                <td><Typography>: {data.institute.address}</Typography></td>
                            </tr>
                            <tr>
                                <td style={{ width: 190 }}><Typography>Email/Web TK</Typography></td>
                                <td><Typography>: {data.institute.emailOrWeb}</Typography></td>
                            </tr>
                            <tr>
                                <td style={{ width: 190 }}><Typography>Peringkat Akreditasi</Typography></td>
                                <td><Typography>: {capitalizeFirstLetter(data.institute.accreditation)}</Typography></td>
                            </tr>
                            <tr>
                                <td style={{ width: 190 }}><Typography>Keberadaan Penjamin Mutu</Typography></td>
                                <td><Typography>: {capitalizeFirstLetter(data.institute.qualityAssurance)}</Typography></td>
                            </tr>
                        </tbody>
                    </table>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Dimensi</TableCell>
                                <TableCell>Keterangan</TableCell>
                                <TableCell numeric={true}>Jumlah Nilai</TableCell>
                                <TableCell>Huruf</TableCell>
                                <TableCell>Kriteria TK</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.score.map(row => {
                                const pScore = scoreEnumToString(row.score.scoreCriteria);
                                return (
                                    <TableRow key={row.dimension}>
                                        <TableCell component="th" scope="row">
                                            {row.dimension}
                                        </TableCell>
                                        <TableCell>
                                            {row.dimensionName}
                                        </TableCell>
                                        <TableCell numeric={true}>{row.score.scoreSum}</TableCell>
                                        <TableCell>{pScore.char}</TableCell>
                                        <TableCell>{pScore.criteria}</TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                    <Tooltip title="Tekan untuk mengunduh hasil" placement="bottom">
                        <Button
                            variant="extendedFab"
                            color="primary"
                            value="Close"
                            className={classes.btnNext}
                            href={`${API_ENDPOINT}users/${data.userId}/result/`}
                        >
                            Unduh Hasil
                        </Button>
                    </Tooltip>
                </div>
            </div>
        </SubPage>
    )
}

const style = createStyles({
    root: {
        width: '100%',
        overflowX: 'auto',
    },
    table: {
        minWidth: 760,
        maxWidth: 760,
    },
    title: {
        marginBottom: '0.14in',
        lineHeight: '120%',
        textAlign: 'center',
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
    btnNext: {
        marginTop: 30,
        marginBottom: 40,
        width: 135,
        background: 'linear-gradient(45deg, '+blue[600]+' 35%, '+lightBlue[400]+' 90%)',
        // minHeight: 34,
        height: 38,
        // padding: '0 16px 0 14px',
        boxShadow: 'none',
        fontSize: '0.8em',
        alignSelf: 'center',
    },
    content: {
        width: '100%',
        maxWidth: 760,
        marginBottom: 25,
        marginTop: 25,
        display: 'flex',
        flexDirection: 'column',
    },
});

export default withStyles(style)<IResultViewProps>(ResultView)