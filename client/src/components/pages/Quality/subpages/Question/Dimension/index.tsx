// import community package
import * as React from "react";
import { connect } from "react-redux";
import * as _ from "lodash";
import { Typography } from "@material-ui/core";

// import view, component, types
import {fetchRequest, IQuestionDimension} from "../../../../../../reducers/question";
import {IApplicationState} from "../../../../../../reducers";
import SubDimension from "../SubDimension/index";
import DimensionView, {IDimensionViewProps} from "./view";
import {IAnswer} from "../../../../../../reducers/answer";
import {EQualitySubPages} from "../../../index";
import {ThunkDispatch} from "redux-thunk";
import {actionThunk} from "../../../../../../utils/Actioner";

interface IDimensionPropsState {
    answers: IAnswer[],
    questions: IQuestionDimension[],
    error?: string,
}
interface IDimensionPropsDispatch {
    fetchRequest: () => void,
}
interface IDimensionDefaultProps {
    dimension: number,
    toPage: (to: EQualitySubPages, dimension?: number) => void,
}
type IDimensionProps = IDimensionDefaultProps & IDimensionPropsState & IDimensionPropsDispatch;

interface IDimensionState {
    questions: IQuestionDimension|null,
    nextable: boolean,
    show: boolean,
    showError: boolean,
}

class Dimension extends React.Component<IDimensionProps, IDimensionState> {
    constructor(props: any) {
        super(props);

        this.state = {
            questions: null,
            nextable: false,
            show: false,
            showError: false,
        };
    }

    public componentDidMount() {
        this.prepareQuestion( this.props );
        this.setState({ show: true });

        setTimeout(() => {
            this.checkQuestion();
        }, 3000);
    }
    public componentWillReceiveProps( nextProps: IDimensionProps ) {
        if (!this.state.questions || this.state.questions.dimension !== nextProps.dimension) {
            this.prepareQuestion(nextProps);
        } else {
            this.checkNextAble(nextProps, this.state.questions);
        }

        if (nextProps.error) {
            this.setState({
                showError: true,
            });
        }
    }

    public render() {
        if (this.state.questions) {
            const viewProps: IDimensionViewProps = {
                data: {
                    dimension: this.state.questions,
                    nextable: this.state.nextable,
                    show: this.state.show,
                    lastDimension: this.props.questions.length,
                },
                actions: {
                    handleNext: this.handleNext,
                }
            };
            return (
                <DimensionView {...viewProps}>
                    {this.state.questions.subdimensions.map(subdimension => {
                        return <SubDimension key={subdimension.id} subdimension={subdimension}/>
                    })}
                </DimensionView>
            )
        } else {
            return (
                <>
                    {(this.state.showError) &&
                        <div>
                            <Typography variant="subheading"> Mohon maaf terjadi kesalahan, Silahkan muat ulang laman anda.</Typography>
                        </div>
                    }
                    {(!this.state.showError) &&
                        <div>
                            <Typography variant="subheading">Mohon Tunggu Sebentar</Typography>
                        </div>
                    }
                </>
            );
        }
    }

    private checkQuestion = () => {
        if (!this.state.questions) {
            this.props.fetchRequest();
        }
    };

    private handleNext = (e: any) => {
        const nextDimension = Number(this.props.dimension)+1;
        if (nextDimension <= this.props.questions.length) {
            this.props.toPage(EQualitySubPages.DIME, nextDimension);
        } else {
            this.props.toPage(EQualitySubPages.RESL);
        }
        this.setState({ show: false });
    };

    private checkNextAble(props: IDimensionProps, questions: IQuestionDimension) {
        let nextable = true;
        questions.subdimensions.forEach(subdimension => {
            subdimension.questions.forEach(question => {
                const quesID = question.id;
                const idx = _.findIndex(props.answers, { ques_id: quesID });
                nextable = nextable && (idx !== -1);
            })
        });

        this.setState({ nextable });
    }
    private prepareQuestion( props: IDimensionProps ) {
        const questions: IQuestionDimension|undefined = _.find(props.questions, { dimension: Number(props.dimension) });
        if (questions) {
            questions.subdimensions = _.sortBy( questions.subdimensions, [ 'subdimension' ] );
            questions.subdimensions.forEach(subdimension => {
                subdimension.questions = _.sortBy( subdimension.questions, [ 'number' ] );
            });
            this.setState({ questions });

            this.checkNextAble(props, questions);
        } else {
            this.setState({ questions: null });
        }
    }
}

const mapStatePropsQuestion = ( state: IApplicationState ): IDimensionPropsState => {
    return {
        answers: state.answer.data,
        questions: state.question.data,
        error: state.question.errors,
    }
};
const mapDispatchProps = (dispatch: ThunkDispatch<any, any, any>): IDimensionPropsDispatch => {
    return {
        fetchRequest: () => actionThunk( thunk => fetchRequest( thunk ), dispatch ),
    }
};

export default connect(mapStatePropsQuestion, mapDispatchProps)<IDimensionDefaultProps>(Dimension);