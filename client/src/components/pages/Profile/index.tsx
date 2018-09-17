// import community package
import * as React from 'react';
// import view
import ProfileView, {IProfileViewProps} from './view';
import {ThunkDispatch} from "redux-thunk";
import {actionThunk} from "../../../utils/Actioner";
import {push} from "connected-react-router";
import {connect} from "react-redux";

export interface IProfileDefaultProps {
    preClose: () => void,
}
interface IProfilePropsDispatch {
    redirect: any,
}

class Profile extends React.Component<IProfilePropsDispatch&IProfileDefaultProps> {
    public state = {
        show: true,
    };

    public render() {
        const viewProps: IProfileViewProps = {
            data: {
                show: this.state.show,
            },
            actions: {
                exit: this.exit,
                exited: this.exited,
            }
        };
        return (
            <ProfileView {...viewProps}/>
        )
    }

    private exit = () => {
        this.props.preClose();
        this.setState({ show: false })
    };
    private exited = () => {
        this.props.redirect('/');
    };

}

const mapDispatchProps = (dispatch: ThunkDispatch<any, any, any>): IProfilePropsDispatch => {
    return {
        redirect: (to: string) => actionThunk(thunk => thunk.dispatch(push(to)), dispatch),
    };
};
export default connect(null, mapDispatchProps)(Profile);