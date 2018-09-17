// import community package
import * as React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Radio from "@material-ui/core/Radio";
import FormControl from "@material-ui/core/FormControl"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import green from "@material-ui/core/colors/green";

// import types
import {IQuestionAnswer} from "../../../../../../reducers/question";

export interface IAnswerViewProps {
    data: {
        questionID: string,
        answers: IQuestionAnswer[],
        selected: string,
        selectProgress: string,
        loading: boolean
    },
    actions: {
        handleAnswerChange: (e: React.FormEvent<HTMLInputElement>) => void,
    }
}
interface IAnswerProps {
    classes?: any,
}

function AnswerView( { data, actions, classes }: IAnswerViewProps&IAnswerProps ) {
    return (
        <FormControl component="fieldset" >
            <div className={classes.root}>
                {data.answers.map(answer => {
                    const thisLoading = data.loading && answer.answer === data.selectProgress;
                    return (
                        <FormControlLabel
                            key={answer.score}
                            value={answer.answer}
                            control={
                                <>
                                    <Radio
                                        checked={ ( answer.answer === data.selected ) }
                                        onChange={actions.handleAnswerChange}
                                        value={answer.answer}
                                        name={data.questionID}
                                        color="default"
                                        className={(thisLoading) ? classes.radioProgress : classes.radioCompleted }
                                    />
                                    { (thisLoading) &&
                                    <CircularProgress size={20} className={classes.answerProgress} />
                                    }
                                </>
                            }
                            label={answer.answer}
                            className={classes.wrapper}
                        />
                    )
                })}
            </div>
        </FormControl>
    )
}

/*
    <div className={classes.root} >
        { data.answers.map(answer => {
            const thisLoading = data.loading && answer.answer === data.selectProgress;
            return (
                <div className={classes.wrapper} key={answer.score}>
                    <Radio
                        checked={ ( answer.answer === data.selected ) }
                        onChange={actions.handleAnswerChange}
                        value={answer.answer}
                        name={data.questionID}
                        color="default"
                        className={(thisLoading) ? classes.radioProgress : classes.radioCompleted }
                    />{ answer.answer }
                    { (thisLoading) &&
                    <CircularProgress size={20} className={classes.answerProgress} />
                    }
                </div>
            )
        })}
    </div>
 */

const styles = (theme: any) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        minWidth: 320,
        maxWidth: 640,
    },
    wrapper: {
        margin: theme.spacing.unit,
        position: 'relative',
        minWidth: 300,
        maxWidth: 300,
    },
    answerProgress: {
        color: green[500],
        position: 'absolute',
        top: 14,
        left: 14,
        zIndex: 1,
    },
    radioProgress: {
        opacity: 0,
        transition: 'opacity 250ms ease-in-out',
    },
    radioCompleted: {
        opacity: 1,
        transition: 'opacity 250ms ease-in-out',
    },
});

export default withStyles(styles as any)(AnswerView);