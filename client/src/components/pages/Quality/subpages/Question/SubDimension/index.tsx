// import community package
import * as React from "react";

// import view, component and types
import Question from "../Question/index";
import {IQuestionSubDimension} from "../../../../../../reducers/question";
import SubDimensionView from "./view";

interface ISubDimensionProps {
    subdimension: IQuestionSubDimension,
}

export default class SubDimension extends React.Component<ISubDimensionProps> {
    public render() {
        const subdimension = this.props.subdimension;
        return (
            <SubDimensionView subdimension={subdimension}>
                {subdimension.questions.map(question => {
                    return <Question key={question.id} question={question}/>
                })}
            </SubDimensionView>
        )
    }
}