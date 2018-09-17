// import community package
import * as React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";

// import types
import { IQuestion } from "../../../../../../reducers/question";

interface IQuestionViewProps {
    question: IQuestion,
}

function convertToNumberingScheme(toChar: number) {
    const baseChar = ("a").charCodeAt(0);
    let letters  = "";

    do {
        toChar -= 1;
        letters = String.fromCharCode(baseChar + (toChar % 26)) + letters;
        toChar = Math.floor(toChar / 26);
    } while(toChar > 0);

    return letters;
}

function QuestionView({ children, question, classes }: { children?: any, classes?: any}&IQuestionViewProps) {
    const cNumber: string = convertToNumberingScheme(question.number);
    return (
        <div className={classes.questionContainer}>
            <Typography className={classes.question}> { cNumber }. { question.question } </Typography>
            { children }
        </div>
    )
}

const styles = (theme: any) => ({
    questionContainer: {
        margin: theme.spacing.unit,
        maxWidth: 740,
    },
    question: {
        fontSize: '0.9rem',
    }
});

export default withStyles(styles as any)<IQuestionViewProps>(QuestionView);