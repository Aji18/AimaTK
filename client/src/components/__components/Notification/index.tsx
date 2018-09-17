import * as React from "react";
import {Typography, withStyles, WithStyles, createStyles} from "@material-ui/core";
import classNames from "classnames";
import Transition from "react-transition-group/Transition";

interface INotificationProps {
    in: boolean,
    timeout: number,
    error?: boolean,
    children?: any,
    sClassName?: any,
}

class Notification extends React.Component<INotificationProps&WithStyles> {
    public render() {
        const data = this.props;
        const classes = data.classes;
        return (
            <Transition in={data.in} timeout={data.timeout}>
                {(state: string) => (
                    <Typography className={classNames(classes.notification, {
                        [classes.notificationError]: !!(data.error) && data.error,
                        [classes.notificationEntering]: state === 'entering',
                        [classes.notificationEntered]: state === 'entered',
                        [classes.notificationExiting]: state === 'exiting',
                        [classes.notificationExited]: state === 'exited',
                        [data.sClassName]: !!(data.sClassName)
                    })} align="center">
                        {data.children}
                    </Typography>
                )}
            </Transition>
        )
    }
}

const styles = createStyles({
    notification: {
        fontSize: '0.95rem',
        alignSelf: 'center',
        position: 'absolute',
        bottom: -100,
        transition: `transform 200ms ease-in-out, opacity 250ms ease-in-out`,
    },
    notificationEntering: {
        transform: 'translateY(30px)',
        opacity: 0,
    },
    notificationEntered: {
        transform: 'translateY(0)',
        opacity: 1,
        zIndex: 999
    },
    notificationExiting: {
        transform: 'translateY(0)',
        opacity: 1,
    },
    notificationExited: {
        transform: 'translateY(-30px)',
        opacity: 0,
        zIndex: -999
    },
    notificationError: {
        color: '#f44336',
    },
});

export default withStyles(styles)<INotificationProps>(Notification as any);