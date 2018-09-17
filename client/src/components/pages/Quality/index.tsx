// import community library
import * as React from 'react';
import {connect} from 'react-redux';
import {ThunkDispatch} from "redux-thunk";
import {push} from "connected-react-router";
import {RouteComponentProps} from "react-router";

// import view, component and utils
import {actionThunk} from "../../../utils/Actioner";
import {IApplicationState} from "../../../reducers";
import {IUserState} from "../../../reducers/user";
import User from "./subpages/User";
import Institute from "./subpages/Institute";
import Dimension from "./subpages/Question/Dimension";
import Result from "./subpages/Result";
import QualityView, {IQualityViewProps} from "./view";
import KapeView from "./subpages/kata_pengantar";
import PePengView from "./subpages/petunjuk_pengisian";

export interface IQualityDefaultProps {
    preClose: () => void,
}
interface IQualityPropsState {
    userState: IUserState,
    dimensionTotal: number,
}
interface IQualityPropsDispatch {
    redirect: any,
}
type QualityProps = IQualityDefaultProps & IQualityPropsState & IQualityPropsDispatch & RouteComponentProps<any>;

export const enum EQualitySubPages {
    KAPE = 'KAPE',
    PEPE = 'PEIS',
    USER = 'USER',
    INST = 'INST',
    DIME = 'DIME',
    RESL = 'RESL',
}
interface IQualityState {
    show: boolean,
    nowPage: EQualitySubPages,
    lastPage?: EQualitySubPages,
    dimensionA?: number,
    dimensionB?: number,
    showDimension?: number,

    showNext: boolean,
    next: string,
    showBefo: boolean,
    befo: string,
    untouched: boolean,
    reverse: boolean,
}

class Quality extends React.Component<QualityProps, IQualityState> {
    // public pageList = [ EQualitySubPages.KAPE, EQualitySubPages.PEPE, EQualitySubPages.USER];
    // public pageListName = [ "Kata Pengantar", "Petunjuk Pengisian", "Identitas Pengisi" ];
    public pageList = [ EQualitySubPages.KAPE, EQualitySubPages.USER];
    public pageListName = [ "Kata Pengantar", "Identitas Pengisi" ];

    public state = {
        show: true,
        nowPage: EQualitySubPages.KAPE,
        lastPage: undefined,
        dimensionA: undefined,
        dimensionB: undefined,
        showDimension: undefined,

        showNext: true,
        next: this.pageListName[1],
        showBefo: false,
        befo: this.pageListName[0],
        untouched: true,
        reverse: false,
    };

    // private matchUrl = this.props.match.url;
    public componentDidMount() {
        // this.props.redirect(this.matchUrl+'/user');
        // this.toPage(EQualitySubPages.KAPE);
    }

    public render() {
        const viewProps: IQualityViewProps = {
            data: {
                show: this.state.show,
                nowPage: this.state.nowPage,
                dimensionTotal: this.props.dimensionTotal,
                showDimension: this.state.showDimension,

                showNext: this.state.showNext,
                next: this.state.next,
                showBefo: this.state.showBefo,
                befo: this.state.befo,
            },
            actions: {
                exit: this.exit,
                exited: this.exited,

                handleNext: this.handleNext,
                handleBefo: this.handleBefo,
            }
        };
        const { nowPage, lastPage, dimensionA, dimensionB, untouched, reverse } = this.state;
        return (
            <QualityView {...viewProps}>
                { (nowPage === EQualitySubPages.KAPE || lastPage === EQualitySubPages.KAPE) &&
                    <KapeView showed={nowPage} reverse={reverse} untouched={untouched} handleNext={this.handleNext}/>
                }
                { (nowPage === EQualitySubPages.PEPE || lastPage === EQualitySubPages.PEPE) &&
                    <PePengView showed={nowPage} reverse={reverse} untouched={untouched}/>
                }
                { (nowPage === EQualitySubPages.USER || lastPage === EQualitySubPages.USER) &&
                    <User toPage={this.toPage} nowPage={nowPage} reverse={reverse}/>
                }
                { (nowPage === EQualitySubPages.INST || lastPage === EQualitySubPages.INST) &&
                    <Institute toPage={this.toPage} />
                }
                { (nowPage === EQualitySubPages.DIME || lastPage === EQualitySubPages.DIME) &&
                    <>
                        { (dimensionA) &&
                            <Dimension dimension={dimensionA} toPage={this.toPage}/>
                        }
                        { (dimensionB) &&
                            <Dimension dimension={dimensionB} toPage={this.toPage}/>
                        }
                    </>
                }
                { (nowPage === EQualitySubPages.RESL || lastPage === EQualitySubPages.RESL) &&
                    <Result/>
                }
            </QualityView>
        );
    }

    private handleBefo = () => {
        const pos = this.pageList.indexOf(this.state.nowPage);
        if (pos === 1) {
            this.setState(state => ({
                next: this.pageListName[pos],
                nowPage: this.pageList[pos-1],
                lastPage: state.nowPage,
                showNext: true,
                showBefo: false,
                reverse: true,
                untouched: false,
            }));
        } else {
            this.setState(state => ({
                next: this.pageListName[pos],
                befo: this.pageListName[pos-2],
                nowPage: this.pageList[pos-1],
                lastPage: state.nowPage,
                showNext: true,
                showBefo: true,
                reverse: true,
                untouched: false,
            }));
        }
        setTimeout(() => {
            this.setState(state => ({
                lastPage: undefined,
            }));
        }, 2000);
    };
    private handleNext = () => {
        const pos = this.pageList.indexOf(this.state.nowPage);
        if (pos === 0) {
            this.setState(state => ({
                befo: this.pageListName[pos],
                nowPage: this.pageList[pos+1],
                lastPage: state.nowPage,
                showNext: false,
                showBefo: true,
                reverse: false,
                untouched: false,
            }));
        } else {
            this.setState(state => ({
                next: this.pageListName[pos+2],
                befo: this.pageListName[pos],
                nowPage: this.pageList[pos+1],
                lastPage: state.nowPage,
                showNext: true,
                showBefo: true,
                reverse: false,
                untouched: false,
            }));
        }
        setTimeout(() => {
            this.setState(state => ({
                lastPage: undefined,
            }));
        }, 2000);
    };

    private toPage = (to: EQualitySubPages, dimension?: number) => {
        this.setState(state => {
            let dimensionB: number|undefined;
            if (state.showDimension) {
                if (state.dimensionB) {
                    dimensionB = state.dimensionB;
                } else {
                    dimensionB = dimension;
                }
            }
            
            return {
                lastPage: state.nowPage,
                nowPage: to,
                showDimension: dimension,
                dimensionA: state.dimensionA || dimension,
                dimensionB,
                showNext: false,
                showBefo: false,
            }
        });
        setTimeout(() => {
            this.setState(state => ({
                lastPage: undefined,
                dimensionA: (state.dimensionA !== state.showDimension) ? undefined : state.dimensionA,
                dimensionB: (state.dimensionB !== state.showDimension) ? undefined : state.dimensionB,
            }));
        }, 2000);
    };

    private exit = () => {
        this.props.preClose();
        this.setState({ show: false })
    };
    private exited = () => {
        this.props.redirect('/');
    };
}

/*
<Route path={`${this.matchUrl}/user`} component={User}/>
                    <Route path={`${this.matchUrl}/institute`} component={Institute}/>
                    <Route path={`${this.matchUrl}/dimension/:dimension`} component={Dimension}/>
 */

const mapStateProps = (state: IApplicationState): IQualityPropsState => {
    return {
        dimensionTotal: state.question.data.length,
        userState: state.user,
    };
};
const mapDispatchProps = (dispatch: ThunkDispatch<any, any, any>): IQualityPropsDispatch => {
    return {
        redirect: (to: string) => actionThunk(thunk => thunk.dispatch(push(to)), dispatch),
    };
};

export default connect(mapStateProps, mapDispatchProps)<IQualityDefaultProps>(Quality);