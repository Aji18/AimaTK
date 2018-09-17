// import community package
import * as React from "react";
import { connect } from "react-redux";
import {ThunkDispatch} from "redux-thunk";

// import view and types
import {actionThunk} from "../../../../../../utils/Actioner";
import {IApplicationState} from "../../../../../../reducers";
import {IQuestion} from "../../../../../../reducers/question";
import {addRequest, IAnswer, IAnswerAdd, IOnLine} from "../../../../../../reducers/answer";
import {default as AnswerView, IAnswerViewProps} from "./view";
import * as _ from "lodash";

interface IAnswerStateProps {
    answers: IAnswer[],
    answersLoading: IOnLine[],
}
interface IAnswerDispatchProps {
    addAnswer: ( data: IAnswerAdd ) => void,
}

interface IAnswerDefaultProps {
    question: IQuestion
}
interface IAnswerState {
    selected: string,
    selectProgress: string,
    loading: boolean,
}

type IAnswerProps = IAnswerStateProps & IAnswerDispatchProps & IAnswerDefaultProps;

class Answer extends React.Component<IAnswerProps, IAnswerState> {
    public state = {
        selected: '',
        selectProgress: '',
        loading: false,
    };

    public componentDidMount() {
        const selected = _.find(this.props.answers, { ques_id: this.props.question.id });
        if (selected) {
            this.setState({
                selected: selected.answer.answer,
            })
        }
    }
    public componentWillReceiveProps(nextProps: IAnswerProps) {
        const selected = _.find(nextProps.answers, { ques_id: this.props.question.id });
        if (selected) {
            if (this.state.selected !== selected.answer.answer) {
                this.setState({
                    selected: selected.answer.answer,
                })
            }
        }
        const loading = _.find(nextProps.answersLoading, { ques_id : this.props.question.id });
        if (loading) {
            if (this.state.loading !== loading.loading) {
                this.setState({
                    loading: loading.loading,
                })
            }
        }
    }

    public render() {
        const viewProps: IAnswerViewProps = {
            data: {
                questionID: this.props.question.id,
                answers: this.props.question.answers,
                selected: this.state.selected,
                selectProgress: this.state.selectProgress,
                loading: this.state.loading,
            },
            actions: {
                handleAnswerChange: this.handleAnswerChange,
            }
        };
        return <AnswerView {...viewProps}/>
    }

    private handleAnswerChange = (e: React.FormEvent<HTMLInputElement>) => {
        const selected = e.currentTarget.value;
        const answer = _.find(this.props.question.answers, { answer: selected });
        if (answer) {
            this.setState({
                selectProgress: selected,
            });
            this.props.addAnswer({
                ques_id: this.props.question.id,
                answer,
            });
        }
    };
}

const mapStatePropsAnswer = (state: IApplicationState): IAnswerStateProps => {
    return {
        answers: state.answer.data,
        answersLoading: state.answer.loading,
    }
};
const mapDispatchAnswer = ( dispatch: ThunkDispatch<any, any, any> ): IAnswerDispatchProps => {
    return {
        addAnswer: ( answer: IAnswerAdd ) => actionThunk(thunk => addRequest( thunk, answer ), dispatch),
    }
};

export default connect(mapStatePropsAnswer, mapDispatchAnswer)<IAnswerDefaultProps>(Answer);