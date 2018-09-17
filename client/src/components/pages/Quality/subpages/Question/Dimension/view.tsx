// import community package
import * as React from "react";

// import types
import {IQuestionDimension} from "../../../../../../reducers/question";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
import SubPage from "../../../../../__components/SubPage/index";
import {blue, lightBlue} from "@material-ui/core/colors";
import {Tooltip, Typography} from "@material-ui/core";

export interface IDimensionViewProps {
    children?: any,
    data: {
        dimension: IQuestionDimension,
        nextable: boolean
        show: boolean,
        lastDimension: number,
    },
    actions: {
        handleNext: (e: any) => void,
    }
}

const onExited = () => {
    // console.log('onExited');
};

function DimensionView( {children, data, actions, classes}: IDimensionViewProps&{ classes: any } ) {
    const nextString = (data.dimension.dimension === data.lastDimension) ? "Tampilkan Hasil" : `Lanjut mengisi Dimensi ${data.dimension.dimension+1}`;

    return (
        <SubPage show={data.show} onExited={onExited} appear={true}>
            <div className={classes.container} style={(!data.show) ? { overflow: 'hidden' } : undefined}>
                <div className={classes.content}>
                    <Typography variant="headline" style={{ marginBottom: 5 }} >
                        Dimensi { data.dimension.dimension }
                    </Typography>
                    <Typography variant="headline" style={{ marginBottom: 10 }} >
                        { data.dimension.name }
                    </Typography>
                    { children }
                    <Tooltip title={nextString} placement="bottom">
                        <Button
                            variant="extendedFab"
                            color="primary"
                            value='Selanjutnya'
                            disabled={!data.nextable}
                            onClick={actions.handleNext}
                            classes={{
                                root: classes.btnNext,
                                disabled: classes.btnNextDisabled,
                            }}
                        >
                            Selanjutnya
                        </Button>
                    </Tooltip>
                </div>
            </div>
        </SubPage>
    )
}

const styles = (theme: any) => ({
    container: {
        position: 'absolute',
        top: 0,
        height: '100%',
        width: '100%',
        overflow: 'auto',
        marginLeft: ((window as any).chrome) ? -5 : 0,

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
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 25,
        marginTop: 25,
    },
    dimension: {
        margin: theme.spacing.unit,
        fontSize: '2em'
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
});

export default withStyles(styles as any)<IDimensionViewProps>(DimensionView);