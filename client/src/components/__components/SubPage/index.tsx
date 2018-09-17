// import community package
import * as React from 'react';
import Transition from "react-transition-group/Transition";
import classNames from "classnames";
import {WithStyles, withStyles} from "@material-ui/core";

interface ISubPageProps {
    show: boolean,
    onExited: ()=>void,
    appear: boolean,
    customHeight?: number,
    reverse?: boolean,
    children?: any,
}
const defaultDuration = 600;

// NOTE: enter duration is 0 because there is issue with delay right before transition start
class SubPage extends React.Component<ISubPageProps&WithStyles> {
    public render() {
        const classes = this.props.classes;
        const reverse = this.props.reverse;
        return (
            <Transition
                in={this.props.show}
                timeout={{
                    enter: 0,
                    exit: defaultDuration,
                }}
                appear={this.props.appear}
                onExited={this.props.onExited}
                unmountOnExit={true}
            >
                {(state: string) => (
                    <div className={classNames(classes.wrapper, {
                        [classes.wrapperEntering]: (reverse) ? state === 'exiting' : state === 'entering',
                        [classes.wrapperEntered]: state === 'entered',
                        [classes.wrapperExiting]: (reverse) ? state === 'entering' : state === 'exiting',
                    })}
                    style={(this.props.customHeight)?{ height: 'calc(100% - '+this.props.customHeight+'px)' }:undefined}
                    >
                        {this.props.children}
                    </div>
                )}
            </Transition>
        )
    }
}

const styles = {
    wrapper: {
        position: 'absolute',
        height: 'calc(100% - 75px)',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        transform: 'translateX(100%)',
        transition: `transform ${defaultDuration}ms cubic-bezier(0.77, 0, 0.175, 1)`,
    },
    wrapperEntering: {
        transform: 'translateX(100%)',
    },
    wrapperEntered: {
        transform: 'translateX(0)',
    },
    wrapperExiting: {
        transform: 'translateX(-100%)',
    },
};

export default withStyles(styles as any)<ISubPageProps>(SubPage);