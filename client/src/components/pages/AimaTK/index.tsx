// import community package
import * as React from 'react';

// import view
import AimaTKView, {IAimaTKViewProps} from './view';
import {ThunkDispatch} from "redux-thunk";
import {actionThunk} from "../../../utils/Actioner";
import {push} from "connected-react-router";
import {connect} from "react-redux";
import PendView from "./subpages/1.pendahuluan"
import FlowView from "./subpages/2.flowchart";
import PerangkatView from "./subpages/3.perangkat";
import PlanView from "./subpages/4.plan";
import DoView from "./subpages/5.do";
import CheckView from "./subpages/6.check";
import ActView from "./subpages/7.act";
import PenuView from "./subpages/8.penutup";

export interface IAimaDefaultProps {
    preClose: () => void,
}
interface IAimaPropsDispatch {
    redirect: any,
}

export const enum EAimaTKSubPages {
    PEND = 'PEND',
    FLOW = 'FLOW',
    PERA = 'PERA',
    PLAN = 'PLAN',
    DO   = 'DO',
    CHEC = 'CHEC',
    ACT  = 'ACT',
    PENU = 'PENU,'
}
interface IAimaTKState {
    show: boolean,
    showNext: boolean,
    showBefo: boolean,
    nowPage: EAimaTKSubPages,
    lastPage?: EAimaTKSubPages,
    reverse: boolean,
    untouched: boolean,
    next?:string,
    befo?:string,
}

class AimaTK extends React.Component<IAimaPropsDispatch&IAimaDefaultProps, IAimaTKState> {
    public pageList = [ EAimaTKSubPages.PEND, EAimaTKSubPages.FLOW, EAimaTKSubPages.PERA, EAimaTKSubPages.PLAN, EAimaTKSubPages.DO, EAimaTKSubPages.CHEC, EAimaTKSubPages.ACT, EAimaTKSubPages.PENU];
    public pageListName = [ "Pendahuluan", "Flowchart Aima TK", "Perangkat Aima TK", "PLAN (Perencanaan Aima TK)", "DO (Pelaksanaan Aima TK)", "CHECK (Pemeriksaan Aima TK)", "ACT (Tindak Lanjut)", "Penutup"];
    public state = {
        show: true,
        showNext: true,
        showBefo: false,
        nowPage: EAimaTKSubPages.PEND,
        lastPage: undefined,
        reverse: false,
        untouched: true,
        next: this.pageListName[1],
        befo: undefined,
    };

    public render() {
        const viewProps: IAimaTKViewProps = {
            data: {
                show: this.state.show,
                showNext: this.state.showNext,
                showBefo: this.state.showBefo,
                nowPage: this.state.nowPage,
                next: this.state.next,
                befo: this.state.befo
            },
            actions: {
                exit: this.exit,
                exited: this.exited,
                handleNext: this.handleNext,
                handleBefo: this.handleBefo,
            }
        };
        const { nowPage, lastPage } = this.state;
        return (
            <AimaTKView {...viewProps}>
                { (nowPage === EAimaTKSubPages.PEND || lastPage === EAimaTKSubPages.PEND) &&
                    <PendView showed={this.state.nowPage} reverse={this.state.reverse} untouched={this.state.untouched}/>
                }
                { (nowPage === EAimaTKSubPages.FLOW || lastPage === EAimaTKSubPages.FLOW) &&
                    <FlowView showed={this.state.nowPage} reverse={this.state.reverse}/>
                }
                { (nowPage === EAimaTKSubPages.PERA || lastPage === EAimaTKSubPages.PERA) &&
                    <PerangkatView showed={this.state.nowPage} reverse={this.state.reverse} toPage={this.toPage}/>
                }
                { (nowPage === EAimaTKSubPages.PLAN || lastPage === EAimaTKSubPages.PLAN) &&
                    <PlanView showed={this.state.nowPage} reverse={this.state.reverse}/>
                }
                { (nowPage === EAimaTKSubPages.DO || lastPage === EAimaTKSubPages.DO) &&
                    <DoView showed={this.state.nowPage} reverse={this.state.reverse}/>
                }
                { (nowPage === EAimaTKSubPages.CHEC || lastPage === EAimaTKSubPages.CHEC) &&
                    <CheckView showed={this.state.nowPage} reverse={this.state.reverse}/>
                }
                { (nowPage === EAimaTKSubPages.ACT || lastPage === EAimaTKSubPages.ACT) &&
                    <ActView showed={this.state.nowPage} reverse={this.state.reverse}/>
                }
                { (nowPage === EAimaTKSubPages.PENU || lastPage === EAimaTKSubPages.PENU) &&
                    <PenuView showed={this.state.nowPage} reverse={this.state.reverse}/>
                }
            </AimaTKView>
        );
    }


    private exit = () => {
        this.props.preClose();
        this.setState({ show: false })
    };
    private exited = () => {
        this.props.redirect('/');
    };

    private toPage = (to: EAimaTKSubPages) => {
        const pos = this.pageList.indexOf(to);
        if (pos === 0) {
            this.setState(state => ({
                next: this.pageListName[pos+1],
                nowPage: this.pageList[pos],
                lastPage: state.nowPage,
                showNext: true,
                showBefo: false,
                reverse: false,
                untouched: false,
            }));
        } else if (pos === this.pageList.length-1) {
            this.setState(state => ({
                befo: this.pageListName[pos-1],
                nowPage: this.pageList[pos],
                lastPage: state.nowPage,
                showNext: false,
                showBefo: true,
                reverse: false,
                untouched: false,
            }));
        } else {
            this.setState(state => ({
                befo: this.pageListName[pos-1],
                next: this.pageListName[pos+1],
                nowPage: this.pageList[pos],
                lastPage: state.nowPage,
                showNext: true,
                showBefo: true,
                reverse: false,
                untouched: false,
            }));
        }
    };

    private handleNext = (e: any, to?: EAimaTKSubPages, lPos?: number) => {
        const pos = lPos || this.pageList.indexOf(this.state.nowPage);
        if (to) {
            const nextPos = this.pageList.indexOf(to);
            if (pos > nextPos) {
                this.handleBefo(undefined, nextPos+1);
            } else if (pos < nextPos) {
                this.handleNext(undefined, undefined, nextPos-1);
            }
        } else {
            if (pos === this.pageList.length - 2) {
                this.setState(state => ({
                    befo: this.pageListName[pos],
                    nowPage: this.pageList[pos + 1],
                    lastPage: state.nowPage,
                    showNext: false,
                    showBefo: true,
                    reverse: false,
                    untouched: false,
                }));
            } else {
                this.setState(state => ({
                    next: this.pageListName[pos + 2],
                    befo: this.pageListName[pos],
                    nowPage: this.pageList[pos + 1],
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
        }
    };
    private handleBefo = (e: any, lPos?: number) => {
        const pos = lPos || this.pageList.indexOf(this.state.nowPage);
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
}

const mapDispatchProps = (dispatch: ThunkDispatch<any, any, any>): IAimaPropsDispatch => {
    return {
        redirect: (to: string) => actionThunk(thunk => thunk.dispatch(push(to)), dispatch),
    };
};
export default connect(null, mapDispatchProps)<IAimaDefaultProps>(AimaTK);