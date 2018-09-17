// import community package
import * as React from 'react';

// import view
import HomeView, {IHomeViewProps} from './view';
import {ILink} from "../../App";

interface IHomeProps {
    active: boolean;
    toLink: ILink[],
    children?: any;
}

export default class Home extends React.Component<IHomeProps> {
    public render() {

        const viewProps: IHomeViewProps = {
            data: {
                active: this.props.active,
                toLink: this.props.toLink,
            }
        };

        return (
            <HomeView  {...viewProps}>
                { this.props.children }
            </HomeView>
        )
    }
}