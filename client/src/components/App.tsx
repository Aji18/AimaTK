import * as React from 'react';
import {Route, RouteComponentProps} from 'react-router';

import Home from './pages/Home';
import Profile, {IProfileDefaultProps} from './pages/Profile';
import SOP, {ISOPDefaultProps} from './pages/SOP';
import Quality, {IQualityDefaultProps} from './pages/Quality';
import AimaTK, {IAimaDefaultProps} from "./pages/AimaTK";

interface IAppState {
    active: boolean,
}
type IAppProps = RouteComponentProps<any>;

export interface ILink {
    to: string,
    title: string,
}

export default class App extends React.Component<IAppProps, IAppState> {
    public toLink: ILink[] = [
        {to: '/profile', title: 'Profil'},
        {to: '/sop',     title: 'SOP'},
        {to: '/quality', title: 'Deteksi Mutu'},
        {to: '/aimatk',  title: 'Aima TK'},
    ];

    public state = {
        active: true,
    };

    public componentDidMount() {
        if (this.props.location.pathname !== '/') {
            this.setState({active: false})
        }
    }
    public componentWillReceiveProps(nextProps: IAppProps) {
        if (this.props.location.pathname !== nextProps.location.pathname) {
            this.setState({active: (nextProps.location.pathname === '/')})
        }
    }
    public render() {
        return (
            <Home active={this.state.active} toLink={this.toLink}>
                <Route path='/profile' render={this.renderProfile({ preClose: this.preClose })}/>
                <Route path='/sop'     render={this.renderSOP({ preClose: this.preClose })}/>
                <Route path='/quality' render={this.renderQuality({ preClose: this.preClose })}/>
                <Route path='/aimatk'  render={this.renderAima({ preClose: this.preClose })}/>
            </Home>
        );
    }

    private renderProfile = ( props: IProfileDefaultProps ) => ((p: any) => ( <Profile {...props} {...p} /> ));
    private renderSOP = ( props: ISOPDefaultProps ) => ((p: any) => ( <SOP {...props} {...p} /> ));
    private renderQuality = ( props: IQualityDefaultProps ) => ((p: any) => ( <Quality {...props} {...p} /> ));
    private renderAima = ( props: IAimaDefaultProps ) => ((p: any) => ( <AimaTK {...props} {...p} /> ));


    private preClose = () => {
        this.setState({ active: true });
    }
}