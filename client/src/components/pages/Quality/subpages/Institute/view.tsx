// import community package
import * as React from "react";

// import type
import { IInstituteIdentity } from "../../../../../reducers/institute";
import SubPage from "../../../../__components/SubPage";
import {
    Button,
    TextField,
    Typography,
    withStyles,
    WithStyles,
    FormControlLabel,
    FormLabel, Tooltip,
} from "@material-ui/core";
import {blue, lightBlue} from "@material-ui/core/colors";
import Radio from "@material-ui/core/Radio";
import Notification from "../../../../__components/Notification";

export interface IInstituteViewProps {
    data: IInstituteIdentity & {
        yearValid: boolean,
        eowValid: boolean,
        nextable: boolean,
        fetchLoading: boolean,
        fetchError: string,
        show: boolean,
        ref: {
            refStatusHandler: any,
            refAccreditationHandler: any,
            showStatus: boolean,
            showAccreditation: boolean,
        }
    },
    actions: {
        handleIName: (e: React.ChangeEvent<HTMLInputElement>) => void,
        handleIStatus: (e: React.ChangeEvent<HTMLInputElement>) => void,
        handleIStatisticNumber: (e: React.ChangeEvent<HTMLInputElement>) => void,
        handleINPSNNumber: (e: React.ChangeEvent<HTMLInputElement>) => void,
        handleIEstablishDate: (e: React.ChangeEvent<HTMLInputElement>) => void,
        handleIAddress: (e: React.ChangeEvent<HTMLInputElement>) => void,
        handleIEmailWeb: (e: React.ChangeEvent<HTMLInputElement>) => void,
        handleIAccreditation: (e: React.ChangeEvent<HTMLInputElement>) => void,
        handleIQualityAssurance: (e: React.ChangeEvent<HTMLInputElement>) => void,
        handleSubmit: (e: React.MouseEvent<HTMLInputElement>) => void,
        handleOnExited: () => void,
    },
}

function InstituteView( { data, actions, classes }: IInstituteViewProps&WithStyles ) {
    return (
        <SubPage show={data.show} onExited={actions.handleOnExited} appear={true}>
            <div className={classes.container}>
                <Typography variant="title" className={classes.title}>Identitas Lembaga TK</Typography>
                <Typography variant="subheading" className={classes.title}>Masukan identitas lembaga TK</Typography>
                <div className={classes.inputContainer}>
                    <TextField
                        label="Nama Lembaga TK"
                        placeholder="Masukan Nama Lembaga TK"
                        margin="normal"
                        value={data.name}
                        onChange={actions.handleIName}
                        className={classes.textInput}
                    />
                    <div className={classes.radioContainer} style={{ marginLeft: 20 }}>
                        <FormLabel component="legend" className={classes.radioContainerLabel}>Status TK</FormLabel>
                        <div className={classes.radioGroup}>
                            <FormControlLabel
                                control={
                                    <Radio
                                        checked={data.status === 'negeri'}
                                        value="negeri"
                                        name="status-tk"
                                        color="default"
                                        onChange={actions.handleIStatus}
                                    />
                                }
                                label="Negeri"
                                className={classes.radioLabel}
                            />
                            <FormControlLabel
                                control={
                                    <Radio
                                        checked={data.status === 'swasta'}
                                        value="swasta"
                                        name="status-tk"
                                        color="default"
                                        onChange={actions.handleIStatus}
                                    />
                                }
                                label="Swasta"
                                className={classes.radioLabel}
                            />
                            <FormControlLabel
                                control={
                                    <Radio
                                        checked={(data.status !== 'negeri' && data.status !== 'swasta' && data.status !== '')}
                                        value="lainnya"
                                        name="status-tk"
                                        color="default"
                                        onChange={actions.handleIStatus}
                                        onClick={actions.handleIStatus as any}
                                    />
                                }
                                label={( data.ref.showStatus && data.status !== 'negeri' && data.status !== 'swasta') ?
                                    <TextField
                                        inputRef={data.ref.refStatusHandler}
                                        label=""
                                        placeholder="Status TK Lainnya"
                                        margin="normal"
                                        value={data.status}
                                        onChange={actions.handleIStatus}
                                        className={classes.radioText}
                                    />
                                    : (data.status !== '' && data.status !== 'negeri' && data.status !== 'swasta') ? data.status : "Lainnya"
                                }
                                className={classes.radioLabel}
                            />
                        </div>
                    </div>
                    <TextField
                        label="Nomor Statistik TK"
                        placeholder="Masukan Nomor Statistik TK"
                        margin="normal"
                        value={data.statisticNumber}
                        onChange={actions.handleIStatisticNumber}
                        className={classes.textInput}
                    />
                    <TextField
                        label="Nomor NPSN TK"
                        placeholder="Masukan Nomor NPSN TK"
                        margin="normal"
                        value={data.NPSNNumber}
                        onChange={actions.handleINPSNNumber}
                        className={classes.textInput}
                        style={{ marginLeft: 20 }}
                    />
                    <TextField
                        label="Tahun Berdiri TK"
                        placeholder="Masukan Tahuh Berdiri TK"
                        margin="normal"
                        value={data.establishedDate}
                        onChange={actions.handleIEstablishDate}
                        className={classes.textInput}
                        error={(!data.yearValid)}
                        FormHelperTextProps={{
                            style: {
                                position: "absolute",
                                top: 50,
                            }
                        }}
                        helperText={ !data.yearValid && "Mohon masukan tahun dengan 4 digit angka" }
                    />
                    <TextField
                        label="e-mail/web TK"
                        placeholder="Masukan email atau alamat web TK"
                        margin="normal"
                        value={data.emailOrWeb}
                        onChange={actions.handleIEmailWeb}
                        className={classes.textInput}
                        style={{ marginLeft: 20 }}
                        error={(!data.eowValid)}
                        FormHelperTextProps={{
                            style: {
                                position: "absolute",
                                top: 50,
                            }
                        }}
                        helperText={ !data.eowValid && "Mohon masukan alamat dengan benar" }
                    />
                    <div className={classes.radioContainer} style={{width: 300}}>
                        <FormLabel component="legend" className={classes.radioContainerLabel}>Keberadaan Penjamin Mutu</FormLabel>
                        <div className={classes.radioGroup}>
                            <FormControlLabel
                                control={
                                    <Radio
                                        checked={data.qualityAssurance === 'ada'}
                                        value="ada"
                                        name="penjamin-tk"
                                        color="default"
                                        onChange={actions.handleIQualityAssurance}
                                    />
                                }
                                label="Ada"
                                className={classes.radioLabel}
                            />
                            <FormControlLabel
                                control={
                                    <Radio
                                        checked={data.qualityAssurance === 'tidak'}
                                        value="tidak"
                                        name="penjamin-tk"
                                        color="default"
                                        onChange={actions.handleIQualityAssurance}
                                    />
                                }
                                label="Tidak Ada"
                                className={classes.radioLabel}
                            />
                            <FormControlLabel
                                control={
                                    <Radio
                                        checked={data.qualityAssurance === 'proses'}
                                        value="proses"
                                        name="penjamin-tk"
                                        color="default"
                                        onChange={actions.handleIQualityAssurance}
                                    />
                                }
                                label="Proses"
                                className={classes.radioLabel}
                            />
                        </div>
                    </div>
                    <div className={classes.radioContainer} style={{ marginLeft: 20 }}>
                        <FormLabel component="legend" className={classes.radioContainerLabel}>Peringkat Akreditasi TK</FormLabel>
                        <div className={classes.radioGroup}>
                            <FormControlLabel
                                control={
                                    <Radio
                                        checked={data.accreditation === 'a'}
                                        value="a"
                                        name="akreditas-tk"
                                        color="default"
                                        onChange={actions.handleIAccreditation}
                                    />
                                }
                                label="A"
                                className={classes.radioLabel}
                            />
                            <FormControlLabel
                                control={
                                    <Radio
                                        checked={data.accreditation === 'b'}
                                        value="b"
                                        name="akreditasi-tk"
                                        color="default"
                                        onChange={actions.handleIAccreditation}
                                    />
                                }
                                label="B"
                                className={classes.radioLabel}
                            />
                            <FormControlLabel
                                control={
                                    <Radio
                                        checked={data.accreditation === 'c'}
                                        value="c"
                                        name="akreditasi-tk"
                                        color="default"
                                        onChange={actions.handleIAccreditation}
                                    />
                                }
                                label="C"
                                className={classes.radioLabel}
                            />
                            <FormControlLabel
                                control={
                                    <Radio
                                        checked={( data.accreditation !== '' && data.accreditation !== 'a' && data.accreditation !== 'b' && data.accreditation !== 'c')}
                                        value="lainnya"
                                        name="akreditasi-tk"
                                        color="default"
                                        onChange={actions.handleIAccreditation}
                                        onClick={actions.handleIAccreditation as any}
                                    />
                                }
                                label={( data.ref.showAccreditation && data.accreditation !== 'a' && data.accreditation !== 'b' && data.accreditation !== 'c') ?
                                    <TextField
                                        inputRef={data.ref.refAccreditationHandler}
                                        placeholder="Peringkat Akreditasi TK Lainnya"
                                        margin="normal"
                                        value={data.accreditation}
                                        onChange={actions.handleIAccreditation}
                                        className={classes.radioText}
                                    />
                                    : (data.accreditation !== '' && data.accreditation !== 'a' && data.accreditation !== 'b' && data.accreditation !== 'c') ? data.accreditation : "Lainnya"
                                }
                                className={classes.radioLabel}
                            />
                        </div>
                    </div>
                    <TextField
                        label="Alamat TK"
                        placeholder="Masukan Alamat TK"
                        margin="normal"
                        multiline={true}
                        rowsMax="2"
                        value={data.address}
                        onChange={actions.handleIAddress}
                        className={classes.textInput}
                        style={{ width: 620 }}
                    />
                </div>
                <Tooltip title="Mulai mengisi Dimensi 1" placement="bottom">
                    <Button
                        variant="extendedFab"
                        color="primary"
                        value="Close"
                        onClick={actions.handleSubmit}
                        disabled={!data.nextable}
                        classes={{
                            root: classes.btnNext,
                            disabled: classes.btnNextDisabled,
                        }}
                    >
                        Selanjutnya
                    </Button>
                </Tooltip>
                <Notification in={data.fetchLoading} timeout={250} sClassName={classes.notification}>
                    Mohon tunggu sejenak
                </Notification>
                <Notification in={!!(data.fetchError)} timeout={250} error={true} sClassName={classes.notification}>
                    { data.fetchError ?
                        data.fetchError : 'Mohon maaf terjadi kesalahan, mohon ulangi beberapa saat lagi atau coba muat ulang laman anda'
                    }
                </Notification>
            </div>
        </SubPage>
    );
}

// { (!data.yearValid) ? <>Mohon masukan tahun yang benar</> : null }
// { (!data.eowValid) ? <>email atau alamat website tidak valid</> : null }

export default withStyles({
    container: {
        position: "absolute",
        // marginTop: -20,
        display: "flex",
        flexDirection: "column",
    },
    inputContainer: {
        display: "flex",
        flexDirection: "row",
        flexWrap: 'wrap',
        width: '100%',
        maxWidth: 750,
    },

    radioContainer: {
        display: "flex",
        flexDirection: "column",
        margin: '16px 0 8px',
    },
    radioContainerLabel: {
        alignSelf: "flex-start",
    },
    radioGroup: {
        display: 'flex',
        flexDirection: 'row',
    },
    radioLabel: {
        height: 24,
        marginTop: 4,
    },
    radioText: {
        marginTop: 8,
        width: 190,
    },
    title: {
        marginTop: 7,
        marginBottom: 4,
    },
    subTitle: {
        marginTop: 12,
        alignSelf: 'center',
    },
    textInput: {
        width: 300,
    },
    btnNext: {
        marginTop: 14,
        marginBottom: 8,
        width: 110,
        background: 'linear-gradient(45deg, '+blue[600]+' 35%, '+lightBlue[400]+' 90%)',
        // minHeight: 34,
        height: 38,
        // padding: '0 16px 0 14px',
        boxShadow: 'none',
        fontSize: '0.8em',
        alignSelf: 'center',
    },
    btnNextDisabled: {
        background: 'rgba(0, 0, 0, 0.12)',
    },
    notification: {
        bottom: -25,
    }
})(InstituteView);