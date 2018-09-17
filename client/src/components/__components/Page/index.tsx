// import community package
import * as React from 'react';
import Transition from "react-transition-group/Transition";
import classNames from "classnames";
import {WithStyles, withStyles} from "@material-ui/core";

interface IPageProps {
    show: boolean,
    onExited: ()=>void,
    appear?: boolean,
    children?: any,
}
const defaultDuration = 500;
const defaultAppear   = true;

// NOTE: enter duration is 0 because there is issue with delay right before transition start
class Page extends React.Component<IPageProps&WithStyles> {
    public render() {
        const classes = this.props.classes;
        return (
            <div className={classes.root}>
                <Transition
                    in={this.props.show}
                    timeout={{
                        enter: 0,
                        exit: defaultDuration
                    }}
                    appear={this.props.appear ? this.props.appear : defaultAppear}
                    onExited={this.props.onExited}>
                    {(state: string) => (
                        <div className={classNames(classes.wrapper, {
                            [classes.wrapperEntering]: state === 'entering',
                            [classes.wrapperEntered]: state === 'entered',
                            [classes.wrapperExiting]: state === 'exiting',
                        })}>
                            <div className={classes.transparentBackground}/>
                            {this.props.children}
                        </div>
                    )}
                </Transition>
            </div>
        )
    }
}

const absolute = {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    maxHeight: '100%',
    width: '100%',
    maxWidth: '100%',
};
const styles = {
    root: {
        ...absolute,
        overflow: 'hidden',
        zIndex: 1,
    },
    wrapper: {
        ...absolute,
        transition: `all ${defaultDuration}ms cubic-bezier(0.165, 0.84, 0.44, 1)`,
    },
    wrapperEntering: {
        transform: 'translateY(100%)',
    },
    wrapperEntered: {
        transform: 'translateY(0)',
    },
    wrapperExiting: {
        transform: 'translateY(100%)',
    },
    transparentBackground: {
        ...absolute,
        opacity: .75,
        background: 'rgba(255, 255, 255, 0.5)',
        zIndex: -1,
    },
};

export default withStyles(styles as any)<IPageProps>(Page);
export * from './style';