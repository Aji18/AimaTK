// import community package
import * as React from 'react';

// import view
import SOPView, {ISOPViewProps} from './view';
import {ThunkDispatch} from "redux-thunk";
import {actionThunk} from "../../../utils/Actioner";
import {push} from "connected-react-router";
import {connect} from "react-redux";
import KPView from "./subpages/kata_pengantar";
import AlurSOPView from "./subpages/alur_sop";
import KetSOPView from "./subpages/keterangan_sop";
import PlanView from "./subpages/1.plan";
import DoView from "./subpages/2.do";
import ChecView from "./subpages/3.chec";
import ActView from "./subpages/4.act";

export interface ISOPDefaultProps {
    preClose: () => void
}
interface ISOPPropsDispatch {
    redirect: any,
}

export const enum ESOPSubPages {
    KAPE = 'KAPE',
    ALUR = 'ALUR',
    KETE = 'KETE',
    PLAN = 'PLAN',
    DO   = 'DO',
    CHEC = 'CHEC',
    ACT  = 'ACT',
}

class SOP extends React.Component<ISOPPropsDispatch& ISOPDefaultProps> {
    public pageList = [ESOPSubPages.KAPE, ESOPSubPages.ALUR, ESOPSubPages.KETE, ESOPSubPages.PLAN, ESOPSubPages.DO, ESOPSubPages.CHEC, ESOPSubPages.ACT];
    public pageListName = ["Kata Pengantar", "Alur SOP", "Keterangan SOP", "PLAN (Perencanaan Aima TK)", "DO (Pelaksanaan Aima TK)", "CHECK (Pemeriksaan Aima TK)", "ACT (Tindak Lanjut)"];
    public state = {
        show: true,
        showNext: true,
        showBefo: false,
        nowPage: ESOPSubPages.KAPE,
        lastPage: undefined,
        reverse: false,
        untouched: true,

        next: "Alur SOP",
        befo: undefined,
    };
    public render() {
        const viewProps: ISOPViewProps = {
            data: {
                show: this.state.show,
                showNext: this.state.showNext,
                showBefo: this.state.showBefo,
                nowPage: this.state.nowPage,
                next: this.state.next,
                befo: this.state.befo,
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
            <SOPView {...viewProps}>
                { (nowPage === ESOPSubPages.KAPE || lastPage === ESOPSubPages.KAPE) &&
                    <KPView showed={this.state.nowPage} reverse={this.state.reverse} untouched={this.state.untouched}/>
                }
                { (nowPage === ESOPSubPages.ALUR || lastPage === ESOPSubPages.ALUR) &&
                    <AlurSOPView showed={this.state.nowPage} reverse={this.state.reverse}/>
                }
                { (nowPage === ESOPSubPages.KETE || lastPage === ESOPSubPages.KETE) &&
                    <KetSOPView showed={this.state.nowPage} reverse={this.state.reverse} handleNext={this.handleNext}/>
                }
                { (nowPage === ESOPSubPages.PLAN || lastPage === ESOPSubPages.PLAN) &&
                    <PlanView showed={this.state.nowPage} reverse={this.state.reverse}/>
                }
                { (nowPage === ESOPSubPages.DO || lastPage === ESOPSubPages.DO) &&
                    <DoView showed={this.state.nowPage} reverse={this.state.reverse}/>
                }
                { (nowPage === ESOPSubPages.CHEC || lastPage === ESOPSubPages.CHEC) &&
                    <ChecView showed={this.state.nowPage} reverse={this.state.reverse}/>
                }
                { (nowPage === ESOPSubPages.ACT || lastPage === ESOPSubPages.ACT) &&
                    <ActView showed={this.state.nowPage} reverse={this.state.reverse}/>
                }
            </SOPView>
        );
    }

    private exit = () => {
        this.props.preClose();
        this.setState({ show: false })
    };
    private exited = () => {
        this.props.redirect('/');
    };

    private handleNext = (e: any, to?: ESOPSubPages, lPos?: number) => {
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
                this.setState((state: any) => ({
                    befo: this.pageListName[pos],
                    nowPage: this.pageList[pos + 1],
                    lastPage: state.nowPage,
                    showNext: false,
                    showBefo: true,
                    reverse: false,
                    untouched: false,
                }));
            } else {
                this.setState((state: any) => ({
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
            this.setState((state: any) => ({
                next: this.pageListName[pos],
                nowPage: this.pageList[pos-1],
                lastPage: state.nowPage,
                showNext: true,
                showBefo: false,
                reverse: true,
                untouched: false,
            }));
        } else {
            this.setState((state: any) => ({
                nowPage: this.pageList[pos-1],
                next: this.pageListName[pos],
                befo: this.pageListName[pos-2],
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


const mapDispatchProps = (dispatch: ThunkDispatch<any, any, any>): ISOPPropsDispatch => {
    return {
        redirect: (to: string) => actionThunk(thunk => thunk.dispatch(push(to)), dispatch),
    };
};
export default connect(null, mapDispatchProps)(SOP);