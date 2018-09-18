// import community package
import * as React from "react";
import { connect } from "react-redux";
import * as _ from "lodash";

// import
import { IApplicationState } from "../../../../../reducers";
import {IQuestionDimension} from "../../../../../reducers/question";
import {IAnswer} from "../../../../../reducers/answer";
import ResultView, {IResultViewProps} from "./view";
import {IInstituteIdentity} from "../../../../../reducers/institute";

const isDev = (process.env.NODE_ENV === 'development');

interface IResultPropsState {
    userId: string,
    questions: IQuestionDimension[],
    answers: IAnswer[],
    instituteIdentity: IInstituteIdentity,
}
interface IResultState {
    show: boolean,
    score: IScore[],
}


export enum EScoreCriteria {
    A = "A",
    B = "B",
    C = "C",
    D = "D",
}
interface IScoreAtom {
    scoreSum: number,
    scoreCriteria: EScoreCriteria,
}
export interface IScore {
    dimension: string,
    dimensionName: string,
    score: IScoreAtom,
}
const scoreSumToEnum = (dimension: number, score: number): EScoreCriteria => {
    switch (dimension) {
        case 1:
            if (score >= 30 && score <= 36) {
                return EScoreCriteria.A
            } else if (score >= 23 && score <= 29 ) {
                return EScoreCriteria.B;
            } else if (score >= 16 && score <= 22 ) {
                return EScoreCriteria.C;
            } else if (score >= 9 && score <= 15) {
                return EScoreCriteria.D;
            } else {
                if (isDev) {
                    alert('ERROR');
                    console.error("!!!score to enum");
                    console.error("!!error:", {
                        dimension,
                        score,
                    })
                }
                return EScoreCriteria.D;
            }
        case 2:
            if (score >= 56 && score <= 68) {
                return EScoreCriteria.A
            } else if (score >= 43 && score <= 55 ) {
                return EScoreCriteria.B;
            } else if (score >= 30 && score <= 42 ) {
                return EScoreCriteria.C;
            } else if (score >= 17 && score <= 29) {
                return EScoreCriteria.D;
            } else {
                if (isDev) {
                    alert('ERROR');
                    console.error("!!!score to enum");
                    console.error("!!error:", {
                        dimension,
                        score,
                    })
                }
                return EScoreCriteria.D;
            }
        case 3:
            if (score >= 147 && score <= 180) {
                return EScoreCriteria.A
            } else if (score >= 113 && score <= 146 ) {
                return EScoreCriteria.B;
            } else if (score >= 79 && score <= 112 ) {
                return EScoreCriteria.C;
            } else if (score >= 45 && score <= 78) {
                return EScoreCriteria.D;
            } else {
                if (isDev) {
                    alert('ERROR');
                    console.error("!!!score to enum");
                    console.error("!!error:", {
                        dimension,
                        score,
                    })
                }
                return EScoreCriteria.D;
            }
        case 4:
            if (score >= 69 && score <= 84) {
                return EScoreCriteria.A
            } else if (score >= 53 && score <= 68 ) {
                return EScoreCriteria.B;
            } else if (score >= 37 && score <= 52 ) {
                return EScoreCriteria.C;
            } else if (score >= 21 && score <= 36) {
                return EScoreCriteria.D;
            } else {
                if (isDev) {
                    alert('ERROR');
                    console.error("!!!score to enum");
                    console.error("!!error:", {
                        dimension,
                        score,
                    })
                }
                return EScoreCriteria.D;
            }
        default:
            if (score >= 299 && score <= 368) {
                return EScoreCriteria.A
            } else if (score >= 230 && score <= 298 ) {
                return EScoreCriteria.B;
            } else if (score >= 161 && score <= 229 ) {
                return EScoreCriteria.C;
            } else if (score >= 92 && score <= 160) {
                return EScoreCriteria.D;
            } else {
                if (isDev) {
                    alert('ERROR');
                    console.error("!!!score to enum");
                    console.error("!!error:", {
                        dimension,
                        score,
                    })
                }
                return EScoreCriteria.D;
            }
    }
};

class Result extends React.Component<IResultPropsState, IResultState> {
    public state = {
        show: false,
        score: [],
    };

    public componentDidMount() {
        this.setState({ show: true });
        this.processScore(this.props);
    }

    public render() {
        const viewProps: IResultViewProps = {
            data: {
                show: this.state.show,
                score: this.state.score,
                institute: this.props.instituteIdentity,
                userId: this.props.userId,
            }
        };
        return <ResultView {...viewProps} />
    }

    private processScore = (props: IResultPropsState) => {
        let score: IScore[] = [];
        const tScore: IScore = {
            dimension: "Total",
            dimensionName: "(1+2+3+4)",
            score: {
                scoreSum: 0,
                scoreCriteria: EScoreCriteria.D,
            }
        };
        props.questions.forEach(dimension => {
            const dimensionScore: IScore = {
                dimension: "Dimensi "+dimension.dimension,
                dimensionName: dimension.name,
                score: {
                    scoreSum: 0,
                    scoreCriteria: EScoreCriteria.D,
                },
            };
            dimension.subdimensions.forEach(subdimension => {
                subdimension.questions.forEach(question => {
                    const answer = _.find(props.answers, { ques_id: question.id });
                    if (answer) {
                        dimensionScore.score.scoreSum += answer.answer.score;
                    } else {
                        if (isDev) {
                            alert("ERROROROROROR");
                            console.log("!!error:", question.id);
                        }
                    }
                });
            });
            tScore.score.scoreSum += dimensionScore.score.scoreSum;
            dimensionScore.score.scoreCriteria = scoreSumToEnum(dimension.dimension, dimensionScore.score.scoreSum);

            score.push(dimensionScore);
        });
        tScore.score.scoreCriteria = scoreSumToEnum(5, tScore.score.scoreSum);
        score.push(tScore);

        score = _.sortBy( score, [ 'dimension' ] );

        this.setState({ score });
    };
}

const mapStatePropsUser = ( state: IApplicationState ): IResultPropsState => {
    return {
        userId: state.user.data.id,
        questions: state.question.data,
        answers: state.answer.data,
        instituteIdentity: state.institute.data,
    };
};

export default connect( mapStatePropsUser )(Result as any);