// import community package
import * as React from "react";
import {Button, TextField, Tooltip} from "@material-ui/core";
import {Typography, withStyles, WithStyles} from "@material-ui/core";
import {blue, lightBlue} from "@material-ui/core/colors";

// import types
import {IUser} from "../../../../../reducers/user";
import SubPage from "../../../../__components/SubPage";
import Notification from "../../../../__components/Notification";

export interface IUserViewProps {
    data: {
        show: boolean,
        name: string,
        nNumber: string,
        userData: IUser,
        fetchLoading: boolean,
        fetchError: string,
        nextable: boolean,
        editable: boolean,
        instituteLoading: boolean,
        fetchInstituteError: string,
        reverse: boolean,
    },
    actions: {
        handleUserName: (e: React.ChangeEvent<HTMLInputElement>) => void,
        handleUserNumber: (e: React.ChangeEvent<HTMLInputElement>) => void,
        handleSubmit: (e: React.MouseEvent<HTMLInputElement>) => void,
        handleNotMe: (e: React.MouseEvent<HTMLInputElement>) => void,
        handleOnExited: () => void,
    }
}

function UserView ( { data, actions, classes }: IUserViewProps&WithStyles ) {
    return (
        <SubPage show={data.show} onExited={actions.handleOnExited} appear={true} reverse={data.reverse}>
            <div className={classes.container}>
                <Typography variant="title" className={classes.title}>Identitas Diri</Typography>
                <Typography variant="subheading" className={classes.title}>Masukan identitas diri anda</Typography>
                <TextField
                    label="Nama"
                    placeholder="Masukan Nama Anda"
                    margin="normal"
                    value={data.name}
                    onChange={actions.handleUserName}
                    disabled={!data.editable}
                    className={classes.textInput}
                />
                <TextField
                    label="Nomor"
                    placeholder="Masukan Nomor Anda"
                    margin="normal"
                    value={data.nNumber}
                    onChange={actions.handleUserNumber}
                    disabled={!data.editable}
                    className={classes.textInput}
                />
                <Tooltip title="Menuju ke pengisian identitas TK" placement="bottom">
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
                {(data.userData.id) &&
                    <>
                        <div className={classes.line}/>
                        <Typography className={classes.subTitle}>Identitas diatas bukan anda?</Typography>
                        <Tooltip title="Isi dengan identitas lainnya" placement="bottom">
                            <Button
                                variant="extendedFab"
                                color="primary"
                                value="Close"
                                onClick={actions.handleNotMe}
                                disabled={!data.nextable}
                                className={classes.btnNext}
                            >
                                Bukan Saya
                            </Button>
                        </Tooltip>
                    </>
                }
                <Notification in={data.fetchLoading} timeout={250}>
                    Mohon tunggu sejenak
                </Notification>
                <Notification in={data.instituteLoading} timeout={250}>
                    Mohon tunggu sejenak, sedang mengambil data
                </Notification>
                <Notification in={!!(data.fetchError)} timeout={250} error={true}>
                    { data.fetchError ?
                        data.fetchError : 'Mohon maaf terjadi kesalahan, mohon ulangi beberapa saat lagi atau coba muat ulang laman anda'
                    }
                </Notification>
                <Notification in={!!(data.fetchInstituteError)} timeout={250} error={true}>
                    { data.fetchInstituteError ?
                        data.fetchInstituteError : 'Mohon maaf terjadi kesalahan, mohon ulangi beberapa saat lagi atau coba muat ulang laman anda'
                    }
                </Notification>
            </div>
        </SubPage>
    );
}

export default withStyles({
    container: {
        position: "absolute",
        marginTop: -20,
        display: "flex",
        flexDirection: "column",
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
        width: 480,
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
    line: {
        marginTop: 8,
        marginLeft: 20,
        width: 'calc(100% - 40px)',
        height: '0px',
        borderBottom: '1px solid grey'
    },
})(UserView);