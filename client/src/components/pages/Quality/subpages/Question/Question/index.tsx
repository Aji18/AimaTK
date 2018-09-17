// import community package
import * as React from "react";

// import view, component and types
import {IQuestion} from "../../../../../../reducers/question";
import Answer from "../Answer/index";
import QuestionView from "./view";

interface IQuestionProps {
    question: IQuestion
}

export default class Question extends React.Component<IQuestionProps>{
    public render() {
        const question = this.props.question;
        return (
            <QuestionView question={question} >
                <Answer question={question} />
            </QuestionView>
        )
    }
}