// import community library
import * as React from "react";
import {connect} from "react-redux";
import {ThunkDispatch} from "redux-thunk";
import * as _ from "lodash";
// import View
import {actionThunk} from "../../../../../utils/Actioner";
import {IApplicationState} from "../../../../../reducers";
import {addRequestInstitute, fetchRequest, IInstituteIdentity} from "../../../../../reducers/institute";
import InstituteView, {IInstituteViewProps} from "./view";
import {fetchRequest as fetchRequestAnswer} from "../../../../../reducers/answer";
import {EQualitySubPages} from "../../index";

interface IIPropsState {
    instituteIdentity: IInstituteIdentity,
    fetchLoading: boolean,
    fetchError?: string,

    answersLoading: boolean,
    isAnswersReady: boolean,
    fetchAnswersError?: string,
}
interface IIPropsDispatch {
    addRequest: ( instituteIdentity: IInstituteIdentity ) => void,
    fetchRequest: () => void,
    fetchRequestAnswer: () => void,
}
interface IIDefaultProps {
    toPage: ( to: EQualitySubPages, dimension?: number ) => void,
}
type IInstituteProps = IIDefaultProps & IIPropsState & IIPropsDispatch;

interface IInstituteState {
    instituteIdentity: IInstituteIdentity,
    eowValid: boolean,
    yearValid: boolean,
    nextable: boolean,
    show: boolean,
    showStatus: boolean,
    showAccreditation: boolean,
    answersFetched: boolean,
}
const nullIStateL = (): IInstituteIdentity => ({
    name: '',
    status: '',
    statisticNumber: '',
    NPSNNumber: '',
    establishedDate: '',
    address: '',
    emailOrWeb: '',
    accreditation: '',
    qualityAssurance: '',
});

class Institute extends React.Component <IInstituteProps, IInstituteState> {
    constructor(props: any) {
        super(props);
        this.state = {
            instituteIdentity: nullIStateL(),
            eowValid: false,
            yearValid: false,
            nextable: false,
            show: false,
            showStatus: false,
            showAccreditation: false,
            answersFetched: false,
        };
    }

    public componentDidMount() {
        // this.props.fetchRequest();
        // this.props.fetchRequestAnswer();
        this.setState({ show: true });
        this.insertData(this.props);
    }
    public componentDidUpdate() {
        let nextable = true;
        nextable = nextable && (this.state.instituteIdentity.name !== '');
        nextable = nextable && (this.state.instituteIdentity.status !== '');
        nextable = nextable && (this.state.instituteIdentity.statisticNumber !== '');
        nextable = nextable && (this.state.instituteIdentity.NPSNNumber !== '');
        nextable = nextable && (this.state.instituteIdentity.establishedDate !== '');
        nextable = nextable && (this.state.instituteIdentity.address !== '');
        nextable = nextable && (this.state.instituteIdentity.emailOrWeb !== '');
        nextable = nextable && (this.state.instituteIdentity.accreditation !== '');
        nextable = nextable && (this.state.instituteIdentity.qualityAssurance !== '');
        nextable = nextable && this.state.eowValid;
        nextable = nextable && this.state.yearValid;

        if (this.state.nextable !== nextable) {
            this.setState({ nextable });
        }
    }

    public componentWillReceiveProps(nextProps: IInstituteProps) {
        if (this.props.fetchLoading && !nextProps.fetchLoading && !(nextProps.fetchError)) {
            this.handleGoExit(nextProps);
        }
        if (this.state.answersFetched) {
            this.handleGoExit(nextProps);
        }
    }

    public render() {
        const instituteViewProps: IInstituteViewProps = {
            data: {
                ...this.state.instituteIdentity,
                eowValid: this.state.eowValid,
                yearValid: this.state.yearValid,
                nextable: this.state.nextable,
                fetchLoading: this.props.fetchLoading,
                fetchError: this.props.fetchError as string,
                show: this.state.show,
                ref: {
                    refStatusHandler: this.refStatusHandler,
                    refAccreditationHandler: this.refAccreditationHandler,
                    showStatus: this.state.showStatus,
                    showAccreditation: this.state.showAccreditation,
                }
            },
            actions: {
                handleIName: this.handleIName,
                handleIStatus: this.handleIStatus,
                handleIStatisticNumber: this.handleIStatisticNumber,
                handleINPSNNumber: this.handleINPSNNumber,
                handleIEstablishDate: this.handleIEstablishDate,
                handleIAddress: this.handleIAddress,
                handleIEmailWeb: this.handleIEmailWeb,
                handleIAccreditation: this.handleIAccreditation,
                handleIQualityAssurance: this.handleIQualityAssurance,
                handleSubmit: this.handleSubmit,
                handleOnExited: this.handleOnExited,
            },
        };
        return (
            <InstituteView {...instituteViewProps} />
        );
    }

    private handleGoExit = (props: IInstituteProps) => {
        if (!this.state.answersFetched) {
            this.props.fetchRequestAnswer();
            this.setState({ answersFetched: true });
        } else if ( (props.isAnswersReady || (props.fetchAnswersError === undefined || props.fetchAnswersError === '')) && !props.answersLoading) {
            this.props.toPage(EQualitySubPages.DIME, 1);
            this.setState({ show: false });
        } else if ( (!props.isAnswersReady || (props.fetchAnswersError !== undefined || props.fetchAnswersError === '')) && !props.answersLoading) {
            this.setState({ answersFetched: false });
        }
    };
    private handleOnExited = () => {
        // this.props.redirect('/quality/institute');
    };

    private insertData = (props: IInstituteProps) => {
        // TODO: improve in this segment
        this.setState({
            instituteIdentity: nullIStateL(),
        });
        let nextable = true;
        nextable = nextable && (props.instituteIdentity.name !== '');
        nextable = nextable && (props.instituteIdentity.status !== '');
        nextable = nextable && (props.instituteIdentity.statisticNumber !== '');
        nextable = nextable && (props.instituteIdentity.NPSNNumber !== '');
        nextable = nextable && (props.instituteIdentity.establishedDate !== '');
        nextable = nextable && (props.instituteIdentity.address !== '');
        nextable = nextable && (props.instituteIdentity.emailOrWeb !== '');
        nextable = nextable && (props.instituteIdentity.accreditation !== '');
        nextable = nextable && (props.instituteIdentity.qualityAssurance !== '');
        this.setState({
            instituteIdentity: props.instituteIdentity,
            eowValid: nextable,
            yearValid: nextable,
        });
    };

    private refStatusHandler = (elem: any) => {
        const me = this;
        if (elem) {
            elem.focus();
            elem.setSelectionRange(0, elem.value.length);

            // @ts-ignore
            function onBlur() {
                me.setState({
                    showStatus: false,
                });
                elem.removeEventListener('blur', onBlur);
            }
            elem.addEventListener('blur', onBlur);
        }
    };
    private refAccreditationHandler = (elem: any) => {
        const me = this;
        if (elem) {
            elem.focus();
            elem.setSelectionRange(0, elem.value.length);

            // @ts-ignore
            function onBlur() {
                me.setState({
                    showAccreditation: false,
                });
                elem.removeEventListener('blur', onBlur);
            }
            elem.addEventListener('blur', onBlur);
        }
    };

    private handleIName = (e: React.FormEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value;
        if (e.currentTarget.validity.valid) {
            this.setState({
                instituteIdentity: {
                    ...this.state.instituteIdentity,
                    name: value,
                }
            });
        }
    };
    private handleIStatus = (e: React.FormEvent<HTMLInputElement>)=> {
        const value = e.currentTarget.value;

        if (value !== undefined) {
            this.setState(state => ({
                instituteIdentity: {
                    ...this.state.instituteIdentity,
                    status: value + '',
                }
            }));
        }

        if (value !== 'negeri' && value !== 'swasta') {
            this.setState({ showStatus: true })
        }
    };
    private handleIStatisticNumber = (e: React.FormEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value;
        if (/^\d+$/.test(value) || value === '') {
            this.setState({
                instituteIdentity: {
                    ...this.state.instituteIdentity,
                    statisticNumber: value,
                }
            });
        }
    };
    private handleINPSNNumber = (e: React.FormEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value;
        if (/^\d+$/.test(value) || value === '') {
            this.setState({
                instituteIdentity: {
                    ...this.state.instituteIdentity,
                    NPSNNumber: value,
                }
            });
        }
    };
    private handleIEstablishDate = (e: React.FormEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value;
        if (/^\d+$/.test(value) || value === '') {
            this.setState({
                instituteIdentity: {
                    ...this.state.instituteIdentity,
                    establishedDate: value,
                },
                yearValid: (/^[\d]{4}$/.test(value) || value === ''),
            });
        }
    };
    private handleIAddress = (e: React.FormEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value;
        if (e.currentTarget.validity.valid) {
            this.setState({
                instituteIdentity: {
                    ...this.state.instituteIdentity,
                    address: value,
                }
            });
        }
    };
    private handleIEmailWeb = (e: React.FormEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value;
        const emailOrWebPattern = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$|^(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,})$/;
        this.setState({
            instituteIdentity: {
                ...this.state.instituteIdentity,
                emailOrWeb: value,
            },
            eowValid: (emailOrWebPattern.test(value) || value === '')
        });
    };
    private handleIAccreditation = (e: React.FormEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value;

        if (value !== undefined) {
            this.setState({
                instituteIdentity: {
                    ...this.state.instituteIdentity,
                    accreditation: value + '',
                }
            });
        }

        if (value !== 'a' && value !== 'b' && value !== 'c') {
            this.setState({ showAccreditation: true })
        }
    };
    private handleIQualityAssurance = (e: React.FormEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value;
        if (e.currentTarget.validity.valid) {
            this.setState({
                instituteIdentity: {
                    ...this.state.instituteIdentity,
                    qualityAssurance: value,
                }
            });
        }
    };

    private handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
        this.props.addRequest( this.state.instituteIdentity );

        /*
            this.setState({
                show: false,
            });
            this.props.toPage(EQualitySubPages.DIME, 1);
        */
    }
}

const mapStatePropsInstitute = ( state: IApplicationState ): IIPropsState => {

    const answersStatus = _.find(state.answer.loading, { ques_id: 'all' });

    return {
        instituteIdentity: state.institute.data,
        fetchLoading: state.institute.loading,
        fetchError: state.institute.errors,

        answersLoading: (answersStatus) ? answersStatus.loading : false,
        isAnswersReady: (state.answer.data.length > 0),
        fetchAnswersError: (answersStatus) ? answersStatus.error : undefined,
    };
};
const mapDispatchPropsInstitute = ( dispatch: ThunkDispatch<any,any,any> ): IIPropsDispatch => {
    return {
        addRequest: instituteIdentity => actionThunk( thunk => addRequestInstitute( thunk, instituteIdentity ), dispatch ),
        fetchRequest: () => actionThunk( thunk => fetchRequest( thunk ), dispatch ),
        fetchRequestAnswer: () => actionThunk( thunk => fetchRequestAnswer( thunk ), dispatch ),
    }
};

export default connect(mapStatePropsInstitute, mapDispatchPropsInstitute)(Institute);