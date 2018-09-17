// import community package
import * as React from "react";
import {connect} from "react-redux";
import {ThunkDispatch} from "redux-thunk";

// import view, state, and utils
import {actionThunk} from "../../../../../utils/Actioner";
import {IApplicationState} from "../../../../../reducers";
import {IUser, fetchRequest, resetUser} from "../../../../../reducers/user";
import {IUserViewProps, default as UserView} from "./view";
import {push} from "connected-react-router";
import {fetchRequest as fetchRequestInstitute, resetInstitute} from "../../../../../reducers/institute";
import {EQualitySubPages} from "../../index";

interface IUserPropsState {
    userData: IUser,
    fetchLoading: boolean,
    fetchError?: string,
    instituteLoading: boolean,
    isInstituteReady: boolean,
    fetchInstituteError?: string,
}
interface IUserPropsDispatch {
    fetchUser: (name: string, nNumber: string) => void,
    resetUser: () => void,
    redirect: (to: string) => void,
    fetchRequestInstitute: () => void,
    resetInstitute: () => void,
}
interface IUserDefaultProps {
    toPage: ( to: EQualitySubPages ) => void,
    nowPage: EQualitySubPages,
    reverse: boolean,
}
interface IUserLState {
    name: string,
    nNumber: string
    nextable: boolean,
    editable: boolean,
    show: boolean,
    instituteFetched: boolean,
}
type IUserProps = IUserDefaultProps & IUserPropsState & IUserPropsDispatch;

export class User extends React.Component<IUserProps, IUserLState> {
    constructor(props: any) {
        super(props);
        this.state = {
            name: '',
            nNumber: '',
            nextable: false,
            editable: true,
            show: true,
            instituteFetched: false,
        }
    }

    public componentDidMount() {
        this.setState({
            name: this.props.userData.name,
            nNumber: this.props.userData.nNumber,
        });

        if (this.props.userData.name !== '' && this.props.userData.nNumber !== '') {
            this.setState({ editable: false });
        }

        this.props.resetInstitute();
    }

    public componentWillReceiveProps(nextProps: IUserProps ) {
        this.setState({
            name: '',
            nNumber: '',
        });
        this.setState({
            name: nextProps.userData.name,
            nNumber: nextProps.userData.nNumber,
        });

        if (this.props.fetchLoading && !nextProps.fetchLoading && !(nextProps.fetchError)) {
            this.handleGoExit(nextProps);
        }
        if (this.state.instituteFetched) {
            this.handleGoExit(nextProps);
        }

        if (nextProps.nowPage === EQualitySubPages.USER && !this.state.show) {
            this.setState({ show: true });
        } else if (nextProps.nowPage !== EQualitySubPages.USER && this.state.show) {
            this.setState({ show: false });
        }
    }
    public componentDidUpdate() {
        const nextable = (this.state.name !== '' && this.state.nNumber !== '');
        if (this.state.nextable !== nextable) {
            this.setState({nextable})
        }
    }

    public render() {
        const state = this.state;

        const viewProps: IUserViewProps = {
            data: {
                show: this.state.show,
                name: state.name,
                nNumber: state.nNumber,
                nextable: state.nextable,
                editable: state.editable,
                userData: this.props.userData,
                fetchLoading: this.props.fetchLoading,
                fetchError: this.props.fetchError as string,
                instituteLoading: this.props.instituteLoading,
                fetchInstituteError: this.props.fetchInstituteError as string,
                reverse: this.props.reverse,
            },
            actions: {
                handleUserName: this.handleUserName,
                handleUserNumber: this.handleUserNumber,
                handleSubmit: this.handleSubmit,
                handleNotMe: this.handleNotMe,
                handleOnExited: this.handleOnExited,
            }
        };

        return <UserView { ...viewProps } />;
    }

    private handleGoExit = (props: IUserProps) => {
        // TODO: cleanning
        /* console.log("!!isReady:", props.isInstituteReady);
        console.log("!!isError!:", !(props.fetchInstituteError));
        console.log("!!isError!!:", !(props.fetchInstituteError));
        console.log("!!isError:", props.fetchInstituteError === undefined);
        console.log("!!loading:", props.instituteLoading);
        console.log("!!! called"); */
        if (!this.state.instituteFetched) {
            // console.log("!!! fetching");
            this.props.fetchRequestInstitute();
            this.setState({ instituteFetched: true });
        } else if ( (props.isInstituteReady || (props.fetchInstituteError === undefined || props.fetchInstituteError === '')) && !props.instituteLoading) {
            // console.log("!!! success");
            this.props.toPage(EQualitySubPages.INST);
            this.setState({ show: false });
        } else if ( (!props.isInstituteReady || (props.fetchInstituteError !== undefined || props.fetchInstituteError === '')) && !props.instituteLoading) {
            // console.log("!!! error");
            this.setState({ instituteFetched: false });
        }
    };
    private handleOnExited = () => {
        // this.props.redirect('/quality/institute');
    };

    private handleUserName = (e: React.FormEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value;
        this.setState({ name: value });
    };
    private handleUserNumber = (e: React.FormEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value;
        if (/^\d+$/.test(value) || value === '') {
            this.setState({ nNumber: value });
        }
    };

    private handleSubmit = ( e: React.FormEvent<HTMLInputElement> ) => {
        this.props.fetchUser(this.state.name, this.state.nNumber);

        if (!this.state.editable) {
            this.handleGoExit(this.props);
        }
    };
    private handleNotMe = ( e: React.FormEvent<HTMLInputElement> ) => {
        this.props.resetUser();
        this.setState({ editable: true });
    };
}

const mapStatePropsUser = ( state: IApplicationState ): IUserPropsState => {
    return {
        userData: state.user.data,
        fetchLoading: state.user.loading,
        fetchError: state.user.errors,
        instituteLoading: state.institute.loading,
        isInstituteReady: (!!(state.institute.data.name) && state.institute.data.name !== ''),
        fetchInstituteError: state.institute.errors,
    };
};
const mapDispatchPropsUser = ( dispatch: ThunkDispatch<any,any,any> ): IUserPropsDispatch => {
    return {
        fetchUser: ( name: string, nNumber: string ) => actionThunk(thunk => fetchRequest( thunk, name, nNumber), dispatch),
        resetUser: () => actionThunk(thunk => {
            resetUser( thunk );
            resetInstitute( thunk );
        }, dispatch),
        resetInstitute: () => actionThunk(thunk => resetInstitute( thunk ), dispatch),
        redirect: (to: string) => actionThunk(thunk => thunk.dispatch(push(to)), dispatch),
        fetchRequestInstitute: () => actionThunk( thunk => fetchRequestInstitute( thunk ), dispatch ),
    };
};

export default connect(mapStatePropsUser, mapDispatchPropsUser)<IUserDefaultProps>(User);